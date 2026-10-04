// ============================================================
// 13 · Challenge: Modern FP Data Pipeline — Solusi
// Jalankan: npm run materi -- materi/08-modern-typescript-development/13-challenge-modern-fp-pipeline/solusi.ts
// ============================================================

import type { Pesanan, ItemPesanan, LaporanTransaksi } from "./tipePesanan";
import { pesananPelanggan } from "./latihan";

// 1. Pure Function: Saring Item Tersedia
export const saringItemTersedia = (item: readonly ItemPesanan[]): ItemPesanan[] =>
  item.filter((i) => i.tersedia);

// 2. Pure Function: Hitung Subtotal
export const hitungSubtotal = (item: readonly ItemPesanan[]): number =>
  item.reduce((total, i) => total + i.harga * i.jumlah, 0);

// 3. Pure Function: Aturan Diskon Bertingkat
export const hitungDiskonBertingkat = (subtotal: number): number => {
  if (subtotal >= 1000000) return subtotal * 0.15;
  if (subtotal >= 500000) return subtotal * 0.1;
  return 0;
};

// 4. Curried / Helper Policy: Pajak & Ongkos Kirim Wilayah
export const hitungBiayaWilayah = (
  wilayah: Pesanan["wilayah"],
  nilaiSetelahDiskon: number
): { pajak: number; ongkosKirim: number } => {
  if (wilayah === "domestik") {
    return {
      pajak: Math.round(nilaiSetelahDiskon * 0.11),
      ongkosKirim: 25000,
    };
  }
  return {
    pajak: 0,
    ongkosKirim: 150000,
  };
};

// 5. Pipeline Utama Pemrosesan Transaksi (Functional Composition)
export const prosesPesanan = (pesanan: Pesanan): LaporanTransaksi => {
  const itemValid = saringItemTersedia(pesanan.item);
  const subtotal = hitungSubtotal(itemValid);
  const potonganDiskon = hitungDiskonBertingkat(subtotal);
  const setelahDiskon = subtotal - potonganDiskon;
  const { pajak, ongkosKirim } = hitungBiayaWilayah(pesanan.wilayah, setelahDiskon);
  const totalTagihan = setelahDiskon + pajak + ongkosKirim;

  return {
    idPesanan: pesanan.id,
    pelanggan: pesanan.namaPelanggan,
    jumlahItemValid: itemValid.length,
    subtotal,
    potonganDiskon,
    pajak,
    ongkosKirim,
    totalTagihan,
  };
};

// Pengujian dan Tampilan Hasil
const laporan = prosesPesanan(pesananPelanggan);

console.log("=== KWITANSI PEMBAYARAN ELEKTRONIK (FP PIPELINE) ===");
console.log(`No. Invoice       : ${laporan.idPesanan}`);
console.log(`Nama Pembeli      : ${laporan.pelanggan}`);
console.log(`Total Item Valid  : ${laporan.jumlahItemValid} jenis produk`);
console.log("-----------------------------------------------------");
console.log(`Subtotal          : Rp ${laporan.subtotal.toLocaleString("id-ID")}`);
console.log(`Potongan Diskon   : -Rp ${laporan.potonganDiskon.toLocaleString("id-ID")}`);
console.log(`Pajak (PPN 11%)   : Rp ${laporan.pajak.toLocaleString("id-ID")}`);
console.log(`Ongkos Pengiriman : Rp ${laporan.ongkosKirim.toLocaleString("id-ID")}`);
console.log("=====================================================");
console.log(`TOTAL AKHIR BAYAR : Rp ${laporan.totalTagihan.toLocaleString("id-ID")}`);
