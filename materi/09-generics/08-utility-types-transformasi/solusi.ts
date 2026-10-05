// ============================================================
// 08 · Utility Types: Transformasi Properti — Solusi
// Jalankan: npm run materi -- materi/09-generics/08-utility-types-transformasi/solusi.ts
// ============================================================

export interface BarangElektronik {
  sku: string;
  nama: string;
  harga: number;
  garansiBulan?: number;
}

// 1. Fungsi Update Parsial menggunakan Partial<T>
export function perbaruiBarang(
  lama: BarangElektronik,
  ubah: Partial<BarangElektronik>
): BarangElektronik {
  return {
    ...lama,
    ...ubah,
  };
}

// 2. Tipe Wajib menggunakan Required<T>
export type BarangGaransiPasti = Required<BarangElektronik>;

const produkGaransi: BarangGaransiPasti = {
  sku: "MNT-4K",
  nama: "Monitor 4K 27 Inch",
  harga: 4500000,
  garansiBulan: 36, // Wajib ada karena Required!
};

// 3. Koleksi Terkunci menggunakan Readonly<T>
const daftarKatalog: readonly Readonly<BarangElektronik>[] = [
  { sku: "KB-01", nama: "Keyboard Mechanical", harga: 650000 },
  { sku: "MS-01", nama: "Mouse Gaming", harga: 350000 },
];

console.log("=== PENGUJIAN SOLUSI UTILITY TYPES TRANSFORMASI ===");

const barang1: BarangElektronik = { sku: "LAP-01", nama: "Laptop Tipis", harga: 8000000 };
const barangUpdate = perbaruiBarang(barang1, {
  harga: 7500000,
  garansiBulan: 24,
});

console.log("1. Hasil Pembaruan Parsial (Partial):", barangUpdate);
console.log("\n2. Objek Wajib Garansi (Required):", produkGaransi);
console.log("\n3. Koleksi Katalog Terkunci (Readonly):", daftarKatalog);
