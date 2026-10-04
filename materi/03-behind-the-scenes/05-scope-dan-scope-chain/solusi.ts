// ============================================================
// 05 · Scope & Scope Chain — Solusi
// ============================================================

function hitungTotalBonus(gajiPokok: number, masaKerjaTahun: number): number {
  let totalBonus: number = 0;

  if (masaKerjaTahun >= 5) {
    const nilaiTambahan: number = 2000000;
    totalBonus = gajiPokok * 0.2 + nilaiTambahan;
  } else {
    totalBonus = gajiPokok * 0.1;
  }

  /*
    Penjelasan TODO 2:
    Variabel `nilaiTambahan` dideklarasikan menggunakan `const` di dalam blok `{ ... }` milik `if`.
    Karena `const` dan `let` bersifat Block Scoped, variabel tersebut hanya hidup dan dapat
    diakses di dalam kurung kurawal blok if tersebut.
    Scope luar (fungsi hitungTotalBonus) tidak memiliki akses ke dalam blok anaknya (Lookup hanya bisa ke atas, tidak bisa ke bawah).
  */

  return totalBonus;
}

console.log("Total Bonus 6 Tahun: Rp", hitungTotalBonus(5000000, 6));
console.log("Total Bonus 2 Tahun: Rp", hitungTotalBonus(5000000, 2));
