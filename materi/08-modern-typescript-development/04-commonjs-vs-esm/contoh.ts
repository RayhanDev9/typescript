// ============================================================================
// 04 · CommonJS vs ES Modules — Contoh
// Jalankan: npx ts-node materi/08-modern-typescript-development/04-commonjs-vs-esm/contoh.ts
// ============================================================================

// 1. Mengimpor modul bawaan Node.js menggunakan sintaks ES Modules modern
// (Berkat opsi `"esModuleInterop": true` di tsconfig.json)
import * as path from "path";

console.log("=== DEMO COMMONJS VS ES MODULES ===\n");

// Menggunakan modul sistem
const contohPath = path.join("proyek", "src", "index.ts");
console.log("1. Penggunaan Modul Bawaan Sistem (via ESM import):");
console.log(`   Hasil Path.join: ${contohPath}`);

// 2. Simulasi Objek Ekspor Gaya CommonJS (Dahulu)
const modulCJS = {
  nama: "Modul Kasir CJS (Simulasi)",
  hitungTotal: (harga: number, pajak: number) => harga + harga * pajak,
};

// 3. Modul Gaya ESM (Modern)
export interface KonfigurasiModul {
  namaAplikasi: string;
  versi: string;
  mode: "development" | "production";
}

export const konfigurasiSekarang: KonfigurasiModul = {
  namaAplikasi: "Belajar TypeScript Modern",
  versi: "2.5.0",
  mode: "development",
};

export function cetakInfoModul(config: KonfigurasiModul): void {
  console.log("\n2. Metadata Modul ES Modern:");
  console.log(`   Nama Aplikasi : ${config.namaAplikasi}`);
  console.log(`   Versi         : v${config.versi}`);
  console.log(`   Mode          : ${config.mode}`);
}

cetakInfoModul(konfigurasiSekarang);

// 4. Dynamic Import (Impor Dinamis saat runtime di ES Modules)
async function muatModulDinamis(): Promise<void> {
  console.log("\n3. Dynamic Import (Fitur Modern ESM):");
  // ESM mendukung import() asinkron jika kita ingin memuat modul saat dibutuhkan saja (Lazy loading)
  const os = await import("os");
  console.log(`   Arsitektur CPU : ${os.arch()}`);
  console.log(`   Platform OS    : ${os.platform()}`);
}

muatModulDinamis();
