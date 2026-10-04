// ============================================================
// 01 · Destructuring Array — Solusi
// ============================================================

// TODO 1
const warnaFavorit: string[] = ["Biru", "Merah", "Hijau", "Kuning"];
const [warna1, warna2] = warnaFavorit;
console.log("TODO 1:", { warna1, warna2 });

// TODO 2
const pemenangLomba: string[] = ["Andi", "Budi", "Citra", "Doni"];
const [juara1, , juara3] = pemenangLomba;
console.log("TODO 2:", { juara1, juara3 });

// TODO 3
let skorA = 100;
let skorB = 250;
[skorA, skorB] = [skorB, skorA];
console.log("TODO 3 -> Skor A:", skorA, "| Skor B:", skorB);

// TODO 4
const nestedData: [number, number, [number, number]] = [10, 20, [30, 40]];
const [angka10, , [, angka40]] = nestedData;
console.log("TODO 4:", { angka10, angka40 });

// TODO 5
const dimensi: number[] = [15, 8];
const [panjang = 0, lebar = 0, tinggi = 1] = dimensi;
console.log("TODO 5:", { panjang, lebar, tinggi });
