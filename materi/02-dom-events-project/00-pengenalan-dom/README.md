# 00 · Pengenalan DOM (Document Object Model) & TypeScript

## 🎯 Tujuan Belajar
- Memahami apa itu **DOM** dan bagaimana browser menghubungkan HTML ke TypeScript
- Memilih elemen HTML menggunakan **`document.querySelector`** dengan anotasi Generic TypeScript (`<T>`)
- Membaca dan mengubah isi teks (**`.textContent`**) dan nilai formulir (**`.value`**)
- Mengubah gaya tampilan CSS secara langsung (**`.style`**) dan memanipulasi class (**`.classList`**)
- Menangani interaksi pengguna menggunakan **`addEventListener`**

---

## 🧠 Apa itu DOM?

DOM (*Document Object Model*) adalah **representasi pohon berstruktur** dari dokumen HTML yang dibuat oleh browser.

```text
               HTML (Document)
                     │
         ┌───────────┴───────────┐
       <head>                  <body>
         │                       │
      <title>             ┌──────┴──────┐
                        <h1>           <p>
```

> ⚠️ **Catatan Penting**: DOM **bukanlah bagian dari bahasa JavaScript/TypeScript**! DOM adalah bagian dari **Web APIs** (fitur bawaan browser) yang bisa kita kendalikan melalui kode TypeScript.

---

## 🔍 1. Memilih Elemen di TypeScript

Untuk mengambil elemen dari HTML ke dalam TypeScript:

```ts
// Memilih elemen paragraf dengan class .pesan
const pesanEl = document.querySelector<HTMLParagraphElement>(".pesan");

// Memilih input formulir dengan class .input-angka
const inputAngkaEl = document.querySelector<HTMLInputElement>(".input-angka");

// Memilih tombol dengan class .btn-kirim
const btnKirimEl = document.querySelector<HTMLButtonElement>(".btn-kirim");
```

### Mengapa TypeScript Membutuhkan Tipe Generic `<HTMLInputElement>`?
Elemen `<input>` memiliki properti `.value` (untuk membaca ketikan pengguna), sedangkan elemen `<p>` atau `<h1>` **tidak memiliki `.value`** (hanya punya `.textContent`).
Dengan menulis `<HTMLInputElement>`, TypeScript memberikan saran kode (*autocompletion*) yang tepat dan mencegah error akses properti.

---

## ✍️ 2. Membaca & Mengubah Elemen

```ts
// 1. Mengubah teks
const judulEl = document.querySelector<HTMLHeadingElement>("h1")!;
judulEl.textContent = "Tebak Angka yang Benar!";

// 2. Membaca & mengubah input
const inputEl = document.querySelector<HTMLInputElement>(".tebakan")!;
const nilaiTebakan: number = Number(inputEl.value); // Nilai input selalu string, ubah ke number!
inputEl.value = ""; // Mengosongkan kolom input

// 3. Mengubah gaya CSS langsung (Inline Style)
document.body.style.backgroundColor = "#60b347"; // Background hijau saat menang
judulEl.style.fontSize = "3rem";
```

> 💡 **Tanda Seru `!` (Non-null Assertion)**: Di TypeScript, `querySelector` bisa menghasilkan `null` jika class HTML tidak ditemukan. Tanda `!` di ujung memberi tahu TypeScript: *"Saya yakin elemen ini pasti ada di HTML"*.

---

## 🖱️ 3. Menangani Klik Pengguna (Event Listener)

Event adalah tindakan yang terjadi di browser (misal: klik mouse, tombol keyboard ditekan, scroll).

```ts
const tombolCek = document.querySelector<HTMLButtonElement>(".btn-cek")!;

tombolCek.addEventListener("click", () => {
  console.log("Tombol telah diklik oleh pengguna! 🖱️");
});
```

---

## 🎨 4. Memanipulasi Class CSS (`classList`)

Daripada mengubah style warna satu per satu di TypeScript, cara terbaik adalah membuat class CSS (misal `.hidden`) lalu menambah/menghapus class tersebut dari TypeScript:

```ts
const modalEl = document.querySelector<HTMLDivElement>(".modal")!;

// Menghapus class .hidden (sehingga modal muncul)
modalEl.classList.remove("hidden");

// Menambahkan class .hidden (sehingga modal tertutup)
modalEl.classList.add("hidden");

// Toggle (jika ada dihapus, jika tidak ada ditambahkan)
modalEl.classList.toggle("hidden");
```

---

## 📌 Ringkasan
- DOM menghubungkan kode TypeScript dengan elemen antarmuka halaman web.
- Gunakan `document.querySelector<TipeElemen>('selector')` untuk memilih elemen dengan aman di TypeScript.
- Gunakan `.textContent` untuk membaca/mengubah teks elemen biasa.
- Gunakan `.value` untuk membaca/mengubah isi elemen input formulir.
- Gunakan `.addEventListener('event', callback)` untuk merespons aksi pengguna.
- Gunakan `.classList.add()` dan `.classList.remove()` untuk memanipulasi tampilan secara rapi.
