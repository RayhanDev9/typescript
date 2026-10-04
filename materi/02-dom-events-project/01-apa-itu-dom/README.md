# 01 · Apa itu DOM & Pohon DOM (DOM Tree)

## 🎯 Tujuan Belajar
- Memahami konsep **DOM (Document Object Model)** dan perbedaannya dengan HTML teks biasa.
- Mengetahui perbedaan lingkungan eksekusi **Browser** (Web APIs) dan **Node.js**.
- Memahami konsep **Pohon DOM (DOM Tree)** serta hubungan induk (*parent*), anak (*child*), dan saudara (*sibling*).
- Mengenal hirarki tipe data DOM bawaan di TypeScript (`EventTarget` → `Node` → `Element` → `HTMLElement`).

---

## 🧠 Analogi Dunia Nyata: "Cetak Biru Arsitek vs Bangunan Asli"
Bayangkan Anda memiliki sebuah dokumen kertas berisi **gambar denah rumah (cetak biru / blueprint)**:
- **File HTML** di editor Anda adalah **cetak biru di atas kertas**. Dokumen ini hanya berupa teks diam (*static text*).
- **DOM (Document Object Model)** adalah **rumah fisik nyata yang sudah dibangun** di dalam memori browser.
- **TypeScript** adalah **tukang renovasi pintar**. Melalui TypeScript, Anda bisa mengetuk pintu rumah fisik tersebut, mengecat ulang dindingnya, mengganti jendela, atau menambah perabotan baru secara *live* tanpa harus mencetak ulang kertas denah awalnya!

```
[File index.html]  ──Browser membaca (Parsing)──>  [Pohon DOM di Memori]
    (Teks Diam)                                        │
                                                       │ Dapat dibaca & diubah
                                                       ▼
                                              [Kode TypeScript Kita]
```

---

## 📘 Konsep Dasar

### 1. Browser vs Node.js
Pada Modul 01, kita menjalankan kode TypeScript menggunakan Node.js di terminal. Di terminal, kita memiliki objek seperti `process`, tetapi **tidak ada** objek `document` atau `window`.

Sebaliknya, saat kode berjalan di **Browser**:
- Browser menyediakan sekumpulan fitur siap pakai yang disebut **Web APIs**.
- Objek global utama di browser adalah `window` (jendela browser) dan `document` (halaman web yang sedang dibuka).
- DOM **bukan** bagian dari bahasa TypeScript/JavaScript itu sendiri, melainkan **standar API browser** yang bisa diakses oleh TypeScript.

### 2. Struktur Pohon DOM (*DOM Tree*)
Browser membaca kode HTML dari atas ke bawah, lalu membuat struktur percabangan keluarga pohon:

```text
                     document
                        │
                     <html>
            ┌───────────┴───────────┐
          <head>                  <body>
            │                       │
         <title>             ┌──────┴──────────────┐
            │               <h1>                  <p>
      "Belajar DOM"     "Selamat Datang"     "Halo dunia web!"
```

- **Root Node**: `document` adalah akar tertinggi dari semua elemen.
- **Parent Element**: `<body>` adalah induk dari `<h1>` dan `<p>`.
- **Child Element**: `<h1>` dan `<p>` adalah anak dari `<body>`.
- **Sibling (Saudara)**: `<h1>` dan `<p>` adalah saudara sekandung karena memiliki induk yang sama (`<body>`).

---

## 🔷 TypeScript Corner: Hirarki Tipe DOM

Di TypeScript, setiap elemen di browser memiliki tipe data berjenjang. Mengetahui hirarki ini membuat Anda sangat paham mengapa TypeScript memberikan saran auto-complete tertentu:

```text
EventTarget  (Bisa menerima event seperti click/hover)
    └── Node (Bisa berupa elemen HTML, teks biasa, atau komentar)
         └── Element (Node yang memiliki tag HTML)
              └── HTMLElement (Elemen standar web: div, p, button, input)
                   ├── HTMLParagraphElement (<p>)
                   ├── HTMLHeadingElement (<h1> s/d <h6>)
                   ├── HTMLInputElement (<input>)
                   └── HTMLButtonElement (<button>)
```

### Properti Bawaan `document`:
Di TypeScript, Anda bisa langsung mengakses beberapa bagian inti dokumen tanpa perlu mencarinya secara manual:
- `document.title`: Teks judul tab browser (`string`).
- `document.body`: Objek `HTMLBodyElement`.
- `document.head`: Objek `HTMLHeadElement`.
- `document.URL`: Alamat URL halaman saat ini.

---

## 💻 Contoh Penggunaan
Buka file `contoh.ts` untuk melihat demonstrasi bagaimana TypeScript membaca dan mencetak informasi pohon DOM ke konsol browser.

---

## ⚠️ Kesalahan Umum Pemula

1. **Menjalankan kode DOM dengan Node.js biasa (`tsx contoh.ts`) di terminal**:
   Node.js tidak memiliki browser! Menjalankan file yang memakai `document` di terminal akan menghasilkan error:
   `ReferenceError: document is not defined`.
   > **Solusi**: Kode DOM harus dijalankan di lingkungan browser melalui file `index.html`.

2. **Mengira HTML file otomatis berubah ketika DOM dimanipulasi**:
   Ketika TypeScript mengubah judul halaman atau warna teks, yang berubah adalah **tampilan di memori browser pengguna**. File `index.html` asli di harddisk Anda tidak akan tersentuh/teredit.

---

## 📌 Ringkasan
- **DOM** adalah jembatan antara dokumen HTML dan kode TypeScript di memori browser.
- Browser membaca HTML dan menyusunnya menjadi **pohon hierarki (DOM Tree)** yang terdiri dari simpul-simpul (*nodes*).
- TypeScript menyediakan tipe bawaan yang kaya (`HTMLElement`, `HTMLButtonElement`, dll.) untuk memastikan manipulasi web aman dari bug.
