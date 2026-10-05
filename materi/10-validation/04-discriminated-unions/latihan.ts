// ============================================================
// 04 · Discriminated Unions — Latihan
// Jalankan: npm run materi -- materi/10-validation/04-discriminated-unions/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Buat 3 interface Discriminated Union dengan properti pembeda `tipe`:
 *    - `PembayaranTunai`: { tipe: "tunai"; jumlahUangDiterima: number }
 *    - `PembayaranKartu`: { tipe: "kartu"; nomorKartu: string; namaBank: string }
 *    - `PembayaranQRIS`: { tipe: "qris"; idTransaksiQris: string; waktuKadaluarsa: string }
 *
 * 2. Gabungkan ketiganya menjadi union type: `MetodePembayaran`.
 *
 * 3. Buat fungsi `prosesKwitansi(totalBelanja: number, bayar: MetodePembayaran): string`:
 *    - Gunakan `switch (bayar.tipe)`:
 *    - Jika tunai: hitung kembalian (`bayar.jumlahUangDiterima - totalBelanja`), kembalikan pesan detail.
 *    - Jika kartu: kembalikan info debet bank dan 4 digit terakhir nomor kartu.
 *    - Jika QRIS: kembalikan konfirmasi scan QRIS dengan ID transaksi.
 *
 * 4. Uji fungsi untuk ketiga metode pembayaran tersebut!
 */

// Tulis definisi tipe dan implementasi fungsi Anda di bawah ini:




// Eksekusi untuk menguji:
// console.log(prosesKwitansi(50000, { tipe: "tunai", jumlahUangDiterima: 100000 }));
// console.log(prosesKwitansi(150000, { tipe: "kartu", nomorKartu: "1234567890123456", namaBank: "BCA" }));
// console.log(prosesKwitansi(75000, { tipe: "qris", idTransaksiQris: "NMID-88219", waktuKadaluarsa: "15 menit" }));
