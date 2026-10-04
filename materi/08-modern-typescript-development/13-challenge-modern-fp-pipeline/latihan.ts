// ============================================================
// 13 · Challenge: Modern FP Data Pipeline — Latihan
// Jalankan: npm run materi -- materi/08-modern-typescript-development/13-challenge-modern-fp-pipeline/latihan.ts
// ============================================================

import type { Pesanan, ItemPesanan, LaporanTransaksi } from "./tipePesanan";

/**
 * 🎯 TANTANGAN BESAR:
 * Bangun pipeline pemrosesan pesanan menggunakan paradigma Functional Programming murni!
 *
 * 📌 ATURAN:
 * - Tidak boleh menggunakan perulangan imperatif `for`, `while`, atau variabel `let`.
 * - Tidak boleh memutasi data input (gunakan `map`, `filter`, `reduce`, `spread`).
 * - Gunakan TypeScript strict type annotations.
 *
 * 📌 ALUR KALKULASI:
 * 1. Saring item yang berstatus `tersedia: true`.
 * 2. Hitung subtotal = total dari (harga * jumlah) untuk setiap item yang tersedia.
 * 3. Hitung potongan diskon:
 *    - Jika subtotal >= 1.000.000 -> diskon 15% (subtotal * 0.15)
 *    - Jika subtotal >= 500.000 -> diskon 10% (subtotal * 0.10)
 *    - Jika di bawah 500.000 -> diskon 0
 * 4. Hitung pajak & ongkos kirim berdasarkan `wilayah`:
 *    - "domestik": pajak 11% dari (subtotal - potonganDiskon), ongkir Rp 25.000
 *    - "internasional": pajak Rp 0, ongkir Rp 150.000
 * 5. Total tagihan = (subtotal - potonganDiskon) + pajak + ongkir.
 * 6. Kembalikan objek bertipe `LaporanTransaksi`.
 */

// Data Uji Coba:
export const pesananPelanggan: Pesanan = {
  id: "TRX-2026-001",
  namaPelanggan: "Andi Pratama",
  wilayah: "domestik",
  item: [
    { nama: "Monitor Gaming 24 Inch", harga: 1800000, jumlah: 1, tersedia: true },
    { nama: "Mouse Wireless (Stok Habis)", harga: 250000, jumlah: 2, tersedia: false },
    { nama: "Mousepad XL", harga: 100000, jumlah: 1, tersedia: true },
  ],
};

// TULIS FUNGSI PIPELINE DAN ATURAN KALKULASI DI BAWAH INI:




// Eksekusi untuk menguji:
// const laporan = prosesPesanan(pesananPelanggan);
// console.log("=== LAPORAN TRANSAKSI PESANAN ===");
// console.log(laporan);
