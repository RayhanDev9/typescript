// ============================================================
// 03 · Engine & Runtime — Contoh
// Jalankan: npm run materi -- materi/03-behind-the-scenes/03-engine-dan-runtime/contoh.ts
// ============================================================

// 1. Eksekusi Sinkron di Call Stack (Berjalan dari atas ke bawah)
console.log("1. Instruksi Pertama (Masuk Call Stack)");

function fungsiKedua(): void {
  console.log("2. Menjalankan fungsiKedua di dalam Call Stack");
}

function fungsiPertama(): void {
  fungsiKedua(); // fungsiKedua ditumpuk di atas fungsiPertama
}

fungsiPertama();
console.log("3. Instruksi Terakhir Selesai");

// 2. Demo Asinkron Runtime (Timer disediakan oleh Runtime API)
console.log("\n--- Demo Asinkron Runtime ---");
console.log("A: Mulai timer...");

// setTimeout adalah fitur Runtime API (bukan JS Engine murni)
setTimeout(() => {
  console.log("C: Timer selesai dieksekusi via Callback Queue & Event Loop! ⏰");
}, 1000);

console.log("B: Baris ini berjalan duluan sebelum timer selesai!");
