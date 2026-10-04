// ============================================================
// 02 · ES Modules: Export & Import — Solusi
// Jalankan: npm run materi -- materi/08-modern-typescript-development/02-es-modules-export-import/solusi.ts
// ============================================================

import salam, {
  hitungLuasLingkaran,
  hitungKelilingLingkaran as hitungKeliling,
} from "./modulMatematika";

function cetakLaporanLingkaran(radius: number): void {
  console.log("=== LAPORAN GEOMETRI LINGKARAN ===");
  console.log(salam());
  console.log(`Radius: ${radius} cm`);
  console.log(`Luas: ${hitungLuasLingkaran(radius).toFixed(2)} cm²`);
  console.log(`Keliling: ${hitungKeliling(radius).toFixed(2)} cm`);
  console.log("==================================");
}

// Eksekusi untuk menguji
cetakLaporanLingkaran(14);
