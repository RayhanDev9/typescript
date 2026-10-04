// ============================================================
// 16 · Method String Bagian 1 — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/16-method-string-1/contoh.ts
// ============================================================

const namaMaskapai = "Garuda Indonesia Airlines";

// 1. Indeks & Karakter
console.log("=== 1. INDEKS & KARAKTER ===");
console.log("Panjang teks (length) :", namaMaskapai.length);
console.log("Karakter pertama      :", namaMaskapai[0]);
console.log("Posisi kata 'Indo'    :", namaMaskapai.indexOf("Indo"));
console.log("Posisi huruf 'a' awal :", namaMaskapai.indexOf("a"));
console.log("Posisi huruf 'a' akhir:", namaMaskapai.lastIndexOf("a"));

// 2. Pemotongan Teks dengan .slice()
console.log("\n=== 2. PEMOTONGAN TEKS (.slice) ===");
console.log("Kata pertama :", namaMaskapai.slice(0, 6));              // "Garuda"
console.log("Kata kedua   :", namaMaskapai.slice(7, 16));             // "Indonesia"
console.log("Kata terakhir:", namaMaskapai.slice(-8));                 // "Airlines" (indeks negatif)
console.log("Tanpa kata terakhir:", namaMaskapai.slice(0, -9));        // "Garuda Indonesia"

// Fungsi praktis: Mengambil kata pertama dari nama lengkap
function ambilKataPertama(nama: string): string {
  const spasiPertama = nama.indexOf(" ");
  return spasiPertama === -1 ? nama : nama.slice(0, spasiPertama);
}

console.log("Kata pertama dari 'Rayhan Pratama':", ambilKataPertama("Rayhan Pratama"));

// 3. Transformasi Huruf & Pembersihan Spasi
console.log("\n=== 3. TOUPPER, TOLOWER & TRIM ===");
const inputNamaUser = "   rAYhaN praTaMA \n";
const namaBersih = inputNamaUser.trim().toLowerCase();
console.log("Input kotor :", JSON.stringify(inputNamaUser));
console.log("Input bersih:", JSON.stringify(namaBersih));

// 4. Penggantian Teks (.replace & .replaceAll)
console.log("\n=== 4. MENGGANTI TEKS (.replace & .replaceAll) ===");
const jadwal = "Pintu 01 menuju Denpasar. Ulangi, Pintu 01.";
console.log("Asli       :", jadwal);
console.log("Replace    :", jadwal.replace("01", "04"));
console.log("ReplaceAll :", jadwal.replaceAll("01", "04"));

// 5. Pengecekan (.includes, .startsWith, .endsWith)
console.log("\n=== 5. PENGECEKAN STRING ===");
const kodeTiket = "GA-812-JKT";
console.log("Apakah kode GA?          :", kodeTiket.startsWith("GA")); // true
console.log("Apakah tujuan JKT?       :", kodeTiket.endsWith("JKT"));   // true
console.log("Apakah ada angka 812?    :", kodeTiket.includes("812"));   // true
console.log("Apakah penerbangan Lion? :", kodeTiket.startsWith("JT"));  // false
