// ============================================================
// 07 · Assertion Functions — Solusi
// Jalankan: npm run materi -- materi/10-validation/07-assertion-functions/solusi.ts
// ============================================================

export interface KonfigurasiDatabase {
  host: string;
  port: number;
  namaDb: string;
}

export function assertKonfigurasiDb(
  config: unknown
): asserts config is KonfigurasiDatabase {
  if (typeof config !== "object" || config === null) {
    throw new Error("Konfigurasi database harus berupa objek valid.");
  }

  const obj = config as Record<string, unknown>;

  if (typeof obj.host !== "string" || obj.host.trim().length === 0) {
    throw new Error("Host database wajib diisi string non-kosong.");
  }

  if (
    typeof obj.port !== "number" ||
    isNaN(obj.port) ||
    obj.port < 1 ||
    obj.port > 65535
  ) {
    throw new Error("Port database harus berupa angka valid antara 1 s/d 65535.");
  }

  if (typeof obj.namaDb !== "string" || obj.namaDb.trim().length === 0) {
    throw new Error("Nama database tidak boleh kosong.");
  }
}

export function koneksikanKeDatabase(configMentah: unknown): string {
  // Lakukan validasi assertion (jika salah satu salah, fungsi akan langsung melempar error)
  assertKonfigurasiDb(configMentah);

  // Jika sampai baris ini, TypeScript menjamin configMentah bertipe KonfigurasiDatabase:
  return `Sukses terhubung ke database '${configMentah.namaDb}' di ${configMentah.host}:${configMentah.port}`;
}

console.log("=== PENGUJIAN SOLUSI ASSERTION FUNCTIONS ===");

// 1. Uji Konfigurasi Valid
const hasilKoneksi = koneksikanKeDatabase({
  host: "localhost",
  port: 5432,
  namaDb: "belajar_ts",
});
console.log("1. Konfigurasi Valid   :", hasilKoneksi);

// 2. Uji Konfigurasi Rusak
try {
  koneksikanKeDatabase({ host: "localhost", port: 999999, namaDb: "" });
} catch (err: unknown) {
  if (err instanceof Error) {
    console.log("\n2. Konfigurasi Gagal   : Tertangkap Error!");
    console.log(`   Penyebab           : "${err.message}"`);
  }
}
