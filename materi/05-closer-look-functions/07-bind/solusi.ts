// ============================================================
// 07 · Method bind — Solusi
// ============================================================

interface WarungKopi {
  nama: string;
  kota: string;
}

const kopiSenja: WarungKopi = {
  nama: "Kopi Senja",
  kota: "Yogyakarta",
};

const kopiSubuh: WarungKopi = {
  nama: "Kopi Subuh",
  kota: "Bandung",
};

function buatPesananKopi(this: WarungKopi, ukuran: string, jenisKopi: string, atasNama: string): void {
  console.log(`[${this.nama} - ${this.kota}] Pesanan ${ukuran} ${jenisKopi} untuk ${atasNama}.`);
}

// TODO 1
const pesanKopiSenja = buatPesananKopi.bind(kopiSenja);
console.log("TODO 1:");
pesanKopiSenja("Large", "Caramel Latte", "Rayhan");

// TODO 2
const pesanKopiBandungLarge = buatPesananKopi.bind(kopiSubuh, "Large");
console.log("\nTODO 2:");
pesanKopiBandungLarge("Americano", "Budi");

// TODO 3
function kali(a: number, b: number): number {
  return a * b;
}

const dobel = kali.bind(null, 2);
const tripel = kali.bind(null, 3);

console.log("\nTODO 3:");
console.log("Dobel 7  :", dobel(7));  // 14
console.log("Tripel 7 :", tripel(7)); // 21
