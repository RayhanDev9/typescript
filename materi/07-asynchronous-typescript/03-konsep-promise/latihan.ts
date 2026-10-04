// ============================================================================
// 07 · Asynchronous TypeScript
// 03 · Konsep Dasar Promise (Latihan)
// ============================================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

// TODO 1:
// Buat interface TypeScript bernama 'PesanCuaca' yang memiliki properti:
// - kota (string)
// - suhuCelsius (number)
// - kondisi (string)


// TODO 2:
// Buat fungsi 'cekCuaca(namaKota: string): Promise<PesanCuaca>'.
// Di dalamnya:
// - Kembalikan new Promise<PesanCuaca>((resolve, reject) => { ... })
// - Gunakan setTimeout selama 400 milidetik.
// - Jika namaKota bernilai "Jakarta", panggil resolve() dengan data cuaca valid.
// - Jika nama kota selain itu, panggil reject(new Error("Data kota tidak tersedia!")).


// TODO 3:
// Panggil fungsi cekCuaca("Jakarta"), simpan ke variabel 'janjiCuaca'.
// Cetak variabel 'janjiCuaca' ke console untuk melihat status Promise saat awal dibuat!


export {};
