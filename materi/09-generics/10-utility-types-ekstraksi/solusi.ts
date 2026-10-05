// ============================================================
// 10 · Utility Types: Ekstraksi & Filter — Solusi
// Jalankan: npm run materi -- materi/09-generics/10-utility-types-ekstraksi/solusi.ts
// ============================================================

export type StatusPaket =
  | "menunggu_kurir"
  | "dalam_perjalanan"
  | "terkirim"
  | "gagal_kirim"
  | "retur";

export function buatKwitansi(noInvoice: string, nominal: number) {
  return {
    nomor: noInvoice,
    total: nominal,
    dicetakPada: new Date().toISOString(),
    lunas: true,
  };
}

// 1. Ekstraksi Union dengan Exclude & Extract
export type StatusMasihBerjalan = Exclude<
  StatusPaket,
  "terkirim" | "gagal_kirim" | "retur"
>; // "menunggu_kurir" | "dalam_perjalanan"

export type StatusKasusMasalah = Extract<
  StatusPaket,
  "gagal_kirim" | "retur"
>; // "gagal_kirim" | "retur"

// 2. Ekstraksi Tipe Fungsi dengan ReturnType & Parameters
export type KwitansiResmi = ReturnType<typeof buatKwitansi>;
export type ParamKwitansi = Parameters<typeof buatKwitansi>; // [noInvoice: string, nominal: number]

console.log("=== PENGUJIAN SOLUSI UTILITY TYPES EKSTRAKSI ===");

const statusKurir: StatusMasihBerjalan = "dalam_perjalanan";
const statusInsiden: StatusKasusMasalah = "retur";

console.log("1. Status Paket Aktif   :", statusKurir);
console.log("2. Status Paket Bermasalah:", statusInsiden);

const buktiBayar: KwitansiResmi = buatKwitansi("INV-2026-X01", 350000);
console.log("\n3. Kwitansi Resmi (ReturnType):");
console.log(`   Nomor Invoice : ${buktiBayar.nomor}`);
console.log(`   Total Bayar   : Rp ${buktiBayar.total.toLocaleString("id-ID")}`);
console.log(`   Status Lunas  : ${buktiBayar.lunas}`);
