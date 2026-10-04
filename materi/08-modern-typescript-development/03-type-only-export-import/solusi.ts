// ============================================================================
// 03 · Type-Only Export & Import — Solusi
// Jalankan: npx ts-node materi/08-modern-typescript-development/03-type-only-export-import/solusi.ts
// ============================================================================

import type { Pengguna } from "./modulPengguna";
import { buatPengguna, tampilkanProfil } from "./modulPengguna";

const daftarPengajar: Pengguna[] = [
  buatPengguna("Pak Hendra", "hendra@sekolahdev.id", "guru"),
  buatPengguna("Bu Siti", "siti@sekolahdev.id", "guru"),
];

function cetakDaftarPengajar(daftar: Pengguna[]): void {
  console.log("=== DAFTAR GURU / PENGAJAR ===");
  daftar.forEach((guru, idx) => {
    console.log(`${idx + 1}. ${tampilkanProfil(guru)}`);
  });
  console.log("==============================");
}

// Eksekusi untuk menguji
cetakDaftarPengajar(daftarPengajar);
