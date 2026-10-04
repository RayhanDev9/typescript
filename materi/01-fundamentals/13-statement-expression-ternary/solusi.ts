// ============================================================
// 13 · Statement, Expression & Ternary — Solusi
// ============================================================

const tagihan: number = 275000;

// TODO 1
const tip: number =
  tagihan >= 50000 && tagihan <= 300000 ? tagihan * 0.15 : tagihan * 0.2;

// TODO 2
const totalBayar: number = tagihan + tip;
console.log(
  `Tagihannya Rp ${tagihan.toLocaleString("id-ID")}, tipnya Rp ${tip.toLocaleString("id-ID")}, dan total yang harus dibayar Rp ${totalBayar.toLocaleString("id-ID")}.`
);

// TODO 3
const jumlahBarang: number = 3;
const infoKeranjang =
  jumlahBarang === 0
    ? "Keranjang kosong"
    : `Keranjang belanja: ${jumlahBarang} barang`;

console.log(infoKeranjang);
