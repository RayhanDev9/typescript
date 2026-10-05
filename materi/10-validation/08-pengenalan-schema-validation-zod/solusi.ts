// ============================================================
// 08 · Pengenalan Schema Validation & Zod — Solusi
// Jalankan: npm run materi -- materi/10-validation/08-pengenalan-schema-validation-zod/solusi.ts
// ============================================================

import { z } from "zod";
import { sampelA, sampelB } from "./latihan";

// 1. Definisi Skema Zod
export const SkemaBiodata = z.object({
  nik: z.string(),
  namaLengkap: z.string(),
  umur: z.number(),
  sudahMenikah: z.boolean(),
});

// 2. Fungsi Validasi SafeParse
export function validasiBiodata(data: unknown): void {
  const hasil = SkemaBiodata.safeParse(data);

  if (hasil.success) {
    console.log(`✅ Lolos: ${hasil.data.namaLengkap} (${hasil.data.umur} tahun)`);
  } else {
    console.log("❌ Ditolak:");
    hasil.error.issues.forEach((issue) => {
      console.log(`   - Kolom '${issue.path.join(".")}': ${issue.message}`);
    });
  }
}

console.log("=== PENGUJIAN SOLUSI SCHEMA VALIDATION ZOD ===");

console.log("1. Pengujian Sampel A (Valid):");
validasiBiodata(sampelA);

console.log("\n2. Pengujian Sampel B (Rusak):");
validasiBiodata(sampelB);
