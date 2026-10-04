// ============================================================
// 02 · Constructor Function & new — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/02-constructor-function-dan-new/contoh.ts
// ============================================================

// 1. Deklarasi Constructor Function
function Mobil(this: any, merk: string, kecepatanAwal: number) {
  this.merk = merk;
  this.kecepatan = kecepatanAwal;
}

// 2. Menambahkan Method pada Prototype
Mobil.prototype.tambahKecepatan = function (tambah: number) {
  this.kecepatan += tambah;
  console.log(`${this.merk} melaju bertambah cepat -> ${this.kecepatan} km/jam`);
};

Mobil.prototype.rem = function (kurang: number) {
  this.kecepatan = Math.max(0, this.kecepatan - kurang);
  console.log(`${this.merk} mengerem -> ${this.kecepatan} km/jam`);
};

console.log("=== 1. MEMBUAT INSTANCE DENGAN NEW ===");
const bmw = new (Mobil as any)("BMW Seri 3", 120);
const mercedes = new (Mobil as any)("Mercedes-Benz C200", 95);

console.log(bmw);
console.log(mercedes);

console.log("\n=== 2. MEMANGGIL METHOD PROTOTYPE ===");
bmw.tambahKecepatan(20); // 140 km/jam
bmw.rem(50);             // 90 km/jam

mercedes.tambahKecepatan(30); // 125 km/jam

// 3. Pengecekan Instance (instanceof)
console.log("\n=== 3. PENGECEKAN INSTANCEOF ===");
console.log("Apakah bmw instance dari Mobil? :", bmw instanceof Mobil); // true
console.log("Apakah objek biasa instance Mobil?:", {} instanceof Mobil); // false
