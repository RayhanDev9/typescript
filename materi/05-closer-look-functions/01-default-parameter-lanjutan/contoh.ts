// ============================================================
// 01 · Default Parameter Lanjutan — Contoh
// Jalankan: npm run materi -- materi/05-closer-look-functions/01-default-parameter-lanjutan/contoh.ts
// ============================================================

interface PesananTiket {
  nomorPenerbangan: string;
  jumlahPenumpang: number;
  hargaPerTiket: number;
  totalBayar: number;
}

const riwayatBooking: PesananTiket[] = [];

// Parameter totalBayar dihitung otomatis dari (jumlahPenumpang * hargaPerTiket)
function buatBooking(
  nomorPenerbangan: string,
  jumlahPenumpang: number = 1,
  hargaPerTiket: number = 1200000,
  totalBayar: number = jumlahPenumpang * hargaPerTiket
): PesananTiket {
  const tiket: PesananTiket = {
    nomorPenerbangan,
    jumlahPenumpang,
    hargaPerTiket,
    totalBayar,
  };

  riwayatBooking.push(tiket);
  return tiket;
}

console.log("=== 1. SEMUA DEFAULT PARAMETER ===");
const t1 = buatBooking("GA-200");
console.log(t1);

console.log("\n=== 2. MENGUBAH JUMLAH PENUMPANG (TOTAL HARGA OTOMATIS BERUBAH) ===");
const t2 = buatBooking("GA-201", 3);
console.log(t2); // totalBayar otomatis 3 * 1.200.000 = 3.600.000

console.log("\n=== 3. MELEWATI PARAMETER DENGAN UNDEFINED ===");
// Ingin jumlah penumpang default (1), tetapi harga tiket promo 850.000
const t3 = buatBooking("GA-202", undefined, 850000);
console.log(t3);

console.log("\n=== 4. TOTAL SEMUA BOOKING ===");
console.log(`Total transaksi masuk: ${riwayatBooking.length} pemesanan.`);
