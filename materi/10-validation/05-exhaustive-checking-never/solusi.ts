// ============================================================
// 05 · Exhaustive Checking dengan never — Solusi
// Jalankan: npm run materi -- materi/10-validation/05-exhaustive-checking-never/solusi.ts
// ============================================================

export type StatusTiketBantuan =
  | "baru"
  | "sedang_ditangani"
  | "menunggu_pelanggan"
  | "selesai"
  | "dibatalkan";

export function ambilWarnaBadgeTiket(status: StatusTiketBantuan): string {
  switch (status) {
    case "baru":
      return "biru";
    case "sedang_ditangani":
      return "kuning";
    case "menunggu_pelanggan":
      return "oranye";
    case "selesai":
      return "hijau";
    case "dibatalkan":
      return "abu-abu";
    default: {
      const _tidakBolehTerjadi: never = status;
      throw new Error(`Status tidak valid: ${_tidakBolehTerjadi}`);
    }
  }
}

console.log("=== PENGUJIAN SOLUSI EXHAUSTIVE CHECKING (NEVER) ===");

console.log("1. Status Baru      -> Badge:", ambilWarnaBadgeTiket("baru"));
console.log("2. Status Ditangani -> Badge:", ambilWarnaBadgeTiket("sedang_ditangani"));
console.log("3. Status Selesai   -> Badge:", ambilWarnaBadgeTiket("selesai"));
console.log("4. Status Dibatalkan-> Badge:", ambilWarnaBadgeTiket("dibatalkan"));
