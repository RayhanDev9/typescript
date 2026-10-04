// ============================================================
// 02 · ES Modules: Export & Import — Modul Pembantu (Matematika)
// Jalankan: npm run materi -- materi/08-modern-typescript-development/02-es-modules-export-import/modulMatematika.ts
// ============================================================

// 1. Named Export
export const NILAI_PI: number = 3.14159;

export function hitungLuasLingkaran(radius: number): number {
  return NILAI_PI * radius * radius;
}

export function hitungKelilingLingkaran(radius: number): number {
  return 2 * NILAI_PI * radius;
}

// 2. Default Export (Satu per file)
export default function sambutMatematika(): string {
  return "Kalkulator Geometri Siap Digunakan! 📐";
}
