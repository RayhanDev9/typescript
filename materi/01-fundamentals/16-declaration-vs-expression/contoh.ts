// ============================================================
// 16 · Declaration vs Expression — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/16-declaration-vs-expression/contoh.ts
// ============================================================

// --- 1. Function Declaration (Bisa dipanggil sebelum dideklarasikan) ---
console.log("Panggilan Declaration:", hitungKelilingPersegi(10)); // 40

function hitungKelilingPersegi(sisi: number): number {
  return 4 * sisi;
}

// --- 2. Function Expression (Disimpan di dalam variabel) ---
const hitungLuasPersegi = function (sisi: number): number {
  return sisi * sisi;
};

console.log("Panggilan Expression:", hitungLuasPersegi(10)); // 100

// --- 3. Function Type Signature di TypeScript ---
type KonversiSuhu = (celcius: number) => number;

const celciusKeFahrenheit: KonversiSuhu = function (c) {
  return (c * 9) / 5 + 32;
};

const celciusKeKelvin: KonversiSuhu = function (c) {
  return c + 273.15;
};

console.log("30°C ke Fahrenheit:", celciusKeFahrenheit(30), "°F");
console.log("30°C ke Kelvin:", celciusKeKelvin(30), "K");
