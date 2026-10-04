// ============================================================
// 07 · if / else — Solusi
// ============================================================

// TODO 1
const bmi: number = 27.3;
let kategori: string;

if (bmi < 18.5) {
  kategori = "Kurus";
} else if (bmi < 25) {
  kategori = "Normal";
} else if (bmi < 30) {
  kategori = "Gemuk";
} else {
  kategori = "Obesitas";
}
console.log(`BMI kamu ${bmi} → ${kategori}`);

// TODO 2
const totalBelanja: number = 350000;
let diskon: number;

if (totalBelanja >= 500000) {
  diskon = totalBelanja * 0.2;
} else if (totalBelanja >= 200000) {
  diskon = totalBelanja * 0.1;
} else {
  diskon = 0;
}
console.log(`Diskon: Rp ${diskon}`);                         // Rp 35000
console.log(`Total bayar: Rp ${totalBelanja - diskon}`);     // Rp 315000

// TODO 3
const suhu: number = 31;
let saran: string;
if (suhu > 30) {
  saran = "Bawa minum yang banyak!";
} else {
  saran = "Cuaca nyaman, selamat beraktivitas!";
}
console.log(saran);
