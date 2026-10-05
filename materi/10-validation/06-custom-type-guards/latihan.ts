// ============================================================
// 06 · Custom Type Guards — Latihan
// Jalankan: npm run materi -- materi/10-validation/06-custom-type-guards/latihan.ts
// ============================================================

export interface ProdukInventaris {
  id: string;
  nama: string;
  stok: number;
}

/**
 * 🎯 TUGAS:
 * 1. Buat Custom Type Guard: `isProdukInventaris(data: unknown): data is ProdukInventaris`:
 *    - Periksa apakah data adalah objek dan bukan null.
 *    - Periksa apakah `id` bertipe `string` dan tidak kosong.
 *    - Periksa apakah `nama` bertipe `string` dan tidak kosong.
 *    - Periksa apakah `stok` bertipe `number`, bukan NaN, dan >= 0.
 *    - Kembalikan `true` jika semua valid, `false` jika tidak.
 *
 * 2. Diberikan array mentah `daftarBarangMasuk` di bawah ini.
 * 3. Gunakan `.filter(isProdukInventaris)` untuk menyaring hanya barang yang valid menjadi `ProdukInventaris[]`.
 * 4. Cetak seluruh produk yang berhasil tervalidasi ke konsol!
 */

const daftarBarangMasuk: unknown[] = [
  { id: "PRD-01", nama: "Buku Catatan", stok: 50 },
  { nama: "Barang Tanpa ID", stok: 10 },
  "Hanya Teks Biasa",
  { id: "PRD-02", nama: "Pensil 2B", stok: 100 },
  null,
  { id: "PRD-03", nama: "Penghapus", stok: -5 }, // Stok negatif (tidak valid)
];

// Tulis fungsi Custom Type Guard Anda di bawah ini:




// Eksekusi untuk menguji:
// const barangLolos = daftarBarangMasuk.filter(isProdukInventaris);
// console.log("Barang Valid:", barangLolos);
