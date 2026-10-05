// ============================================================
// 02 · Generic Functions — Contoh
// Jalankan: npm run materi -- materi/09-generics/02-generic-functions/contoh.ts
// ============================================================

console.log("=== DEMO GENERIC FUNCTIONS & MULTIPLE TYPE PARAMS ===\n");

// ----------------------------------------------------------------------------
// 1. GENERIC FUNCTION DENGAN DUA PARAMETER TIPE (<T, U>)
// ----------------------------------------------------------------------------
export function gabungPasangan<T, U>(itemA: T, itemB: U): [T, U] {
  return [itemA, itemB];
}

// Inferensi otomatis oleh compiler:
const pasangan1 = gabungPasangan("Kode POS", 40115); // [string, number]
const pasangan2 = gabungPasangan(true, { pesan: "Sukses" }); // [boolean, { pesan: string }]

console.log("1. Pasangan Teks & Angka :", pasangan1);
console.log("2. Pasangan Bool & Objek :", pasangan2);

// ----------------------------------------------------------------------------
// 2. FUNGSI PENUKAR NILAI (SWAP) PADA TUPLE
// ----------------------------------------------------------------------------
export function balikTuple<T, U>(data: [T, U]): [U, T] {
  return [data[1], data[0]];
}

const sebelum = gabungPasangan("User-Admin", 99);
const sesudah = balikTuple(sebelum);

console.log("\n3. Penukaran Posisi Tuple:");
console.log("   Sebelum :", sebelum); // ["User-Admin", 99]
console.log("   Sesudah :", sesudah); // [99, "User-Admin"]

// ----------------------------------------------------------------------------
// 3. EKSPLISIT VS INFERENSI
// ----------------------------------------------------------------------------
function buatArrayDariElemen<T>(panjang: number, elemen: T): T[] {
  const hasil: T[] = [];
  for (let i = 0; i < panjang; i++) {
    hasil.push(elemen);
  }
  return hasil;
}

// Panggilan dengan inferensi:
const deretNol = buatArrayDariElemen(3, 0); // number[]

// Panggilan eksplisit (memaksa tipe union):
const deretStatus = buatArrayDariElemen<"hadir" | "absen">(2, "hadir");

console.log("\n4. Array Buatan:");
console.log("   Deret Angka  :", deretNol);
console.log("   Deret Status :", deretStatus);
