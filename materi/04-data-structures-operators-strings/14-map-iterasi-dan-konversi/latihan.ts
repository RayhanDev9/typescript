// ============================================================
// 14 · Map: Iterasi & Konversi — Latihan
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/14-map-iterasi-dan-konversi/latihan.ts
// ============================================================

// TODO 1: Buat Map bernama `kursMataUang` menggunakan inisialisasi array 2D
//         dengan nilai tukar ke Rupiah:
//         - ["USD", 16000]
//         - ["EUR", 17500]
//         - ["SGD", 12000]
//         - ["JPY", 105]


// TODO 2: Gunakan perulangan `for...of` dengan destructuring `[kode, nominal]`
//         pada `kursMataUang` untuk menampilkan:
//         "1 USD = Rp16.000"
//         "1 EUR = Rp17.500"
//         dst...


// TODO 3: Diberikan object `nilaiSiswa` di bawah ini.
//         Ubahlah object tersebut menjadi sebuah Map bernama `mapNilai`
//         menggunakan `Object.entries()`.
const nilaiSiswa: Record<string, number> = {
  Andi: 85,
  Budi: 90,
  Citra: 78,
  Dewi: 95,
};


// TODO 4: Ubah kembali `kursMataUang` menjadi sebuah Object biasa
//         menggunakan `Object.fromEntries()` dan simpan di variabel `objKurs`.

