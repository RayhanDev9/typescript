// ============================================================
// 02 · ES Modules: Export & Import — Contoh
// Jalankan: npm run materi -- materi/08-modern-typescript-development/02-es-modules-export-import/contoh.ts
// ============================================================

// 1. Mengimpor Default Export dan Named Export sekaligus
import sambutMatematika, {
  NILAI_PI,
  hitungLuasLingkaran,
  hitungKelilingLingkaran,
} from "./modulMatematika";

// 2. Mengimpor dengan nama alias (menggunakan kata kunci 'as')
import { hitungLuasLingkaran as cariLuas } from "./modulMatematika";

// 3. Mengimpor seluruh isi modul sebagai Namespace Objek (import * as ...)
import * as ModulGeometri from "./modulMatematika";

console.log("=== DEMO ES MODULES (EXPORT & IMPORT) ===\n");

// Memanggil default import
const salam = sambutMatematika();
console.log("1. Default Import Function:");
console.log("  ", salam);

// Menggunakan named export
const radius = 7;
console.log("\n2. Named Import (Konstanta & Fungsi):");
console.log(`   Radius: ${radius} cm`);
console.log(`   Nilai PI yang diimpor: ${NILAI_PI}`);
console.log(`   Luas Lingkaran: ${hitungLuasLingkaran(radius).toFixed(2)} cm²`);
console.log(`   Keliling Lingkaran: ${hitungKelilingLingkaran(radius).toFixed(2)} cm`);

// Menggunakan import alias
console.log("\n3. Import dengan Alias ('as'):");
console.log(`   Cari Luas (Alias): ${cariLuas(10)} cm²`);

// Menggunakan namespace import
console.log("\n4. Namespace Import ('import * as ...'):");
console.log(`   Akses PI via namespace: ${ModulGeometri.NILAI_PI}`);
console.log(`   Akses Luas via namespace: ${ModulGeometri.hitungLuasLingkaran(5)} cm²`);
