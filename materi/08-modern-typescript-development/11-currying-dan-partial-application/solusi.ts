// ============================================================
// 11 · Currying & Partial Application — Solusi
// Jalankan: npm run materi -- materi/08-modern-typescript-development/11-currying-dan-partial-application/solusi.ts
// ============================================================

export const hitungPromoBelanja =
  (potonganKupon: number) =>
  (persenDiskon: number) =>
  (hargaAwal: number): number => {
    const setelahKupon = Math.max(0, hargaAwal - potonganKupon);
    const hargaAkhir = setelahKupon * (1 - persenDiskon);
    return Math.max(0, hargaAkhir);
  };

// Partial Application: Kupon Rp 50.000 dan Diskon 20%
export const promoMemberSpesial = hitungPromoBelanja(50000)(0.2);

console.log("=== PENGUJIAN SOLUSI CURRYING & PARTIAL APPLICATION ===");

const harga1 = 500000;
const harga2 = 40000;

console.log(`1. Barang Rp ${harga1.toLocaleString("id-ID")} dengan Promo Member:`);
console.log(`   Bayar: Rp ${promoMemberSpesial(harga1).toLocaleString("id-ID")}`);

console.log(`\n2. Barang Rp ${harga2.toLocaleString("id-ID")} dengan Promo Member:`);
console.log(`   Bayar: Rp ${promoMemberSpesial(harga2).toLocaleString("id-ID")} (Gratis karena kupon 50k!)`);
