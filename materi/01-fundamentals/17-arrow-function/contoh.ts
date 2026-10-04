// ============================================================
// 17 · Arrow Function — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/17-arrow-function/contoh.ts
// ============================================================

// --- 1. Arrow Function Satu Baris (Implicit Return) ---
const kaliDua = (angka: number): number => angka * 2;
const kuadrat = (angka: number): number => angka ** 2;

console.log("5 x 2 =", kaliDua(5));
console.log("5 kuadrat =", kuadrat(5));

// --- 2. Arrow Function Banyak Baris (Block Body) ---
const sisaTahunPensiun = (tahunLahir: number, nama: string): string => {
  const umur = 2026 - tahunLahir;
  const sisa = 60 - umur;

  if (sisa > 0) {
    return `${nama} akan pensiun ${sisa} tahun lagi.`;
  }
  return `${nama} sudah memasuki masa pensiun 🎉`;
};

console.log(sisaTahunPensiun(2001, "Rayhan"));
console.log(sisaTahunPensiun(1960, "Pak Ahmad"));

// --- 3. Default Parameter ---
const buatKopi = (jenis: string, sendokGula: number = 2): string => {
  return `Secangkir kopi ${jenis} dengan ${sendokGula} sendok gula ☕`;
};

console.log(buatKopi("Espresso", 0));
console.log(buatKopi("Latte")); // menggunakan default 2 sendok gula

// --- 4. Optional Parameter (?) ---
const formatNama = (namaDepan: string, namaBelakang?: string): string => {
  if (namaBelakang) {
    return `${namaDepan} ${namaBelakang}`;
  }
  return namaDepan;
};

console.log(formatNama("Rayhan", "Pratama"));
console.log(formatNama("Rayhan"));
