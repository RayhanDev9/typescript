// ============================================================
// 02 · Type Narrowing: typeof & instanceof — Latihan
// Jalankan: npm run materi -- materi/10-validation/02-type-narrowing-dasar/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat fungsi `formatWaktu(waktu: number | string | Date): string`:
 *    - Gunakan `typeof` dan `instanceof` untuk mempersempit tipe:
 *    - Jika `typeof waktu === "number"`: kembalikan `${waktu} detik`.
 *    - Jika `typeof waktu === "string"`: bersihkan spasi (.trim()) dan kembalikan nilai teksnya.
 *    - Jika `waktu instanceof Date`: kembalikan waktu dalam format ISO (.toISOString()).
 *
 * 2. Buat fungsi `bacaPesanError(err: unknown): string`:
 *    - Jika `err instanceof Error`: kembalikan string `Error: ${err.message}`.
 *    - Jika `typeof err === "string"`: kembalikan string `Pesan: ${err}`.
 *    - Selain itu: kembalikan `Terjadi kesalahan tidak dikenal.`
 *
 * 3. Uji kedua fungsi tersebut dengan berbagai variasi input dan cetak ke konsol!
 */

// Tulis implementasi kedua fungsi Anda di bawah ini:




// Eksekusi untuk menguji:
// console.log("Test Angka :", formatWaktu(120));
// console.log("Test String:", formatWaktu("  02:30 PM  "));
// console.log("Test Date  :", formatWaktu(new Date()));

// console.log("Test Error Obj :", bacaPesanError(new Error("Timeout server!")));
// console.log("Test Error Teks:", bacaPesanError("Akses ditolak!"));
// console.log("Test Error Lain:", bacaPesanError(404));
