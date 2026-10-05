// ============================================================
// 05 · Generic Constraints (extends) — Solusi
// Jalankan: npm run materi -- materi/09-generics/05-generic-constraints-extends/solusi.ts
// ============================================================

export interface BisaDihitungHarga {
  harga: number;
  jumlah: number;
}

export function hitungTotalBelanja<T extends BisaDihitungHarga>(daftar: T[]): number {
  return daftar.reduce((total, item) => total + item.harga * item.jumlah, 0);
}

interface ProdukFisik extends BisaDihitungHarga {
  nama: string;
  beratKg: number;
}

interface ProdukDigital extends BisaDihitungHarga {
  nama: string;
  kodeLisensi: string;
}

console.log("=== PENGUJIAN SOLUSI GENERIC CONSTRAINT (EXTENDS) ===");

// 1. Keranjang Produk Fisik
const keranjangFisik: ProdukFisik[] = [
  { nama: "Buku Tulis", harga: 50000, jumlah: 2, beratKg: 0.5 },
  { nama: "Pulpen Gel", harga: 5000, jumlah: 10, beratKg: 0.1 },
];

const totalFisik = hitungTotalBelanja(keranjangFisik);
console.log(`1. Total Tagihan Produk Fisik   : Rp ${totalFisik.toLocaleString("id-ID")}`);

// 2. Keranjang Produk Digital
const keranjangDigital: ProdukDigital[] = [
  { nama: "E-Book TypeScript", harga: 120000, jumlah: 1, kodeLisensi: "LIC-TS-01" },
  { nama: "Akses Course Pro", harga: 350000, jumlah: 1, kodeLisensi: "LIC-PRO-99" },
];

const totalDigital = hitungTotalBelanja(keranjangDigital);
console.log(`2. Total Tagihan Produk Digital : Rp ${totalDigital.toLocaleString("id-ID")}`);
