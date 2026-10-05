// ============================================================
// 11 · Validasi Objek Bersarang & Array — Contoh
// Jalankan: npm run materi -- materi/10-validation/11-validasi-nested-dan-arrays/contoh.ts
// ============================================================

import { z } from "zod";

console.log("=== DEMO VALIDASI OBJEK BERSARANG & ARRAY (ZOD) ===\n");

// ----------------------------------------------------------------------------
// 1. SUB-SKEMA MODULAR
// ----------------------------------------------------------------------------
export const SkemaAlamatPengiriman = z.object({
  kota: z.string().min(3, "Nama kota minimal 3 karakter"),
  kodePos: z.string().regex(/^\d{5}$/, "Kode pos wajib 5 digit angka"),
});

export const SkemaItemPesanan = z.object({
  idProduk: z.string(),
  nama: z.string(),
  harga: z.number().positive("Harga wajib lebih dari 0"),
  jumlah: z.number().int().min(1, "Jumlah item minimal 1"),
});

// ----------------------------------------------------------------------------
// 2. SKEMA INDUK (MENGGABUNGKAN OBJEK BERSARANG DAN ARRAY)
// ----------------------------------------------------------------------------
export const SkemaFakturBelanja = z.object({
  nomorInvoice: z.string(),
  pelanggan: z.string(),
  tujuan: SkemaAlamatPengiriman, // Objek bersarang
  rincianBarang: z.array(SkemaItemPesanan).nonempty("Keranjang belanja tidak boleh kosong!"), // Array of objects
});

export type FakturBelanja = z.infer<typeof SkemaFakturBelanja>;

// ----------------------------------------------------------------------------
// 3. MENGUJI DATA DENGAN ERROR BERSARANG
// ----------------------------------------------------------------------------
const payloadMentahDenganError: unknown = {
  nomorInvoice: "INV-2026-99",
  pelanggan: "Rayhan Dwi",
  tujuan: {
    kota: "Bd", // Error: < 3 karakter
    kodePos: "4011", // Error: hanya 4 digit (harus 5 digit)
  },
  rincianBarang: [
    {
      idProduk: "P1",
      nama: "Mouse Wireless",
      harga: 250000,
      jumlah: 2,
    },
    {
      idProduk: "P2",
      nama: "Keyboard",
      harga: -50000, // Error: harga negatif!
      jumlah: 0, // Error: jumlah minimal 1!
    },
  ],
};

console.log("Memvalidasi Payload Faktur Kompleks:");
const hasil = SkemaFakturBelanja.safeParse(payloadMentahDenganError);

if (!hasil.success) {
  console.log("❌ Ditemukan Masalah pada Struktur Bersarang:");
  hasil.error.issues.forEach((err, idx) => {
    // Lokasi field ditunjukkan dengan format dot notation (tujuan.kota, rincianBarang.1.harga)
    console.log(`   ${idx + 1}. [Lokasi: ${err.path.join(".")}]`);
    console.log(`      Pesan: ${err.message}`);
  });
} else {
  console.log("✅ Faktur Lolos Validasi Penuh!");
}
