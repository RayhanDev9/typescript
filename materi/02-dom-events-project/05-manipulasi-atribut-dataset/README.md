# 05 · Manipulasi Atribut & Dataset HTML

## 🎯 Tujuan Belajar
- Memahami perbedaan antara **properti langsung elemen** dan method **`getAttribute` / `setAttribute`**.
- Memeriksa (`hasAttribute`) dan menghapus (`removeAttribute`) atribut pada elemen HTML.
- Mengontrol atribut fungsional seperti `disabled`, `required`, dan `placeholder`.
- Memahami dan memanfaatkan **HTML5 Custom Data Attributes (`data-*`)** melalui properti **`dataset`** di TypeScript.

---

## 🧠 Analogi Dunia Nyata: "Label Bagasi Pesawat"
Bayangkan sebuah koper di bandara:
- Koper itu sendiri adalah elemen HTML (`<div>`).
- Koper memiliki ciri fisik bawaan seperti warna atau pegangan (properti standar seperti `id`, `className`).
- Bandara menempelkan stiker khusus berupa kode barcode penerbangan `data-flight="GA-123"` dan tujuan `data-city="DPS"`. Stiker ini tidak mengubah bentuk fisik koper, tetapi menyimpan **informasi data kustom tambahan** yang bisa dibaca oleh petugas bandara (**`dataset`**).

---

## 📘 Konsep Dasar

### 1. Properti Langsung vs Method Atribut
Sebagian besar atribut standar HTML dapat diakses langsung sebagai properti di TypeScript:

```ts
const gambar = document.querySelector<HTMLImageElement>("#logo")!;

// Akses Properti Langsung:
gambar.src = "logo-baru.png";
gambar.alt = "Logo Resmi TypeScript";

// Menggunakan Method Atribut Standar:
gambar.setAttribute("src", "logo-baru.png");
console.log(gambar.getAttribute("alt")); // "Logo Resmi TypeScript"
```

> 💡 **Kapan memakai properti langsung?**
> Untuk atribut standar seperti `src`, `href`, `id`, `disabled`, `value`, akses properti langsung lebih cepat dan memiliki bantuan *auto-complete* TypeScript yang lengkap!

---

### 2. Method `hasAttribute` dan `removeAttribute`
```ts
const tombol = document.querySelector<HTMLButtonElement>("#btn-bayar")!;

// Mengecek apakah tombol memiliki atribut 'disabled'
if (tombol.hasAttribute("disabled")) {
  console.log("Tombol sedang terkunci!");
}

// Menghapus atribut disabled (mengaktifkan tombol kembali)
tombol.removeAttribute("disabled");
```

---

## 🔷 TypeScript Corner: Atribut Kustom HTML5 (`data-*` & `dataset`)

HTML5 memungkinkan kita menyimpan data khusus pada elemen menggunakan awalan `data-`:

```html
<button class="btn-item" data-id="101" data-kategori="elektronik" data-harga-diskon="150000">
  Beli Sekarang
</button>
```

Di TypeScript, semua atribut `data-*` otomatis dikumpulkan ke dalam objek **`element.dataset`** bertipe **`DOMStringMap`**:

```ts
const tombolItem = document.querySelector<HTMLButtonElement>(".btn-item")!;

// 1. Membaca data-id
console.log(tombolItem.dataset.id); // "101"

// 2. data-kategori
console.log(tombolItem.dataset.kategori); // "elektronik"

// 3. Nama dengan tanda minus (kebab-case) otomatis diubah menjadi camelCase!
// data-harga-diskon  --->  dataset.hargaDiskon
console.log(tombolItem.dataset.hargaDiskon); // "150000"

// 4. Menambahkan data baru lewat TypeScript
tombolItem.dataset.stokTersedia = "12";
// Di HTML sekarang menjadi: data-stok-tersedia="12"
```

> ⚠️ **Penting**: Semua nilai di dalam `dataset` **selalu bertipe `string`** (atau `undefined` jika tidak ada). Jika menyimpan angka, jangan lupa lakukan konversi dengan `Number()`!

---

## ⚠️ Kesalahan Umum Pemula

1. **Lupa konversi tipe angka dari dataset**:
   ```ts
   // SALAH: dataset menghasilkan string "100", bukan number 100
   const harga = tombol.dataset.harga;
   const total = harga + 5000; // Hasilnya "1005000" (penggabungan string)!

   // BENAR:
   const total = Number(harga) + 5000; // 105000 (penjumlahan matematika)
   ```

2. **Menulis nama kebab-case di dataset**:
   ```ts
   // SALAH: dataset tidak mengenali tanda minus di propertinya
   console.log(tombol.dataset["harga-diskon"]); // Hindari cara ini

   // BENAR: Gunakan format camelCase
   console.log(tombol.dataset.hargaDiskon);
   ```

---

## 📌 Ringkasan
- Gunakan properti langsung (`img.src`, `input.disabled`) untuk atribut standar web.
- Gunakan `getAttribute()`, `setAttribute()`, `hasAttribute()`, dan `removeAttribute()` untuk fleksibilitas manipulasi atribut dinamis.
- Gunakan `data-*` di HTML dan akses melalui `element.dataset` di TypeScript untuk menyimpan metadata bisnis langsung pada elemen visual.
