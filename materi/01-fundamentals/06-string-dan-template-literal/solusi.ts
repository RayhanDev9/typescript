// ============================================================
// 06 · String & Template Literal — Solusi
// ============================================================

const namaProduk: string = "Kopi Susu";
const hargaSatuan: number = 18000;
const jumlahBeli: number = 3;

// TODO 1
const struk = `Anda membeli ${jumlahBeli} ${namaProduk} seharga ${hargaSatuan} per gelas.`;
console.log(struk);

// TODO 2
console.log(`Total yang harus dibayar: Rp ${hargaSatuan * jumlahBeli}`);

// TODO 3
console.log(`===== KEDAI NUSANTARA =====
Produk : ${namaProduk}
Jumlah : ${jumlahBeli}
Total  : Rp ${hargaSatuan * jumlahBeli}
===========================`);

// TODO 4
console.log(`Nama produk ${namaProduk} terdiri dari ${namaProduk.length} karakter`);
