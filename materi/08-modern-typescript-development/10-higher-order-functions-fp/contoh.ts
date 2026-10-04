// ============================================================
// 10 · Higher-Order Functions dalam FP — Contoh
// Jalankan: npm run materi -- materi/08-modern-typescript-development/10-higher-order-functions-fp/contoh.ts
// ============================================================

console.log("=== DEMO HIGHER-ORDER FUNCTIONS (HOF) ===\n");

// ----------------------------------------------------------------------------
// 1. HOF YANG MENERIMA FUNGSI (Function Wrapper / Benchmarking)
// ----------------------------------------------------------------------------
export function ukurDurasi<T>(label: string, operasi: () => T): T {
  const mulai = performance.now();
  const hasil = operasi();
  const selesai = performance.now();
  console.log(`⏱️ [${label}] Selesai dalam ${(selesai - mulai).toFixed(4)} ms`);
  return hasil;
}

// Menguji HOF Wrapper
const hasilHitung = ukurDurasi("Perhitungan 1 Juta Angka", () => {
  let total = 0;
  for (let i = 0; i < 1_000_000; i++) {
    total += i;
  }
  return total;
});
console.log(`   Hasil: ${hasilHitung}\n`);

// ----------------------------------------------------------------------------
// 2. HOF YANG MENGEMBALIKAN FUNGSI (Function Factory / Generator)
// ----------------------------------------------------------------------------
export function buatPemberiDiskon(
  persenDiskon: number
): (hargaAsli: number) => number {
  const pengurang = persenDiskon / 100;
  return (hargaAsli: number): number => {
    return hargaAsli - hargaAsli * pengurang;
  };
}

// Membuat fungsi-fungsi spesifik dari satu template factory
const diskonMember = buatPemberiDiskon(10); // Diskon 10%
const diskonFlashSale = buatPemberiDiskon(50); // Diskon 50%

const hargaKamera = 5000000;
console.log("2. Function Factory (Diskon Generator):");
console.log(`   Harga Normal   : Rp ${hargaKamera.toLocaleString("id-ID")}`);
console.log(`   Member (10%)   : Rp ${diskonMember(hargaKamera).toLocaleString("id-ID")}`);
console.log(`   FlashSale (50%): Rp ${diskonFlashSale(hargaKamera).toLocaleString("id-ID")}`);

// ----------------------------------------------------------------------------
// 3. HOF PREDICATE GENERATOR (Untuk Filter Array yang Dinamis)
// ----------------------------------------------------------------------------
export function batasMinimal(min: number): (nilai: number) => boolean {
  return (nilai: number) => nilai >= min;
}

const nilaiUjian = [45, 60, 75, 82, 90, 55, 68];
const lulusKKM = nilaiUjian.filter(batasMinimal(70));

console.log("\n3. Predicate Generator:");
console.log("   Semua Nilai  :", nilaiUjian);
console.log("   Lulus (>= 70):", lulusKKM);
