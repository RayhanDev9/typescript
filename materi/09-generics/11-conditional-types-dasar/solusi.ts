// ============================================================
// 11 · Conditional Types Dasar — Solusi
// Jalankan: npm run materi -- materi/09-generics/11-conditional-types-dasar/solusi.ts
// ============================================================

export type TipePenyimpan<T> = T extends string ? T[] : Set<T>;

export function simpanKoleksi<T>(input: T): TipePenyimpan<T> {
  if (typeof input === "string") {
    return [input] as TipePenyimpan<T>;
  }
  return new Set([input]) as TipePenyimpan<T>;
}

console.log("=== PENGUJIAN SOLUSI CONDITIONAL TYPES DASAR ===");

// 1. Pengujian dengan String (Output: Array string[])
const hasilTeks = simpanKoleksi("TypeScript");
console.log("1. Input String  -> Hasil Array :", hasilTeks);
console.log(`   Panjang Array : ${hasilTeks.length} elemen`);

// 2. Pengujian dengan Number (Output: Set<number>)
const hasilAngka = simpanKoleksi(42);
console.log("\n2. Input Number  -> Hasil Set   :", hasilAngka);
console.log(`   Apakah memiliki angka 42? ${hasilAngka.has(42)}`);
