# 02 · Memilih Elemen Tunggal (Selecting Single Element)

## 🎯 Tujuan Belajar
- Memahami cara memilih satu elemen HTML menggunakan `document.getElementById` dan `document.querySelector`.
- Menggunakan selektor CSS (tag, class `.`, id `#`, attribute `[]`) di dalam `querySelector`.
- Memahami mengapa elemen hasil pencarian bisa bertipe `null` di TypeScript.
- Memahami Generic Type Element di TypeScript (`querySelector<T>`) dan mengapa ini sangat penting untuk keselamatan tipe data.
- Mengetahui kapan aman menggunakan *Non-null Assertion* (`!`) dan kapan harus menggunakan *Type Guard* (`if (el !== null)`).

---

## 🧠 Analogi Dunia Nyata: "Memanggil Siswa di Ruang Kelas"
Bayangkan Anda seorang guru yang berdiri di depan ruang kelas:
- **`getElementById("absen-10")`**: Anda memanggil siswa dengan menyebut nomor induk uniknya: *"Siswa dengan nomor absen 10, maju ke depan!"*. Hanya ada satu siswa dengan nomor unik tersebut.
- **`querySelector(".ketua-kelas")`**: Anda memanggil siswa berdasarkan peran atau cirinya: *"Siapa yang menjabat sebagai ketua kelas?"*. Jika ada beberapa orang, yang pertama kali menyahut adalah yang Anda ajak bicara.
- **Kemungkinan `null`**: Bagaimana jika kelas tersebut belum memilih ketua kelas? Anda memanggil ke ruang kosong, tidak ada yang menjawab! Di dunia pemrograman, kondisi "tidak ditemukan" ini disebut **`null`**.

---

## 📘 Konsep Dasar

### 1. `document.getElementById('id')`
Digunakan untuk mengambil elemen berdasarkan atribut `id`. Karena ID di HTML harus unik, method ini hanya mencari berdasarkan ID tanpa awalan `#`:

```ts
const judulUtama = document.getElementById("judul-utama");
// Tipe judulUtama otomatis: HTMLElement | null
```

### 2. `document.querySelector('selector')`
Method modern dan paling fleksibel karena menerima **semua jenis selektor CSS**:

```ts
// 1. Berdasarkan nama Tag HTML
const paragrafPertama = document.querySelector("p");

// 2. Berdasarkan Class CSS (pakai tanda titik '.')
const pesanError = document.querySelector(".pesan-error");

// 3. Berdasarkan ID (pakai tanda tagar '#')
const tombolSimpan = document.querySelector("#btn-simpan");

// 4. Selektor Bersarang (Descendant)
const linkMenu = document.querySelector("nav .link-aktif");
```

---

## 🔷 TypeScript Corner: Generic Type & Masalah `null`

Jika Anda menulis di JavaScript biasa:
```js
const input = document.querySelector(".input-nama");
console.log(input.value); // Jalan di JS, tapi rawan crash jika elemen tidak ada!
```

Di TypeScript, kode di atas akan dicegah dengan dua alasan kuat:
1. `querySelector` menghasilkan tipe bawaan `Element | null`. Tipe `Element` umum **tidak memiliki properti `.value`**! Hanya elemen formulir (`<input>`, `<select>`, `<textarea>`) yang memilikinya.
2. Elemen bisa bernilai `null` jika class `.input-nama` salah ketik di HTML.

### Cara 1: Menggunakan Generic Type `<T>`
Beri tahu TypeScript tipe elemen spesifik yang Anda harapkan:

```ts
// Tipe elemen sekarang menjadi HTMLInputElement | null
const inputNama = document.querySelector<HTMLInputElement>(".input-nama");
```

### Daftar Tipe Elemen Umum di TypeScript:
| Tag HTML | Tipe TypeScript | Properti Khas |
| :--- | :--- | :--- |
| `<input>` | `HTMLInputElement` | `.value`, `.checked`, `.type`, `.disabled` |
| `<button>` | `HTMLButtonElement` | `.disabled`, `.type` |
| `<a>` | `HTMLAnchorElement` | `.href`, `.target` |
| `<img>` | `HTMLImageElement` | `.src`, `.alt`, `.width`, `.height` |
| `<p>` | `HTMLParagraphElement` | `.textContent` |
| `<h1>` - `<h6>` | `HTMLHeadingElement` | `.textContent` |
| `<div>` | `HTMLDivElement` | `.classList`, `.children` |

---

### Cara 2: Menangani `null` dengan Aman

Ada dua pendekatan standar di TypeScript:

#### Pendekatan A: Non-null Assertion Operator (`!`)
Jika Anda **100% yakin** elemen tersebut pasti ada di file HTML Anda (misal layout statis dasar):

```ts
// Tanda seru (!) di ujung memberi tahu TypeScript:
// "Elemen ini dijamin pasti ada, jangan anggap sebagai null!"
const tombolKirim = document.querySelector<HTMLButtonElement>("#btn-kirim")!;
tombolKirim.disabled = true; // Langsung aman tanpa error merah
```

#### Pendekatan B: Type Guard / Kondisional (`if`)
Sangat disarankan jika elemen bersifat dinamis atau bisa jadi belum ada:

```ts
const bannerPromo = document.querySelector<HTMLDivElement>(".banner-promo");

if (bannerPromo !== null) {
  // Di dalam blok if ini, TypeScript otomatis tahu bannerPromo BUKAN null!
  bannerPromo.style.display = "none";
}
```

---

## ⚠️ Kesalahan Umum Pemula

1. **Lupa tanda titik (`.`) atau pagar (`#`) pada `querySelector`**:
   ```ts
   // SALAH: Mencari tag HTML bernama <tombol-pesan> yang tidak ada!
   document.querySelector("tombol-pesan");

   // BENAR: Mencari elemen dengan class="tombol-pesan"
   document.querySelector(".tombol-pesan");
   ```

2. **Memasukkan `#` pada `getElementById`**:
   ```ts
   // SALAH: getElementById sudah otomatis mencari ID, jangan tambah '#'
   document.getElementById("#tombol");

   // BENAR:
   document.getElementById("tombol");
   ```

3. **Memaksa `as HTMLInputElement` pada elemen yang salah**:
   Jangan menggunakan type casting sembarangan jika elemen aslinya adalah `<div>`. Selalu pasangkan tipe dengan tag HTML yang sesuai.

---

## 📌 Ringkasan
- Gunakan `document.getElementById('id')` untuk mencari elemen berdasarkan ID unik.
- Gunakan `document.querySelector<T>('selector')` untuk fleksibilitas selektor CSS (tag, class, id, atribut).
- Selalu cantumkan generic type seperti `<HTMLInputElement>` atau `<HTMLButtonElement>` agar properti khusus elemen dapat diakses dengan auto-complete.
- Tangani `null` menggunakan tanda seru `!` jika elemen pasti ada di HTML, atau gunakan `if (el !== null)` untuk proteksi maksimal.
