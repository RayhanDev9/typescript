// ============================================================
// 12 · Set — Solusi
// ============================================================

// TODO 1
const kategoriBelanja: string[] = [
  "Elektronik",
  "Pakaian",
  "Makanan",
  "Elektronik",
  "Makanan",
  "Buku",
  "Pakaian",
];

const kategoriSet = new Set<string>(kategoriBelanja);
console.log("TODO 1 -> Jumlah kategori unik:", kategoriSet.size, kategoriSet);

// TODO 2
console.log("TODO 2 -> Ada Otomotif?   :", kategoriSet.has("Otomotif"));  // false
console.log("TODO 2 -> Ada Elektronik? :", kategoriSet.has("Elektronik")); // true

// TODO 3
kategoriSet.add("Kecantikan");
kategoriSet.delete("Buku");
console.log("TODO 3 -> Isi kategoriSet setelah update:", kategoriSet);

// TODO 4
function ambilTagUnik(tags: string[]): string[] {
  return [...new Set(tags)];
}

const tagHasil = ambilTagUnik(["typescript", "javascript", "react", "typescript", "react"]);
console.log("TODO 4 -> Tag Unik:", tagHasil);
