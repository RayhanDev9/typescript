// ============================================================
// 02 · Type Narrowing: typeof & instanceof — Contoh
// Jalankan: npm run materi -- materi/10-validation/02-type-narrowing-dasar/contoh.ts
// ============================================================

console.log("=== DEMO TYPE NARROWING (TYPEOF & INSTANCEOF) ===\n");

// ----------------------------------------------------------------------------
// 1. TYPEOF NARROWING (PRIMITIF: STRING | NUMBER | BOOLEAN)
// ----------------------------------------------------------------------------
export function cetakFormatNilai(nilai: string | number | boolean): string {
  if (typeof nilai === "string") {
    // TypeScript mempersempit tipe nilai menjadi string murni
    return `[STRING] "${nilai.toUpperCase()}" (Panjang: ${nilai.length})`;
  }

  if (typeof nilai === "number") {
    // TypeScript mempersempit tipe nilai menjadi number murni
    return `[NUMBER] Rp ${nilai.toLocaleString("id-ID")}`;
  }

  // Di titik ini, TypeScript tahu pasti nilainya adalah boolean
  return `[BOOLEAN] Status: ${nilai ? "AKTIF" : "NONAKTIF"}`;
}

console.log("1. Pengujian typeof Narrowing:");
console.log("   ", cetakFormatNilai("belajar typescript"));
console.log("   ", cetakFormatNilai(750000));
console.log("   ", cetakFormatNilai(true));

// ----------------------------------------------------------------------------
// 2. INSTANCEOF NARROWING (DATE & CUSTOM CLASS)
// ----------------------------------------------------------------------------
export class PenggunaVIP {
  constructor(public nama: string, public diskonMember: number) {}
}

export class PenggunaReguler {
  constructor(public nama: string) {}
}

export function hitungBiaya(pembeli: PenggunaVIP | PenggunaReguler, totalBelanja: number): number {
  if (pembeli instanceof PenggunaVIP) {
    // TypeScript mempersempit tipe pembeli menjadi PenggunaVIP
    const potongan = totalBelanja * (pembeli.diskonMember / 100);
    console.log(`\nDiskon VIP (${pembeli.diskonMember}%) diterapkan untuk ${pembeli.nama}`);
    return totalBelanja - potongan;
  }

  // Di sini pembeli dipastikan PenggunaReguler
  console.log(`\nHarga reguler tanpa diskon untuk ${pembeli.nama}`);
  return totalBelanja;
}

const vip = new PenggunaVIP("Ahmad Rayhan", 20); // Diskon 20%
const reguler = new PenggunaReguler("Budi Santoso");

console.log("2. Pengujian instanceof Narrowing:");
console.log("   Total Tagihan VIP     : Rp", hitungBiaya(vip, 1000000).toLocaleString("id-ID"));
console.log("   Total Tagihan Reguler : Rp", hitungBiaya(reguler, 1000000).toLocaleString("id-ID"));

// ----------------------------------------------------------------------------
// 3. INSTANCEOF ERROR NARROWING DI BLOK CATCH
// ----------------------------------------------------------------------------
try {
  throw new Error("Koneksi ke database gagal!");
} catch (err: unknown) {
  console.log("\n3. Penanganan Error dengan instanceof:");
  if (err instanceof Error) {
    console.log(`   Pesan error tertangkap: "${err.message}"`);
  } else {
    console.log("   Kesalahan tidak diketahui");
  }
}
