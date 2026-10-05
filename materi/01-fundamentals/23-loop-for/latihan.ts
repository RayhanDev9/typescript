// ============================================================
// 23 · Loop for — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/23-loop-for/latihan.ts
// ============================================================

// TODO 1: Buat loop `for` yang menampilkan tabel perkalian 7:
//         Format output:
//         "7 x 1 = 7"
//         "7 x 2 = 14"
//         ... sampai ...
//         "7 x 10 = 70"

for (let i: number = 0; i <= 10; i++) {
  const index: number = i + 1;

  console.info(`7 X ${index} = ${7 * index}`);
}

// TODO 2: Buat loop `for` dari angka 1 sampai 20.
//         Gunakan `continue` untuk MELEWATI semua angka genap (angka % 2 === 0),
//         sehingga terminal HANYA menampilkan angka ganjil (1, 3, 5, ..., 19).

for (let i = 0; i < 20; i++) {
  const index = i + 1;
  if (i % 2 === 0) continue;
  console.info(index);
}
// TODO 3: Hitung total penjumlahan angka 1 + 2 + 3 + ... + 100 menggunakan loop `for`.
//         Simpan hasilnya di variabel `let total = 0`, lalu tampilkan hasil akhirnya.
//         (Hasil yang benar adalah 5050).

let total: number = 0;

for (let i = 0; i < 100; i++) {
  total += i + 1;
}

console.info(total);
