# Modul 2: DOM & Events Project

Modul ini mengajarkan cara berinteraksi dengan halaman web (Browser) menggunakan **TypeScript murni (Vanilla TypeScript)** tanpa framework yang rumit.

Siswa akan belajar menghubungkan logika kode ke antarmuka visual (tombol, input formulir, teks, dan animasi popup) melalui 3 proyek game & UI interaktif.

---

## 📁 Daftar Pelajaran & Proyek

| Folder | Proyek / Topik | Konsep Kunci |
| :--- | :--- | :--- |
| [`00-pengenalan-dom/`](./00-pengenalan-dom/README.md) | **Teori & Dasar DOM** | Pohon DOM, `querySelector<T>`, event `click`, manipulasi CSS |
| [`01-guess-my-number/`](./01-guess-my-number/README.md) | **Proyek 1: Guess My Number** | Game tebak angka rahasia 1-20, state management, highscore |
| [`02-modal-window/`](./02-modal-window/README.md) | **Proyek 2: Modal Window** | Jendela popup interaktif, manipulasi class CSS, event keyboard `Escape` |
| [`03-pig-game/`](./03-pig-game/README.md) | **Proyek 3: Pig Game (Game Dadu 2 Player)** | Pergantian giliran pemain, skor aktif vs skor total, reset game |

---

## 🎮 Struktur Setiap Folder Proyek

Setiap folder proyek memiliki 2 sub-folder:
1. `starter/`: Template awal berisi HTML dan desain CSS yang sudah siap. File TypeScript di dalamnya berisi instruksi `TODO` agar siswa fokus menulis logika program.
2. `final/`: Solusi kode TypeScript lengkap 100% yang sudah berfungsi optimal sebagai referensi pengajar.

---

## 🚀 Cara Menjalankan Proyek di Browser

Setiap proyek dilengkapi dengan server web lokal super cepat (Vite).

```bash
# Contoh masuk ke folder proyek Guess My Number:
cd materi/02-dom-events-project/01-guess-my-number

# Jalankan server lokal:
npm install   # (hanya pertama kali)
npm run dev   # Buka tautan http://localhost:5173 di browser
```
