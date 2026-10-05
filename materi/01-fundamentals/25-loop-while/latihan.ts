// ============================================================
// 25 · Loop while — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/25-loop-while/latihan.ts
// ============================================================

// Kasus 1: Simulasi Tabungan Bulanan dengan Bunga
// Seseorang menabung Rp 1.000.000 dengan target mencapai minimal Rp 2.000.000.
// Setiap bulan, tabungan bertambah bunga 5% (saldo = saldo + (saldo * 0.05)).

// TODO 1: Gunakan loop `while` untuk menghitung berapa bulan yang dibutuhkan
//         agar saldo tabungan mencapai minimal Rp 2.000.000.
//         Tampilkan pertumbuhan saldo setiap bulannya.
let saldoAwal: number = 1000000;
let bulan: number = 0;

while (saldoAwal <= 10000000) {
  saldoAwal += saldoAwal + saldoAwal * 0.5;
  bulan++;
  console.info(saldoAwal);
}

console.info(bulan);

// Kasus 2: Tebak Angka Rahasia Acak
// Komputer memilih angka rahasia antara 1 sampai 10.
// TODO 2: Buat simulasi tebakan acak dari pemain (`tebakan = Math.trunc(Math.random() * 10) + 1`)
//         yang terus menebak menggunakan `while` sampai tebakannya sama persis dengan angka rahasia.
const angkaRahasia: number = 7;
let angkaRandom: number = 0;

while (angkaRahasia !== angkaRandom) {
  angkaRandom = Math.floor(Math.random() * 10) + 1;
  console.info(angkaRahasia === angkaRandom);
}

