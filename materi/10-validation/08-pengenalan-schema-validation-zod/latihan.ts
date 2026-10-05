// ============================================================
// 08 · Pengenalan Schema Validation & Zod — Latihan
// Jalankan: npm run materi -- materi/10-validation/08-pengenalan-schema-validation-zod/latihan.ts
// ============================================================

import { z } from "zod";

/**
 * 🎯 TUGAS:
 * 1. Buat skema Zod bernama `SkemaBiodata`:
 *    - `nik`: z.string()
 *    - `namaLengkap`: z.string()
 *    - `umur`: z.number()
 *    - `sudahMenikah`: z.boolean()
 *
 * 2. Buat fungsi `validasiBiodata(data: unknown): void`:
 *    - Gunakan `SkemaBiodata.safeParse(data)`.
 *    - Jika sukses: cetak `✅ Lolos: ${hasil.data.namaLengkap} (${hasil.data.umur} tahun)`.
 *    - Jika gagal: cetak `❌ Ditolak:` beserta pesan kesalahan dari `hasil.error.issues`.
 *
 * 3. Uji fungsi Anda dengan `sampelA` (data valid) dan `sampelB` (data rusak).
 */

export const sampelA: unknown = {
  nik: "3201012345670001",
  namaLengkap: "Dewi Sartika",
  umur: 28,
  sudahMenikah: false,
};

export const sampelB: unknown = {
  nik: 320101, // Salah tipe (angka bukan string)
  namaLengkap: "Budi",
  // umur hilang!
  sudahMenikah: "belum", // Salah tipe (string bukan boolean)
};

// Tulis Skema Zod dan implementasi fungsi Anda di bawah ini:




// Eksekusi untuk menguji:
// validasiBiodata(sampelA);
// validasiBiodata(sampelB);
