// ============================================================
// 14 · Map: Iterasi & Konversi — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/14-map-iterasi-dan-konversi/contoh.ts
// ============================================================

// 1. Inisialisasi Map dengan Array 2D
const kuisTebakan = new Map<any, any>([
  ["pertanyaan", "Bahasa apa yang menambahkan sistem tipe ke JavaScript?"],
  [1, "C#"],
  [2, "Java"],
  [3, "TypeScript"],
  ["jawabanBenar", 3],
  [true, "Jawaban Benar! 🎉"],
  [false, "Kurang Tepat, coba lagi!"],
]);

console.log("=== 1. INISIALISASI MAP DENGAN ARRAY 2D ===");
console.log(kuisTebakan);

// 2. Iterasi Langsung pada Map dengan for...of
console.log("\n=== 2. ITERASI MAP DENGAN FOR...OF ===");
console.log("Pertanyaan:", kuisTebakan.get("pertanyaan"));

for (const [key, value] of kuisTebakan) {
  // Hanya tampilkan pilihan bernomor angka
  if (typeof key === "number") {
    console.log(`Opsi ${key}: ${value}`);
  }
}

// 3. Konversi Object -> Map
console.log("\n=== 3. KONVERSI OBJECT KE MAP ===");
const stokGudangObj: Record<string, number> = {
  Beras: 50,
  Gula: 30,
  Minyak: 25,
  Kopi: 15,
};

const stokGudangMap = new Map<string, number>(Object.entries(stokGudangObj));
console.log("Map hasil konversi:", stokGudangMap);
console.log("Stok Beras:", stokGudangMap.get("Beras"), "kg");

// 4. Konversi Map -> Array dan Map -> Object
console.log("\n=== 4. KONVERSI MAP KE ARRAY & OBJECT ===");

// Map -> Array 2D
const arrayEntries = [...stokGudangMap];
console.log("Array 2D:", arrayEntries);

// Map -> Object biasa (Object.fromEntries)
const objectKembali = Object.fromEntries(stokGudangMap);
console.log("Object biasa kembali:", objectKembali);
