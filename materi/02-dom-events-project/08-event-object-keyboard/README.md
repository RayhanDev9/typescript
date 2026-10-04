# 08 · Objek Event & Keyboard Events

## 🎯 Tujuan Belajar
- Memahami isi dari objek **`Event`** yang dikirimkan oleh browser saat interaksi terjadi.
- Memahami perbedaan antara **`event.target`** (elemen asal yang diklik) dan **`event.currentTarget`** (elemen pemilik listener).
- Menghentikan aksi bawaan browser menggunakan **`event.preventDefault()`**.
- Menangkap dan merespons ketukan tombol keyboard menggunakan event **`keydown`** dan tipe data **`KeyboardEvent`**.
- Membaca tombol spesifik seperti **`Escape`** dan **`Enter`** (sangat krusial untuk proyek *Modal Window*!).

---

## 🧠 Analogi Dunia Nyata: "Laporan Berita Acara Peristiwa"
Bayangkan sebuah peristiwa terjadi di sebuah gedung (misal alarm kebakaran berbunyi):
- Polisi atau pemadam kebakaran tidak hanya tahu "alarm bunyi", tetapi mereka butuh **dokumen laporan lengkap**: *Siapa saksinya? Jam berapa? Tombol darurat di lantai berapa yang ditarik?*
- Objek **`Event`** adalah dokumen laporan lengkap tersebut! Di dalamnya tertulis tombol apa yang ditekan (`e.key`), elemen mana yang diklik (`e.target`), posisi kursor, dll.

---

## 📘 Konsep Dasar

### 1. Objek `Event` & `e.target`
Setiap fungsi callback di `addEventListener` otomatis menerima objek event:

```ts
const tombol = document.querySelector<HTMLButtonElement>("#btn-kirim")!;

tombol.addEventListener("click", (event: MouseEvent) => {
  // event.target adalah elemen HTML yang sesungguhnya diklik oleh pengguna
  console.log("Elemen target:", event.target);
});
```

---

### 2. Mencegah Aksi Bawaan Browser (`event.preventDefault()`)
Secara default, browser memiliki perilaku bawaan untuk elemen tertentu:
- Menekan link `<a href="...">` akan langsung memuat halaman baru.
- Menekan tombol di dalam form `<form>` akan me-refresh seluruh halaman.

Kita bisa menghentikan tindakan bawaan ini dengan `e.preventDefault()` agar aplikasi kita berjalan sebagai Single Page Application (SPA):

```ts
const link = document.querySelector<HTMLAnchorElement>("#link-unduh")!;

link.addEventListener("click", (e: MouseEvent) => {
  e.preventDefault(); // Mencegah browser membuka link!
  console.log("Download ditahan untuk memeriksa login pengguna...");
});
```

---

## 🔷 TypeScript Corner: Menangani Keyboard Events (`KeyboardEvent`)

Untuk mendengarkan tombol keyboard, kita biasanya menempelkan listener pada seluruh jendela dokumen (**`document`** atau **`window`**):

```ts
document.addEventListener("keydown", (e: KeyboardEvent) => {
  console.log("Tombol ditekan:", e.key);
  console.log("Kode tombol  :", e.code);

  // Memeriksa tombol khusus
  if (e.key === "Escape") {
    console.log("Pengguna menekan tombol Escape! Tutup popup modal.");
  }

  if (e.key === "Enter") {
    console.log("Pengguna menekan Enter! Kirim formulir.");
  }
});
```

### Properti Penting `KeyboardEvent`:
- `e.key`: Menghasilkan karakter yang tampak (misal: `"a"`, `"Enter"`, `"Escape"`, `"ArrowUp"`).
- `e.ctrlKey` / `e.shiftKey` / `e.altKey`: Bernilai `boolean` jika ditekan bersamaan (kombinasi shortcut).

---

## ⚠️ Kesalahan Umum Pemula

1. **Memasang event keyboard pada elemen biasa tanpa `tabindex`**:
   Elemen seperti `<div>` atau `<p>` secara default tidak bisa menerima fokus keyboard. Pasang listener keyboard pada `document`, `window`, atau elemen input formulir (`<input>`).

2. **Membedakan huruf besar/kecil pada `e.key`**:
   `e.key` peka terhadap huruf besar/kecil (*case-sensitive*). Menekan tombol huruf "a" menghasilkan `"a"`, tetapi jika Shift ditekan hasilnya `"A"`. Untuk tombol kontrol, selalu gunakan format PascalCase: `"Escape"`, `"Enter"`, `"Backspace"`.

---

## 📌 Ringkasan
- Objek `Event` membawa data rinci tentang interaksi yang baru saja terjadi.
- `e.preventDefault()` menghentikan perilaku bawaan browser (seperti reload form atau navigasi link).
- Dengarkan event `"keydown"` pada `document` dengan tipe `KeyboardEvent` untuk mendeteksi tombol keyboard seperti `"Escape"`.
