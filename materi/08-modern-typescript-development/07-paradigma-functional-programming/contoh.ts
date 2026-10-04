// ============================================================
// 07 · Paradigma Functional Programming — Contoh
// Jalankan: npm run materi -- materi/08-modern-typescript-development/07-paradigma-functional-programming/contoh.ts
// ============================================================

export interface Transaksi {
  id: string;
  produk: string;
  harga: number;
  kategori: "elektronik" | "pakaian" | "makanan";
  status: "lunas" | "tertunda";
}

const daftarTransaksi: Transaksi[] = [
  { id: "T1", produk: "Laptop", harga: 12000000, kategori: "elektronik", status: "lunas" },
  { id: "T2", produk: "Kemeja", harga: 250000, kategori: "pakaian", status: "lunas" },
  { id: "T3", produk: "Mouse", harga: 300000, kategori: "elektronik", status: "tertunda" },
  { id: "T4", produk: "Monitor", harga: 2500000, kategori: "elektronik", status: "lunas" },
  { id: "T5", produk: "Kopi", harga: 50000, kategori: "makanan", status: "lunas" },
];

console.log("=== PERBANDINGAN: GAYA IMPERATIF VS DEKLARATIF (FP) ===\n");

// Kasus: Hitung total pendapatan dari produk ELEKTRONIK yang sudah LUNAS!

// -------------------------------------------------------------
// 1. PENDEKATAN IMPERATIF (Fokus langkah demi langkah & mutasi state)
// -------------------------------------------------------------
let totalPendapatanImperatif = 0;
for (let i = 0; i < daftarTransaksi.length; i++) {
  const item = daftarTransaksi[i];
  if (item.kategori === "elektronik" && item.status === "lunas") {
    totalPendapatanImperatif += item.harga; // Mutasi variabel luar!
  }
}
console.log("1. Hasil Pendekatan Imperatif :");
console.log(`   Rp ${totalPendapatanImperatif.toLocaleString("id-ID")}`);

// -------------------------------------------------------------
// 2. PENDEKATAN FUNGSIONAL / DEKLARATIF (Fokus pada transformasi data)
// -------------------------------------------------------------
const totalPendapatanFP = daftarTransaksi
  .filter((trx) => trx.kategori === "elektronik" && trx.status === "lunas") // 1. Saring
  .map((trx) => trx.harga)                                                 // 2. Ambil nilai harga
  .reduce((total, harga) => total + harga, 0);                             // 3. Akumulasi jumlah

console.log("\n2. Hasil Pendekatan Fungsional (FP) :");
console.log(`   Rp ${totalPendapatanFP.toLocaleString("id-ID")}`);

/**
 * 💡 KESIMPULAN:
 * Pendekatan FP tidak mengubah array asli, tidak memiliki variabel loop sementara (i),
 * dan setiap langkah transformasi data dapat dibaca seperti kalimat bahasa Inggris:
 * "filter elektronik lunas, lalu ambil harganya, lalu jumlahkan totalnya".
 */
