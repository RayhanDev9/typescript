// ============================================================
// 13 · Statement, Expression & Ternary — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/13-statement-expression-ternary/latihan.ts
// ============================================================

// Kasus: Sistem Tagihan Restoran & Tip Pelayan
// Aturan tip restoran:
// Jika total tagihan antara 50.000 sampai 300.000 (inklusif), beri tip 15%.
// Jika di luar rentang tersebut, beri tip 20%.

const tagihan: number = 275000;

// TODO 1: Hitung variabel `tip` (number) menggunakan SATU baris OPERATOR TERNARY.
//         (Petunjuk: tagihan >= 50000 && tagihan <= 300000 ? tagihan * 0.15 : tagihan * 0.2)


// TODO 2: Tampilkan kalimat struk menggunakan SATU template literal:
//         "Tagihannya Rp 275.000, tipnya Rp 41.250, dan total yang harus dibayar Rp 316.250."


// TODO 3: Gunakan operator ternary di dalam template literal untuk menampilkan:
//         "Keranjang belanja: (3 barang / 1 barang)"
//         Jika jumlahBarang > 1 tampilkan plural (misal: "5 barang"),
//         jika jumlahBarang === 1 tampilkan singular ("1 barang"),
//         jika jumlahBarang === 0 tampilkan "Keranjang kosong".
const jumlahBarang: number = 3;
