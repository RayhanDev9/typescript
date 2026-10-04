// ============================================================
// 18 · Fungsi Memanggil Fungsi — Solusi
// ============================================================

// TODO 1
const hitungRataRata = (
  skor1: number,
  skor2: number,
  skor3: number
): number => (skor1 + skor2 + skor3) / 3;

// TODO 2
function cekPemenang(avgElang: number, avgHarimau: number): string {
  if (avgElang >= 2 * avgHarimau) {
    return `Tim Elang Menang (${avgElang.toFixed(1)} vs ${avgHarimau.toFixed(1)}) 🏆`;
  } else if (avgHarimau >= 2 * avgElang) {
    return `Tim Harimau Menang (${avgHarimau.toFixed(1)} vs ${avgElang.toFixed(1)}) 🏆`;
  } else {
    return `Tidak ada tim yang memenuhi syarat kemenangan 2x lipat (${avgElang.toFixed(1)} vs ${avgHarimau.toFixed(1)})`;
  }
}

// TODO 3
function jalankanKompetisi(
  e1: number,
  e2: number,
  e3: number,
  h1: number,
  h2: number,
  h3: number
): string {
  const rataElang = hitungRataRata(e1, e2, e3);
  const rataHarimau = hitungRataRata(h1, h2, h3);
  return cekPemenang(rataElang, rataHarimau);
}

// Uji Data 1:
console.log(jalankanKompetisi(85, 54, 41, 23, 34, 27));

// Uji Data 2:
console.log(jalankanKompetisi(40, 30, 20, 100, 120, 110));
