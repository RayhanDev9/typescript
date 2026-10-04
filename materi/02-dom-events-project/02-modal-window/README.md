# Proyek 2: Modal Window (Jendela Popup & Keyboard Events)

## 🎮 Tentang Proyek

**Modal Window** adalah komponen UI interaktif yang sangat umum di dunia web (seperti kotak dialog konfirmasi, detail produk, atau popup login).

Dalam proyek ini, siswa akan belajar:
1. Menampilkan jendela modal ketika salah satu dari 3 tombol **"Buka Modal"** diklik.
2. Menutup jendela modal dengan 3 cara:
   - Mengklik tombol silang **`✕`**
   - Mengklik area latar belakang yang buram (**Overlay**)
   - Menekan tombol **`Escape`** pada keyboard

---

## 📁 Struktur Folder

```text
02-modal-window/
├── starter/        # Desain HTML & CSS siap pakai, main.ts berisi TODO
└── final/          # Solusi kode TypeScript lengkap 100%
```

---

## 💡 Konsep Penting TypeScript & DOM

### 1. `document.querySelectorAll<T>`
Ketika ada lebih dari 1 elemen dengan class yang sama, gunakan `querySelectorAll`. Hasilnya berupa **NodeList** yang dapat kita telusuri menggunakan loop `for`:

```ts
const btnsBukaModal = document.querySelectorAll<HTMLButtonElement>(".show-modal");

for (let i = 0; i < btnsBukaModal.length; i++) {
  btnsBukaModal[i].addEventListener("click", bukaModal);
}
```

### 2. Manipulasi Class CSS (`classList`)
Daripada mengubah style CSS secara inline, kita cukup menyembunyikan atau menampilkan elemen dengan menambah/menghapus class `.hidden`:

```ts
// Tampilkan modal (hapus class hidden)
modalEl.classList.remove("hidden");
overlayEl.classList.remove("hidden");

// Tutup modal (pasang kembali class hidden)
modalEl.classList.add("hidden");
overlayEl.classList.add("hidden");
```

### 3. Menangani Keyboard Event (`KeyboardEvent`)
Di TypeScript, event keyboard memiliki tipe `KeyboardEvent`. Kita dapat membaca tombol mana yang ditekan melalui properti `e.key`:

```ts
document.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Escape" && !modalEl.classList.contains("hidden")) {
    tutupModal();
  }
});
```

---

## 🚀 Cara Menjalankan

```bash
cd materi/02-dom-events-project/02-modal-window/final
npm install
npm run dev
```
