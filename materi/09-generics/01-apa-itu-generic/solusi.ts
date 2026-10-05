// ============================================================
// 01 · Apa Itu Generic? — Solusi
// Jalankan: npm run materi -- materi/09-generics/01-apa-itu-generic/solusi.ts
// ============================================================

export function ambilElemenTerakhir<T>(daftar: T[]): T | undefined {
  if (daftar.length === 0) {
    return undefined;
  }
  return daftar[daftar.length - 1];
}

console.log("=== PENGUJIAN SOLUSI GENERIC PERTAMA ===");

// 1. Array Angka
const angkaTerakhir = ambilElemenTerakhir([10, 25, 50, 99]);
console.log("1. Angka Terakhir :", angkaTerakhir); // tipe: number | undefined

// 2. Array Teks
const teksTerakhir = ambilElemenTerakhir(["HTML", "CSS", "TypeScript"]);
console.log("2. Teks Terakhir  :", teksTerakhir); // tipe: string | undefined

// 3. Array Objek
const penggunaTerakhir = ambilElemenTerakhir([
  { id: 1, nama: "Ali" },
  { id: 2, nama: "Budi" },
]);
console.log("3. Objek Terakhir :", penggunaTerakhir);
if (penggunaTerakhir) {
  console.log(`   Nama pengguna: ${penggunaTerakhir.nama}`);
}
