// ============================================================
// 06 · Nullish Coalescing Operator (??) — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/06-nullish-coalescing/contoh.ts
// ============================================================

interface PesananOnline {
  id: string;
  jumlahItem?: number;
  biayaTambahan?: number;
  catatanDriver?: string;
  voucherDiskon?: string | null;
}

const pesanan1: PesananOnline = {
  id: "ORD-101",
  jumlahItem: 0,         // Keranjang saat ini kosong (0 item)
  biayaTambahan: 0,      // Tidak ada biaya tambahan (Rp 0)
  catatanDriver: "",     // Driver tidak diberi catatan khusus
  voucherDiskon: null,   // Voucher tidak digunakan
};

console.log("=== PERBANDINGAN OPERATOR || vs ?? ===");

// 1. Kasus Angka 0
const jumlahOr = pesanan1.jumlahItem || 1;
const jumlahNullish = pesanan1.jumlahItem ?? 1;

console.log("1. Kasus angka 0:");
console.log("   Menggunakan || (keliru) :", jumlahOr);       // 1 (salah)
console.log("   Menggunakan ?? (tepat)  :", jumlahNullish);  // 0 (benar)

// 2. Kasus String Kosong ""
const catatanOr = pesanan1.catatanDriver || "Tolong jangan dibunyikan bel";
const catatanNullish = pesanan1.catatanDriver ?? "Tolong jangan dibunyikan bel";

console.log("\n2. Kasus string kosong \"\":");
console.log("   Menggunakan || (keliru) :", `"${catatanOr}"`);
console.log("   Menggunakan ?? (tepat)  :", `"${catatanNullish}"`);

// 3. Kasus null dan undefined
const voucher = pesanan1.voucherDiskon ?? "TANPA-VOUCHER";
console.log("\n3. Kasus null:");
console.log("   Voucher:", voucher); // "TANPA-VOUCHER"

// 4. Type Narrowing di TypeScript
function formatBiaya(biaya?: number | null): string {
  // Nilai biaya dinarrowing dari (number | null | undefined) menjadi (number)
  const nominalPasti: number = biaya ?? 5000;
  return `Rp${nominalPasti.toLocaleString("id-ID")}`;
}

console.log("\n4. Type Narrowing:");
console.log("Biaya pesanan1 (Rp0)      :", formatBiaya(pesanan1.biayaTambahan)); // Rp0
console.log("Biaya pesanan tanpa data :", formatBiaya(undefined));             // Rp5.000
