// ============================================================
// 04 · CommonJS vs ES Modules — Solusi
// Jalankan: npm run materi -- materi/08-modern-typescript-development/04-commonjs-vs-esm/solusi.ts
// ============================================================

import * as path from "path";

function uraikanLokasiBerkas(lokasiBerkas: string): void {
  const namaFile = path.basename(lokasiBerkas);
  const ekstensi = path.extname(lokasiBerkas);
  const direktori = path.dirname(lokasiBerkas);

  console.log("=== ANALISIS LOKASI BERKAS (ESM) ===");
  console.log(`Lokasi Lengkap : ${lokasiBerkas}`);
  console.log(`Nama File      : ${namaFile}`);
  console.log(`Ekstensi File  : ${ekstensi}`);
  console.log(`Folder Induk   : ${direktori}`);
  console.log("=====================================");
}

// Eksekusi untuk menguji
uraikanLokasiBerkas("src/komponen/Tombol.tsx");
