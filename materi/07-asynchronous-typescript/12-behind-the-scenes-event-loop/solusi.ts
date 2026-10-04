// ============================================================
// 12 · Di Balik Layar: Event Loop — Solusi
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/12-behind-the-scenes-event-loop/solusi.ts
// ============================================================

// JAWABAN TEBAKAN URUTAN YANG BENAR:
// 1 -> 6 -> 3 -> 5 -> 2 -> 4

// PENJELASAN LOGIKA STEP-BY-STEP:
// 1. "1" dicetak pertama (Call stack sinkron).
// 2. setTimeout "2" masuk ke Callback Queue.
// 3. Promise "3" masuk ke Microtask Queue.
// 4. Promise "5" masuk ke Microtask Queue.
// 5. "6" dicetak (Call stack sinkron).
// 6. Call stack kosong, Event Loop mengosongkan antrean Microtask VIP:
//    - "3" dicetak! (Dan ia mendaftarkan setTimeout "4" ke Callback Queue di belakang "2").
//    - "5" dicetak!
// 7. Microtask Queue habis, Event Loop beralih ke Callback Queue:
//    - "2" dicetak!
//    - "4" dicetak!

console.log("=== Eksekusi Nyata ===");
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
