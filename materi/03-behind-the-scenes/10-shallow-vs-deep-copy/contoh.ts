// ============================================================
// 10 · Shallow vs Deep Copy — Contoh
// Jalankan: npm run materi -- materi/03-behind-the-scenes/10-shallow-vs-deep-copy/contoh.ts
// ============================================================

// --- 1. Shallow Copy dengan Spread Operator ---
const menuPagi = {
  makanan: "Nasi Goreng",
  harga: 15000,
  minuman: ["Teh Manis", "Kopi"]
};

// Shallow copy
const menuSiang = { ...menuPagi };
menuSiang.makanan = "Ayam Bakar";
menuSiang.harga = 25000;

// Perhatikan apa yang terjadi saat memodifikasi array di dalamnya (nested):
menuSiang.minuman.push("Jus Alpukat");

console.log("=== Shallow Copy ===");
console.log("Makanan Pagi :", menuPagi.makanan); // "Nasi Goreng" (Aman)
console.log("Makanan Siang:", menuSiang.makanan); // "Ayam Bakar"
console.log("Minuman Pagi :", menuPagi.minuman); // ["Teh Manis", "Kopi", "Jus Alpukat"] (⚠️ Ikut bertambah!)

// --- 2. Deep Copy dengan structuredClone() ---
const menuMalam = structuredClone(menuPagi);
menuMalam.minuman.push("Air Mineral");

console.log("\n=== Deep Copy dengan structuredClone ===");
console.log("Minuman Pagi  :", menuPagi.minuman);  // Tidak ada "Air Mineral" (Aman 100%!)
console.log("Minuman Malam :", menuMalam.minuman); // Memiliki "Air Mineral"

// --- 3. Immutability di TypeScript (as const) ---
const settingApp = {
  mode: "dark",
  bahasa: "id"
} as const;

console.log("\nSetting App Terkunci:", settingApp);
// settingApp.mode = "light"; // ❌ Cannot assign to 'mode' because it is a read-only property.
