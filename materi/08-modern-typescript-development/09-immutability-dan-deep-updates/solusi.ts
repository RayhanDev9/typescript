// ============================================================================
// 09 · Immutability & Deep Updates — Solusi
// Jalankan: npx ts-node materi/08-modern-typescript-development/09-immutability-dan-deep-updates/solusi.ts
// ============================================================================

export interface DetailDivisi {
  namaDivisi: string;
  manajer: string;
}

export interface Karyawan {
  readonly id: string;
  readonly nama: string;
  readonly gaji: number;
  readonly divisi: DetailDivisi;
  readonly keahlian: readonly string[];
}

const karyawanAwal: Karyawan = {
  id: "EMP-404",
  nama: "Siti Rahma",
  gaji: 8000000,
  divisi: {
    namaDivisi: "Quality Assurance",
    manajer: "Bapak Joko",
  },
  keahlian: ["Manual Testing", "Jira"],
};

export function naikkanGaji(k: Karyawan, kenaikan: number): Karyawan {
  return {
    ...k,
    gaji: k.gaji + kenaikan,
  };
}

export function mutasiDivisi(
  k: Karyawan,
  divisiBaru: string,
  manajerBaru: string
): Karyawan {
  return {
    ...k,
    divisi: {
      ...k.divisi,
      namaDivisi: divisiBaru,
      manajer: manajerBaru,
    },
  };
}

export function tambahKeahlian(k: Karyawan, skillBaru: string): Karyawan {
  return {
    ...k,
    keahlian: [...k.keahlian, skillBaru],
  };
}

// Pengujian Immutability
console.log("=== PENGUJIAN IMMUTABILITY & DEEP UPDATE ===");

const karyawanPromosi = naikkanGaji(karyawanAwal, 2000000);
const karyawanPindah = mutasiDivisi(karyawanPromosi, "Software Engineering", "Ibu Dian");
const karyawanAkhir = tambahKeahlian(karyawanPindah, "TypeScript");

console.log("\n1. Data Karyawan Awal (Masih Utuh & Bersih):");
console.log(karyawanAwal);

console.log("\n2. Data Karyawan Hasil Modifikasi Immutable:");
console.log(karyawanAkhir);

console.log("\n3. Verifikasi Referensi Memori:");
console.log("Apakah objek divisi berbeda?", karyawanAwal.divisi !== karyawanAkhir.divisi); // true
console.log("Apakah array keahlian berbeda?", karyawanAwal.keahlian !== karyawanAkhir.keahlian); // true
