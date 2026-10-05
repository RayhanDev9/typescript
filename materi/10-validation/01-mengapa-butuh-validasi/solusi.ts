// ============================================================
// 01 · Mengapa Butuh Validasi? — Solusi
// Jalankan: npm run materi -- materi/10-validation/01-mengapa-butuh-validasi/solusi.ts
// ============================================================

export interface ProfilSiswa {
  nis: string;
  nama: string;
  umur: number;
}

export function validasiProfilSiswa(input: unknown): ProfilSiswa | null {
  // 1. Cek tipe objek dan bukan null
  if (typeof input !== "object" || input === null) {
    return null;
  }

  const data = input as Record<string, unknown>;

  // 2. Cek NIS
  if (typeof data.nis !== "string" || data.nis.trim().length === 0) {
    return null;
  }

  // 3. Cek Nama
  if (typeof data.nama !== "string" || data.nama.trim().length === 0) {
    return null;
  }

  // 4. Cek Umur
  if (typeof data.umur !== "number" || isNaN(data.umur) || data.umur <= 0) {
    return null;
  }

  return {
    nis: data.nis.trim(),
    nama: data.nama.trim(),
    umur: data.umur,
  };
}

console.log("=== PENGUJIAN SOLUSI RUNTIME VALIDATION DASAR ===");

const data1: unknown = { nis: "2026-001", nama: "Ahmad", umur: 16 };
const data2: unknown = { nis: "", nama: "Budi", umur: 17 };
const data3: unknown = { nis: "2026-003", nama: "Citra", umur: "18" };

console.log("Data 1 (Valid)       :", validasiProfilSiswa(data1));
console.log("Data 2 (NIS Kosong)  :", validasiProfilSiswa(data2));
console.log("Data 3 (Umur Teks)   :", validasiProfilSiswa(data3));
