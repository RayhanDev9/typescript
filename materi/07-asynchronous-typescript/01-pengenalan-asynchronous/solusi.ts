// ============================================================
// 01 · Pengenalan Asynchronous — Solusi
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/01-pengenalan-asynchronous/solusi.ts
// ============================================================

// TODO 1:
console.log("1. Mulai mengunduh file video...");

// TODO 2:
setTimeout(() => {
  console.log("3. File video sebesar 50MB berhasil diunduh! ✅");
}, 800);

// TODO 3:
console.log("2. Mengetik pesan chat ke teman...");

// TODO 4:
const timerBatal: NodeJS.Timeout = setTimeout(() => {
  console.log("Pesan ini tidak boleh muncul!");
}, 2000);

// Langsung membatalkan timer
clearTimeout(timerBatal);
console.log("Status: Timer berhasil dibatalkan sebelum dieksekusi.");

export {};
