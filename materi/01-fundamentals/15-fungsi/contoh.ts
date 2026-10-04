// ============================================================
// 15 · Fungsi — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/15-fungsi/contoh.ts
// ============================================================

// --- 1. Fungsi Penghitung Usia (Mengembalikan number) ---
function hitungUmur(tahunLahir: number): number {
  const tahunSekarang = 2026;
  return tahunSekarang - tahunLahir;
}

const umurRian = hitungUmur(2001);
const umurMaya = hitungUmur(2005);

console.log(`Umur Rian: ${umurRian} tahun`);
console.log(`Umur Maya: ${umurMaya} tahun`);

// --- 2. Fungsi Pengolah Teks (Mengembalikan string) ---
function buatJus(apel: number, jeruk: number): string {
  const total = apel + jeruk;
  return `Jus nikmat dari ${apel} apel dan ${jeruk} jeruk (total ${total} buah).`;
}

console.log(buatJus(2, 3));
console.log(buatJus(4, 1));

// --- 3. Fungsi Tanpa Return (Tipe void) ---
function cetakGarisPemisah(simbol: string, panjang: number): void {
  console.log(simbol.repeat(panjang));
}

cetakGarisPemisah("=", 35);
cetakGarisPemisah("*", 20);

// ❌ Coba hapus komentar baris di bawah untuk melihat error TypeScript:
// hitungUmur("dua ribu satu"); // Argument of type 'string' is not assignable to parameter of type 'number'.
// hitungUmur(2001, 2026);       // Expected 1 arguments, but got 2.
