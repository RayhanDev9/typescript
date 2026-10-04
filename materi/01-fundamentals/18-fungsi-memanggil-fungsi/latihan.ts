// ============================================================
// 18 · Fungsi Memanggil Fungsi — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/18-fungsi-memanggil-fungsi/latihan.ts
// ============================================================

// Kasus: Analisis Performa Tim Basket (Kompetisi 2 Tim)

// TODO 1: Buat fungsi `hitungRataRata`:
//         - Menerima 3 parameter nilai: `skor1`, `skor2`, `skor3` (semuanya number)
//         - Mengembalikan nilai rata-rata (skor1 + skor2 + skor3) / 3


// TODO 2: Buat fungsi `cekPemenang`:
//         - Menerima rata-rata skor Tim Elang (`avgElang`: number) dan Tim Harimau (`avgHarimau`: number)
//         - Aturan kemenangan: Suatu tim hanya menang jika rata-ratanya MINIMAL 2x lipat tim lawan!
//           - Jika avgElang >= 2 * avgHarimau → return "Tim Elang Menang ([avgElang] vs [avgHarimau]) 🏆"
//           - Jika avgHarimau >= 2 * avgElang → return "Tim Harimau Menang ([avgHarimau] vs [avgElang]) 🏆"
//           - Jika tidak ada yang mencapai 2x lipat → return "Tidak ada tim yang memenuhi syarat menang!"


// TODO 3: Buat fungsi utama `jalankanKompetisi`:
//         - Menerima skor 3 pertandingan untuk kedua tim.
//         - Panggil `hitungRataRata` untuk kedua tim.
//         - Panggil `cekPemenang` dan kembalikan hasilnya.
//         - Uji dengan data:
//           Tim Elang: 85, 54, 41
//           Tim Harimau: 23, 34, 27
