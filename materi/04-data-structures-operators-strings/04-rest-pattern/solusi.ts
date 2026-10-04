// ============================================================
// 04 · Rest Pattern & Parameters — Solusi
// ============================================================

// TODO 1
const pelari: string[] = ["Budi", "Citra", "Doni", "Eka", "Fani"];
const [emas, perak, ...pesertaLain] = pelari;
console.log("TODO 1 -> Emas:", emas, "| Perak:", perak, "| Lainnya:", pesertaLain);

// TODO 2
const smartphone = {
  merk: "TechPro",
  model: "X-2026",
  ram: "12GB",
  storage: "256GB",
  baterai: "5000mAh",
  os: "Android 15",
};

const { merk, model, ...spesifikasi } = smartphone;
console.log("TODO 2 -> Merk & Model:", { merk, model });
console.log("Spesifikasi:", spesifikasi);

// TODO 3
function kalikanSemua(faktor: number, ...daftarAngka: number[]): number[] {
  const hasil: number[] = [];
  for (const angka of daftarAngka) {
    hasil.push(angka * faktor);
  }
  return hasil;
}

const hasilKali = kalikanSemua(3, 1, 2, 3, 4, 5);
console.log("TODO 3 (Hasil kali x3):", hasilKali); // [3, 6, 9, 12, 15]
