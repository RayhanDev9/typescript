// ============================================================
// 12 · Function Composition & Piping — Contoh
// Jalankan: npm run materi -- materi/08-modern-typescript-development/12-function-composition-piping/contoh.ts
// ============================================================

console.log("=== DEMO FUNCTION COMPOSITION & PIPING ===\n");

// ----------------------------------------------------------------------------
// 1. FUNGSI-FUNGSI MURNI KECIL (ATOMIC PURE FUNCTIONS)
// ----------------------------------------------------------------------------
export const buangSpasiUjung = (teks: string): string => teks.trim();

export const ubahHurufKecil = (teks: string): string => teks.toLowerCase();

export const gantiSpasiDenganStrip = (teks: string): string =>
  teks.replace(/\s+/g, "-");

export const buangKarakterKhusus = (teks: string): string =>
  teks.replace(/[^a-z0-9-]/g, "");

export const tambahPrefixArtikel = (slug: string): string =>
  `/artikel/${slug}`;

// ----------------------------------------------------------------------------
// 2. IMPLEMENTASI PIPE TYPE-SAFE (MENGALIR DARI KIRI KE KANAN)
// ----------------------------------------------------------------------------
// Menggunakan generic TypeScript agar tipe data tetap aman di setiap sambungan pipa
export function pipe<A, B, C, D, E>(
  fn1: (a: A) => B,
  fn2: (b: B) => C,
  fn3: (c: C) => D,
  fn4: (d: D) => E
): (input: A) => E {
  return (input: A): E => {
    return fn4(fn3(fn2(fn1(input))));
  };
}

// ----------------------------------------------------------------------------
// 3. MERAKIT PIPELINE PEMBUAT SLUG URL RAMAH SEO
// ----------------------------------------------------------------------------
const buatSlugUrl = pipe(
  buangSpasiUjung,          // 1. "  Belajar TypeScript Modern!  " -> "Belajar TypeScript Modern!"
  ubahHurufKecil,          // 2. "belajar typescript modern!"
  buangKarakterKhusus,     // 3. "belajar typescript modern" (tanda ! dibuang)
  gantiSpasiDenganStrip    // 4. "belajar-typescript-modern"
);

const judulMentah = "  Belajar TypeScript Modern 2026!  ";
const hasilSlug = buatSlugUrl(judulMentah);
const tautanPenuh = tambahPrefixArtikel(hasilSlug);

console.log("Judul Asli   :", `"${judulMentah}"`);
console.log("Hasil Slug   :", hasilSlug);
console.log("URL Lengkap  :", tautanPenuh);
