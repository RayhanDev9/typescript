// ============================================================
// 12 · Set — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/12-set/contoh.ts
// ============================================================

// 1. Membuat Set & Menghilangkan Duplikat Otomatis
const menuDipesan = new Set<string>([
  "Pizza Margherita",
  "Pasta Carbonara",
  "Pizza Margherita", // duplikat
  "Risotto Jamur",
  "Pasta Carbonara", // duplikat
]);

console.log("=== 1. MEMBUAT SET ===");
console.log("Isi Set:", menuDipesan);
console.log("Jumlah pesanan unik (size):", menuDipesan.size);

// 2. Operasi Dasar Set: has, add, delete
console.log("\n=== 2. OPERASI DASAR SET ===");
console.log("Apakah ada Pizza Margherita? :", menuDipesan.has("Pizza Margherita")); // true
console.log("Apakah ada Tiramisu?          :", menuDipesan.has("Tiramisu"));          // false

menuDipesan.add("Tiramisu");
menuDipesan.add("Pizza Margherita"); // Tidak berpengaruh
console.log("Setelah ditambah Tiramisu:", menuDipesan);

menuDipesan.delete("Pasta Carbonara");
console.log("Setelah Pasta dihapus   :", menuDipesan);

// 3. Iterasi Set dengan for...of
console.log("\n=== 3. ITERASI SET ===");
for (const menu of menuDipesan) {
  console.log("- Menu:", menu);
}

// 4. Kasus Terpopuler: Hapus Duplikat dari Array
console.log("\n=== 4. HAPUS DUPLIKAT DARI ARRAY ===");
const peranKaryawan: string[] = [
  "Pelayan",
  "Koki",
  "Pelayan",
  "Kasir",
  "Koki",
  "Koki",
  "Manajer",
];

console.log("Array asli (berduplikat):", peranKaryawan);

// Array -> Set -> Array baru
const peranUnik: string[] = [...new Set(peranKaryawan)];
console.log("Array unik (tanpa duplikat):", peranUnik);

// Menghitung berapa huruf unik dalam sebuah kata/string
const namaKota = "INDONESIA";
const hurufUnik = new Set(namaKota);
console.log(`Kata "${namaKota}" memiliki ${hurufUnik.size} huruf unik:`, [...hurufUnik].join(", "));
