// ============================================================
// 03 · Generic Interfaces & Type Aliases — Latihan
// Jalankan: npm run materi -- materi/09-generics/03-generic-interfaces-types/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat generic interface bernama `HalamanData<T>` yang memiliki properti:
 *    - `halaman`: number
 *    - `totalHalaman`: number
 *    - `totalData`: number
 *    - `data`: T[] (array bertipe generic T)
 *
 * 2. Buat interface `Buku`:
 *    - `id`: string
 *    - `judul`: string
 *    - `penulis`: string
 *    - `harga`: number
 *
 * 3. Buat sebuah variabel bernama `perpustakaan` dengan tipe `HalamanData<Buku>`.
 *    - Isi dengan data halaman ke-1, total 3 halaman, total 25 buku.
 *    - Berikan minimal 2 buah buku di dalam array `data`.
 *
 * 4. Buat fungsi `tampilkanHalamanBuku(halaman: HalamanData<Buku>): void`
 *    yang mencetak informasi halaman dan daftar buku secara rapi ke konsol.
 */

// Tulis tipe data dan implementasi fungsi Anda di bawah ini:




// Eksekusi untuk menguji:
// tampilkanHalamanBuku(perpustakaan);
