// ============================================================
// 02 · Generic Functions — Latihan
// Jalankan: npm run materi -- materi/09-generics/02-generic-functions/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat fungsi generic `gabungkanObjek<T, U>(objA: T, objB: U): T & U`.
 *    - Fungsi ini menerima dua objek berbeda: `objA` bertipe `T` dan `objB` bertipe `U`.
 *    - Mengembalikan objek baru hasil penggabungan keduanya (gunakan spread operator `{ ...objA, ...objB }`).
 *    - Tipe kembalian adalah Intersection Type: `T & U`.
 *
 * 2. Buat dua objek:
 *    - `dataPribadi`: { nama: "Siti Rahma", usia: 22 }
 *    - `dataAkademik`: { nim: "10122001", jurusan: "Teknik Informatika" }
 *
 * 3. Panggil fungsi `gabungkanObjek(dataPribadi, dataAkademik)`.
 * 4. Cetak hasil dan akses setiap properti (nama, usia, nim, jurusan) untuk membuktikan keutuhan tipe data!
 */

// Tulis fungsi generic Anda di bawah ini:




// Eksekusi untuk menguji:
// const profilMahasiswa = gabungkanObjek(
//   { nama: "Siti Rahma", usia: 22 },
//   { nim: "10122001", jurusan: "Teknik Informatika" }
// );
// console.log("Profil Lengkap:", profilMahasiswa);
