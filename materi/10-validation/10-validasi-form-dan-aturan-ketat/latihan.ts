// ============================================================
// 10 · Validasi Form & Aturan Ketat — Latihan
// Jalankan: npm run materi -- materi/10-validation/10-validasi-form-dan-aturan-ketat/latihan.ts
// ============================================================

import { z } from "zod";

/**
 * 🎯 TUGAS:
 * 1. Buat skema Zod `SkemaInputArtikel`:
 *    - `judul`: string, minimal 5 huruf, maksimal 100 huruf.
 *    - `slug`: string, hanya boleh berisi huruf kecil, angka, dan strip (gunakan regex: /^[a-z0-9-]+$/).
 *    - `waktuBacaMenit`: number, wajib integer, minimal 1 menit, maksimal 60 menit.
 *    - `kategori`: z.enum(["teknologi", "tutorial", "berita"]).
 *
 * 2. Tambahkan pesan kesalahan kustom berbahasa Indonesia untuk setiap aturan di atas!
 *
 * 3. Buat fungsi `validasiArtikel(input: unknown)` yang mengembalikan:
 *    - Jika sukses: `{ sukses: true, data: ... }`
 *    - Jika gagal: `{ sukses: false, error: ... }` (ambil fieldErrors menggunakan .flatten()).
 *
 * 4. Uji fungsi Anda dengan data `artikelSalah` di bawah ini.
 */

export const artikelSalah: unknown = {
  judul: "TS",                            // Terlalu pendek (< 5 huruf)
  slug: "Belajar TypeScript 2026!",       // Mengandung huruf besar, spasi, dan tanda seru!
  waktuBacaMenit: 0,                      // Di bawah minimal 1 menit
  kategori: "hiburan",                    // Kategori tidak ada dalam enum
};

// Tulis Skema Zod dan implementasi fungsi Anda di bawah ini:




// Eksekusi untuk menguji:
// console.log("Hasil Validasi:", validasiArtikel(artikelSalah));
