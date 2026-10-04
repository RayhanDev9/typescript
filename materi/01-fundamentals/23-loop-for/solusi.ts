// ============================================================
// 23 · Loop for — Solusi
// ============================================================

// TODO 1
console.log("=== Tabel Perkalian 7 ===");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// TODO 2
console.log("\n=== Angka Ganjil 1-20 ===");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    continue; // lewati angka genap
  }
  console.log(i);
}

// TODO 3
let total: number = 0;
for (let i = 1; i <= 100; i++) {
  total += i;
}
console.log("\nTotal penjumlahan 1 s/d 100 =", total); // 5050
