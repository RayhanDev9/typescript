// ============================================================
// 06 · Keyof & Lookup Types — Solusi
// Jalankan: npm run materi -- materi/09-generics/06-keyof-dan-lookup-types/solusi.ts
// ============================================================

export function petikProperti<T, K extends keyof T>(daftar: T[], kunci: K): T[K][] {
  return daftar.map((item) => item[kunci]);
}

interface SiswaUjian {
  id: number;
  nama: string;
  skor: number;
  grade: "A" | "B" | "C";
}

const dataKelas: SiswaUjian[] = [
  { id: 1, nama: "Budi Santoso", skor: 85, grade: "A" },
  { id: 2, nama: "Dewi Lestari", skor: 92, grade: "A" },
  { id: 3, nama: "Citra Amelia", skor: 74, grade: "B" },
];

console.log("=== PENGUJIAN SOLUSI PLUCK PROPERTY DENGAN KEYOF ===");

// 1. Ekstrak nama siswa (Tipe otomatis: string[])
const semuaNama = petikProperti(dataKelas, "nama");
console.log("1. Seluruh Nama Siswa :", semuaNama);

// 2. Ekstrak skor ujian (Tipe otomatis: number[])
const semuaSkor = petikProperti(dataKelas, "skor");
console.log("2. Seluruh Skor Ujian :", semuaSkor);

// 3. Ekstrak grade (Tipe otomatis: ("A" | "B" | "C")[])
const semuaGrade = petikProperti(dataKelas, "grade");
console.log("3. Seluruh Grade Siswa:", semuaGrade);
