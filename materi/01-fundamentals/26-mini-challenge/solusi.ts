// ============================================================
// 26 · Mini Challenge — Solusi Lengkap
// ============================================================

// 1. Definisi Data
const dataTagihan: number[] = [
  22000, 295000, 176000, 440000, 37000, 105000, 10000, 1100000, 86000, 52000
];

// TODO 1: Interface
interface LaporanTagihan {
  id: number;
  tagihan: number;
  tip: number;
  totalBayar: number;
}

// TODO 2: Fungsi Hitung Tip
function hitungTip(nominalTagihan: number): number {
  return nominalTagihan >= 50000 && nominalTagihan <= 300000
    ? nominalTagihan * 0.15
    : nominalTagihan * 0.2;
}

// TODO 3: Loop Pengolahan Data
const laporanSemua: LaporanTagihan[] = [];

for (let i = 0; i < dataTagihan.length; i++) {
  const tagihan = dataTagihan[i];
  const tip = hitungTip(tagihan);
  const totalBayar = tagihan + tip;

  laporanSemua.push({
    id: i + 1,
    tagihan: tagihan,
    tip: tip,
    totalBayar: totalBayar
  });
}

// TODO 4: Fungsi Hitung Rata-rata Generic
function hitungRataRata(daftarAngka: number[]): number {
  let total = 0;
  for (let i = 0; i < daftarAngka.length; i++) {
    total += daftarAngka[i];
  }
  return total / daftarAngka.length;
}

// TODO 5: Ekstraksi Data dan Analisis Statistik
const daftarTips: number[] = [];
const daftarTotalBayar: number[] = [];
let grandTotalPengeluaran = 0;

for (let i = 0; i < laporanSemua.length; i++) {
  daftarTips.push(laporanSemua[i].tip);
  daftarTotalBayar.push(laporanSemua[i].totalBayar);
  grandTotalPengeluaran += laporanSemua[i].totalBayar;
}

const rataRataTagihan = hitungRataRata(dataTagihan);
const rataRataTip = hitungRataRata(daftarTips);
const rataRataTotalBayar = hitungRataRata(daftarTotalBayar);

// Cetak Laporan
console.log("===============================================================");
console.log("          LAPORAN PENGELUARAN RESTORAN LIBURAN                ");
console.log("===============================================================");

for (let i = 0; i < laporanSemua.length; i++) {
  const item = laporanSemua[i];
  console.log(
    `#${item.id.toString().padEnd(2)} | Tagihan: Rp ${item.tagihan.toLocaleString("id-ID").padStart(10)} | Tip: Rp ${item.tip.toLocaleString("id-ID").padStart(9)} | Total: Rp ${item.totalBayar.toLocaleString("id-ID").padStart(10)}`
  );
}

console.log("---------------------------------------------------------------");
console.log(`TOTAL KESELURUHAN PENGELUARAN : Rp ${grandTotalPengeluaran.toLocaleString("id-ID")}`);
console.log(`RATA-RATA TAGIHAN MAKAN       : Rp ${Math.round(rataRataTagihan).toLocaleString("id-ID")}`);
console.log(`RATA-RATA TIP YANG DIBERIKAN  : Rp ${Math.round(rataRataTip).toLocaleString("id-ID")}`);
console.log(`RATA-RATA TOTAL PER RESTORAN  : Rp ${Math.round(rataRataTotalBayar).toLocaleString("id-ID")}`);
console.log("===============================================================");
