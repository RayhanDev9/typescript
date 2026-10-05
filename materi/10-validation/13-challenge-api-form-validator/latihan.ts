// ============================================================
// 13 · Challenge: API & Form Validator — Latihan
// Jalankan: npm run materi -- materi/10-validation/13-challenge-api-form-validator/latihan.ts
// ============================================================

import { z } from "zod";

/**
 * 🎯 TANTANGAN BESAR:
 * Bangun modul validasi transaksi Checkout E-Commerce standar industri!
 *
 * 📌 SPESIFIKASI SKEMA:
 * 1. `SkemaPembeli`:
 *    - `namaLengkap`: string, trim(), min 3 huruf.
 *    - `email`: string, trim(), toLowerCase(), format email sah.
 *    - `nomorWhatsApp`: string, regex /^(08|628)[0-9]{8,12}$/ (diawali 08 atau 628).
 *
 * 2. `SkemaAlamat`:
 *    - `jalan`: string, min 5 karakter.
 *    - `kota`: string, trim(), min 3 karakter.
 *    - `kodePos`: string, regex /^\d{5}$/ (tepat 5 digit angka).
 *
 * 3. `SkemaItemCheckout`:
 *    - `sku`: string.
 *    - `namaBarang`: string.
 *    - `hargaSatuan`: number, positif (> 0).
 *    - `kuantitas`: number, integer, min 1.
 *    - `diskonPersen`: number, min 0, max 100, default 0.
 *
 * 4. `SkemaCheckoutUtama`:
 *    - `nomorTransaksi`: string.
 *    - `pembeli`: SkemaPembeli.
 *    - `alamat`: SkemaAlamat.
 *    - `items`: array dari SkemaItemCheckout, tidak boleh kosong.
 *    - `metodePembayaran`: z.enum(["TRANSFER_BANK", "E_WALLET", "COD"]).
 *    - `catatanKurir`: string, default "".
 *
 * 5. Buat fungsi `prosesValidasiCheckout(payload: unknown)`:
 *    - Jika sukses: kembalikan `{ sukses: true, data: ..., totalBayar: number }`.
 *      Rumus totalBayar: jumlahkan (hargaSatuan - potonganDiskon) * kuantitas untuk setiap item.
 *    - Jika gagal: kembalikan `{ sukses: false, daftarError: ... }` (format pesan per path/field).
 */

// Data Uji Coba:
export const payloadPesananKotor: unknown = {
  nomorTransaksi: "TRX-2026-X77",
  pembeli: {
    namaLengkap: "   Andi Pratama   ",
    email: "ANDI.PRATAMA@GMAIL.COM",
    nomorWhatsApp: "081298765432",
  },
  alamat: {
    jalan: "Jl. Merdeka No. 45",
    kota: "Bandung",
    kodePos: "40115",
  },
  items: [
    {
      sku: "SKU-MONITOR",
      namaBarang: "Monitor Gaming 24 Inch",
      hargaSatuan: 2000000,
      kuantitas: 1,
      diskonPersen: 10, // Diskon 10%
    },
    {
      sku: "SKU-KABEL",
      namaBarang: "Kabel HDMI Gold",
      hargaSatuan: 100000,
      kuantitas: 2,
      // diskonPersen tidak diisi -> default 0
    },
  ],
  metodePembayaran: "TRANSFER_BANK",
  // catatanKurir tidak diisi -> default ""
};

// TULIS IMPLEMENTASI SKEMA DAN FUNGSI ANDA DI BAWAH INI:




// Eksekusi untuk menguji:
// console.log("Hasil Checkout:", prosesValidasiCheckout(payloadPesananKotor));
