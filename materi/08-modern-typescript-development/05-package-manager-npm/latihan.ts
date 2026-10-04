// ============================================================================
// 05 · Package Manager & NPM — Latihan
// Jalankan: npx ts-node materi/08-modern-typescript-development/05-package-manager-npm/latihan.ts
// ============================================================================

import { parseSemVer, type SemVer } from "./contoh";

/**
 * 🎯 TUGAS:
 * 1. Buat fungsi `apakahAmanUpdateCaret(versiTerpasang: string, versiKandidat: string): boolean`
 *    Aturan Caret (`^`):
 *    - Aman JIKA Major-nya sama PERSIS DAN versiKandidat tidak lebih rendah dari versiTerpasang.
 * 2. Uji fungsi Anda dengan beberapa kasus:
 *    - Versi "^1.2.0" diupdate ke "1.5.0" -> Harus bernilai true (Aman / Minor update).
 *    - Versi "^1.2.0" diupdate ke "2.0.0" -> Harus bernilai false (Tidak aman / Major break).
 *    - Versi "^1.2.0" diupdate ke "1.1.0" -> Harus bernilai false (Versi mundur).
 * 3. Tampilkan hasil pengujian ke console.
 */

// Tulis fungsi implementasi Anda di bawah ini:




// Eksekusi untuk menguji:
// console.log("Test 1 (^1.2.0 -> 1.5.0):", apakahAmanUpdateCaret("1.2.0", "1.5.0"));
// console.log("Test 2 (^1.2.0 -> 2.0.0):", apakahAmanUpdateCaret("1.2.0", "2.0.0"));
// console.log("Test 3 (^1.2.0 -> 1.1.0):", apakahAmanUpdateCaret("1.2.0", "1.1.0"));
