// ============================================================================
// 07 · Paradigma Functional Programming — Solusi
// Jalankan: npx ts-node materi/08-modern-typescript-development/07-paradigma-functional-programming/solusi.ts
// ============================================================================

export interface Siswa {
  nama: string;
  kelas: string;
  nilai: number;
  aktif: boolean;
}

const dataSiswa: Siswa[] = [
  { nama: "Ahmad", kelas: "TS-101", nilai: 85, aktif: true },
  { nama: "Bunga", kelas: "TS-101", nilai: 92, aktif: false },
  { nama: "Citra", kelas: "TS-102", nilai: 78, aktif: true },
  { nama: "Doni", kelas: "TS-101", nilai: 88, aktif: true },
  { nama: "Eka", kelas: "TS-101", nilai: 65, aktif: true },
];

// 1. Saring siswa kelas TS-101 yang aktif
const siswaTarget = dataSiswa.filter(
  (s) => s.kelas === "TS-101" && s.aktif === true
);

// 2. Hitung total nilai dengan reduce
const totalNilai = siswaTarget
  .map((s) => s.nilai)
  .reduce((acc, curr) => acc + curr, 0);

// 3. Hitung rata-rata
const rataRata = siswaTarget.length > 0 ? totalNilai / siswaTarget.length : 0;

console.log("=== LAPORAN EVALUASI KELAS (FP) ===");
console.log(`Jumlah Siswa Terpilih : ${siswaTarget.length} siswa`);
console.log(`Rata-rata Nilai        : ${rataRata.toFixed(2)}`);
