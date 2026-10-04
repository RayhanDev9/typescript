// ============================================================
// 06 · call dan apply — Solusi
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

function catatPenjualan(this: Restoran, menu: string, jumlah: number): void {
  this.totalPorsiTerjual += jumlah;
  console.log(`[${this.nama} - ${this.kota}] Menjual ${jumlah} porsi ${menu}. Total sekarang: ${this.totalPorsiTerjual} porsi.`);
}

// TODO 1
console.log("TODO 1:");
catatPenjualan.call(restoBandung, "Nasi Timbel", 25);

// TODO 2
console.log("\nTODO 2:");
catatPenjualan.call(restoJakarta, "Soto Betawi", 40);

// TODO 3
console.log("\nTODO 3:");
const pesananTambahan: [string, number] = ["Karedok", 15];
catatPenjualan.call(restoBandung, ...pesananTambahan);
