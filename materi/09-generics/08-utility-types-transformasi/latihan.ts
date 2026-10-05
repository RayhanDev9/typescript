// ============================================================
// 08 · Utility Types: Transformasi Properti — Latihan
// Jalankan: npm run materi -- materi/09-generics/08-utility-types-transformasi/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Diberikan interface `BarangElektronik`:
 *    - `sku`: string
 *    - `nama`: string
 *    - `harga`: number
 *    - `garansiBulan?: number` (opsional)
 *
 * 2. Buat fungsi `perbaruiBarang(lama: BarangElektronik, ubah: Partial<BarangElektronik>): BarangElektronik`
 *    yang mengembalikan objek baru hasil gabungan data lama dan perubahan baru.
 *
 * 3. Buat tipe alias `BarangGaransiPasti` menggunakan `Required<BarangElektronik>`,
 *    lalu buat 1 contoh objeknya.
 *
 * 4. Buat variabel `daftarKatalog` bertipe `Readonly<BarangElektronik>[]`
 *    berisi 2 produk yang aman dari penambahan/pengubahan elemen langsung.
 *
 * 5. Cetak semua hasil pengujian ke konsol.
 */

export interface BarangElektronik {
  sku: string;
  nama: string;
  harga: number;
  garansiBulan?: number;
}

// Tulis implementasi fungsi dan tipe Anda di bawah ini:




// Eksekusi untuk menguji:
// const barang1: BarangElektronik = { sku: "LAP-01", nama: "Laptop", harga: 8000000 };
// const barangUpdate = perbaruiBarang(barang1, { harga: 7500000, garansiBulan: 24 });
// console.log("Hasil Update:", barangUpdate);
