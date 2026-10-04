// ============================================================
// 09 · Immutability & Deep Updates — Latihan
// Jalankan: npm run materi -- materi/08-modern-typescript-development/09-immutability-dan-deep-updates/latihan.ts
// ============================================================

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

/**
 * 🎯 TUGAS:
 * Buat fungsi-fungsi update IMMUTABLE (tidak boleh memutasi parameter masukan):
 *
 * 1. `naikkanGaji(k: Karyawan, kenaikan: number): Karyawan`
 *    - Kembalikan objek baru dengan gaji bertambah.
 *
 * 2. `mutasiDivisi(k: Karyawan, divisiBaru: string, manajerBaru: string): Karyawan`
 *    - Kembalikan objek baru dengan informasi divisi yang diperbarui secara mendalam (deep nested spread).
 *
 * 3. `tambahKeahlian(k: Karyawan, skillBaru: string): Karyawan`
 *    - Kembalikan objek baru dengan array keahlian bertambah (menggunakan spread array).
 */

// Tulis ketiga fungsi Anda di bawah ini:




// Eksekusi untuk menguji:
// const karyawanPromosi = naikkanGaji(karyawanAwal, 2000000);
// const karyawanPindah = mutasiDivisi(karyawanPromosi, "Software Engineering", "Ibu Dian");
// const karyawanAhli = tambahKeahlian(karyawanPindah, "TypeScript");

// console.log("Karyawan Asli (Tidak Boleh Berubah!):", karyawanAwal);
// console.log("Karyawan Akhir:", karyawanAhli);
