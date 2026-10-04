// ============================================================================
// 07 · Paradigma Functional Programming — Latihan
// Jalankan: npx ts-node materi/08-modern-typescript-development/07-paradigma-functional-programming/latihan.ts
// ============================================================================

export interface Siswa {
  nama: string;
  kelas: string;
  nilai: number;
  aktif: boolean;
}

const dataSiswa: Siswa[] = [
  { nama: "Ahmad", kelas: "TS-101", nilai: 85, aktif: true },
  { nama: "Bunga", kelas: "TS-101", nilai: 92, aktif: false }, // Tidak aktif
  { nama: "Citra", kelas: "TS-102", nilai: 78, aktif: true },
  { nama: "Doni", kelas: "TS-101", nilai: 88, aktif: true },
  { nama: "Eka", kelas: "TS-101", nilai: 65, aktif: true },
];

/**
 * 🎯 TUGAS:
 * Ubah cara berpikir imperatif menjadi fungsional!
 * 1. Saring HANYA siswa yang berada di kelas "TS-101" dan berstatus `aktif: true`.
 * 2. Hitung nilai RATA-RATA dari siswa yang tersaring tersebut menggunakan FP (.filter, .map, .reduce).
 *    (Catatan: TIDAK BOLEH menggunakan perulangan for / while atau kata kunci `let`).
 * 3. Tampilkan hasil rata-rata nilai tersebut.
 */

// Tulis kode deklaratif / fungsional Anda di bawah ini:




// Eksekusi untuk menguji
