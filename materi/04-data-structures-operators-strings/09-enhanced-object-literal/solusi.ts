// ============================================================
// 09 · Enhanced Object Literal — Solusi
// ============================================================

const judul = "Belajar TypeScript";
const penulis = "Rayhan";
const tahun = 2026;

// TODO 1
const bukuBaru = {
  judul,
  penulis,
  tahun,
};
console.log("TODO 1:", bukuBaru);

// TODO 2
const namaBulan = "bulan";
const statistik = {
  [`${namaBulan}_10`]: 500,
};
console.log("TODO 2:", statistik);

// TODO 3
const kalkulator = {
  tambah(a: number, b: number): number {
    return a + b;
  },
  kurang(a: number, b: number): number {
    return a - b;
  },
};

console.log("TODO 3 -> Tambah (10 + 5):", kalkulator.tambah(10, 5));
console.log("TODO 3 -> Kurang (10 - 5):", kalkulator.kurang(10, 5));
