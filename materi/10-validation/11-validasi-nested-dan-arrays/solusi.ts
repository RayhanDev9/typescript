// ============================================================
// 11 · Validasi Objek Bersarang & Array — Solusi
// Jalankan: npm run materi -- materi/10-validation/11-validasi-nested-dan-arrays/solusi.ts
// ============================================================

import { z } from "zod";
import { dataRombelUji } from "./latihan";

// 1. Sub-skema Nilai Mapel
export const SkemaNilaiMapel = z.object({
  mataPelajaran: z.string().min(1, "Nama mata pelajaran tidak boleh kosong"),
  skor: z
    .number()
    .min(0, "Skor minimal adalah 0")
    .max(100, "Skor maksimal adalah 100"),
});

// 2. Sub-skema Biodata Siswa
export const SkemaBiodataSiswa = z.object({
  nis: z.string().min(1, "NIS tidak boleh kosong"),
  nama: z.string().min(1, "Nama siswa tidak boleh kosong"),
  daftarNilai: z
    .array(SkemaNilaiMapel)
    .nonempty("Siswa wajib memiliki minimal 1 nilai mata pelajaran"),
});

// 3. Skema Induk Rombel Kelas
export const SkemaRombelKelas = z.object({
  namaKelas: z.string().min(1, "Nama kelas wajib diisi"),
  waliKelas: z.string().min(1, "Wali kelas wajib diisi"),
  anggotaSiswa: z
    .array(SkemaBiodataSiswa)
    .min(2, "Satu rombel kelas wajib memiliki minimal 2 orang siswa"),
});

export type RombelKelas = z.infer<typeof SkemaRombelKelas>;

console.log("=== PENGUJIAN SOLUSI VALIDASI BERSARANG & ARRAY ===");

const hasil = SkemaRombelKelas.safeParse(dataRombelUji);

if (!hasil.success) {
  console.log("❌ Ditemukan Masalah Validasi:");
  hasil.error.issues.forEach((issue, idx) => {
    console.log(`   ${idx + 1}. [Path: ${issue.path.join(".")}]`);
    console.log(`      Pesan: ${issue.message}`);
  });
} else {
  console.log("✅ Rombel Kelas Valid!", hasil.data);
}
