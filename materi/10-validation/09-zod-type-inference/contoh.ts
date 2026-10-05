// ============================================================
// 09 · Zod Type Inference — Contoh
// Jalankan: npm run materi -- materi/10-validation/09-zod-type-inference/contoh.ts
// ============================================================

import { z } from "zod";

console.log("=== DEMO ZOD TYPE INFERENCE (z.infer) ===\n");

// ----------------------------------------------------------------------------
// 1. SATU SUMBER KEBENARAN: DEFINISI SKEMA ZOD
// ----------------------------------------------------------------------------
export const SkemaAkunPengguna = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  levelAkses: z.enum(["user", "moderator", "admin"]),
  terverifikasi: z.boolean(),
});

// ----------------------------------------------------------------------------
// 2. EKSTRAKSI TIPE OTOMATIS MENGGUNAKAN z.infer
// ----------------------------------------------------------------------------
// Tidak perlu menulis 'interface AkunPengguna' terpisah secara manual!
export type AkunPengguna = z.infer<typeof SkemaAkunPengguna>;

// ----------------------------------------------------------------------------
// 3. MENGGUNAKAN TIPE HASIL INFERENSI PADA FUNGSI SISTEM
// ----------------------------------------------------------------------------
export function buatProfilBadge(akun: AkunPengguna): string {
  // Autocomplete TypeScript langsung aktif untuk semua properti:
  const statusBadge = akun.terverifikasi ? "✅ Terverifikasi" : "⏳ Menunggu";
  return `[${akun.levelAkses.toUpperCase()}] ${akun.username} (${akun.email}) - ${statusBadge}`;
}

// Simulasi alur kerja: Parsing data mentah luar -> Dioper ke fungsi internal
const inputMentahDariApi: unknown = {
  id: "USR-7701",
  username: "rayhandev",
  email: "rayhan@sekolahdev.id",
  levelAkses: "admin",
  terverifikasi: true,
};

const hasilValidasi = SkemaAkunPengguna.safeParse(inputMentahDariApi);

if (hasilValidasi.success) {
  // hasilValidasi.data otomatis bertipe 'AkunPengguna'
  const dataAkun: AkunPengguna = hasilValidasi.data;

  console.log("1. Data Berhasil Diparsing:");
  console.log("  ", buatProfilBadge(dataAkun));
} else {
  console.log("Validasi Gagal!");
}
