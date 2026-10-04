# Modul 2: DOM & Events di TypeScript

Modul ini dirancang khusus untuk pemula yang **belajar TypeScript dari nol tanpa belajar JavaScript terlebih dahulu**.

Anda akan mempelajari bagaimana TypeScript berinteraksi dengan browser web: memilih elemen HTML, mengubah konten teks, memanipulasi class/style CSS, menangani interaksi pengguna (*events*), hingga membangun 3 proyek game & UI interaktif yang memukau.

---

## 📁 Daftar Pelajaran & Proyek

### Bagian 1: Fondasi DOM & Seleksi Elemen
| Folder | Topik Materi | Konsep Kunci |
| :--- | :--- | :--- |
| [`01-apa-itu-dom/`](./01-apa-itu-dom/README.md) | **Apa itu DOM & Pohon DOM** | Web APIs, Node vs Element, `document.title`, hirarki tipe DOM |
| [`02-memilih-elemen-tunggal/`](./02-memilih-elemen-tunggal/README.md) | **Memilih Elemen Tunggal** | `getElementById`, `querySelector<T>`, Non-null assertion `!`, Type Guard |
| [`03-memilih-banyak-elemen/`](./03-memilih-banyak-elemen/README.md) | **Memilih Banyak Elemen** | `querySelectorAll<T>`, `NodeList` vs `Array`, `.forEach()`, `Array.from()` |

### Bagian 2: Manipulasi Konten, Atribut & Gaya Visual
| Folder | Topik Materi | Konsep Kunci |
| :--- | :--- | :--- |
| [`04-membaca-mengubah-konten/`](./04-membaca-mengubah-konten/README.md) | **Membaca & Mengubah Konten** | `.textContent`, `.innerText`, `.innerHTML`, pencegahan celah XSS |
| [`05-manipulasi-atribut-dataset/`](./05-manipulasi-atribut-dataset/README.md) | **Manipulasi Atribut & Dataset** | Properti langsung, `getAttribute/setAttribute`, dataset HTML5 `data-*` |
| [`06-manipulasi-style-dan-class/`](./06-manipulasi-style-dan-class/README.md) | **Manipulasi Style CSS & Class** | Inline `.style`, `.classList.add/remove/toggle/contains` |

### Bagian 3: Event Handling & Form Input
| Folder | Topik Materi | Konsep Kunci |
| :--- | :--- | :--- |
| [`07-event-handling-dasar/`](./07-event-handling-dasar/README.md) | **Event Handling Dasar** | `addEventListener('click')`, `removeEventListener`, `MouseEvent` |
| [`08-event-object-keyboard/`](./08-event-object-keyboard/README.md) | **Event Object & Keyboard** | `e.target`, `e.preventDefault()`, `keydown`, `e.key === 'Escape'` |
| [`09-form-dan-input/`](./09-form-dan-input/README.md) | **Form Handling & Input Pengguna** | Konversi string `.value` ke `number`, `.checked`, event `submit` |

### Bagian 4: Arsitektur DOM Tingkat Lanjut
| Folder | Topik Materi | Konsep Kunci |
| :--- | :--- | :--- |
| [`10-navigasi-dom-traversing/`](./10-navigasi-dom-traversing/README.md) | **Navigasi Pohon DOM** | `.parentElement`, `.closest()`, `.children`, `.nextElementSibling` |
| [`11-membuat-menghapus-elemen/`](./11-membuat-menghapus-elemen/README.md) | **Membuat & Menghapus Elemen** | `document.createElement`, `.append()`, `.prepend()`, `.remove()` |
| [`12-event-bubbling-delegation/`](./12-event-bubbling-delegation/README.md) | **Event Bubbling & Delegation** | Fase perambatan event, `e.stopPropagation()`, teknik Event Delegation |

---

### Bagian 5: Proyek Capstone Interaktif
Setelah menyelesaikan 12 materi teori dan latihan di atas, terapkan seluruh ilmu Anda dalam 3 proyek dunia nyata:

| Folder | Proyek Aplikasi | Konsep Praktik |
| :--- | :--- | :--- |
| [`13-proyek-guess-my-number/`](./13-proyek-guess-my-number/README.md) | **Proyek 1: Guess My Number** | Logika tebak angka acak 1-20, state management, highscore |
| [`14-proyek-modal-window/`](./14-proyek-modal-window/README.md) | **Proyek 2: Modal Window** | Jendela popup interaktif, manipulasi class CSS, event tombol keyboard `Escape` |
| [`15-proyek-pig-game/`](./15-proyek-pig-game/README.md) | **Proyek 3: Pig Game** | Game dadu 2 pemain, pergantian giliran, skor aktif vs skor total, reset state |

---

## 🛠️ Format File di Setiap Folder Teori (01 - 12)
Setiap folder teori dilengkapi dengan 5 file:
1. `README.md` — Teori lengkap, analogi dunia nyata, tipe TypeScript, dan peringatan kesalahan pemula.
2. `index.html` — Halaman visual web interaktif yang siap dibuka di browser.
3. `contoh.ts` — Demonstrasi kode dengan penjelasan komentar lengkap berbahasa Indonesia.
4. `latihan.ts` — Latihan mini dengan instruksi bertahap `// TODO:` untuk siswa.
5. `solusi.ts` — Kunci jawaban lengkap beserta penjelasan solusi.

---

## 🌐 Cara Menjalankan & Menguji Kode
1. **Membuka Halaman HTML**: Cukup klik kanan file `index.html` pada materi yang ingin dipelajari, lalu pilih **Open with Live Server** atau buka langsung di browser Chrome/Edge/Firefox Anda.
2. **Memeriksa Type Safety**: Jalankan perintah berikut di terminal root proyek untuk memastikan tidak ada kesalahan tipe TypeScript:
   ```bash
   npx tsc --project materi/02-dom-events-project/tsconfig.json --noEmit
   ```
