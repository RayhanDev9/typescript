// ============================================================
// 04 · Execution Context & Call Stack — Solusi
// ============================================================

function hitungFaktorial(n: number): number {
  if (n <= 1) {
    console.log(`Dasar rekursi tercapai (n = ${n}). Mulai melepas tumpukan (Pop)...`);
    return 1;
  }
  console.log(`Push ke Call Stack: hitungFaktorial(${n})`);
  const hasil = n * hitungFaktorial(n - 1);
  console.log(`Pop dari Call Stack: hitungFaktorial(${n}) menghasilkan ${hasil}`);
  return hasil;
}

console.log("=== Menghitung Faktorial 4! ===");
const totalFaktorial = hitungFaktorial(4);
console.log(`Hasil Akhir 4! = ${totalFaktorial}`); // 24
