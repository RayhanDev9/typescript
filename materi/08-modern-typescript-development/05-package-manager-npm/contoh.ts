// ============================================================================
// 05 · Package Manager & NPM — Contoh
// Jalankan: npx ts-node materi/08-modern-typescript-development/05-package-manager-npm/contoh.ts
// ============================================================================

// Interface untuk memodelkan struktur SemVer (Semantic Versioning)
export interface SemVer {
  major: number;
  minor: number;
  patch: number;
  raw: string;
}

export type JenisPerubahan = "BREAKING_CHANGE" | "FITUR_BARU" | "PERBAIKAN_BUG" | "SAMA";

// Fungsi untuk mem-parsing string versi menjadi objek SemVer
export function parseSemVer(versiStr: string): SemVer {
  // Membersihkan karakter prefix seperti '^' atau '~'
  const bersih = versiStr.replace(/^[\^~]/, "");
  const bagian = bersih.split(".").map(Number);

  return {
    major: bagian[0] || 0,
    minor: bagian[1] || 0,
    patch: bagian[2] || 0,
    raw: versiStr,
  };
}

// Fungsi untuk membandingkan dua versi SemVer
export function bandingkanVersi(lama: SemVer, baru: SemVer): JenisPerubahan {
  if (baru.major > lama.major) return "BREAKING_CHANGE";
  if (baru.minor > lama.minor) return "FITUR_BARU";
  if (baru.patch > lama.patch) return "PERBAIKAN_BUG";
  return "SAMA";
}

// Simulasi objek package.json
const simulasiPackageJson = {
  name: "portal-edukasi-ts",
  version: "1.4.2",
  dependencies: {
    axios: "^1.6.8",
  },
  devDependencies: {
    typescript: "^5.4.5",
    "@types/node": "^20.12.7",
  },
};

console.log("=== ANALISIS DEPENDENCIES & SEMVER ===\n");
console.log(`Proyek: ${simulasiPackageJson.name} (v${simulasiPackageJson.version})\n`);

const versiLama = parseSemVer("1.2.0");
const versiRilis = parseSemVer("2.0.0");
const statusUpgrade = bandingkanVersi(versiLama, versiRilis);

console.log(`Versi Terpasang : ${versiLama.raw}`);
console.log(`Versi Terbaru   : ${versiRilis.raw}`);
console.log(`Kategori Update : ${statusUpgrade}`);

if (statusUpgrade === "BREAKING_CHANGE") {
  console.log("⚠️ PERINGATAN: Update Major terdeteksi! Kode mungkin mengalami kerusakan fungsi jika di-update.");
}
