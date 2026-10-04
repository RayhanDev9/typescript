# 06 · Memanipulasi Gaya CSS (Styles & Classes)

## 🎯 Tujuan Belajar
- Memahami cara mengubah tampilan elemen langsung melalui properti **`element.style`** (Inline Styles).
- Mengetahui konversi nama properti CSS dari format *kebab-case* (`background-color`) ke format *camelCase* (`backgroundColor`) di TypeScript.
- Memahami mengapa memanipulasi **`classList`** jauh lebih baik dan rapi daripada menulis *inline styles*.
- Menguasai method sakti pada `classList`: **`.add()`**, **`.remove()`**, **`.toggle()`**, dan **`.contains()`**.

---

## 🧠 Analogi Dunia Nyata: "Ganti Baju vs Mewarnai Kulit Langsung"
Bayangkan Anda ingin mengubah penampilan Anda dari pakaian santai ke pakaian pesta formal:
- **`element.style` (Inline)**: Seperti mencoret-coret kulit Anda dengan spidol hitam untuk membuat dasi palsu dan mengecat rambut dengan kuas. Cara ini kotor, sulit dihapus, dan berantakan!
- **`element.classList` (Class CSS)**: Seperti **mengganti pakaian yang sudah siap di lemari**. Anda cukup memakai jas (`classList.add("jas-formal")`) atau melepasnya (`classList.remove("jas-formal")`). Semua aturan warna, potongan, dan kerapian sudah dirancang rapi di file CSS terpisah!

---

## 📘 Konsep Dasar

### 1. Inline Style (`element.style`)
Anda bisa mengatur style secara langsung pada elemen:

```ts
const kotak = document.querySelector<HTMLDivElement>(".kotak")!;

// Perhatikan: di CSS 'background-color' -> di TypeScript menjadi 'backgroundColor'
kotak.style.backgroundColor = "#10b981";
kotak.style.fontSize = "1.5rem";
kotak.style.padding = "20px";
kotak.style.display = "block";
```

> ⚠️ **Kelemahan Inline Style**:
> 1. Menciptakan atribut `style="..."` langsung di tag HTML yang sulit ditimpa oleh file CSS luar.
> 2. Kode TypeScript Anda menjadi penuh dengan urusan dekorasi desain visual.

---

### 2. Manipulasi Class CSS (`element.classList`)
Pendekatan terbaik dalam pengembangan web modern adalah menyiapkan class di file CSS (misal `.hidden`, `.aktif`, `.tema-gelap`), lalu mengendalikannya lewat TypeScript:

```ts
const modal = document.querySelector<HTMLDivElement>("#jendela-modal")!;

// 1. Menambahkan class
modal.classList.add("terbuka");

// 2. Menghapus class
modal.classList.remove("tersembunyi");

// 3. Menukar status class (jika ada dihapus, jika tidak ada ditambahkan)
modal.classList.toggle("animasi-fade");

// 4. Memeriksa apakah suatu class sedang aktif (mengembalikan boolean)
const isModalAktif: boolean = modal.classList.contains("terbuka");
console.log("Apakah modal terbuka?", isModalAktif);

// 5. Mengganti class lama dengan class baru
modal.classList.replace("tema-terang", "tema-gelap");
```

---

## 🔷 TypeScript Corner: Nilai Properti `style` Selalu Berupa `string`

Ketika mengatur style yang berupa ukuran, Anda **wajib** menyertakan satuan (misal `"px"`, `"rem"`, `"%"`):

```ts
// ❌ SALAH: Error di TypeScript atau diabaikan oleh browser
kotak.style.width = 300; 

// ✅ BENAR: Sertakan satuan string
kotak.style.width = "300px";
kotak.style.width = `${300}px`;
```

---

## ⚠️ Kesalahan Umum Pemula

1. **Memasukkan tanda titik `.` ke dalam `classList.add`**:
   ```ts
   // SALAH: Jangan pakai titik di classList!
   elemen.classList.add(".aktif"); // Browser akan membuat class bernama ".aktif"

   // BENAR:
   elemen.classList.add("aktif");
   ```

2. **Lupa bahwa `.toggle()` mengembalikan nilai boolean**:
   `.toggle('aktif')` tidak hanya menambahkan/menghapus class, tapi juga mengembalikan `true` (jika class berhasil ditambahkan) atau `false` (jika class dihapus).

---

## 📌 Ringkasan
- Gunakan `element.style` untuk perubahan nilai numerik dinamis yang sulit dibuat di CSS (seperti posisi kordinat kursor mouse).
- Gunakan `element.classList.add()`, `.remove()`, dan `.toggle()` untuk sebagian besar kebutuhan interaksi visual (buka/tutup modal, dropdown, dark mode, animasi).
- Format nama properti style di TypeScript selalu *camelCase* (`borderRadius`, bukan `border-radius`).
