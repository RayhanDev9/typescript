# 13 · Challenge: Modern FP Data Pipeline

## 🎯 Misi Utama
Membangun sistem pemrosesan transaksi e-commerce (**E-Commerce Order & Analytics Pipeline**) menggunakan seluruh konsep modern TypeScript dan Functional Programming yang telah dipelajari:
1. **Arsitektur Modular**: Pemisahan antarmuka (type-only), fungsi murni, dan logika pipa.
2. **Kekekalan Data (Immutability)**: Menjamin tidak ada data inventaris atau keranjang belanja yang dimutasi langsung.
3. **Pure Functions & Currying**: Membuat fungsi kalkulasi diskon dan pajak yang dapat dikonfigurasi ulang (*reusable & configurable*).
4. **Data Piping (`pipe`)**: Mengalirkan data pesanan dari status mentah hingga menjadi laporan kwitansi siap cetak.

---

## 📋 Spesifikasi Data & Alur Pipeline

### 1. Struktur Data Pesanan (`Pesanan`)
- `id`: string
- `namaPelanggan`: string
- `item`: Array produk (`{ nama: string; harga: number; jumlah: number; tersedia: boolean }`)
- `wilayah`: "domestik" | "internasional"

### 2. Tahapan Alur Kerja (Pipeline):
1. **Saring Ketersediaan**: Buang barang yang `tersedia: false`.
2. **Kalkulasi Subtotal**: Hitung total harga barang yang tersedia secara akurat.
3. **Penerapan Diskon Bertingkat (Curried)**:
   - Jika subtotal > Rp 1.000.000 -> diskon 15%
   - Jika subtotal > Rp 500.000 -> diskon 10%
   - Selain itu -> tanpa diskon
4. **Penerapan Pajak & Ongkir Wilayah**:
   - Domestik: Pajak 11%, Ongkir Rp 25.000
   - Internasional: Pajak 0%, Ongkir Rp 150.000
5. **Cetak Ringkasan Nota**: Mengembalikan objek `LaporanTransaksi` yang berisi detail transaksi lengkap.

---

## 🏆 Kriteria Kelulusan
- [ ] Menggunakan sintaks TypeScript modern dengan anotasi tipe data yang ketat (`strict`).
- [ ] Menerapkan `readonly` pada tipe data pesanan agar kebal dari mutasi.
- [ ] Menggunakan prinsip FP (`pipe`, pure functions, currying) tanpa perulangan imperatif `for`/`while` dan tanpa variabel `let`.
- [ ] Berkas `latihan.ts` dapat dijalankan dan menghasilkan output identik dengan `solusi.ts`.
