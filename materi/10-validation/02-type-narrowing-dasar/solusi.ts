// ============================================================
// 02 · Type Narrowing: typeof & instanceof — Solusi
// Jalankan: npm run materi -- materi/10-validation/02-type-narrowing-dasar/solusi.ts
// ============================================================

export function formatWaktu(waktu: number | string | Date): string {
  if (typeof waktu === "number") {
    return `${waktu} detik`;
  }

  if (typeof waktu === "string") {
    return waktu.trim();
  }

  if (waktu instanceof Date) {
    return waktu.toISOString();
  }

  return "Format tidak valid";
}

export function bacaPesanError(err: unknown): string {
  if (err instanceof Error) {
    return `Error: ${err.message}`;
  }

  if (typeof err === "string") {
    return `Pesan: ${err}`;
  }

  return "Terjadi kesalahan tidak dikenal.";
}

console.log("=== PENGUJIAN SOLUSI TYPE NARROWING DASAR ===");

// 1. Pengujian formatWaktu
console.log("1. Pengujian formatWaktu:");
console.log("   - Input Number :", formatWaktu(120));
console.log("   - Input String :", formatWaktu("  02:30 PM  "));
console.log("   - Input Date   :", formatWaktu(new Date("2026-10-05T10:00:00Z")));

// 2. Pengujian bacaPesanError
console.log("\n2. Pengujian bacaPesanError:");
console.log("   - Instance Error :", bacaPesanError(new Error("Timeout server!")));
console.log("   - String Biasa   :", bacaPesanError("Akses ditolak!"));
console.log("   - Angka 404      :", bacaPesanError(404));
