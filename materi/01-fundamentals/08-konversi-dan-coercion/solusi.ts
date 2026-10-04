// ============================================================
// 08 · Konversi & Coercion — Solusi
// ============================================================

const inputUmur = "17";
const inputTinggi = "165.5";
const inputBerat = "lima puluh";

// TODO 1
console.log(Number(inputUmur) + 5); // 22

// TODO 2
const tinggiCm = Number(inputTinggi);
console.log(tinggiCm / 100); // 1.655

// TODO 3
const beratAngka = Number(inputBerat);
if (Number.isNaN(beratAngka)) {
  console.log("Berat tidak valid!");
} else {
  console.log(`Berat: ${beratAngka} kg`);
}

// TODO 4
console.log("3" + 4 + 5); // a) "345" → "3"+4 = "34", lalu "34"+5 = "345"
console.log(3 + 4 + "5"); // b) "75"  → 3+4 = 7,      lalu 7+"5"   = "75"
