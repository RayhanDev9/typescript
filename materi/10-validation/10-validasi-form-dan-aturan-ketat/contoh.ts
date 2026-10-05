// ============================================================
// 10 · Validasi Form & Aturan Ketat — Contoh
// Jalankan: npm run materi -- materi/10-validation/10-validasi-form-dan-aturan-ketat/contoh.ts
// ============================================================

import { z } from "zod";

console.log("=== DEMO VALIDASI FORM & PESAN ERROR KUSTOM ===\n");

// ----------------------------------------------------------------------------
// 1. SKEMA DENGAN ATURAN STRING & NUMBER SPESIFIK BESERTA PESAN INDONESIA
// ----------------------------------------------------------------------------
export const SkemaPendaftaranMember = z.object({
  namaLengkap: z
    .string({ error: "Nama wajib diisi" })
    .min(3, "Nama minimal terdiri dari 3 karakter")
    .max(30, "Nama maksimal 30 karakter"),

  email: z
    .string({ error: "Email wajib diisi" })
    .email("Format alamat email tidak sah (harus ada @ dan domain)"),

  kataSandi: z
    .string()
    .min(8, "Kata sandi minimal 8 karakter")
    .regex(/[A-Z]/, "Kata sandi wajib mengandung minimal 1 huruf besar")
    .regex(/[0-9]/, "Kata sandi wajib mengandung minimal 1 angka"),

  usia: z
    .number({ error: "Usia wajib diisi" })
    .int("Usia harus berupa bilangan bulat")
    .min(18, "Pendaftaran hanya terbuka untuk usia 18 tahun ke atas")
    .max(65, "Usia maksimal pendaftaran adalah 65 tahun"),
});

export type FormPendaftaranMember = z.infer<typeof SkemaPendaftaranMember>;

// ----------------------------------------------------------------------------
// 2. MENGUJI DATA INPUT FORMULIR YANG BERMASALAH
// ----------------------------------------------------------------------------
const inputFormSalah: unknown = {
  namaLengkap: "Al",             // < 3 karakter
  email: "bukan-alamat-email",   // format email salah
  kataSandi: "rahasia",          // < 8 karakter, tanpa huruf besar, tanpa angka
  usia: 15,                      // < 18 tahun
};

console.log("Menguji Data Formulir yang Tidak Memenuhi Syarat:");
const hasil = SkemaPendaftaranMember.safeParse(inputFormSalah);

if (!hasil.success) {
  // Mengekstrak daftar error per field menggunakan .flatten().fieldErrors
  const errorFields = hasil.error.flatten().fieldErrors;

  console.log("\n❌ Ditemukan Kesalahan Input Pengguna:");
  for (const [namaKolom, daftarPesan] of Object.entries(errorFields)) {
    console.log(`   * Kolom [${namaKolom}]:`);
    daftarPesan?.forEach((pesan) => console.log(`     -> ${pesan}`));
  }
} else {
  console.log("Formulir Valid!", hasil.data);
}
