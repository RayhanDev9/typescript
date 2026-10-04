// ============================================================
// 08 · Loop for...of — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/08-loop-for-of/contoh.ts
// ============================================================

const daftarMenu = [
  "Pizza Margherita",
  "Pasta Aglio Olio",
  "Risotto Jamur",
  "Tiramisu",
  "Gelato Cokelat",
];

console.log("=== 1. LOOPING SEDERHANA DENGAN FOR...OF ===");
for (const menu of daftarMenu) {
  console.log("Menu:", menu);
}

console.log("\n=== 2. MENGGUNAKAN .entries() DAN DESTRUCTURING ===");
// entries() mengembalikan pasangan [indeks, nilai]
for (const [index, namaMenu] of daftarMenu.entries()) {
  console.log(`Nomor ${index + 1}. ${namaMenu}`);
}

console.log("\n=== 3. KONTROL LOOP DENGAN BREAK DAN CONTINUE ===");
console.log("Mencari hidangan penutup (berhenti saat menemukan Tiramisu):");

for (const menu of daftarMenu) {
  if (menu === "Pasta Aglio Olio") {
    // Lewati pasta
    continue;
  }

  console.log("Mengecek:", menu);

  if (menu === "Tiramisu") {
    console.log("-> Ketemu hidangan penutup! Hentikan pencarian.");
    break;
  }
}

console.log("\n=== 4. FOR...OF PADA STRING ===");
const kataKunci = "KODING";
for (const huruf of kataKunci) {
  console.log("Karakter:", huruf);
}
