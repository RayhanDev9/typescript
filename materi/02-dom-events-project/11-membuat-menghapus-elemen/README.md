# 11 · Membuat, Menambah & Menghapus Elemen

## 🎯 Tujuan Belajar
- Memahami cara membuat elemen HTML baru di memori menggunakan **`document.createElement`**.
- Mengetahui keunggulan *Type Inference* TypeScript pada `document.createElement`.
- Menempelkan elemen baru ke dalam pohon DOM menggunakan **`.append()`**, **`.prepend()`**, **`.before()`**, dan **`.after()`**.
- Menggunakan alternatif cepat **`.insertAdjacentHTML()`** dengan posisi `beforeend` / `afterbegin`.
- Menghapus elemen dari dokumen menggunakan method modern **`.remove()`**.

---

## 🧠 Analogi Dunia Nyata: "Membangun Lego Sebelum Dipasang"
Bayangkan Anda sedang merakit miniatur lego:
- **`document.createElement("button")`**: Anda mengambil satu kepingan lego baru dari kotak ke atas meja Anda. Kepingan ini sudah ada di dunia nyata (memori), tetapi **belum terpasang di bangunan istana utama Anda** (belum tampil di layar).
- Anda bebas mewarnai kepingan itu, menempelkan stiker, atau mengecatnya.
- **`.append()`**: Anda akhirnya merekatkan kepingan lego tersebut ke dinding istana utama sehingga sekarang semua orang bisa melihatnya!
- **`.remove()`**: Anda mencopot kepingan tersebut dari dinding.

---

## 📘 Konsep Dasar

### 1. Membuat Elemen (`document.createElement`)
Di TypeScript, saat Anda memasukkan nama tag HTML ke dalam `createElement`, TypeScript secara cerdas langsung mengetahui tipe elemen yang dihasilkan:

```ts
// Tipe otomatis: HTMLButtonElement!
const tombolBaru = document.createElement("button");

tombolBaru.textContent = "Klik Saya (Baru)";
tombolBaru.classList.add("btn-sukses");
tombolBaru.disabled = false; // Langsung punya auto-complete HTMLButtonElement!
```

---

### 2. Menempelkan Elemen ke DOM
Ada beberapa method modern untuk menentukan posisi peletakan elemen baru:

```ts
const kontainer = document.querySelector<HTMLDivElement>("#daftar-kartu")!;

// 1. .append() : Menambahkan di urutan PALING AKHIR anak elemen
kontainer.append(tombolBaru);

// 2. .prepend() : Menambahkan di urutan PALING AWAL anak elemen
kontainer.prepend(tombolBaru);

// 3. .before() : Menambahkan SEBELUM elemen kontainer (sebagai saudara)
kontainer.before(tombolBaru);

// 4. .after() : Menambahkan SESUDAH elemen kontainer (sebagai saudara)
kontainer.after(tombolBaru);
```

---

### 3. Alternatif Cepat: `.insertAdjacentHTML()`
Jika Anda memiliki string HTML yang ingin disisipkan tanpa membuat objek `createElement` satu per satu:

```ts
const htmlMarkup = `<div class="notifikasi">Pesan baru telah tiba!</div>`;

// Posisi yang didukung: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'
kontainer.insertAdjacentHTML("beforeend", htmlMarkup);
```

---

### 4. Menghapus Elemen (`.remove()`)
Cukup panggil method `.remove()` pada elemen yang ingin dimusnahkan dari layar:

```ts
const bannerIklan = document.querySelector<HTMLDivElement>("#iklan-popup");

if (bannerIklan !== null) {
  bannerIklan.remove(); // Lenyap seketika dari memori DOM
}
```

---

## ⚠️ Kesalahan Umum Pemula

1. **Membuat elemen tapi lupa menempelkannya (`append`)**:
   ```ts
   const p = document.createElement("p");
   p.textContent = "Halo dunia!";
   // Elemen p tidak akan pernah terlihat di layar jika Anda lupa kontainer.append(p)!
   ```

2. **Memindahkan elemen yang sudah ada vs membuat baru**:
   Jika Anda melakukan `.append()` pada elemen yang sudah berada di DOM, elemen tersebut **akan dipindahkan**, bukan digandakan. Jika ingin menggandakan, gunakan `elemen.cloneNode(true)`.

---

## 📌 Ringkasan
- Gunakan `document.createElement('tag')` untuk membuat elemen baru secara terstruktur di TypeScript.
- Gunakan `.append()` untuk menambah di akhir, `.prepend()` di awal.
- Gunakan `element.remove()` untuk menghapus elemen dari halaman web.
