// ============================================================
// 03 · Tipe Data Primitif — Solusi
// ============================================================

// TODO 1
let judulBuku: string = "Laskar Pelangi";
let jumlahHalaman: number = 529;
let hargaBuku: number = 89000.5;
let sudahDibaca: boolean = false;

// TODO 2
console.log(typeof judulBuku);     // string
console.log(typeof jumlahHalaman); // number
console.log(typeof hargaBuku);     // number
console.log(typeof sudahDibaca);   // boolean

// TODO 3
let peminjam: string | null = null;
console.log(peminjam); // null
peminjam = "Siti";
console.log(peminjam); // Siti

// TODO 4
console.log(typeof 2026);   // number
console.log(typeof "2026"); // string → karena diapit tanda kutip

// TODO 5
let kodeBuku: unknown = "isbn-001";
if (typeof kodeBuku === "string") {
  console.log(kodeBuku.toUpperCase()); // ISBN-001
}
