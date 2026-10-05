// ============================================================
// 10 · Validasi Form & Aturan Ketat — Solusi
// Jalankan: npm run materi -- materi/10-validation/10-validasi-form-dan-aturan-ketat/solusi.ts
// ============================================================

import { z } from "zod";
import { artikelSalah } from "./latihan";

export const SkemaInputArtikel = z.object({
  judul: z
    .string({ error: "Judul artikel wajib diisi" })
    .min(5, "Judul artikel minimal 5 karakter")
    .max(100, "Judul artikel maksimal 100 karakter"),

  slug: z
    .string({ error: "Slug URL wajib diisi" })
    .regex(
      /^[a-z0-9-]+$/,
      "Slug URL hanya boleh berisi huruf kecil, angka, dan tanda strip (-)"
    ),

  waktuBacaMenit: z
    .number({ error: "Waktu baca wajib diisi" })
    .int("Waktu baca harus berupa bilangan bulat")
    .min(1, "Waktu baca minimal 1 menit")
    .max(60, "Waktu baca maksimal 60 menit"),

  kategori: z.enum(["teknologi", "tutorial", "berita"], {
    error: "Kategori harus salah satu dari: teknologi, tutorial, berita",
  }),
});

export type InputArtikel = z.infer<typeof SkemaInputArtikel>;

export function validasiArtikel(input: unknown) {
  const hasil = SkemaInputArtikel.safeParse(input);

  if (hasil.success) {
    return { sukses: true as const, data: hasil.data };
  } else {
    return {
      sukses: false as const,
      error: hasil.error.flatten().fieldErrors,
    };
  }
}

console.log("=== PENGUJIAN SOLUSI VALIDASI FORM DENGAN ATURAN KETAT ===");

const hasilUji = validasiArtikel(artikelSalah);

if (!hasilUji.sukses) {
  console.log("❌ Validasi Ditolak! Rincian Error:");
  for (const [kolom, pesanList] of Object.entries(hasilUji.error)) {
    console.log(`   - Field '${kolom}':`);
    pesanList?.forEach((p) => console.log(`     * ${p}`));
  }
} else {
  console.log("Artikel Valid:", hasilUji.data);
}
