// ============================================================
// 12 · Transformasi & Sanitasi Data dengan Zod — Contoh
// Jalankan: npm run materi -- materi/10-validation/12-transformasi-dan-sanitasi-zod/contoh.ts
// ============================================================

import { z } from "zod";

console.log("=== DEMO SANITASI & TRANSFORMASI DATA (ZOD) ===\n");

// ----------------------------------------------------------------------------
// 1. SKEMA DENGAN SANITASI STRING, COERCION, & DEFAULT
// ----------------------------------------------------------------------------
export const SkemaPencarianProduk = z.object({
  // Sanitasi: buang spasi dan kecilkan huruf
  kataKunci: z.string().trim().toLowerCase(),

  // Coercion: ubah string query URL "1" menjadi number 1
  halaman: z.coerce.number().int().min(1).default(1),

  // Coercion: ubah string "true" / "1" menjadi boolean
  hanyaPromo: z.coerce.boolean().default(false),

  // Transformasi: pecah string tag "elektronik, laptop, murah" menjadi array string[]
  kategori: z
    .string()
    .transform((str) => str.split(",").map((k) => k.trim().toLowerCase())),
});

export type ParameterPencarian = z.infer<typeof SkemaPencarianProduk>;

// ----------------------------------------------------------------------------
// 2. MENGUJI DATA DARI QUERY URL (SEMUA MENTAH BERUPA STRING DAN BERSPASI)
// ----------------------------------------------------------------------------
const queryUrlMentah = {
  kataKunci: "   KEYBOARD RGB MECHANICAL   ",
  halaman: "3", // Berupa string!
  hanyaPromo: "true", // Berupa string!
  kategori: "Komputer, Aksesoris , Gaming ",
};

console.log("1. Parameter Mentah dari URL / Form:");
console.log(queryUrlMentah);

const hasil = SkemaPencarianProduk.parse(queryUrlMentah);

console.log("\n2. Data Setelah Divalidasi, Disanitasi, & Ditransformasi:");
console.log(`   Kata Kunci : "${hasil.kataKunci}" (bersih spasi & huruf kecil)`);
console.log(`   Halaman    : ${hasil.halaman} (tipe: ${typeof hasil.halaman})`);
console.log(`   Hanya Promo: ${hasil.hanyaPromo} (tipe: ${typeof hasil.hanyaPromo})`);
console.log("   Kategori   :", hasil.kategori, `(tipe: Array berukuran ${hasil.kategori.length})`);

// ----------------------------------------------------------------------------
// 3. PENGUJIAN NILAI DEFAULT
// ----------------------------------------------------------------------------
const queryMinim = {
  kataKunci: "Monitor",
  kategori: "Elektronik",
  // halaman dan hanyaPromo tidak dikirim sama sekali!
};

const hasilDefault = SkemaPencarianProduk.parse(queryMinim);
console.log("\n3. Pengujian Fallback Nilai Default:");
console.log(`   Halaman otomatis    : ${hasilDefault.halaman} (default 1)`);
console.log(`   Promo otomatis      : ${hasilDefault.hanyaPromo} (default false)`);
