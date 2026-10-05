// ============================================================
// 12 · Transformasi & Sanitasi Data dengan Zod — Latihan
// Jalankan: npm run materi -- materi/10-validation/12-transformasi-dan-sanitasi-zod/latihan.ts
// ============================================================

import { z } from "zod";

/**
 * 🎯 TUGAS:
 * 1. Buat skema Zod `SkemaInputAkun`:
 *    - `username`: string, bersihkan spasi (.trim()), jadikan huruf kecil (.toLowerCase()), minimal 3 karakter.
 *    - `email`: string, bersihkan spasi (.trim()), jadikan huruf kecil (.toLowerCase()), format email.
 *    - `tahunLahir`: gunakan `z.coerce.number()` agar bisa menerima string seperti "2000" dan mengonversinya menjadi angka integer valid.
 *    - `statusAktif`: gunakan `z.coerce.boolean()` dengan nilai default `true`.
 *    - `keahlian`: string yang dipisahkan koma (contoh: "TypeScript, React, Node"),
 *      gunakan `.transform()` untuk memecahnya menjadi array string[] yang setiap katanya sudah di-trim.
 *
 * 2. Parse data `inputKotor` di bawah ini dan cetak hasilnya ke konsol!
 */

export const inputKotor: unknown = {
  username: "   BudiSantoso   ",
  email: "   BUDI.DEV@GMAIL.COM   ",
  tahunLahir: "2002", // Bentuk string dari form input
  // statusAktif tidak diisi (harus memakai default true)
  keahlian: " TypeScript ,  Next.js  , Docker ",
};

// Tulis Skema Zod dan kode parsing Anda di bawah ini:




// Eksekusi untuk menguji:
// const akunBersih = SkemaInputAkun.parse(inputKotor);
// console.log("Hasil Sanitasi & Transformasi:", akunBersih);
