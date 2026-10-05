// ============================================================
// 06 · Custom Type Guards — Contoh
// Jalankan: npm run materi -- materi/10-validation/06-custom-type-guards/contoh.ts
// ============================================================

console.log("=== DEMO CUSTOM TYPE GUARDS (TYPE PREDICATES) ===\n");

export interface DataKaryawan {
  nik: string;
  nama: string;
  gaji: number;
}

// ----------------------------------------------------------------------------
// 1. MEMBUAT CUSTOM TYPE GUARD DENGAN SINTAKS 'data is DataKaryawan'
// ----------------------------------------------------------------------------
export function isDataKaryawan(data: unknown): data is DataKaryawan {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const obj = data as Record<string, unknown>;

  return (
    typeof obj.nik === "string" &&
    typeof obj.nama === "string" &&
    typeof obj.gaji === "number" &&
    !isNaN(obj.gaji)
  );
}

// Pengujian Type Guard pada variabel tunggal
const dataMisterius1: unknown = { nik: "K-001", nama: "Rayhan", gaji: 12000000 };
const dataMisterius2: unknown = { nama: "Budi", gaji: "Sepuluh Juta" }; // Salah tipe

if (isDataKaryawan(dataMisterius1)) {
  // Di dalam blok ini, TypeScript langsung menganggap dataMisterius1 bertipe DataKaryawan!
  console.log("1. Data 1 Lolos Validasi:");
  console.log(`   Karyawan: ${dataMisterius1.nama} (NIK: ${dataMisterius1.nik})`);
  console.log(`   Gaji Bersih: Rp ${dataMisterius1.gaji.toLocaleString("id-ID")}\n`);
}

// ----------------------------------------------------------------------------
// 2. KEKUATAN TYPE GUARD PADA METODE ARRAY .filter()
// ----------------------------------------------------------------------------
// Skenario data mentah campuran yang datang dari API/database
const antreanMentah: unknown[] = [
  { nik: "K-101", nama: "Dewi Lestari", gaji: 8000000 },
  "bukan objek",
  null,
  { nik: "K-102", nama: "Siti Rahma", gaji: 9500000 },
  { nik: 12345, nama: "Salah Format NIK" },
  undefined,
];

// Ketika Type Guard dioper ke .filter(), array hasilnya otomatis berpengetikan DataKaryawan[]!
const karyawanTervalidasi: DataKaryawan[] = antreanMentah.filter(isDataKaryawan);

console.log("2. Hasil Penyaringan Array dengan Type Guard:");
console.log(`   Dari total ${antreanMentah.length} item mentah, ditemukan ${karyawanTervalidasi.length} karyawan valid:`);
karyawanTervalidasi.forEach((k, idx) => {
  console.log(`   ${idx + 1}. [${k.nik}] ${k.nama} - Rp ${k.gaji.toLocaleString("id-ID")}`);
});
