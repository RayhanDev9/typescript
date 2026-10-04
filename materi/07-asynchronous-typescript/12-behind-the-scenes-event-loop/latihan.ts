// ============================================================
// 12 · Di Balik Layar: Event Loop — Latihan
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/12-behind-the-scenes-event-loop/latihan.ts
// ============================================================

// INSTRUKSI:
// 1. JANGAN JALANKAN KODE DULU!
// 2. Analisis kode di bawah ini dan tuliskan tebakan urutan output Anda di TODO 1.
// 3. Jalankan kode untuk mencocokkan tebakan Anda!

// TODO 1:
// Tuliskan tebakan urutan huruf (misal: "X -> Y -> Z") di bawah ini:
// Tebakan saya: "..."

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve("3").then((val) => {
  console.log(val);
  setTimeout(() => {
    console.log("4");
  }, 0);
});

Promise.resolve("5").then((val) => {
  console.log(val);
});

console.log("6");

export {};
