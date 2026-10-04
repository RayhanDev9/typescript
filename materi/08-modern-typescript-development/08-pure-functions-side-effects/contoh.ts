// ============================================================
// 08 · Pure Functions & Side Effects — Contoh
// Jalankan: npm run materi -- materi/08-modern-typescript-development/08-pure-functions-side-effects/contoh.ts
// ============================================================

export interface Barang {
  readonly id: string;
  readonly nama: string;
  readonly harga: number;
}

// ----------------------------------------------------------------------------
// 1. KASUS IMPURE FUNCTION (Fungsi yang tidak murni & memiliki efek samping)
// ----------------------------------------------------------------------------
let diskonGlobal = 0.1; // Variabel luar (state eksternal)

function hitungDiskonImpure(harga: number): number {
  // Bergantung pada variabel luar yang nilainya bisa diubah pihak lain kapan saja
  return harga - harga * diskonGlobal;
}

// ----------------------------------------------------------------------------
// 2. KASUS PURE FUNCTION (Murni, deterministik, tanpa efek samping)
// ----------------------------------------------------------------------------
export function hitungDiskonPure(harga: number, persentaseDiskon: number): number {
  // Semua yang dibutuhkan masuk lewat parameter input
  return harga - harga * persentaseDiskon;
}

// ----------------------------------------------------------------------------
// 3. PENCEGAHAN MUTASI PARAMETER MENGGUNAKAN 'readonly' DI TYPESCRIPT
// ----------------------------------------------------------------------------
export function beriPotonganHarga(
  barang: Readonly<Barang>,
  potonganNominal: number
): Barang {
  // barang.harga -= potonganNominal; // ❌ ERROR TypeScript: Cannot assign to 'harga' because it is a read-only property

  // ✅ Kembalikan objek baru dengan data terupdate (Immutability)
  return {
    ...barang,
    harga: Math.max(0, barang.harga - potonganNominal),
  };
}

console.log("=== DEMO PURE FUNCTIONS VS IMPURE FUNCTIONS ===\n");

const sepatuAsli: Barang = { id: "B1", nama: "Sepatu Lari", harga: 800000 };
console.log("1. Data Barang Asli Sebelum Diskon:");
console.log("  ", sepatuAsli);

const sepatuDiskon = beriPotonganHarga(sepatuAsli, 150000);

console.log("\n2. Hasil Objek Baru Setelah Fungsi Murni Dijalankan:");
console.log("  ", sepatuDiskon);

console.log("\n3. Bukti Kekekalan Objek Asli (Tidak Berubah Sedikitpun!):");
console.log("  ", sepatuAsli);
console.log(`   Apakah objeknya sama? ${sepatuAsli === sepatuDiskon} (Objek baru dibuat di memori)`);
