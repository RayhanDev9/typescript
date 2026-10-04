// ============================================================
// 25 · Loop while — Solusi
// ============================================================

// TODO 1
let saldoAwal: number = 1000000;
let bulan: number = 0;

console.log("=== Simulasi Pertumbuhan Tabungan ===");
while (saldoAwal < 2000000) {
  bulan++;
  saldoAwal += saldoAwal * 0.05; // bunga 5%
  console.log(`Bulan ${bulan}: Rp ${Math.round(saldoAwal).toLocaleString("id-ID")}`);
}

console.log(`Target tercapai setelah ${bulan} bulan! Saldo akhir: Rp ${Math.round(saldoAwal).toLocaleString("id-ID")}`);

// TODO 2
console.log("\n=== Simulasi Tebak Angka ===");
const angkaRahasia: number = 7;
let tebakan: number = Math.trunc(Math.random() * 10) + 1;
let rondeTebakan: number = 1;

while (tebakan !== angkaRahasia) {
  console.log(`Ronde ${rondeTebakan}: Menebak ${tebakan} ❌ (Salah)`);
  tebakan = Math.trunc(Math.random() * 10) + 1;
  rondeTebakan++;
}

console.log(`Ronde ${rondeTebakan}: Menebak ${tebakan} ✅ (Tepat! Angka rahasia adalah ${angkaRahasia})`);
