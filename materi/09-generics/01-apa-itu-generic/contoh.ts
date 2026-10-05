// ============================================================
// 01 · Apa Itu Generic? — Contoh
// Jalankan: npm run materi -- materi/09-generics/01-apa-itu-generic/contoh.ts
// ============================================================

console.log("=== DEMO DASAR KONSEP GENERICS ===\n");

// ----------------------------------------------------------------------------
// 1. CARA LAMA (DUPLIKASI FUNGSI PER TIPE DATA)
// ----------------------------------------------------------------------------
function bungkusAngka(nilai: number): { data: number } {
  return { data: nilai };
}

function bungkusTeks(nilai: string): { data: string } {
  return { data: nilai };
}

// ----------------------------------------------------------------------------
// 2. JALAN PINTAS BERBAHAYA: MENGGUNAKAN 'any'
// ----------------------------------------------------------------------------
function bungkusAny(nilai: any): { data: any } {
  return { data: nilai };
}
const hasilAny = bungkusAny("Belajar TypeScript");
// ❌ bahaya: hasilAny.data tidak memiliki autocomplete string (toLowerCase, slice, dll)

// ----------------------------------------------------------------------------
// 3. CARA MODERN TYPESCRIPT: MENGGUNAKAN GENERIC <T>
// ----------------------------------------------------------------------------
export function bungkusData<T>(nilai: T): { data: T } {
  return { data: nilai };
}

// Penggunaan Generic dengan Type Inference (Otomatis)
const paketAngka = bungkusData(100);
const paketTeks = bungkusData("Kue Cokelat");
const paketBoolean = bungkusData(true);

console.log("1. Paket Angka   :", paketAngka);
console.log("2. Paket Teks    :", paketTeks);
console.log("3. Paket Boolean :", paketBoolean);

// Bukti Type Safety: Autocomplete & Type Checking tetap aktif!
console.log("\nBukti Keamanan Tipe:");
console.log("Huruf kapital:", paketTeks.data.toUpperCase()); // ✅ Autocomplete string bekerja!
console.log("Angka dikali 2:", paketAngka.data * 2);          // ✅ Autocomplete number bekerja!
