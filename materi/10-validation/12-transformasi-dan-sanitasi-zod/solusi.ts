// ============================================================
// 12 · Transformasi & Sanitasi Data dengan Zod — Solusi
// Jalankan: npm run materi -- materi/10-validation/12-transformasi-dan-sanitasi-zod/solusi.ts
// ============================================================

import { z } from "zod";
import { inputKotor } from "./latihan";

export const SkemaInputAkun = z.object({
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(3, "Username minimal 3 karakter"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Format email tidak valid"),

  tahunLahir: z.coerce
    .number()
    .int("Tahun lahir harus bilangan bulat")
    .min(1900, "Tahun lahir tidak valid"),

  statusAktif: z.coerce.boolean().default(true),

  keahlian: z
    .string()
    .transform((str) => str.split(",").map((item) => item.trim())),
});

export type InputAkunBersih = z.infer<typeof SkemaInputAkun>;

console.log("=== PENGUJIAN SOLUSI SANITASI & TRANSFORMASI ===");

const akunBersih: InputAkunBersih = SkemaInputAkun.parse(inputKotor);

console.log("Hasil Pembersihan Data Pengguna:");
console.log(`- Username     : "${akunBersih.username}" (rapi, huruf kecil)`);
console.log(`- Email        : "${akunBersih.email}" (rapi, huruf kecil)`);
console.log(`- Tahun Lahir  : ${akunBersih.tahunLahir} (tipe: ${typeof akunBersih.tahunLahir})`);
console.log(`- Status Aktif : ${akunBersih.statusAktif} (default diterapkan)`);
console.log("- Keahlian     :", akunBersih.keahlian);
