// ============================================================
// 07 · Default Generic Type — Solusi
// Jalankan: npm run materi -- materi/09-generics/07-default-generic-type/solusi.ts
// ============================================================

export interface DokumenLaporan<T = string> {
  nomorSurat: string;
  dibuatOleh: string;
  ringkasan: T;
}

export interface StatistikKeuangan {
  pemasukan: number;
  pengeluaran: number;
  labaBersih: number;
}

// 1. Menggunakan Tipe Default (T = string)
const laporanUmum: DokumenLaporan = {
  nomorSurat: "SRT/2026/001",
  dibuatOleh: "Sekretariat",
  ringkasan: "Kegiatan operasional berjalan lancar tanpa kendala.",
};

// 2. Menggunakan Tipe Kustom (T = StatistikKeuangan)
const laporanKeuangan: DokumenLaporan<StatistikKeuangan> = {
  nomorSurat: "SRT/2026/002",
  dibuatOleh: "Bagian Akuntansi",
  ringkasan: {
    pemasukan: 150000000,
    pengeluaran: 95000000,
    labaBersih: 55000000,
  },
};

console.log("=== PENGUJIAN SOLUSI DEFAULT GENERIC TYPE ===");

console.log("1. Laporan Standar (Default String):");
console.log(`   Nomor     : ${laporanUmum.nomorSurat}`);
console.log(`   Penulis   : ${laporanUmum.dibuatOleh}`);
console.log(`   Ringkasan : "${laporanUmum.ringkasan}"`);

console.log("\n2. Laporan Khusus (Objek Statistik Keuangan):");
console.log(`   Nomor       : ${laporanKeuangan.nomorSurat}`);
console.log(`   Penulis     : ${laporanKeuangan.dibuatOleh}`);
console.log(`   Pemasukan   : Rp ${laporanKeuangan.ringkasan.pemasukan.toLocaleString("id-ID")}`);
console.log(`   Pengeluaran : Rp ${laporanKeuangan.ringkasan.pengeluaran.toLocaleString("id-ID")}`);
console.log(`   Laba Bersih : Rp ${laporanKeuangan.ringkasan.labaBersih.toLocaleString("id-ID")}`);
