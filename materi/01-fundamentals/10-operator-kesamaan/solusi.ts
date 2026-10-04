// ============================================================
// 10 · Operator Kesamaan — Solusi
// ============================================================

// TODO 1
const username: string = "admin";
const inputPin: string = "1234";
const pin = Number(inputPin);

if (username === "admin") {
  if (pin === 1234) {
    console.log("Login berhasil");
  } else {
    console.log("PIN salah");
  }
} else {
  console.log("Username tidak ditemukan");
}

// TODO 2
const hari: string = "senin";
if (hari !== "minggu") {
  console.log("Bukan hari Minggu, waktunya sekolah!");
}

// TODO 3
const jumlahStok: number = 10;
const inputStok: string = "10";
console.log(jumlahStok === Number(inputStok)); // true
