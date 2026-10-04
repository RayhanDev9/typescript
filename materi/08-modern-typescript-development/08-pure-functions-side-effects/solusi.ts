// ============================================================
// 08 · Pure Functions & Side Effects — Solusi
// Jalankan: npm run materi -- materi/08-modern-typescript-development/08-pure-functions-side-effects/solusi.ts
// ============================================================

// 1. Pure function untuk menambahkan tugas tanpa memutasi array asli
export function tambahTugasPure(
  daftar: readonly string[],
  tugasBaru: string
): string[] {
  // Gunakan spread operator untuk membuat salinan array baru
  return [...daftar, tugasBaru];
}

// 2. Pure function untuk nomor antrean
export function ambilNomorAntreanPure(antreanTerakhir: number): number {
  return antreanTerakhir + 1;
}

console.log("=== PENGUJIAN SOLUSI PURE FUNCTIONS ===\n");

// Pengujian 1: Immutability Array
const antreanAwal: readonly string[] = ["Beli Kertas", "Cetak Buku"];
const antreanBaru = tambahTugasPure(antreanAwal, "Kirim Paket");

console.log("1. Pengujian Penambahan Tugas:");
console.log("   Array Asli Tetap Aman :", antreanAwal);
console.log("   Array Baru Bertambah  :", antreanBaru);

// Pengujian 2: Deterministik Antrean
console.log("\n2. Pengujian Antrean Deterministik:");
console.log("   Input 100 -> Output   :", ambilNomorAntreanPure(100)); // Pasti 101
console.log("   Input 100 -> Output   :", ambilNomorAntreanPure(100)); // Tetap pasti 101 kapan saja
