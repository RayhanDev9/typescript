// ============================================================
// 12 · Function Composition & Piping — Latihan
// Jalankan: npm run materi -- materi/08-modern-typescript-development/12-function-composition-piping/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat fungsi generic `pipe3<A, B, C, D>` yang menerima 3 fungsi berurutan dan mengembalikan fungsi komposit:
 *    (a: A) => fn3(fn2(fn1(a)))
 *
 * 2. Buat 3 fungsi kecil:
 *    - `bersihkanAngka(input: string): number` -> Membersihkan spasi dan mengonversi string ke number (contoh: "  100000  " -> 100000).
 *    - `tambahPajak(nilai: number): number` -> Menambahkan pajak 11% (nilai * 1.11).
 *    - `formatIDR(nilai: number): string` -> Mengembalikan format "Rp " + Math.round(nilai).toLocaleString("id-ID").
 *
 * 3. Rangkai ketiganya menggunakan `pipe3` menjadi fungsi: `prosesHargaTagihan`.
 * 4. Uji dengan input: "  250000  ".
 */

// Tulis implementasi pipe3 dan fungsi-fungsi transformasi di bawah ini:




// Eksekusi untuk menguji:
// const hasil = prosesHargaTagihan("  250000  ");
// console.log("Hasil Akhir:", hasil); // Harus menghasilkan format tagihan lengkap
