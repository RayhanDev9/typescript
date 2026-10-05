// ============================================================
// 11 · Conditional Types Dasar — Latihan
// Jalankan: npm run materi -- materi/09-generics/11-conditional-types-dasar/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat conditional type bernama `TipePenyimpan<T>`:
 *    - Jika `T extends string`, maka hasilnya adalah `T[]` (array of string).
 *    - Jika `T` bukan string, maka hasilnya adalah `Set<T>` (kumpulan data unik Set).
 *
 * 2. Buat fungsi generic `simpanKoleksi<T>(input: T): TipePenyimpan<T>`:
 *    - Jika `typeof input === "string"`, kembalikan array berisi string tersebut `[input]`.
 *    - Jika bukan string, kembalikan `new Set([input])`.
 *    - (Gunakan type assertion `as TipePenyimpan<T>`).
 *
 * 3. Uji fungsi Anda:
 *    - Masukkan teks `"TypeScript"` -> Harus menghasilkan array string `["TypeScript"]`.
 *    - Masukkan angka `42` -> Harus menghasilkan `Set` berisi angka `42`.
 *
 * 4. Cetak hasil pengujian ke konsol.
 */

// Tulis tipe bersyarat dan implementasi fungsi Anda di bawah ini:




// Eksekusi untuk menguji:
// const hasilTeks = simpanKoleksi("TypeScript");
// const hasilAngka = simpanKoleksi(42);
// console.log("Hasil Teks :", hasilTeks);
// console.log("Hasil Angka:", hasilAngka);
