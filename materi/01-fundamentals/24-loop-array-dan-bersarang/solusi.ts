// ============================================================
// 24 · Loop Array & Bersarang — Solusi
// ============================================================

// TODO 1
const nilaiSiswa: number[] = [85, 92, 78, 90, 88, 76, 95];
let totalNilai: number = 0;

for (let i = 0; i < nilaiSiswa.length; i++) {
  totalNilai += nilaiSiswa[i];
}

const rataRata: number = totalNilai / nilaiSiswa.length;
console.log(`Total Nilai: ${totalNilai}`);
console.log(`Rata-rata Kelas: ${rataRata.toFixed(2)}`);

// TODO 2
console.log("\n=== Pola Bintang Segitiga ===");
for (let baris = 1; baris <= 5; baris++) {
  let cetakBaris = "";
  for (let kolom = 1; kolom <= baris; kolom++) {
    cetakBaris += "* ";
  }
  console.log(cetakBaris);
}
