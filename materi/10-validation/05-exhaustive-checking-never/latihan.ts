// ============================================================
// 05 · Exhaustive Checking dengan never — Latihan
// Jalankan: npm run materi -- materi/10-validation/05-exhaustive-checking-never/latihan.ts
// ============================================================

export type StatusTiketBantuan =
  | "baru"
  | "sedang_ditangani"
  | "menunggu_pelanggan"
  | "selesai"
  | "dibatalkan";

/**
 * 🎯 TUGAS:
 * 1. Buat fungsi `ambilWarnaBadgeTiket(status: StatusTiketBantuan): string`:
 *    - Gunakan `switch (status)`.
 *    - "baru" -> kembalikan "biru"
 *    - "sedang_ditangani" -> kembalikan "kuning"
 *    - "menunggu_pelanggan" -> kembalikan "oranye"
 *    - "selesai" -> kembalikan "hijau"
 *    - "dibatalkan" -> kembalikan "abu-abu"
 *
 * 2. Pada blok `default`, buat exhaustive check menggunakan tipe `never`:
 *    `const _tidakBolehTerjadi: never = status;`
 *    `throw new Error("Status tidak valid: " + _tidakBolehTerjadi);`
 *
 * 3. Uji fungsi untuk beberapa status dan cetak hasilnya ke konsol.
 */

// Tulis fungsi implementasi Anda di bawah ini:




// Eksekusi untuk menguji:
// console.log("Status Baru     :", ambilWarnaBadgeTiket("baru"));
// console.log("Status Selesai  :", ambilWarnaBadgeTiket("selesai"));
// console.log("Status Dibatalkan:", ambilWarnaBadgeTiket("dibatalkan"));
