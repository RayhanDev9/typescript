// ============================================================
// 11 · Conditional Types Dasar — Contoh
// Jalankan: npm run materi -- materi/09-generics/11-conditional-types-dasar/contoh.ts
// ============================================================

console.log("=== DEMO CONDITIONAL TYPES DASAR ===\n");

// ----------------------------------------------------------------------------
// 1. CONDITIONAL TYPE DASAR DENGAN TERNARY (T extends U ? X : Y)
// ----------------------------------------------------------------------------
export type CekTipeData<T> = T extends string
  ? "Tipe Teks (String)"
  : T extends number
  ? "Tipe Angka (Number)"
  : T extends boolean
  ? "Tipe Logika (Boolean)"
  : "Tipe Lainnya";

type Tes1 = CekTipeData<"Halo">; // "Tipe Teks (String)"
type Tes2 = CekTipeData<100>;    // "Tipe Angka (Number)"

console.log("1. Evaluasi Tipe Dinamis di Waktu Kompilasi Selesai.");

// ----------------------------------------------------------------------------
// 2. FUNGSI DENGAN RETURN TYPE CONDITIONAL
// ----------------------------------------------------------------------------
// Jika boolean true -> kembalikan array [T]
// Jika boolean false -> kembalikan nilai tunggal T
export type KembalianFleksibel<T, IsArray extends boolean> = IsArray extends true
  ? T[]
  : T;

export function prosesData<T, B extends boolean>(
  nilai: T,
  sebagaiArray: B
): KembalianFleksibel<T, B> {
  if (sebagaiArray) {
    return [nilai] as KembalianFleksibel<T, B>;
  }
  return nilai as KembalianFleksibel<T, B>;
}

// Pembuktian Type Inference Otomatis:
const dataTunggal = prosesData("Belajar TS", false); // Tipe: string
const dataArray = prosesData("Belajar TS", true);    // Tipe: string[]

console.log("2. Hasil Eksekusi Fungsi Fleksibel:");
console.log("   Sebagai Tunggal :", dataTunggal);
console.log("   Sebagai Array   :", dataArray);

// ----------------------------------------------------------------------------
// 3. REKAYASA ULANG NONNULLABLE SENDIRI
// ----------------------------------------------------------------------------
// Membuang null dan undefined menggunakan never
export type BuangNullDanUndefined<T> = T extends null | undefined ? never : T;

type DataKotor = string | number | null | undefined;
type DataMurni = BuangNullDanUndefined<DataKotor>; // string | number

const teksBersih: DataMurni = "Karakter Bersih";
console.log("\n3. Data Murni Hasil Conditional Type:", teksBersih);
