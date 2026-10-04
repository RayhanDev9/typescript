// ============================================================
// 05 · Operator Dasar — Solusi
// ============================================================

const beratAndi: number = 78;
const tinggiAndi: number = 1.69;
const beratBudi: number = 92;
const tinggiBudi: number = 1.95;

// TODO 1
const bmiAndi = beratAndi / (tinggiAndi * tinggiAndi);
const bmiBudi = beratBudi / tinggiBudi ** 2; // ** dihitung sebelum /
console.log("BMI Andi:", bmiAndi); // ±27.31
console.log("BMI Budi:", bmiBudi); // ±24.19

// TODO 2
const andiLebihTinggiBMI = bmiAndi > bmiBudi;
console.log("BMI Andi lebih tinggi?", andiLebihTinggiBMI); // true

// TODO 3
let saldo = 50000;
saldo += 25000; // 75000
saldo -= 10000; // 65000
saldo *= 2;     // 130000
console.log("Saldo akhir:", saldo);

// TODO 4
console.log(10 + 2 * 5);   // a) 20
console.log((10 + 2) * 5); // b) 60
console.log(20 % 6);       // c) 2
console.log(3 ** 2 + 1);   // d) 10
