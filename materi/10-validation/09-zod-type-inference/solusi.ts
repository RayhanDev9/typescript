// ============================================================
// 09 · Zod Type Inference — Solusi
// Jalankan: npm run materi -- materi/10-validation/09-zod-type-inference/solusi.ts
// ============================================================

import { z } from "zod";
import { rawKursus } from "./latihan";

// 1. Skema Zod
export const SkemaKursus = z.object({
  id: z.string(),
  judul: z.string(),
  harga: z.number(),
  tingkatKesulitan: z.enum(["pemula", "menengah", "mahir"]),
  diterbitkan: z.boolean(),
});

// 2. Type Inference (Single Source of Truth)
export type Kursus = z.infer<typeof SkemaKursus>;

// 3. Fungsi Konsumen
export function cetakInfoKursus(data: Kursus): void {
  console.log("=== DETAIL KURSUS ONLINE ===");
  console.log(`ID         : ${data.id}`);
  console.log(`Judul      : ${data.judul}`);
  console.log(`Level      : ${data.tingkatKesulitan.toUpperCase()}`);
  console.log(`Harga      : Rp ${data.harga.toLocaleString("id-ID")}`);
  console.log(`Status     : ${data.diterbitkan ? "Tersedia untuk Umum" : "Draf"}`);
  console.log("============================");
}

// 4. Eksekusi Parsing & Konsumsi
console.log("=== PENGUJIAN SOLUSI ZOD TYPE INFERENCE ===");
const kursusValid = SkemaKursus.parse(rawKursus);
cetakInfoKursus(kursusValid);
