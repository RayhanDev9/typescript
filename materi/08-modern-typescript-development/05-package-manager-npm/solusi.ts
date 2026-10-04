// ============================================================
// 05 · Package Manager & NPM — Solusi
// Jalankan: npm run materi -- materi/08-modern-typescript-development/05-package-manager-npm/solusi.ts
// ============================================================

import { parseSemVer } from "./contoh";

function apakahAmanUpdateCaret(versiTerpasang: string, versiKandidat: string): boolean {
  const terpasang = parseSemVer(versiTerpasang);
  const kandidat = parseSemVer(versiKandidat);

  // Aturan Caret (^): Major wajib sama persis
  if (kandidat.major !== terpasang.major) {
    return false;
  }

  // Jika major sama, kandidat tidak boleh lebih rendah dari terpasang
  if (kandidat.minor < terpasang.minor) {
    return false;
  }

  if (kandidat.minor === terpasang.minor && kandidat.patch < terpasang.patch) {
    return false;
  }

  return true;
}

console.log("=== PENGUJIAN KEAMANAN UPDATE SEMVER (CARET ^) ===");
console.log("Test 1 (^1.2.0 -> 1.5.0) :", apakahAmanUpdateCaret("1.2.0", "1.5.0")); // true
console.log("Test 2 (^1.2.0 -> 2.0.0) :", apakahAmanUpdateCaret("1.2.0", "2.0.0")); // false
console.log("Test 3 (^1.2.0 -> 1.1.0) :", apakahAmanUpdateCaret("1.2.0", "1.1.0")); // false
console.log("Test 4 (^1.2.0 -> 1.2.3) :", apakahAmanUpdateCaret("1.2.0", "1.2.3")); // true
