// ============================================================
// 17 · Method String Bagian 2 — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/17-method-string-2/contoh.ts
// ============================================================

// 1. Memecah String (.split) dan Menggabungkan (.join)
const menuPesanan = "Pizza Margherita+Pasta Carbonara+Risotto Jamur";
const arrayPesanan = menuPesanan.split("+");

console.log("=== 1. SPLIT DAN JOIN ===");
console.log("Hasil Split (Array):", arrayPesanan);

const teksStruk = arrayPesanan.join(" dan ");
console.log("Hasil Join (String):", teksStruk);

// 2. Title Case: Kapitalisasi Setiap Kata
function formatJudulBuku(judul: string): string {
  const kataArray = judul.toLowerCase().split(" ");
  const kataHasil: string[] = [];

  for (const kata of kataArray) {
    if (kata.length === 0) continue;
    // Huruf pertama kapital + sisa kata
    kataHasil.push(kata[0].toUpperCase() + kata.slice(1));
  }

  return kataHasil.join(" ");
}

console.log("\n=== 2. CAPITALIZE WORDS ===");
console.log(formatJudulBuku("panduan lengkap typescript untuk pemula"));

// 3. Padding String (.padStart & .padEnd)
console.log("\n=== 3. PADDING STRING ===");
const waktuMenit = "5";
console.log("Format menit (2 digit) :", waktuMenit.padStart(2, "0")); // "05"

// Masking Nomor Kartu Kredit
function samarkanKartu(noKartu: string): string {
  const empatDigitTerakhir = noKartu.slice(-4);
  return empatDigitTerakhir.padStart(noKartu.length, "*");
}

console.log("Kartu Kredit Asli : 1234567890123456");
console.log("Kartu Disamarkan  :", samarkanKartu("1234567890123456"));
console.log("Rekening Pendek   :", samarkanKartu("987654321"));

// 4. Mengulang Teks (.repeat)
console.log("\n=== 4. MENGULANG TEKS (.repeat) ===");
const pesawat = (jumlah: number) => {
  console.log(`Penerbangan tertunda ${"✈️ ".repeat(jumlah)}`);
};
pesawat(4);

// Format tabel sederhana dengan padding
console.log("\n=== 5. FORMAT STRUK BELANJA ===");
const daftarBelanja = [
  ["Pizza Margherita", 75000],
  ["Es Teh Manis", 10000],
  ["Tiramisu", 35000],
] as const;

console.log("ITEM".padEnd(20) + "HARGA".padStart(12));
console.log("-".repeat(32));
for (const [item, harga] of daftarBelanja) {
  console.log(item.padEnd(20) + `Rp${harga.toLocaleString("id-ID")}`.padStart(12));
}
console.log("-".repeat(32));
