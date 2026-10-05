// ============================================================
// 24 · Loop Array & Bersarang — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/24-loop-array-dan-bersarang/latihan.ts
// ============================================================

// Kasus 1: Menghitung Total dan Rata-rata Nilai Siswa
const nilaiSiswa: number[] = [85, 92, 78, 90, 88, 76, 95];

// TODO 1: Gunakan loop `for` untuk menjumlahkan semua angka di dalam array `nilaiSiswa`.
//         Hitung nilai rata-rata kelas, lalu tampilkan hasil penjumlahan dan rata-ratanya.

let total: number = 0;
for (let i = 0; i < nilaiSiswa.length; i++) {
  const element = nilaiSiswa[i];
  total += element;

  console.info(`${total} +  ${element} = ${7 * element}`);
}

console.info(total);

// Kasus 2: Membuat Matriks Pola Bintang
// TODO 2: Gunakan LOOP BERSARANG (nested loop) untuk mencetak pola segitiga siku-siku 5 baris:
//         *
//         * *
//         * * *
//         * * * *
//         * * * * *
// (Petunjuk: Baris luar berjalan 1 s/d 5. Baris dalam mengumpulkan karakter bintang "* " sebanyak nomor baris).

for (let i = 0; i <= 5; i++) {
  const element = i;
  // console.info(i);
  // for (let j = 0; j <= element; j++) {
  //   const element = j;
  // console.info(j)

  console.info("*".repeat(element));
  // }
}
