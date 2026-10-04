// ============================================================
// 26 · Mini Challenge — Latihan (Proyek Mandiri Siswa)
// Jalankan: npm run materi -- materi/01-fundamentals/26-mini-challenge/latihan.ts
// ============================================================

// Data 10 Tagihan Restoran
const dataTagihan: number[] = [
  22000, 295000, 176000, 440000, 37000, 105000, 10000, 1100000, 86000, 52000
];

// TODO 1: Buat interface `LaporanTagihan` dengan properti:
//         - `id`: number
//         - `tagihan`: number
//         - `tip`: number
//         - `totalBayar`: number


// TODO 2: Buat fungsi `hitungTip(nominalTagihan: number): number`:
//         - Jika tagihan >= 50000 && tagihan <= 300000 -> tip = 15% (0.15)
//         - Selain itu -> tip = 20% (0.20)


// TODO 3: Buat array kosong `laporanSemua: LaporanTagihan[] = []`.
//         Gunakan loop `for` untuk mengolah ke-10 data pada `dataTagihan`:
//         - Hitung tip menggunakan fungsi `hitungTip`
//         - Hitung total bayar (tagihan + tip)
//         - Masukkan objek ke dalam `laporanSemua`


// TODO 4: Buat fungsi `hitungRataRata(daftarAngka: number[]): number`:
//         - Menggunakan loop `for` untuk menjumlahkan semua angka di dalam array
//         - Mengembalikan hasil rata-rata (total / daftarAngka.length)


// TODO 5: Kumpulkan seluruh data totalBayar ke dalam array `daftarTotalBayar: number[]`,
//         lalu gunakan fungsi `hitungRataRata` untuk menghitung rata-rata pengeluaran makan.
//         Cetak hasil analisis ke terminal dengan format yang rapi!
