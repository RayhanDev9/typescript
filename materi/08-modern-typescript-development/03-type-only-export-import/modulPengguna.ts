// ============================================================================
// Modul Pembantu: modulPengguna.ts
// Menyediakan tipe data (Type / Interface) dan fungsi runtime
// ============================================================================

// 1. Tipe Data (Hanya ada di waktu kompilasi / Type-only)
export interface Pengguna {
  id: string;
  nama: string;
  email: string;
  peran: "admin" | "siswa" | "guru";
}

export type StatusLogin = "berhasil" | "gagal" | "menunggu";

// 2. Fungsi Runtime (Akan dikompilasi menjadi kode JavaScript nyata)
export function buatPengguna(nama: string, email: string, peran: Pengguna["peran"]): Pengguna {
  return {
    id: `USR-${Math.floor(Math.random() * 10000)}`,
    nama,
    email,
    peran,
  };
}

export function tampilkanProfil(p: Pengguna): string {
  return `[${p.peran.toUpperCase()}] ${p.nama} (${p.email}) - ID: ${p.id}`;
}
