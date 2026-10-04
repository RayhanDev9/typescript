// ============================================================
// 10 · Higher-Order Functions dalam FP — Latihan
// Jalankan: npm run materi -- materi/08-modern-typescript-development/10-higher-order-functions-fp/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat HOF `buatPemisahTeks(pemisah: string): (daftarKata: string[]) => string`
 *    - Fungsi ini menerima pemisah (misal: ", " atau " - ")
 *    - Mengembalikan fungsi baru yang menerima array string dan menggabungkannya menjadi satu teks.
 *
 * 2. Buat HOF `buatFormatUang(simbol: string): (nominal: number) => string`
 *    - Fungsi ini menerima simbol (misal: "Rp" atau "$")
 *    - Mengembalikan fungsi baru yang memformat angka menjadi format string,
 *      contoh: formatRp(50000) -> "Rp 50.000"
 *
 * 3. Uji kedua HOF tersebut dengan kasus pengujian di bawah.
 */

// Tulis kedua implementasi HOF Anda di bawah ini:




// Eksekusi untuk menguji:
// const gabungKoma = buatPemisahTeks(", ");
// console.log("Hasil Teks:", gabungKoma(["Apel", "Jeruk", "Mangga"])); // "Apel, Jeruk, Mangga"

// const formatIDR = buatFormatUang("Rp");
// console.log("Hasil Uang:", formatIDR(750000)); // "Rp 750.000"
