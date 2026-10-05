# 11 · Validasi Objek Bersarang & Array

## 🎯 Tujuan Belajar
- Menguasai pemodelan skema untuk struktur data bersarang (**Nested Objects**): `z.object({ alamat: z.object({...}) })`.
- Menguasai validasi daftar data (**Arrays**): `z.array(SkemaItem)`.
- Menguasai pembatasan array: **`.min()`**, **`.max()`**, dan **`.nonempty()`** (array tidak boleh kosong).
- Memahami bagaimana Zod melacak lokasi error bersarang secara presisi: `["pesanan", "item", 0, "harga"]` ➔ `"pesanan.item.0.harga"`.
- Menerapkan arsitektur skema modular (memecah skema besar menjadi sub-skema yang dapat dipakai ulang).

---

## 🧠 Analogi Dunia Nyata: "Paket Belanja Keranjang E-Commerce"
Bayangkan sebuah pesanan belanja di toko online:
- Pesanan utama terdiri dari: ID Pesanan, Pelanggan, Alamat Pengiriman, dan Daftar Barang Belanjaan.
- **Validasi Bersarang (Nested)**:
  - Memeriksa Alamat Pengiriman: Tidak cukup mengecek `"alamat: object"`, melainkan harus memeriksa bahwa di dalamnya ada `kota`, `provinsi`, dan `kodePos` (**Objek di dalam Objek**).
- **Validasi Array**:
  - Keranjang belanja harus berisi **minimal 1 barang** (**`z.array().nonempty()`**).
  - Setiap barang di dalam keranjang wajib memiliki `namaProduk`, `jumlah > 0`, dan `harga > 0`.
- Jika barang ke-3 jumlahnya `0`, Zod akan langsung menunjuk lokasi tepatnya: *"Error di Item Nomor 3 pada kolom Jumlah!"*.

---

## 📘 Konsep Dasar

### 1. Membangun Sub-Skema Modular
```ts
import { z } from "zod";

// Sub-skema 1: Alamat
export const SkemaAlamat = z.object({
  jalan: z.string().min(5, "Alamat jalan terlalu pendek"),
  kota: z.string().min(2),
  kodePos: z.string().regex(/^\d{5}$/, "Kode pos harus 5 digit angka"),
});

// Sub-skema 2: Item Barang
export const SkemaItemKeranjang = z.object({
  idProduk: z.string(),
  nama: z.string(),
  harga: z.number().positive("Harga harus lebih dari 0"),
  kuantitas: z.number().int().min(1, "Minimal beli 1 barang"),
});

// Skema Induk: Transaksi Pembelian
export const SkemaTransaksi = z.object({
  nomorPesanan: z.string(),
  alamatTujuan: SkemaAlamat, // <-- Objek bersarang
  daftarItem: z.array(SkemaItemKeranjang).nonempty("Keranjang belanja tidak boleh kosong!"), // <-- Array objek
});
```

---

### 2. Membaca Path Error Bersarang
Saat validasi gagal, properti `issue.path` adalah array yang menunjukkan posisi tepat:
```ts
const hasil = SkemaTransaksi.safeParse(data);
if (!hasil.success) {
  hasil.error.issues.forEach((err) => {
    // Menghasilkan string seperti: "alamatTujuan.kodePos" atau "daftarItem.0.harga"
    console.log(`Lokasi: ${err.path.join(".")} -> ${err.message}`);
  });
}
```

---

## 📌 Ringkasan
- Pecah struktur data besar menjadi sub-skema kecil agar mudah dibaca dan dapat dipakai ulang di tempat lain.
- Gunakan `.nonempty()` pada `z.array()` untuk mencegah pengiriman keranjang kosong.
- `err.path.join(".")` memetakan letak error hingga ke elemen terdalam.
