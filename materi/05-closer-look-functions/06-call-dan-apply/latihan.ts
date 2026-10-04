// ============================================================
// 06 · call dan apply — Latihan
// Jalankan: npm run materi -- materi/05-closer-look-functions/06-call-dan-apply/latihan.ts
// ============================================================

interface Restoran {
  nama: string;
  kota: string;
  totalPorsiTerjual: number;
}

const restoBandung: Restoran = {
  nama: "Rasa Priangan",
  kota: "Bandung",
  totalPorsiTerjual: 150,
};

const restoJakarta: Restoran = {
  nama: "Rasa Betawi",
  kota: "Jakarta",
  totalPorsiTerjual: 300,
};

// Fungsi pencatat penjualan yang membutuhkan context `this: Restoran`
function catatPenjualan(this: Restoran, menu: string, jumlah: number): void {
  this.totalPorsiTerjual += jumlah;
  console.log(`[${this.nama} - ${this.kota}] Menjual ${jumlah} porsi ${menu}. Total sekarang: ${this.totalPorsiTerjual} porsi.`);
}

// TODO 1: Gunakan method `.call()` untuk mencatat penjualan 25 porsi "Nasi Timbel"
//         pada restoran `restoBandung`.


// TODO 2: Gunakan method `.call()` untuk mencatat penjualan 40 porsi "Soto Betawi"
//         pada restoran `restoJakarta`.


// TODO 3: Diberikan data pesanan baru dalam bentuk tuple di bawah ini.
//         Gunakan `.call()` bersama Spread Operator `...` (atau `.apply()`)
//         untuk mencatat penjualan pada `restoBandung`.
const pesananTambahan: [string, number] = ["Karedok", 15];

