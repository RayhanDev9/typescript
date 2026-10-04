// ============================================================
// 10 · Operator Kesamaan — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/10-operator-kesamaan/contoh.ts
// ============================================================

// --- === dan !== ---
const umur: number = 18;
console.log(umur === 18); // true
console.log(umur === 19); // false
console.log(umur !== 19); // true

// --- Menebak angka favorit ---
const input = "23";                 // anggap ini dari pengguna (teks)
const angkaFavorit = Number(input); // konversi dulu!

if (angkaFavorit === 23) {
  console.log("Keren! 23 angka yang hebat");
} else if (angkaFavorit === 7) {
  console.log("7 juga angka yang keren");
} else {
  console.log("Angka yang menarik");
}

if (angkaFavorit !== 23) {
  console.log("Kenapa bukan 23?");
}

// --- Perbedaan == dan === (contoh yang diizinkan TypeScript) ---
console.log(null == undefined);  // true  → == menganggap keduanya "sama-sama kosong"
console.log(null === undefined); // false → === melihat tipenya berbeda

// ❌ Hapus tanda // untuk melihat error TypeScript:
// console.log(umur === "18"); // types 'number' and 'string' have no overlap
// console.log(umur == "18");  // sama, == juga diperiksa

// const nilaiTetap = 18;
// console.log(nilaiTetap === 19); // types '18' and '19' have no overlap
