// ============================================================
// 09 · Zod Type Inference — Latihan
// Jalankan: npm run materi -- materi/10-validation/09-zod-type-inference/latihan.ts
// ============================================================

import { z } from "zod";

/**
 * 🎯 TUGAS:
 * 1. Buat skema Zod `SkemaKursus`:
 *    - `id`: z.string()
 *    - `judul`: z.string()
 *    - `harga`: z.number()
 *    - `tingkatKesulitan`: z.enum(["pemula", "menengah", "mahir"])
 *    - `diterbitkan`: z.boolean()
 *
 * 2. Ekstrak tipe TypeScript-nya menggunakan `z.infer<typeof SkemaKursus>`
 *    menjadi tipe `Kursus`.
 *
 * 3. Buat fungsi `cetakInfoKursus(data: Kursus): void`:
 *    - Menampilkan judul kursus, tingkat kesulitan, dan harga dalam format rupiah.
 *
 * 4. Parse data mentah `rawKursus` menggunakan `SkemaKursus.parse()`
 *    dan kirimkan hasilnya ke fungsi `cetakInfoKursus()`.
 */

export const rawKursus: unknown = {
  id: "CRS-TS-01",
  judul: "Menguasai TypeScript dari Nol sampai Mahir",
  harga: 350000,
  tingkatKesulitan: "pemula",
  diterbitkan: true,
};

// Tulis Skema Zod, inferensi tipe, dan implementasi fungsi Anda di bawah ini:




// Eksekusi untuk menguji:
// const kursusValid = SkemaKursus.parse(rawKursus);
// cetakInfoKursus(kursusValid);
