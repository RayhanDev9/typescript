// ============================================================================
// 07 · Asynchronous TypeScript
// 10 · Menjalankan Promise Secara Paralel (Latihan)
// ============================================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

function simulasikanCekStok(namaBarang: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Stok ${namaBarang}: Tersedia 10 unit`);
    }, 300);
  });
}

// TODO 1:
// Buat fungsi async bernama 'cekSemuaGudang(): Promise<void>'.


// TODO 2:
// Di dalam fungsi tersebut:
// - Panggil fungsi 'simulasikanCekStok' untuk 3 barang: "Laptop", "Mouse", dan "Keyboard".
// - Jalankan ketiganya secara paralel menggunakan 'Promise.all'.
// - Gunakan destructuring array: const [stokLaptop, stokMouse, stokKeyboard] = await Promise.all(...)


// TODO 3:
// Cetak ketiga hasil stok tersebut ke console.log.


// TODO 4:
// Panggil fungsi 'cekSemuaGudang()'.


export {};
