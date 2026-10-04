// ============================================================
// 05 · Operator Dasar — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/05-operator-dasar/contoh.ts
// ============================================================

// --- Aritmatika ---
const tahunSekarang = 2026;
const umurAndi = tahunSekarang - 2001;
const umurBudi = tahunSekarang - 2005;
console.log("Umur Andi:", umurAndi);
console.log("Umur Budi:", umurBudi);

console.log(umurAndi * 2);  // kali
console.log(umurAndi / 10); // bagi
console.log(2 ** 3);        // pangkat → 8
console.log(10 % 3);        // sisa bagi → 1
console.log(8 % 2);         // 0 → genap

// --- + untuk menggabungkan teks ---
const namaDepan = "Rayhan";
const namaBelakang = "Pratama";
console.log(namaDepan + " " + namaBelakang);

// --- Assignment ---
let poin = 10;
poin += 5;  // 15
poin -= 3;  // 12
poin *= 2;  // 24
poin /= 4;  // 6
poin++;     // 7
poin--;     // 6
console.log("Poin akhir:", poin);

// --- Perbandingan → hasilnya boolean ---
console.log(umurAndi > umurBudi);  // true
console.log(umurBudi >= 21);       // true
const bolehMembuatSIM = umurBudi >= 17;
console.log("Boleh membuat SIM?", bolehMembuatSIM);

// --- Prioritas operator ---
console.log(2 + 3 * 4);   // 14
console.log((2 + 3) * 4); // 20

const rataRataSalah = umurAndi + umurBudi / 2;   // ❌ logikanya salah
const rataRataBenar = (umurAndi + umurBudi) / 2; // ✅
console.log("Salah:", rataRataSalah, "| Benar:", rataRataBenar);

// ❌ Hapus tanda // untuk melihat error TypeScript:
// console.log("10" - 5);  // teks tidak bisa dikurangi angka
// poin += "50";           // Type 'string' is not assignable to type 'number'
