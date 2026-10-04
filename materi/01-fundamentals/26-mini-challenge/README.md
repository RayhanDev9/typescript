# 26 · Mini Challenge: Sistem Analisis Tagihan & Tip Restoran

## 🎯 Tujuan Proyek
Menguji pemahamanmu tentang seluruh materi di **Modul 1: TypeScript Fundamentals** dengan membangun program utuh yang mengombinasikan:
- Anotasi tipe & **Interface TypeScript**
- **Fungsi** & Helper composition
- **Array** & Manipulasi data
- **Loop `for`** untuk agregasi perhitungan statistik
- **Kondisional** (`if/else` atau operator ternary)

---

## 📋 Deskripsi Kasus

Sebuah grup pertemanan pergi makan bersama di 10 restoran berbeda selama liburan. Mereka ingin membuat program TypeScript otomatis untuk menganalisis pengeluaran mereka:

### Aturan Perhitungan Tip:
- Jika tagihan bernilai antara **Rp 50.000 s/d Rp 300.000** (inklusif), beri tip **15%**.
- Jika di luar rentang tersebut (di bawah 50.000 atau di atas 300.000), beri tip **20%**.

### Data 10 Tagihan Makanan:
`[22000, 295000, 176000, 440000, 37000, 105000, 10000, 1100000, 86000, 52000]`

---

## 🛠️ Tugas yang Harus Dikerjakan (di `latihan.ts`):

1. **Definisikan Interface `LaporanTagihan`**:
   - `id`: number
   - `tagihan`: number
   - `tip`: number
   - `totalBayar`: number
2. **Buat Fungsi `hitungTip(tagihan: number): number`** menggunakan rumus di atas.
3. **Gunakan Loop `for`** untuk memproses ke-10 tagihan:
   - Hitung tip masing-masing tagihan
   - Hitung total bayar (tagihan + tip)
   - Simpan setiap objek ke dalam array `laporanSemuaTagihan: LaporanTagihan[]`
4. **Buat Fungsi `hitungRataRata(daftarAngka: number[]): number`** yang bisa menghitung rata-rata dari array number apa pun.
5. **Cetak Ringkasan Statistik**:
   - Total seluruh pengeluaran makan
   - Rata-rata tagihan
   - Rata-rata tip yang diberikan

---

## ✍️ Mulai Mengerjakan

Buka [`latihan.ts`](./latihan.ts) dan ikuti setiap instruksi `TODO`. Setelah selesai mencoba, bandingkan dengan [`solusi.ts`](./solusi.ts)!
