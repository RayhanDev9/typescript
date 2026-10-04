// ============================================================================
// 03 · Type-Only Export & Import — Contoh
// Jalankan: npx ts-node materi/08-modern-typescript-development/03-type-only-export-import/contoh.ts
// ============================================================================

// 1. Mengimpor HANYA Tipe (import type)
import type { StatusLogin } from "./modulPengguna";

// 2. Mengimpor Fungsi Runtime DAN Tipe Sekaligus (Inline type import)
import { buatPengguna, tampilkanProfil, type Pengguna } from "./modulPengguna";

console.log("=== DEMO TYPE-ONLY EXPORT & IMPORT ===\n");

// Menggunakan tipe yang diimpor sebagai anotasi tipe
const statusAwal: StatusLogin = "berhasil";
console.log(`Status sesi login: ${statusAwal}`);

// Menggunakan fungsi runtime untuk membuat objek yang bertipe Pengguna
const akunAdmin: Pengguna = buatPengguna(
  "Rayhan Dwi",
  "rayhan@sekolahdev.id",
  "admin"
);

const akunSiswa: Pengguna = buatPengguna(
  "Budi Santoso",
  "budi@siswa.id",
  "siswa"
);

// Menampilkan hasil
console.log("\nData Pengguna Terdaftar:");
console.log("1.", tampilkanProfil(akunAdmin));
console.log("2.", tampilkanProfil(akunSiswa));

/**
 * 💡 CATATAN PENTING:
 * Jika file ini dikompilasi menjadi JavaScript, kata kunci `type Pengguna` dan `import type { StatusLogin }`
 * akan terhapus sepenuhnya tanpa meninggalkan jejak satu byte pun di kode JS!
 */
