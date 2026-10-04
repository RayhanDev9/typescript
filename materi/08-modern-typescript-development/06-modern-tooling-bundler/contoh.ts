// ============================================================================
// 06 · Modern Tooling & Bundler — Contoh
// Jalankan: npx ts-node materi/08-modern-typescript-development/06-modern-tooling-bundler/contoh.ts
// ============================================================================

// Interface untuk merepresentasikan modul dalam Dependency Graph
export interface Modul {
  id: string;
  namaFile: string;
  ukuranBytes: number;
  dependencies: string[]; // daftar file yang diimpor
}

// Simulasi Dependency Graph (Grafik Ketergantungan Modul)
const dependencyGraph: Record<string, Modul> = {
  "index.ts": {
    id: "mod-1",
    namaFile: "index.ts",
    ukuranBytes: 1200,
    dependencies: ["Navbar.ts", "Footer.ts", "api.ts"],
  },
  "Navbar.ts": {
    id: "mod-2",
    namaFile: "Navbar.ts",
    ukuranBytes: 850,
    dependencies: ["api.ts"],
  },
  "Footer.ts": {
    id: "mod-3",
    namaFile: "Footer.ts",
    ukuranBytes: 400,
    dependencies: [],
  },
  "api.ts": {
    id: "mod-4",
    namaFile: "api.ts",
    ukuranBytes: 2500,
    dependencies: [],
  },
};

// Fungsi simulasi Bundler: Menghitung total ukuran dan mengeliminasi duplikasi (Deduplication)
export function simulasiBundling(graph: Record<string, Modul>, entryPoint: string): {
  urutanBundel: string[];
  totalUkuranSebelumMinify: number;
  estimasiSetelahMinify: number;
} {
  const modulTerkumpul = new Set<string>();

  function telusuri(namaModul: string) {
    if (!graph[namaModul] || modulTerkumpul.has(namaModul)) return;
    modulTerkumpul.add(namaModul);

    for (const dep of graph[namaModul].dependencies) {
      telusuri(dep);
    }
  }

  telusuri(entryPoint);

  let totalBytes = 0;
  for (const namaModul of modulTerkumpul) {
    totalBytes += graph[namaModul].ukuranBytes;
  }

  // Bundler biasanya mampu mengompresi kode hingga ~40% ukuran aslinya
  const ukuranMinify = Math.round(totalBytes * 0.4);

  return {
    urutanBundel: Array.from(modulTerkumpul),
    totalUkuranSebelumMinify: totalBytes,
    estimasiSetelahMinify: ukuranMinify,
  };
}

console.log("=== SIMULASI CARA KERJA BUNDLER MODERN (VITE / ESBUILD) ===\n");

const hasilBuild = simulasiBundling(dependencyGraph, "index.ts");

console.log("1. Modul yang berhasil di-bundling dari Entry Point 'index.ts':");
hasilBuild.urutanBundel.forEach((m, idx) => {
  console.log(`   ${idx + 1}. [${m}] (${dependencyGraph[m].ukuranBytes} bytes)`);
});

console.log("\n2. Efisiensi Ukuran File Hasil Build:");
console.log(`   Ukuran Mentah Total : ${hasilBuild.totalUkuranSebelumMinify} bytes`);
console.log(`   Ukuran Minified     : ${hasilBuild.estimasiSetelahMinify} bytes`);
const hemat = (
  ((hasilBuild.totalUkuranSebelumMinify - hasilBuild.estimasiSetelahMinify) /
    hasilBuild.totalUkuranSebelumMinify) *
  100
).toFixed(1);
console.log(`   Penghematan Kuota   : ${hemat}% Lebih Cepat! ⚡`);
