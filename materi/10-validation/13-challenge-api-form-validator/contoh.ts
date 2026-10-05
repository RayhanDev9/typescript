// ============================================================
// 13 · Challenge: API & Form Validator — Contoh
// Jalankan: npm run materi -- materi/10-validation/13-challenge-api-form-validator/contoh.ts
// ============================================================

import { z } from "zod";

console.log("=== DEMO ARCHITECTURE: ENTERPRISE CHECKOUT VALIDATOR ===\n");

// 1. Skema Mini Komponen Pembeli
export const SkemaMiniPembeli = z.object({
  nama: z.string().trim().min(3, "Nama minimal 3 huruf"),
  email: z.string().trim().toLowerCase().email("Email tidak valid"),
});

// 2. Skema Mini Item Belanja
export const SkemaMiniItem = z.object({
  namaProduk: z.string(),
  harga: z.number().positive("Harga wajib positif"),
  qty: z.number().int().min(1, "Qty minimal 1"),
});

// 3. Skema Induk Transaksi
export const SkemaMiniTransaksi = z.object({
  idInvoice: z.string(),
  pembeli: SkemaMiniPembeli,
  keranjang: z.array(SkemaMiniItem).nonempty("Keranjang tidak boleh kosong!"),
  metodeBayar: z.enum(["BCA", "MANDIRI", "GOPAY"]),
});

export type MiniTransaksi = z.infer<typeof SkemaMiniTransaksi>;

// 4. Simulasi Pemrosesan Request Masuk
const requestMasuk: unknown = {
  idInvoice: "INV-DEMO-001",
  pembeli: {
    nama: "   Rayhan Dwi   ",
    email: "RAYHAN@DEV.ID",
  },
  keranjang: [
    { namaProduk: "Mechanical Keyboard", harga: 750000, qty: 1 },
    { namaProduk: "Mousepad XL", harga: 120000, qty: 2 },
  ],
  metodeBayar: "BCA",
};

const hasilValidasi = SkemaMiniTransaksi.safeParse(requestMasuk);

if (hasilValidasi.success) {
  const data = hasilValidasi.data;
  const total = data.keranjang.reduce((acc, item) => acc + item.harga * item.qty, 0);

  console.log("✅ Request Valid & Lolos Sensor!");
  console.log(`Invoice      : ${data.idInvoice}`);
  console.log(`Pembeli      : ${data.pembeli.nama} (${data.pembeli.email})`);
  console.log(`Metode Bayar : ${data.metodeBayar}`);
  console.log(`Total Item   : ${data.keranjang.length} jenis barang`);
  console.log(`Total Tagihan: Rp ${total.toLocaleString("id-ID")}`);
} else {
  console.log("❌ Gagal Validasi:", hasilValidasi.error.flatten().fieldErrors);
}
