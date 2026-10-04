// ============================================================
// 03 · Prototype & Prototype Chain — Latihan
// Jalankan: npm run materi -- materi/06-oop-typescript/03-prototype-dan-prototype-chain/latihan.ts
// ============================================================

function Gadget(this: any, merk: string) {
  this.merk = merk;
}

Gadget.prototype.negaraAsal = "Jepang";

const g1 = new (Gadget as any)("Sony");

// TODO 1: Periksa apakah properti `merk` adalah *own property* dari `g1`
//         menggunakan method `.hasOwnProperty()`. Tampilkan hasilnya.


// TODO 2: Periksa apakah properti `negaraAsal` adalah *own property* dari `g1`.
//         Tampilkan hasilnya (harus bernilai false).


// TODO 3: Periksa apakah `Gadget.prototype` adalah prototype dari `g1`
//         menggunakan method `Gadget.prototype.isPrototypeOf(g1)`.

