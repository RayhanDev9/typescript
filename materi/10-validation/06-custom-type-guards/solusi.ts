// ============================================================
// 06 · Custom Type Guards — Solusi
// Jalankan: npm run materi -- materi/10-validation/06-custom-type-guards/solusi.ts
// ============================================================

export interface ProdukInventaris {
  id: string;
  nama: string;
  stok: number;
}

export function isProdukInventaris(data: unknown): data is ProdukInventaris {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const obj = data as Record<string, unknown>;

  const idValid = typeof obj.id === "string" && obj.id.trim().length > 0;
  const namaValid = typeof obj.nama === "string" && obj.nama.trim().length > 0;
  const stokValid = typeof obj.stok === "number" && !isNaN(obj.stok) && obj.stok >= 0;

  return idValid && namaValid && stokValid;
}

const daftarBarangMasuk: unknown[] = [
  { id: "PRD-01", nama: "Buku Catatan", stok: 50 },
  { nama: "Barang Tanpa ID", stok: 10 },
  "Hanya Teks Biasa",
  { id: "PRD-02", nama: "Pensil 2B", stok: 100 },
  null,
  { id: "PRD-03", nama: "Penghapus", stok: -5 },
];

console.log("=== PENGUJIAN SOLUSI CUSTOM TYPE GUARDS (IS) ===");

const barangLolos: ProdukInventaris[] = daftarBarangMasuk.filter(isProdukInventaris);

console.log(`Berhasil menyaring ${barangLolos.length} dari ${daftarBarangMasuk.length} barang mentah:`);
barangLolos.forEach((b, idx) => {
  console.log(`  ${idx + 1}. [${b.id}] ${b.nama} (Stok: ${b.stok} unit)`);
});
