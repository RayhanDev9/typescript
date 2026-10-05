// ============================================================
// 12 · Mapped Types Dasar — Latihan
// Jalankan: npm run materi -- materi/09-generics/12-mapped-types-dasar/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat mapped type generic bernama `StatusValidasiField<T>`:
 *    - Setiap properti `K in keyof T` harus dipetakan menjadi tipe `boolean`.
 *    - Tipe ini digunakan untuk mencatat apakah suatu field formulir valid (true) atau tidak (false).
 *
 * 2. Diberikan interface formulir di bawah ini: `FormPendaftaran`.
 *
 * 3. Buat fungsi `validasiForm(data: FormPendaftaran): StatusValidasiField<FormPendaftaran>`:
 *    - `nama`: valid jika panjang >= 3 karakter.
 *    - `email`: valid jika mengandung karakter "@".
 *    - `usia`: valid jika usia >= 17 tahun.
 *    - Kembalikan objek status validasi untuk ketiga field tersebut!
 *
 * 4. Uji fungsi dengan data pendaftaran dan cetak laporan hasil validasinya.
 */

export interface FormPendaftaran {
  nama: string;
  email: string;
  usia: number;
}

// Tulis Mapped Type dan implementasi fungsi Anda di bawah ini:




// Eksekusi untuk menguji:
// const inputForm: FormPendaftaran = {
//   nama: "Al",
//   email: "ali@gmail.com",
//   usia: 15,
// };
// console.log("Laporan Validasi:", validasiForm(inputForm));
