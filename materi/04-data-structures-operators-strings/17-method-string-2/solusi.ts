// ============================================================
// 17 · Method String Bagian 2 — Solusi
// ============================================================

// TODO 1
const csvData = "Laptop;Mouse;Keyboard;Monitor;Headset";
const arrayProduk = csvData.split(";");
const teksProduk = arrayProduk.join(", ");
console.log("TODO 1 ->", teksProduk);

// TODO 2
function formatNomorHp(nomor: string): string {
  const empatAkhir = nomor.slice(-4);
  return empatAkhir.padStart(nomor.length, "*");
}

console.log("TODO 2 ->", formatNomorHp("081234567890"));

// TODO 3
function buatGarisPemisah(panjang: number, karakter: string = "="): string {
  return karakter.repeat(panjang);
}

console.log("TODO 3 ->", buatGarisPemisah(25, "-"));

// TODO 4
function ubahKeTitleCase(kalimat: string): string {
  const kataArray = kalimat.toLowerCase().split(" ");
  const hasil: string[] = [];

  for (const kata of kataArray) {
    if (kata.length === 0) continue;
    hasil.push(kata[0].toUpperCase() + kata.slice(1));
  }

  return hasil.join(" ");
}

console.log("TODO 4 ->", ubahKeTitleCase("bELaJar TyPeScriPT mOdErn"));
