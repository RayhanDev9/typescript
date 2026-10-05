// ============================================================
// 07 · Default Generic Type — Latihan
// Jalankan: npm run materi -- materi/09-generics/07-default-generic-type/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat generic interface bernama `DokumenLaporan<T = string>`:
 *    - `nomorSurat`: string
 *    - `dibuatOleh`: string
 *    - `ringkasan`: T (default bernilai string jika tidak didefinisikan)
 *
 * 2. Buat variabel `laporanUmum` bertipe `DokumenLaporan` (tanpa menyertakan tipe di dalam kurung siku <>):
 *    - Isi dengan ringkasan berbentuk teks biasa (string).
 *
 * 3. Buat interface `StatistikKeuangan`:
 *    - `pemasukan`: number
 *    - `pengeluaran`: number
 *    - `labaBersih`: number
 *
 * 4. Buat variabel `laporanKeuangan` bertipe `DokumenLaporan<StatistikKeuangan>`:
 *    - Isi ringkasannya dengan objek sesuai interface `StatistikKeuangan`.
 *
 * 5. Cetak kedua laporan tersebut secara informatif ke konsol!
 */

// Tulis antarmuka dan implementasi variabel Anda di bawah ini:




// Eksekusi untuk menguji:
// console.log("Laporan Umum:", laporanUmum);
// console.log("Laporan Keuangan:", laporanKeuangan);
