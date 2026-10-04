// ============================================================
// 13 · Challenge: Modern FP Data Pipeline — Contoh
// Jalankan: npm run materi -- materi/08-modern-typescript-development/13-challenge-modern-fp-pipeline/contoh.ts
// ============================================================

import type { ItemPesanan, Pesanan, LaporanTransaksi } from "./tipePesanan";

console.log("=== DEMO ARCHITECTURE: FUNCTIONAL E-COMMERCE PIPELINE ===\n");

// 1. Data Pesanan Contoh
const contohPesanan: Pesanan = {
  id: "ORD-991",
  namaPelanggan: "Rayhan Dwi",
  wilayah: "domestik",
  item: [
    { nama: "Keyboard Mekanikal", harga: 750000, jumlah: 1, tersedia: true },
    { nama: "Keycaps PBT", harga: 150000, jumlah: 2, tersedia: true },
    { nama: "Kabel Coiled (Stok Habis)", harga: 200000, jumlah: 1, tersedia: false },
  ],
};

// 2. Fungsi-Fungsi Transformasi Murni
export const saringBarangTersedia = (item: readonly ItemPesanan[]): ItemPesanan[] =>
  item.filter((i) => i.tersedia);

export const hitungSubtotal = (item: readonly ItemPesanan[]): number =>
  item.reduce((total, i) => total + i.harga * i.jumlah, 0);

// Curried Policy: Diskon Berdasarkan Nilai
export const buatKalkulatorDiskon =
  (batasNominal: number, persenDiskon: number) =>
  (subtotal: number): number => {
    return subtotal >= batasNominal ? subtotal * persenDiskon : 0;
  };

// Pipa Pemrosesan Demo Sederhana
const hitungDiskonBesar = buatKalkulatorDiskon(500000, 0.1); // 10% jika >= 500k

const barangValid = saringBarangTersedia(contohPesanan.item);
const subtotal = hitungSubtotal(barangValid);
const diskon = hitungDiskonBesar(subtotal);
const ongkir = contohPesanan.wilayah === "domestik" ? 25000 : 100000;
const totalAkhir = subtotal - diskon + ongkir;

console.log(`Pelanggan       : ${contohPesanan.namaPelanggan}`);
console.log(`Jumlah Item OK  : ${barangValid.length} produk`);
console.log(`Subtotal        : Rp ${subtotal.toLocaleString("id-ID")}`);
console.log(`Potongan Diskon : Rp ${diskon.toLocaleString("id-ID")}`);
console.log(`Ongkos Kirim    : Rp ${ongkir.toLocaleString("id-ID")}`);
console.log(`Total Tagihan   : Rp ${totalAkhir.toLocaleString("id-ID")}`);
