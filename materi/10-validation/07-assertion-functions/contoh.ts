// ============================================================
// 07 · Assertion Functions — Contoh
// Jalankan: npm run materi -- materi/10-validation/07-assertion-functions/contoh.ts
// ============================================================

console.log("=== DEMO ASSERTION FUNCTIONS (ASSERTS) ===\n");

// ----------------------------------------------------------------------------
// 1. ASSERTION FUNCTION UMUM (asserts kondisi)
// ----------------------------------------------------------------------------
export function pastikan(kondisi: boolean, pesan: string): asserts kondisi {
  if (!kondisi) {
    throw new Error(`[VALIDASI GAGAL] ${pesan}`);
  }
}

const inputNilai: string | null = "Kode-Promo-50";

// Sebelum pemanggilan: inputNilai bertipe 'string | null'
pastikan(inputNilai !== null, "Nilai tidak boleh kosong/null!");

// Setelah baris di atas, TypeScript tahu pasti inputNilai adalah 'string':
console.log("1. Hasil Asersi Sukses:", inputNilai.toLowerCase());

// ----------------------------------------------------------------------------
// 2. ASSERTION FUNCTION KHUSUS TIPE ENTITAS (asserts val is T)
// ----------------------------------------------------------------------------
export interface SesiAutentikasi {
  tokenAkses: string;
  peranPengguna: "admin" | "member";
  kadaluarsa: number;
}

export function assertSesiAutentikasi(
  data: unknown
): asserts data is SesiAutentikasi {
  if (typeof data !== "object" || data === null) {
    throw new Error("Data sesi bukan berupa objek valid.");
  }

  const obj = data as Record<string, unknown>;

  if (typeof obj.tokenAkses !== "string" || obj.tokenAkses.length === 0) {
    throw new Error("Token akses tidak ditemukan atau kosong.");
  }

  if (obj.peranPengguna !== "admin" && obj.peranPengguna !== "member") {
    throw new Error("Peran pengguna tidak dikenali sistem.");
  }

  if (typeof obj.kadaluarsa !== "number" || obj.kadaluarsa <= Date.now()) {
    throw new Error("Sesi telah kadaluarsa.");
  }
}

// Simulasi alur kerja aman:
function bukaPintuAdmin(sesiMentah: unknown) {
  // Lakukan asersi
  assertSesiAutentikasi(sesiMentah);

  // Jika baris di atas tidak melempar error,
  // maka sesiMentah dipastikan bertipe SesiAutentikasi!
  console.log(`\n2. Sesi Terverifikasi: Peran '${sesiMentah.peranPengguna}'`);
  console.log(`   Token: ${sesiMentah.tokenAkses.slice(0, 10)}...`);
}

const sesiValid: unknown = {
  tokenAkses: "JWT-XYZ-998877665544",
  peranPengguna: "admin",
  kadaluarsa: Date.now() + 3600000, // 1 jam lagi
};

bukaPintuAdmin(sesiValid);

// Pengujian sesi gagal yang melempar error:
try {
  bukaPintuAdmin({ tokenAkses: "", peranPengguna: "hacker", kadaluarsa: 0 });
} catch (err: unknown) {
  if (err instanceof Error) {
    console.log("\n3. Sesi Ilegal Ditolak Sesuai Ekspektasi:");
    console.log("  ", err.message);
  }
}
