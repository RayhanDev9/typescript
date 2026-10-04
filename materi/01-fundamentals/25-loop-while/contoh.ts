// ============================================================
// 25 · Loop while — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/25-loop-while/contoh.ts
// ============================================================

// --- 1. Loop While Sederhana ---
let hitungMundur: number = 5;

console.log("=== Hitung Mundur Peluncuran ===");
while (hitungMundur > 0) {
  console.log(`${hitungMundur}...`);
  hitungMundur--;
}
console.log("🚀 Meluncur!");

// --- 2. Simulasi Lempar Dadu Sampai Muncul Angka 6 ---
console.log("\n=== Game Lempar Dadu ===");
let dadu: number = Math.trunc(Math.random() * 6) + 1;
let percobaan: number = 1;

while (dadu !== 6) {
  console.log(`Percobaan #${percobaan}: Angka ${dadu}`);
  dadu = Math.trunc(Math.random() * 6) + 1;
  percobaan++;
}

console.log(`🎯 Berhasil! Dadu angka 6 muncul pada percobaan ke-${percobaan}!`);
