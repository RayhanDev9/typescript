// ============================================================
// 06 · Hoisting & TDZ — Latihan
// Jalankan: npm run materi -- materi/03-behind-the-scenes/06-hoisting-dan-tdz/latihan.ts
// ============================================================

// TODO 1: Amati potongan kode di bawah ini.
//         Mengapa fungsi `hitungPajak` di bawah error jika dipanggil sebelum baris deklarasinya,
//         sedangkan function declaration biasa tidak error?
//         Jelaskan di komentar!

// console.log(hitungPajak(100000)); // ❌ Error: Digunakan sebelum deklarasi

const hitungPajak = (nominal: number): number => {
  return nominal * 0.11;
};

console.log("Pajak Rp 100.000 =", hitungPajak(100000));


// TODO 2: Tuliskan 3 aturan emas best practice penulisan kode modern untuk
//         menghindari seluruh masalah yang berkaitan dengan Hoisting & TDZ!
