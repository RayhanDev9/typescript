// ============================================================================
// 06 · Modern Tooling & Bundler — Solusi
// Jalankan: npx ts-node materi/08-modern-typescript-development/06-modern-tooling-bundler/solusi.ts
// ============================================================================

import { type Modul, simulasiBundling } from "./contoh";

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

function deteksiDeadCode(semuaModul: Record<string, Modul>, entryPoint: string): string[] {
  const hasilBundel = simulasiBundling(semuaModul, entryPoint);
  const modulAktif = new Set(hasilBundel.urutanBundel);

  const deadCode: string[] = [];
  for (const namaFile of Object.keys(semuaModul)) {
    if (!modulAktif.has(namaFile)) {
      deadCode.push(namaFile);
    }
  }

  return deadCode;
}

// Eksekusi untuk menguji
const modulTakTerpakai = deteksiDeadCode(repositoriProyek, "app.ts");
console.log("=== LAPORAN DEAD CODE (TREE-SHAKING CANDIDATE) ===");
console.log("File yang terdeteksi tidak pernah dipanggil oleh app.ts:");
modulTakTerpakai.forEach((file, idx) => {
  const ukuran = repositoriProyek[file].ukuranBytes;
  console.log(`  ${idx + 1}. ${file} (${ukuran} bytes)`);
});
console.log("\n💡 Tips: Anda dapat menghapus berkas-berkas ini untuk meringankan proyek!");
