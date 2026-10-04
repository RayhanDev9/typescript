// ============================================================
// 09 · Return Value dari Fungsi Async — Latihan
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/09-returning-values-from-async/latihan.ts
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

// TODO 1:
// Buat fungsi async bernama 'hitungHargaTotal(hargaBarang: number, jumlah: number): Promise<number>'.
// Di dalamnya:
// - Simulasikan penundaan 300ms dengan Promise dan setTimeout.
// - Kembalikan hasil perkalian: hargaBarang * jumlah.


// TODO 2:
// Buat fungsi async utama bernama 'cetakTotalTransaksi(): Promise<void>'.
// Di dalamnya:
// - Panggil fungsi 'hitungHargaTotal(25000, 4)' menggunakan kata kunci 'await'.
// - Simpan ke variabel bertipe number bernama 'total'.
// - Cetak ke console: "Total Transaksi Akhir: Rp [total]".


// TODO 3:
// Panggil fungsi 'cetakTotalTransaksi()' untuk melihat hasilnya!


export {};
