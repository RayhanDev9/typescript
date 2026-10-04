// ============================================================
// 24 · Loop Array & Bersarang — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/24-loop-array-dan-bersarang/contoh.ts
// ============================================================

// --- 1. Loop Maju & Mengisi Array Baru ---
const tahunLahir: number[] = [1991, 2001, 1965, 2008, 2015];
const daftarUmur: number[] = [];

for (let i = 0; i < tahunLahir.length; i++) {
  const umur = 2026 - tahunLahir[i];
  daftarUmur.push(umur);
}

console.log("Tahun Lahir :", tahunLahir);
console.log("Hasil Umur  :", daftarUmur);

// --- 2. Loop Mundur (Reverse) ---
const antrean: string[] = ["Antrean 1", "Antrean 2", "Antrean 3", "Antrean 4"];

console.log("\n=== Membaca Antrean Terbalik ===");
for (let i = antrean.length - 1; i >= 0; i--) {
  console.log(`Posisi [${i}]: ${antrean[i]}`);
}

// --- 3. Loop Bersarang (Nested Loops) ---
console.log("\n=== Simulasi Latihan Gym ===");
for (let jenisGerakan = 1; jenisGerakan <= 3; jenisGerakan++) {
  console.log(`\nGerakan #${jenisGerakan}:`);
  for (let repetisi = 1; repetisi <= 3; repetisi++) {
    console.log(`   Latihan #${jenisGerakan} -> Repetisi ${repetisi}/3`);
  }
}
