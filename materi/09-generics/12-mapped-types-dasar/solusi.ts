// ============================================================
// 12 · Mapped Types Dasar — Solusi
// Jalankan: npm run materi -- materi/09-generics/12-mapped-types-dasar/solusi.ts
// ============================================================

export interface FormPendaftaran {
  nama: string;
  email: string;
  usia: number;
}

// 1. Mapped Type generic untuk mencatat boolean status tiap field
export type StatusValidasiField<T> = {
  [K in keyof T]: boolean;
};

// 2. Fungsi pemeriksa validasi
export function validasiForm(data: FormPendaftaran): StatusValidasiField<FormPendaftaran> {
  return {
    nama: data.nama.trim().length >= 3,
    email: data.email.includes("@"),
    usia: data.usia >= 17,
  };
}

console.log("=== PENGUJIAN SOLUSI MAPPED TYPES DASAR ===");

const inputForm1: FormPendaftaran = {
  nama: "Al", // < 3 karakter (false)
  email: "ali@gmail.com", // Valid (true)
  usia: 15, // < 17 tahun (false)
};

const hasilValidasi1 = validasiForm(inputForm1);
console.log("1. Input 1 (Kurang Syarat):");
console.log(hasilValidasi1);

const inputForm2: FormPendaftaran = {
  nama: "Rayhan Dwi",
  email: "rayhan@sekolahdev.id",
  usia: 22,
};

const hasilValidasi2 = validasiForm(inputForm2);
console.log("\n2. Input 2 (Memenuhi Syarat Lengkap):");
console.log(hasilValidasi2);
