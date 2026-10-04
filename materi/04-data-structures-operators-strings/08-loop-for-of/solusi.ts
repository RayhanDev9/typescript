// ============================================================
// 08 · Loop for...of — Solusi
// ============================================================

const daftarKota: string[] = ["Jakarta", "Bandung", "Surabaya", "Yogyakarta", "Medan"];

// TODO 1
console.log("TODO 1:");
for (const kota of daftarKota) {
  console.log(`Kota: ${kota}`);
}

// TODO 2
console.log("\nTODO 2:");
for (const [index, kota] of daftarKota.entries()) {
  console.log(`${index + 1}. ${kota}`);
}

// TODO 3
console.log("\nTODO 3:");
const daftarSkor: number[] = [85, 40, 90, 30, 95, 100];
let totalSkorLolos = 0;

for (const skor of daftarSkor) {
  if (skor < 50) {
    continue; // Lewati skor di bawah 50
  }
  totalSkorLolos += skor;
}

console.log("Total skor yang lolos (>=50):", totalSkorLolos);
