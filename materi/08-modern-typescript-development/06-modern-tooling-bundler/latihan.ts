// ============================================================
// 06 · Modern Tooling & Bundler — Latihan
// Jalankan: npm run materi -- materi/08-modern-typescript-development/06-modern-tooling-bundler/latihan.ts
// ============================================================

import { type Modul, simulasiBundling } from "./contoh";

/**
 * 🎯 TUGAS:
 * 1. Diberikan seluruh file proyek di bawah ini (termasuk file lama yang tidak dipakai).
 * 2. Buat fungsi `deteksiDeadCode(semuaModul: Record<string, Modul>, entryPoint: string): string[]`
 *    - Gunakan fungsi `simulasiBundling` untuk mengetahui modul apa saja yang benar-benar dipakai.
 *    - Kembalikan daftar nama modul yang ADA di proyek tetapi TIDAK PERNAH terpakai oleh entryPoint (Dead Code / Unused files).
 * 3. Tampilkan daftar dead code yang bisa dibuang dengan aman.
 */

const repositoriProyek: Record<string, Modul> = {
  "app.ts": {
    id: "m1",
    namaFile: "app.ts",
    ukuranBytes: 500,
    dependencies: ["Auth.ts", "Dashboard.ts"],
  },
  "Auth.ts": {
    id: "m2",
    namaFile: "Auth.ts",
    ukuranBytes: 1200,
    dependencies: [],
  },
  "Dashboard.ts": {
    id: "m3",
    namaFile: "Dashboard.ts",
    ukuranBytes: 1500,
    dependencies: [],
  },
  "FiturLamaEksperimental.ts": {
    id: "m4",
    namaFile: "FiturLamaEksperimental.ts",
    ukuranBytes: 4000,
    dependencies: [],
  },
  "HelperTakTerpakai.ts": {
    id: "m5",
    namaFile: "HelperTakTerpakai.ts",
    ukuranBytes: 900,
    dependencies: [],
  },
};

// Tulis fungsi implementasi Anda di bawah ini:




// Eksekusi untuk menguji
