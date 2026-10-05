// ============================================================
// 13 · Challenge: API & Form Validator — Solusi
// Jalankan: npm run materi -- materi/10-validation/13-challenge-api-form-validator/solusi.ts
// ============================================================

import { z } from "zod";
import { payloadPesananKotor } from "./latihan";

// 1. Skema Pembeli
export const SkemaPembeli = z.object({
  namaLengkap: z
    .string({ error: "Nama lengkap wajib diisi" })
    .trim()
    .min(3, "Nama lengkap minimal 3 karakter"),

  email: z
    .string({ error: "Email wajib diisi" })
    .trim()
    .toLowerCase()
    .email("Format alamat email tidak valid"),

  nomorWhatsApp: z
    .string({ error: "Nomor WhatsApp wajib diisi" })
    .regex(
      /^(08|628)[0-9]{8,12}$/,
      "Nomor WhatsApp harus diawali 08 atau 628 dengan panjang 10-14 digit angka"
    ),
});

// 2. Skema Alamat
export const SkemaAlamat = z.object({
  jalan: z
    .string({ error: "Alamat jalan wajib diisi" })
    .min(5, "Alamat jalan minimal 5 karakter"),

  kota: z
    .string({ error: "Kota wajib diisi" })
    .trim()
    .min(3, "Nama kota minimal 3 karakter"),

  kodePos: z
    .string({ error: "Kode pos wajib diisi" })
    .regex(/^\d{5}$/, "Kode pos harus tepat 5 digit angka"),
});

// 3. Skema Item Checkout
export const SkemaItemCheckout = z.object({
  sku: z.string().min(1, "SKU tidak boleh kosong"),
  namaBarang: z.string().min(1, "Nama barang tidak boleh kosong"),
  hargaSatuan: z.number().positive("Harga satuan harus lebih dari 0"),
  kuantitas: z.number().int().min(1, "Minimal kuantitas pembelian adalah 1"),
  diskonPersen: z.number().min(0).max(100).default(0),
});

// 4. Skema Checkout Utama
export const SkemaCheckoutUtama = z.object({
  nomorTransaksi: z.string().min(1, "Nomor transaksi wajib ada"),
  pembeli: SkemaPembeli,
  alamat: SkemaAlamat,
  items: z.array(SkemaItemCheckout).nonempty("Keranjang checkout tidak boleh kosong!"),
  metodePembayaran: z.enum(["TRANSFER_BANK", "E_WALLET", "COD"], {
    error: "Metode pembayaran harus salah satu dari: TRANSFER_BANK, E_WALLET, COD",
  }),
  catatanKurir: z.string().default(""),
});

export type CheckoutData = z.infer<typeof SkemaCheckoutUtama>;

export type HasilValidasiCheckout =
  | { sukses: true; data: CheckoutData; totalBayar: number }
  | { sukses: false; daftarError: Record<string, string[]> };

// 5. Engine Pemroses Validasi
export function prosesValidasiCheckout(payload: unknown): HasilValidasiCheckout {
  const hasil = SkemaCheckoutUtama.safeParse(payload);

  if (!hasil.success) {
    const errorPerField: Record<string, string[]> = {};
    hasil.error.issues.forEach((issue) => {
      const lokasi = issue.path.join(".") || "umum";
      if (!errorPerField[lokasi]) {
        errorPerField[lokasi] = [];
      }
      errorPerField[lokasi].push(issue.message);
    });

    return {
      sukses: false,
      daftarError: errorPerField,
    };
  }

  // Hitung total bersih
  const data = hasil.data;
  const total = data.items.reduce((acc, item) => {
    const nilaiDiskon = item.hargaSatuan * (item.diskonPersen / 100);
    const hargaBersih = item.hargaSatuan - nilaiDiskon;
    return acc + hargaBersih * item.kuantitas;
  }, 0);

  return {
    sukses: true,
    data,
    totalBayar: total,
  };
}

console.log("=== PENGUJIAN SOLUSI CHECKOUT VALIDATION ENGINE ===");

const hasilCheckout = prosesValidasiCheckout(payloadPesananKotor);

if (hasilCheckout.sukses) {
  const p = hasilCheckout.data;
  console.log("✅ CHECKOUT BERHASIL DIVERIFIKASI!");
  console.log(`No. Transaksi  : ${p.nomorTransaksi}`);
  console.log(`Nama Pembeli   : ${p.pembeli.namaLengkap} (Sanitasi: bersih spasi)`);
  console.log(`Email          : ${p.pembeli.email} (Sanitasi: huruf kecil)`);
  console.log(`No. WhatsApp   : ${p.pembeli.nomorWhatsApp}`);
  console.log(`Alamat Kirim   : ${p.alamat.jalan}, ${p.alamat.kota} (${p.alamat.kodePos})`);
  console.log(`Metode Bayar   : ${p.metodePembayaran}`);
  console.log(`Catatan Kurir  : "${p.catatanKurir}" (Default fallback)`);
  console.log("--------------------------------------------------");
  console.log("Daftar Item Belanja:");
  p.items.forEach((item, idx) => {
    const diskonInfo = item.diskonPersen > 0 ? ` [Diskon ${item.diskonPersen}%]` : "";
    console.log(`  ${idx + 1}. [${item.sku}] ${item.namaBarang} x${item.kuantitas}${diskonInfo}`);
  });
  console.log("==================================================");
  console.log(`TOTAL AKHIR    : Rp ${hasilCheckout.totalBayar.toLocaleString("id-ID")}`);
} else {
  console.log("❌ Checkout Ditolak:", hasilCheckout.daftarError);
}
