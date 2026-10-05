// ============================================================
// 04 · Discriminated Unions — Contoh
// Jalankan: npm run materi -- materi/10-validation/04-discriminated-unions/contoh.ts
// ============================================================

console.log("=== DEMO DISCRIMINATED UNIONS (TAGGED UNIONS) ===\n");

// ----------------------------------------------------------------------------
// 1. DEFINISI ENTITAS BENTUK GEOMETRI DENGAN TAG 'jenis'
// ----------------------------------------------------------------------------
export interface Lingkaran {
  jenis: "lingkaran"; // Tag diskriminan
  radius: number;
}

export interface Persegi {
  jenis: "persegi"; // Tag diskriminan
  sisi: number;
}

export interface PersegiPanjang {
  jenis: "persegi_panjang"; // Tag diskriminan
  panjang: number;
  lebar: number;
}

export type BentukGeometri = Lingkaran | Persegi | PersegiPanjang;

// ----------------------------------------------------------------------------
// 2. FUNGSI KALKULASI DENGAN SWITCH CASE NARROWING
// ----------------------------------------------------------------------------
export function hitungLuasBentuk(bentuk: BentukGeometri): number {
  switch (bentuk.jenis) {
    case "lingkaran":
      // TypeScript tahu pasti properti 'radius' ada
      return Math.PI * bentuk.radius * bentuk.radius;

    case "persegi":
      // TypeScript tahu pasti properti 'sisi' ada
      return bentuk.sisi * bentuk.sisi;

    case "persegi_panjang":
      // TypeScript tahu pasti 'panjang' dan 'lebar' ada
      return bentuk.panjang * bentuk.lebar;
  }
}

const bundaran: Lingkaran = { jenis: "lingkaran", radius: 7 };
const ubin: Persegi = { jenis: "persegi", sisi: 20 };
const meja: PersegiPanjang = { jenis: "persegi_panjang", panjang: 120, lebar: 60 };

console.log("1. Kalkulasi Luas Bentuk Geometri:");
console.log(`   Luas Lingkaran (r=7)        : ${hitungLuasBentuk(bundaran).toFixed(2)} cm²`);
console.log(`   Luas Persegi (sisi=20)      : ${hitungLuasBentuk(ubin)} cm²`);
console.log(`   Luas Persegi Panjang (120x60): ${hitungLuasBentuk(meja)} cm²`);

// ----------------------------------------------------------------------------
// 3. CONTOH POLA STATE RESPON JARINGAN (NETWORK STATE)
// ----------------------------------------------------------------------------
type StatusDownload =
  | { status: "memulai" }
  | { status: "berjalan"; persen: number; kecepatanKbps: number }
  | { status: "selesai"; pathBerkas: string }
  | { status: "gagal"; kodeError: number };

function tampilkanProgress(dl: StatusDownload): void {
  switch (dl.status) {
    case "memulai":
      console.log("\n[STATUS] Menghubungkan ke server...");
      break;
    case "berjalan":
      console.log(`\n[STATUS] Mengunduh: ${dl.persen}% (${dl.kecepatanKbps} KB/s)`);
      break;
    case "selesai":
      console.log(`\n[STATUS] Selesai! Tersimpan di: ${dl.pathBerkas}`);
      break;
    case "gagal":
      console.log(`\n[STATUS] Unduhan Gagal (Error Code: ${dl.kodeError})`);
      break;
  }
}

tampilkanProgress({ status: "berjalan", persen: 65, kecepatanKbps: 1024 });
tampilkanProgress({ status: "selesai", pathBerkas: "C:/Unduhan/modul_ts.pdf" });
