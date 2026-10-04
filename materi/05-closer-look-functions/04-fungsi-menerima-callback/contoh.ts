// ============================================================
// 04 · Fungsi Menerima Callback — Contoh
// Jalankan: npm run materi -- materi/05-closer-look-functions/04-fungsi-menerima-callback/contoh.ts
// ============================================================

interface Penerbangan {
  kode: string;
  tujuan: string;
  harga: number;
  tersedia: boolean;
}

const daftarPenerbangan: Penerbangan[] = [
  { kode: "GA-101", tujuan: "Bali", harga: 1500000, tersedia: true },
  { kode: "JT-204", tujuan: "Surabaya", harga: 800000, tersedia: false },
  { kode: "QZ-305", tujuan: "Singapura", harga: 2200000, tersedia: true },
  { kode: "ID-402", tujuan: "Medan", harga: 1200000, tersedia: true },
];

// Type Alias untuk Callback Filter
type FilterPenerbanganFn = (p: Penerbangan) => boolean;

// Higher-Order Function: Mesin penyaring tiket
function cariPenerbangan(
  daftar: Penerbangan[],
  kriteria: FilterPenerbanganFn
): Penerbangan[] {
  const hasil: Penerbangan[] = [];
  for (const item of daftar) {
    if (kriteria(item)) {
      hasil.push(item);
    }
  }
  return hasil;
}

console.log("=== 1. FILTER TIKET TERSEDIA ===");
const tiketTersedia = cariPenerbangan(daftarPenerbangan, (p) => p.tersedia);
console.log(tiketTersedia);

console.log("\n=== 2. FILTER TIKET EKONOMIS (< Rp1.500.000) ===");
const tiketMurah = cariPenerbangan(
  daftarPenerbangan,
  (p) => p.harga < 1500000 && p.tersedia
);
console.log(tiketMurah);

console.log("\n=== 3. FILTER TIKET TUJUAN LUAR NEGERI ===");
const tiketInternasional = cariPenerbangan(
  daftarPenerbangan,
  (p) => p.tujuan === "Singapura"
);
console.log(tiketInternasional);
