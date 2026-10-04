// ============================================================
// 13 · Map: Dasar — Solusi
// ============================================================

// TODO 1
const kamusIstilah = new Map<string, string>();
kamusIstilah
  .set("TS", "TypeScript")
  .set("JS", "JavaScript")
  .set("OOP", "Object-Oriented Programming");

console.log("TODO 1 (Kamus):", kamusIstilah);

// TODO 2
console.log("TODO 2:");
console.log("Arti TS :", kamusIstilah.get("TS"));
console.log("Arti JS :", kamusIstilah.get("JS"));

// TODO 3
const kuis = new Map<any, any>();
kuis
  .set("pertanyaan", "Berapa hasil 5 + 5?")
  .set(1, "8")
  .set(2, "10")
  .set(3, "12")
  .set("jawabanBenar", 2)
  .set(true, "Selamat! Jawabanmu Benar! 🎉")
  .set(false, "Jawabanmu Salah, coba lagi! 😢");

console.log("\nTODO 3 (Kuis Terbuat):", kuis.get("pertanyaan"));
console.log(`1. ${kuis.get(1)}`);
console.log(`2. ${kuis.get(2)}`);
console.log(`3. ${kuis.get(3)}`);

// TODO 4
const jawabanUser = 2;
const isBenar = jawabanUser === kuis.get("jawabanBenar");
console.log("\nTODO 4 (Hasil Kuis):", kuis.get(isBenar));
