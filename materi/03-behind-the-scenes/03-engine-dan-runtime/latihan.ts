// ============================================================
// 03 · Engine & Runtime — Latihan
// Jalankan: npm run materi -- materi/03-behind-the-scenes/03-engine-dan-runtime/latihan.ts
// ============================================================

// TODO 1: Amati potongan kode di bawah. Tebak urutan kemunculan output di terminal (A, B, C, D)
//         Tulis urutan tebakanmu di komentar SEBELUM menjalankan file:
//         Tebakan urutan: [ ... ]

console.log("A. Global Start");

setTimeout(() => {
  console.log("B. Dari setTimeout (0 milidetik)");
}, 0);

console.log("C. Global Middle");

function cetakPesan(): void {
  console.log("D. Dari dalam fungsi biasa");
}
cetakPesan();

// TODO 2: Jalankan file ini menggunakan `npm run materi -- materi/03-behind-the-scenes/03-engine-dan-runtime/latihan.ts`
//         Mengapa huruf B muncul TERAKHIR meskipun timernya diset 0 milidetik?
//         Tulis penjelasannya berdasarkan konsep Call Stack, Web API, dan Event Loop!
