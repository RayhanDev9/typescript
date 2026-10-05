// ============================================================
// 05 · Generic Constraints (extends) — Latihan
// Jalankan: npm run materi -- materi/09-generics/05-generic-constraints-extends/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat interface `BisaDihitungHarga`:
 *    - `harga`: number
 *    - `jumlah`: number
 *
 * 2. Buat fungsi generic `hitungTotalBelanja<T extends BisaDihitungHarga>(daftar: T[]): number`:
 *    - Menghitung total tagihan dari seluruh elemen dalam array (total dari item.harga * item.jumlah).
 *    - Kembalikan angka total rupiah.
 *
 * 3. Buat dua tipe produk yang berbeda:
 *    - `ProdukFisik`: memiliki properti `nama`, `harga`, `jumlah`, dan `beratKg: number`.
 *    - `ProdukDigital`: memiliki properti `nama`, `harga`, `jumlah`, dan `kodeLisensi: string`.
 *
 * 4. Panggil fungsi `hitungTotalBelanja()` dengan array produk fisik dan produk digital,
 *    lalu buktikan bahwa kedua tipe produk berbeda tersebut dapat diproses secara fleksibel dan aman!
 */

// Tulis kode antarmuka dan fungsi generic Anda di bawah ini:




// Eksekusi untuk menguji:
// const keranjangFisik = [
//   { nama: "Buku", harga: 50000, jumlah: 2, beratKg: 0.5 },
//   { nama: "Pulpen", harga: 5000, jumlah: 10, beratKg: 0.1 },
// ];
// console.log("Total Belanja Fisik: Rp", hitungTotalBelanja(keranjangFisik));
