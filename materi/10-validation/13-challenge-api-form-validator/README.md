# 13 · Challenge: Type-Safe Registration & Checkout Engine

## 🎯 Misi Utama
Membangun mesin pemroses dan validator transaksi pemesanan belanja (**Type-Safe E-Commerce Checkout Validation Engine**) yang menyambut data mentah (`unknown`) dari internet, membersihkannya, dan menjamin data yang lolos memiliki pengetikan TypeScript yang 100% aman dan akurat.

Tantangan ini merefleksikan arsitektur penanganan API Request di backend modern (seperti Express, Fastify, Next.js API Routes, atau tRPC).

---

## 📋 Spesifikasi Kebutuhan Teknis

### 1. Struktur Skema Data Checkout
1. **Identitas Pembeli (`Pembeli`)**:
   - `namaLengkap`: string, minimal 3 karakter, di-trim.
   - `email`: string, format email sah, di-trim, huruf kecil.
   - `nomorWhatsApp`: string, wajib diawali `08` atau `628`, panjang 10-15 digit angka.
2. **Alamat Pengiriman (`Alamat`)**:
   - `alamatJalan`: string, minimal 5 karakter.
   - `kota`: string, minimal 3 karakter.
   - `kodePos`: string, tepat 5 digit angka.
3. **Item Keranjang (`ItemKeranjang`)**:
   - `sku`: string.
   - `namaBarang`: string.
   - `hargaSatuan`: number, positif (> 0).
   - `kuantitas`: number integer, minimal 1.
   - `diskonPersen`: number, minimal 0, maksimal 100, default `0`.
4. **Detail Transaksi Utama (`CheckoutPayload`)**:
   - `nomorTransaksi`: string.
   - `pembeli`: Objek Pembeli.
   - `alamat`: Objek Alamat.
   - `items`: Array ItemKeranjang, **tidak boleh kosong**.
   - `metodePembayaran`: z.enum(["TRANSFER_BANK", "E_WALLET", "COD"]).
   - `catatanKurir`: string opsional dengan default `""`.

### 2. Fungsi Engine Pemrosesan (`prosesValidasiCheckout`)
Fungsi menerima `payload: unknown` dan mengembalikan discriminated union:
```ts
type HasilValidasiCheckout =
  | { sukses: true; data: CheckoutData; ringkasanTotalBayar: number }
  | { sukses: false; daftarError: Record<string, string[]> };
```

---

## 🏆 Kriteria Kelulusan
- [ ] Menggunakan Zod schema modular (sub-skema untuk Pembeli, Alamat, Item).
- [ ] Menggunakan type inference `z.infer` untuk menghasilkan tipe data tanpa duplikasi.
- [ ] Menerapkan sanitasi (`.trim()`, `.toLowerCase()`) dan nilai default.
- [ ] Menghitung ringkasan total tagihan bersih (harga * kuantitas - diskon) pada hasil yang sukses.
- [ ] Mengembalikan daftar error yang rapi per field jika ada input yang tidak sah.
- [ ] Lolos kompilasi penuh `npm run typecheck`.
