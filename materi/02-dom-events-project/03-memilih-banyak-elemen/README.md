# 03 · Memilih Banyak Elemen (Selecting Multiple Elements)

## 🎯 Tujuan Belajar
- Memahami cara memilih sekumpulan elemen sekaligus menggunakan `document.querySelectorAll`.
- Memahami perbedaan tipe data antara **`NodeList`**, **`HTMLCollection`**, dan **`Array`** sejati di TypeScript.
- Melakukan perulangan (*looping*) pada sekumpulan elemen menggunakan method `.forEach()`.
- Mengonversi `NodeList` menjadi Array sejati menggunakan `Array.from()` atau *spread operator* (`...`) agar dapat memakai method canggih seperti `.map()` dan `.filter()`.

---

## 🧠 Analogi Dunia Nyata: "Daftar Belanja di Keranjang"
Bayangkan Anda berbelanja buah di supermarket:
- **`querySelector`** seperti mencari satu buah apel pertama yang Anda temukan di rak.
- **`querySelectorAll`** seperti mengambil **satu kantong penuh berisi semua buah apel** yang ada di rak tersebut!
- Kantong buah ini mirip dengan **`NodeList`**: Anda bisa melihat isinya satu per satu dan menghitung ada berapa buah di dalamnya (`.length`), tetapi kantong tersebut bukanlah kotak perkakas (*Array*) sehingga beberapa alat khusus perkakas belum bisa langsung dipakai kecuali buahnya Anda pindahkan terlebih dahulu ke kotak perkakas (`Array.from()`).

---

## 📘 Konsep Dasar

### 1. `document.querySelectorAll('selector')`
Method ini mencari **semua** elemen yang cocok dengan selektor CSS dan mengembalikannya dalam bentuk koleksi bernama **`NodeList`**:

```ts
// Mengambil semua elemen paragraf
const semuaParagraf = document.querySelectorAll("p");

// Mengambil semua tombol yang memiliki class .btn-opsi
const semuaTombol = document.querySelectorAll(".btn-opsi");
```

> 💡 **Penting**: Tidak seperti `querySelector` yang bisa menghasilkan `null` jika tidak ada elemen yang cocok, `querySelectorAll` **tidak pernah menghasilkan `null`**! Jika tidak ada elemen yang cocok, ia mengembalikan `NodeList` kosong dengan panjang 0 (`length === 0`).

---

## 🔷 TypeScript Corner: Generic Type `NodeListOf<T>`

Ketika Anda menggunakan `querySelectorAll` di TypeScript, Anda bisa menyematkan generic type:

```ts
// Tipe otomatis: NodeListOf<HTMLButtonElement>
const daftarTombol = document.querySelectorAll<HTMLButtonElement>(".btn-angka");
```

Dengan anotasi ini, saat Anda melakukan iterasi, TypeScript otomatis mengetahui bahwa setiap item di dalamnya adalah `HTMLButtonElement`, lengkap dengan properti seperti `.disabled`, `.value`, dll.

### 2. Melakukan Iterasi dengan `.forEach()`
`NodeList` bawaan browser sudah memiliki method bawaan `.forEach()`:

```ts
daftarTombol.forEach((tombol, index) => {
  console.log(`Tombol ke-${index + 1}:`, tombol.textContent);
  // TypeScript tahu 'tombol' adalah HTMLButtonElement!
  tombol.style.backgroundColor = "#0284c7";
});
```

---

### 3. Mengubah `NodeList` Menjadi `Array` Sejati

`NodeList` **bukanlah Array** murni! Ia tidak memiliki method array seperti `.map()`, `.filter()`, `.reduce()`, atau `.some()`.

Untuk mengubahnya menjadi Array sejati di TypeScript, gunakan salah satu dari 2 cara berikut:

```ts
// CARA 1: Menggunakan Array.from (Sangat direkomendasikan & eksplisit)
const arrayTombol = Array.from(daftarTombol); // Tipe: HTMLButtonElement[]

// CARA 2: Menggunakan Spread Operator (...)
const arrayTombolSpread = [...daftarTombol]; // Tipe: HTMLButtonElement[]

// Sekarang Anda bebas menggunakan method .filter() atau .map()!
const tombolAktif = arrayTombol.filter(tombol => !tombol.disabled);
```

---

## ⚠️ Kesalahan Umum Pemula

1. **Mencoba mengubah style langsung pada `NodeList`**:
   ```ts
   // SALAH: NodeList adalah sekumpulan elemen, bukan satu elemen tunggal!
   // Error: Property 'style' does not exist on type 'NodeListOf<...>'
   const semuaKotak = document.querySelectorAll(".kotak");
   semuaKotak.style.color = "red";

   // BENAR: Gunakan perulangan .forEach()
   semuaKotak.forEach(kotak => {
     (kotak as HTMLElement).style.color = "red";
   });
   ```

2. **Memeriksa apakah `querySelectorAll` bernilai `null`**:
   `querySelectorAll` tidak pernah mengembalikan `null`. Untuk mengecek apakah elemen ada, periksa panjangnya:
   ```ts
   if (semuaKotak.length === 0) {
     console.log("Elemen tidak ditemukan!");
   }
   ```

---

## 📌 Ringkasan
- `document.querySelectorAll<T>('selector')` mengambil semua elemen yang cocok sebagai `NodeListOf<T>`.
- `NodeList` tidak pernah bernilai `null`. Periksa keberadaannya dengan properti `.length`.
- Gunakan `.forEach((item, index) => { ... })` untuk memanipulasi setiap elemen secara berulang.
- Konversi ke Array sejati menggunakan `Array.from()` jika membutuhkan method `.map()` atau `.filter()`.
