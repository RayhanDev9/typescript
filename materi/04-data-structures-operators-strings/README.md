# 📦 Modul 04: Data Structures, Modern Operators & Strings

Selamat datang di **Modul 04**! Modul ini membahas struktur data modern, operator canggih JavaScript/TypeScript, dan manipulasi teks (string) yang menjadi standar industri pengembangan modern.

Sepanjang modul ini, kita akan menggunakan studi kasus nyata: **Sistem Data Restoran & Pesanan Makanan** agar semua contoh saling terhubung dan mudah dibayangkan.

---

## 🗺️ Peta Materi

```text
materi/04-data-structures-operators-strings/
├── 01-destructuring-array/          # Membongkar elemen array & tuple
├── 02-destructuring-object/         # Membongkar properti object & parameter fungsi
├── 03-spread-operator/              # Menyebarkan / menyalin array & object (...)
├── 04-rest-pattern/                 # Mengumpulkan sisa elemen / argumen (...)
├── 05-short-circuiting/             # Operator logika && dan || sebagai pengembali nilai
├── 06-nullish-coalescing/           # Operator ?? untuk menangani null / undefined
├── 07-logical-assignment/           # Operator ||=, &&=, dan ??=
├── 08-loop-for-of/                  # Iterasi modern pada array dengan for...of & entries()
├── 09-enhanced-object-literal/      # Shorthand property, method, & computed property name
├── 10-optional-chaining/            # Akses aman properti bersarang (?.)
├── 11-looping-object/               # Object.keys(), Object.values(), Object.entries()
├── 12-set/                          # Koleksi data unik (Set<T>)
├── 13-map-dasar/                    # Key-value store canggih (Map<K, V>)
├── 14-map-iterasi-dan-konversi/     # Looping Map & konversi Map ↔ Object/Array
├── 15-memilih-struktur-data/        # Panduan & tabel keputusan (Array vs Set vs Object vs Map)
├── 16-method-string-1/              # slice, indexOf, toUpperCase, trim, replace, includes
├── 17-method-string-2/              # split, join, padStart/padEnd, repeat, masking data
└── 18-challenge/                    # Tantangan gabungan: Statistik Sepak Bola & Parser Log
```

---

## 📚 Pembagian Bagian

### 🍕 Bagian A: Destructuring, Spread & Rest
Membongkar dan mengemas kembali data dengan sintaks modern yang ringkas dan ekspresif.
- [01 · Destructuring Array](./01-destructuring-array/README.md)
- [02 · Destructuring Object](./02-destructuring-object/README.md)
- [03 · Spread Operator](./03-spread-operator/README.md)
- [04 · Rest Pattern & Parameters](./04-rest-pattern/README.md)

### ⚡ Bagian B: Operator Modern & Objek
Menulis kode yang lebih bersih, aman dari error `undefined`, dan mudah dibaca.
- [05 · Short-Circuiting (`&&` dan `||`)](./05-short-circuiting/README.md)
- [06 · Nullish Coalescing Operator (`??`)](./06-nullish-coalescing/README.md)
- [07 · Logical Assignment (`||=`, `&&=`, `??=`)](./07-logical-assignment/README.md)
- [08 · Loop `for...of`](./08-loop-for-of/README.md)
- [09 · Enhanced Object Literal](./09-enhanced-object-literal/README.md)
- [10 · Optional Chaining (`?.`)](./10-optional-chaining/README.md)
- [11 · Looping Object](./11-looping-object/README.md)

### 🗂️ Bagian C: Set & Map
Struktur data bawaan JavaScript/TypeScript selain Array dan Object biasa.
- [12 · Set](./12-set/README.md)
- [13 · Map: Dasar](./13-map-dasar/README.md)
- [14 · Map: Iterasi & Konversi](./14-map-iterasi-dan-konversi/README.md)
- [15 · Memilih Struktur Data yang Tepat](./15-memilih-struktur-data/README.md)

### 🔤 Bagian D: String & Text Processing
Manipulasi teks tingkat lanjut untuk validasi data, pembersihan input, dan pemformatan.
- [16 · Method String Bagian 1](./16-method-string-1/README.md)
- [17 · Method String Bagian 2](./17-method-string-2/README.md)

### 🏆 Bagian E: Final Challenge
- [18 · Challenge: Statistik Pertandingan & Parser Log Penerbangan](./18-challenge/README.md)

---

## ▶️ Cara Belajar & Menjalankan Kode

1. Buka folder pelajaran yang ingin dipelajari, baca `README.md`.
2. Jalankan contoh kode:
   ```bash
   npm run materi -- materi/04-data-structures-operators-strings/01-destructuring-array/contoh.ts
   ```
3. Kerjakan `latihan.ts` dan jalankan:
   ```bash
   npm run materi -- materi/04-data-structures-operators-strings/01-destructuring-array/latihan.ts
   ```
4. Cocokkan jawabanmu dengan `solusi.ts`.
