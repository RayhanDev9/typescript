// ============================================================
// 03 · Engine & Runtime — Solusi
// ============================================================

// TODO 1:
// Urutan output yang benar adalah: A -> C -> D -> B

console.log("A. Global Start");

setTimeout(() => {
  console.log("B. Dari setTimeout (0 milidetik)");
}, 0);

console.log("C. Global Middle");

function cetakPesan(): void {
  console.log("D. Dari dalam fungsi biasa");
}
cetakPesan();

// TODO 2:
/*
  Penjelasan Mengapa B Muncul Paling Akhir:
  1. Baris A, C, dan D dijalankan langsung di dalam "Call Stack" secara sinkron.
  2. setTimeout dikirim ke "Runtime Web/Node API".
  3. Meskipun timernya 0ms, callback fungsi B tidak langsung masuk ke Call Stack,
     melainkan harus mengantre di "Callback Queue".
  4. "Event Loop" baru akan memindahkan tugas dari Callback Queue ke Call Stack
     SETELAH seluruh kode di Call Stack (A, C, D) selesai dieksekusi sampai kosong!
*/
