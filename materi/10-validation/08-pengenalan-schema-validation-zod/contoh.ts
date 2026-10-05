// ============================================================
// 08 · Pengenalan Schema Validation & Zod — Contoh
// Jalankan: npm run materi -- materi/10-validation/08-pengenalan-schema-validation-zod/contoh.ts
// ============================================================

import { z } from "zod";

console.log("=== DEMO DASAR SCHEMA VALIDATION DENGAN ZOD ===\n");

// ----------------------------------------------------------------------------
// 1. MENDEFINISIKAN SKEMA OBJEK PRODUK
// ----------------------------------------------------------------------------
export const SkemaProduk = z.object({
  id: z.number(),
  nama: z.string(),
  harga: z.number(),
  tersedia: z.boolean(),
});

// ----------------------------------------------------------------------------
// 2. PARSING DENGAN .parse() (MELEMPAR EXCEPTION JIKA GAGAL)
// ----------------------------------------------------------------------------
const dataMentahValid: unknown = {
  id: 101,
  nama: "Kopi Arabika",
  harga: 45000,
  tersedia: true,
};

console.log("1. Menguji Data Valid dengan .parse():");
const produkValid = SkemaProduk.parse(dataMentahValid);
console.log("   Lolos Validasi:", produkValid);
console.log(`   Nama: ${produkValid.nama} | Harga: Rp ${produkValid.harga.toLocaleString("id-ID")}\n`);

// ----------------------------------------------------------------------------
// 3. PARSING AMAN DENGAN .safeParse() (TANPA TRY/CATCH)
// ----------------------------------------------------------------------------
const dataMentahRusak: unknown = {
  id: "BUKAN_ANGKA", // Salah tipe!
  nama: "Teh Hijau",
  harga: 20000,
  // field 'tersedia' hilang!
};

console.log("2. Menguji Data Rusak dengan .safeParse():");
const hasilUji = SkemaProduk.safeParse(dataMentahRusak);

if (hasilUji.success) {
  console.log("   Data Valid:", hasilUji.data);
} else {
  console.log("   ❌ Validasi Gagal Sesuai Dugaan!");
  console.log("   Rincian Kesalahan:");
  hasilUji.error.issues.forEach((masalah, idx) => {
    console.log(`   ${idx + 1}. Kolom [${masalah.path.join(".")}] : ${masalah.message}`);
  });
}
