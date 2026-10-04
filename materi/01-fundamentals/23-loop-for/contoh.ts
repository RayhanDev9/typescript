// ============================================================
// 23 · Loop for — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/23-loop-for/contoh.ts
// ============================================================

// --- 1. Perulangan 1 sampai 5 ---
console.log("=== Lari Keliling Lapangan ===");
for (let i: number = 1; i <= 5; i++) {
  console.log(`Putaran ke-${i} selesai 🏃`);
}

// --- 2. Perulangan dengan Kelipatan 2 (Genap) ---
console.log("\n=== Bilangan Genap (2 s/d 10) ===");
for (let genap = 2; genap <= 10; genap += 2) {
  console.log("Angka:", genap);
}

// --- 3. Penggunaan continue (Melewati iterasi tertentu) ---
console.log("\n=== Latihan Beban dengan continue ===");
for (let set = 1; set <= 5; set++) {
  if (set === 3) {
    console.log(`Set ke-${set}: Lewati, minum air dulu 🥤`);
    continue;
  }
  console.log(`Set ke-${set}: Angkat beban 10x 🏋️`);
}

// --- 4. Penggunaan break (Menghentikan paksa perulangan) ---
console.log("\n=== Menghitung Mundur dengan break ===");
for (let hitung = 10; hitung >= 1; hitung--) {
  if (hitung === 5) {
    console.log("Tombol darurat ditekan pada detik ke-5! Batalkan peluncuran 🛑");
    break;
  }
  console.log(`Detik: ${hitung}`);
}
