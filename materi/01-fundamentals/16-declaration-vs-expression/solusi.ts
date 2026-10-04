// ============================================================
// 16 · Declaration vs Expression — Solusi
// ============================================================

// TODO 1
const persentaseDiskon = function (
  hargaAwal: number,
  diskonPersen: number
): number {
  return hargaAwal - hargaAwal * (diskonPersen / 100);
};

console.log("Harga setelah diskon:", persentaseDiskon(100000, 20)); // 80000

// TODO 2
type PengubahTeks = (teks: string) => string;

// TODO 3
const jadikanKapital: PengubahTeks = function (teks) {
  return teks.toUpperCase();
};

const jadikanSensor: PengubahTeks = function (teks) {
  return "*".repeat(teks.length);
};

console.log(jadikanKapital("typescript seru")); // TYPESCRIPT SERU
console.log(jadikanSensor("rahasia"));           // *******
