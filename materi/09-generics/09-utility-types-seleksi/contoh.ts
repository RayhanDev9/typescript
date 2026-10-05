// ============================================================
// 09 · Utility Types: Seleksi Field — Contoh
// Jalankan: npm run materi -- materi/09-generics/09-utility-types-seleksi/contoh.ts
// ============================================================

console.log("=== DEMO UTILITY TYPES: PICK, OMIT, RECORD ===\n");

export interface DataKaryawan {
  id: string;
  nama: string;
  email: string;
  divisi: string;
  gajiBulanan: number;
  pinKeamanan: string;
}

const karyawanLengkap: DataKaryawan = {
  id: "EMP-007",
  nama: "Rayhan Dwi",
  email: "rayhan@kantor.id",
  divisi: "Engineering",
  gajiBulanan: 15000000,
  pinKeamanan: "987654",
};

// ----------------------------------------------------------------------------
// 1. PICK: MEMILIH FIELD TERTENTU UNTUK KARTU NAMA
// ----------------------------------------------------------------------------
export type KartuNama = Pick<DataKaryawan, "nama" | "divisi" | "email">;

const kartuNamaRayhan: KartuNama = {
  nama: karyawanLengkap.nama,
  divisi: karyawanLengkap.divisi,
  email: karyawanLengkap.email,
};

console.log("1. Kartu Nama Publik (Pick):");
console.log(`   Nama   : ${kartuNamaRayhan.nama}`);
console.log(`   Divisi : ${kartuNamaRayhan.divisi}`);
console.log(`   Email  : ${kartuNamaRayhan.email}`);

// ----------------------------------------------------------------------------
// 2. OMIT: MEMBUANG FIELD RAHASIA (PIN KEAMANAN & GAJI)
// ----------------------------------------------------------------------------
export type DataKaryawanPublik = Omit<DataKaryawan, "pinKeamanan" | "gajiBulanan">;

function sensorDataKaryawan(data: DataKaryawan): DataKaryawanPublik {
  const { pinKeamanan, gajiBulanan, ...dataAman } = data;
  return dataAman;
}

const profilAman = sensorDataKaryawan(karyawanLengkap);
console.log("\n2. Data Karyawan Setelah Sensor (Omit):");
console.log(profilAman);

// ----------------------------------------------------------------------------
// 3. RECORD: MEMBUAT KAMUS PER DIVISI (KEY-VALUE DICTIONARY)
// ----------------------------------------------------------------------------
type NamaDivisi = "Engineering" | "Design" | "Marketing";

interface DetailDivisi {
  kepalaDivisi: string;
  lokasiLantai: number;
}

const petaDivisi: Record<NamaDivisi, DetailDivisi> = {
  Engineering: { kepalaDivisi: "Pak Joko", lokasiLantai: 4 },
  Design: { kepalaDivisi: "Bu Maya", lokasiLantai: 3 },
  Marketing: { kepalaDivisi: "Pak Andi", lokasiLantai: 2 },
};

console.log("\n3. Kamus Divisi Perusahaan (Record):");
console.log(`   Engineering : Lantai ${petaDivisi.Engineering.lokasiLantai} (Ka. Divisi: ${petaDivisi.Engineering.kepalaDivisi})`);
console.log(`   Design      : Lantai ${petaDivisi.Design.lokasiLantai} (Ka. Divisi: ${petaDivisi.Design.kepalaDivisi})`);
