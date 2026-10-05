// ============================================================
// 12 · Mapped Types Dasar — Contoh
// Jalankan: npm run materi -- materi/09-generics/12-mapped-types-dasar/contoh.ts
// ============================================================

console.log("=== DEMO MAPPED TYPES DASAR ===\n");

export interface ProfilAdmin {
  id: number;
  nama: string;
  aktif: boolean;
}

// ----------------------------------------------------------------------------
// 1. MAPPED TYPE DASAR: MENGUBAH SEMUA NILAI PROPERTI MENJADI STRING
// ----------------------------------------------------------------------------
export type SemuaString<T> = {
  [K in keyof T]: string;
};

// Menghasilkan objek di mana id, nama, aktif semuanya bertipe string (misal untuk form input HTML)
type FormAdminInput = SemuaString<ProfilAdmin>;

const dataFormulir: FormAdminInput = {
  id: "101",
  nama: "Rayhan Dwi",
  aktif: "true",
};

console.log("1. Seluruh Properti Menjadi String (Mapped Type):");
console.log(dataFormulir);

// ----------------------------------------------------------------------------
// 2. MAPPED TYPE: MENJADIKAN SEMUA PROPERTI NULLABLE (T[K] | null)
// ----------------------------------------------------------------------------
export type BolehNull<T> = {
  [K in keyof T]: T[K] | null;
};

const adminDalamProses: BolehNull<ProfilAdmin> = {
  id: 102,
  nama: null, // Boleh null!
  aktif: true,
};

console.log("\n2. Nilai Boleh Null (Nullable Mapping):");
console.log(adminDalamProses);

// ----------------------------------------------------------------------------
// 3. REKAYASA CUSTOM READONLY DAN PARTIAL SENDIRI
// ----------------------------------------------------------------------------
type PartialKustom<T> = {
  [K in keyof T]?: T[K];
};

type ReadonlyKustom<T> = {
  readonly [K in keyof T]: T[K];
};

const akunTerkunciKustom: ReadonlyKustom<ProfilAdmin> = {
  id: 999,
  nama: "Root Admin",
  aktif: true,
};
// akunTerkunciKustom.aktif = false; // ❌ Compile Error: Cannot assign to 'aktif' because it is a read-only property.

console.log("\n3. Objek Readonly Buatan Sendiri:");
console.log(akunTerkunciKustom);
