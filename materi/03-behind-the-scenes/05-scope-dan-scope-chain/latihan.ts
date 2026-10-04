// ============================================================
// 05 · Scope & Scope Chain — Latihan
// Jalankan: npm run materi -- materi/03-behind-the-scenes/05-scope-dan-scope-chain/latihan.ts
// ============================================================

// TODO 1: Amati kode di bawah. Tebak apakah variabel `nilaiTambahan`
//         dapat diakses di luar blok `if`?
function hitungTotalBonus(gajiPokok: number, masaKerjaTahun: number): number {
  let totalBonus: number = 0;

  if (masaKerjaTahun >= 5) {
    const nilaiTambahan: number = 2000000;
    totalBonus = gajiPokok * 0.2 + nilaiTambahan;
  } else {
    totalBonus = gajiPokok * 0.1;
  }

  // TODO 2: Coba hapus komentar baris di bawah ini dan amati error TypeScript:
  // console.log("Nilai Tambahan:", nilaiTambahan);
  // Jelaskan mengapa error tersebut terjadi berdasarkan konsep Block Scope!

  return totalBonus;
}

console.log("Total Bonus 6 Tahun: Rp", hitungTotalBonus(5000000, 6));
