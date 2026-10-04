// ============================================================
// 03 · Prototype & Prototype Chain — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/03-prototype-dan-prototype-chain/contoh.ts
// ============================================================

function Robot(this: any, nama: string) {
  this.nama = nama;
}

// Menambahkan method di prototype
Robot.prototype.aktifkan = function () {
  console.log(`[ROBOT ${this.nama}] Sistem online dan siap beroperasi.`);
};

// Menambahkan properti umum ke prototype
Robot.prototype.asalPabrik = "CyberTech Labs";

const r1 = new (Robot as any)("Optimus");
const r2 = new (Robot as any)("Bumblebee");

console.log("=== 1. MEMERIKSA HUBUNGAN PROTOTYPE ===");
console.log("r1.__proto__ === Robot.prototype :", (r1 as any).__proto__ === Robot.prototype); // true
console.log("Apakah Robot.prototype proto r1? :", Robot.prototype.isPrototypeOf(r1));          // true

console.log("\n=== 2. OWN PROPERTY VS PROTOTYPE PROPERTY ===");
console.log("r1.nama (own property)        :", r1.hasOwnProperty("nama"));       // true
console.log("r1.asalPabrik (dari prototype):", r1.hasOwnProperty("asalPabrik")); // false
console.log("Nilai asalPabrik r1          :", r1.asalPabrik);                   // "CyberTech Labs"

console.log("\n=== 3. RANTAI PROTOTYPE CHAIN ===");
console.log("Level 1: r1.__proto__             -> Robot.prototype");
console.log("Level 2: r1.__proto__.__proto__   -> Object.prototype");
console.log("Level 3: r1...__.__proto__ (3x)   ->", (r1 as any).__proto__.__proto__.__proto__); // null (puncak)

// Method bawaan dari Object.prototype tetap bisa diakses oleh Robot:
console.log("r1.toString() (dari Object.proto) :", r1.toString());
