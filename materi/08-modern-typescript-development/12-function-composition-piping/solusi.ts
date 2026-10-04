// ============================================================
// 12 · Function Composition & Piping — Solusi
// Jalankan: npm run materi -- materi/08-modern-typescript-development/12-function-composition-piping/solusi.ts
// ============================================================

// 1. Implementasi helper generic pipe3
export function pipe3<A, B, C, D>(
  fn1: (a: A) => B,
  fn2: (b: B) => C,
  fn3: (c: C) => D
): (input: A) => D {
  return (input: A): D => fn3(fn2(fn1(input)));
}

// 2. Fungsi-fungsi murni kecil
export const bersihkanAngka = (input: string): number => {
  return Number(input.trim());
};

export const tambahPajak = (nilai: number): number => {
  return nilai * 1.11;
};

export const formatIDR = (nilai: number): string => {
  return `Rp ${Math.round(nilai).toLocaleString("id-ID")}`;
};

// 3. Merakit pipa transformasi
export const prosesHargaTagihan = pipe3(bersihkanAngka, tambahPajak, formatIDR);

console.log("=== PENGUJIAN SOLUSI PIPING 3 LANGKAH ===");
const inputMentah = "  250000  ";
const hasilAkhir = prosesHargaTagihan(inputMentah);

console.log(`Input Mentah : "${inputMentah}"`);
console.log(`Hasil Tagihan: ${hasilAkhir}`);
