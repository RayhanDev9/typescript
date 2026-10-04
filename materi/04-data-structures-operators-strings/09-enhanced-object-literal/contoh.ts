// ============================================================
// 09 · Enhanced Object Literal — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/09-enhanced-object-literal/contoh.ts
// ============================================================

// 1. Shorthand Properties
const namaResto = "Trattoria Gourmet";
const kota = "Surabaya";
const rating = 4.9;

const infoDasar = {
  namaResto, // sama dengan namaResto: namaResto
  kota,      // sama dengan kota: kota
  rating,
};

console.log("=== 1. SHORTHAND PROPERTIES ===");
console.log(infoDasar);

// 2. Computed Property Names (Kunci Dinamis)
const hariKerja = ["senin", "selasa", "rabu", "kamis", "jumat"];

const jamBuka = {
  [hariKerja[0]]: { buka: 9, tutup: 21 },
  [hariKerja[4]]: { buka: 9, tutup: 23 },
  [`hari_libur_${new Date().getFullYear()}`]: { buka: 12, tutup: 20 },
};

console.log("\n=== 2. COMPUTED PROPERTY NAMES ===");
console.log(jamBuka);

// 3. Method Shorthand
const restoLengkap = {
  ...infoDasar,
  jamBuka,

  // Method shorthand (tanpa ': function')
  pesanMakanan(pembuka: string, utama: string): void {
    console.log(`[PESANAN] Memasak ${pembuka} dan ${utama}...`);
  },

  hitungTagihan(harga: number, pajakPersen: number = 10): number {
    return harga + (harga * pajakPersen) / 100;
  },
};

console.log("\n=== 3. METHOD SHORTHAND ===");
restoLengkap.pesanMakanan("Bruschetta", "Spaghetti");
const total = restoLengkap.hitungTagihan(150000);
console.log(`Total tagihan (+pajak 10%): Rp${total.toLocaleString("id-ID")}`);
