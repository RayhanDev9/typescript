// ============================================================
// 04 · let, const, var — Solusi
// ============================================================

// TODO 1
const namaToko = "Toko Maju"; // tidak pernah diubah
let stokBarang = 100;         // diubah menjadi 85
const tahunBerdiri = 2010;    // tidak pernah diubah
let jumlahTerjual = 0;        // diubah menjadi 15

jumlahTerjual = 15;
stokBarang = 85;

console.log(namaToko, tahunBerdiri, stokBarang, jumlahTerjual);

// TODO 2
let statusPesanan: "diproses" | "dikirim" | "selesai" = "diproses";
statusPesanan = "dikirim";
console.log("Status:", statusPesanan);

// TODO 3
const batasDiskon = 100000; // tipe: 100000 (literal)
let totalBelanja = 100000;  // tipe: number
console.log(batasDiskon, totalBelanja);
