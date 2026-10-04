// ============================================================
// 03 · Tipe Data Primitif — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/03-tipe-data-primitif/contoh.ts
// ============================================================

// --- Tipe-tipe primitif ---
let umur: number = 25;
let tinggiBadan: number = 170.5; // desimal juga number
let namaLengkap: string = "Rayhan Pratama";
let sedangBelajar: boolean = true;

console.log(umur, tinggiBadan, namaLengkap, sedangBelajar);

// --- Memeriksa tipe dengan typeof ---
console.log(typeof umur);          // number
console.log(typeof namaLengkap);   // string
console.log(typeof sedangBelajar); // boolean
console.log(typeof "25");          // string  ← karena memakai tanda kutip!

// --- undefined: sudah dibuat, belum diisi ---
let tahunLulus: number | undefined;
console.log(tahunLulus);           // undefined
console.log(typeof tahunLulus);    // undefined

// --- null: sengaja dikosongkan ---
let pemenang: string | null = null;
console.log(pemenang);             // null
console.log(typeof pemenang);      // object  ← bug lama JavaScript
pemenang = "Tim Merah";
console.log(pemenang);

// --- bigint (jarang dipakai) ---
let angkaRaksasa: bigint = 9007199254740993n;
console.log(angkaRaksasa);

// --- any: TypeScript berhenti memeriksa (HINDARI) ---
let dataAny: any = 10;
dataAny = "sekarang teks";
dataAny = true;
console.log("dataAny:", dataAny);
// dataAny.toUpperCase(); // TypeScript diam, tapi program CRASH karena dataAny berisi boolean

// --- unknown: harus diperiksa dulu sebelum dipakai (AMAN) ---
let dataUnknown: unknown = "halo dunia";
// dataUnknown.toUpperCase(); // ❌ 'dataUnknown' is of type 'unknown'.

if (typeof dataUnknown === "string") {
  // Di dalam blok ini TypeScript sudah tahu dataUnknown adalah string
  console.log(dataUnknown.toUpperCase()); // HALO DUNIA
}

// ❌ Hapus tanda // untuk melihat error:
// umur = "dua puluh lima"; // Type 'string' is not assignable to type 'number'
// namaLengkap = null;      // Type 'null' is not assignable to type 'string'
