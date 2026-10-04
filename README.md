# 🚀 Starter Kit Belajar TypeScript dari 0 (Pemula Tanpa JavaScript)

Repositori ini adalah template awal (*starter setup*) yang dirancang khusus untuk pembelajaran **TypeScript dari dasar**, ramah untuk pemula yang belum pernah belajar JavaScript sebelumnya.

---

## 📁 Struktur Direktori

```text
├── .vscode/
│   ├── extensions.json    # Rekomendasi ekstensi editor (Error Lens, Prettier)
│   └── settings.json      # Konfigurasi editor otomatis
├── src/
│   └── index.ts           # Titik awal (entry point) kode latihan
├── .gitignore             # File/folder yang diabaikan Git (node_modules, dist)
├── package.json           # Konfigurasi dependensi dan perintah npm
├── tsconfig.json          # Konfigurasi compiler TypeScript
└── README.md              # Petunjuk penggunaan starter kit
```

---

## 🛠️ Perintah yang Tersedia (NPM Scripts)

Buka terminal di folder project ini, lalu gunakan perintah berikut:

| Perintah | Fungsi | Penjelasan untuk Siswa |
| :--- | :--- | :--- |
| `npm run dev` | **Mode Belajar Interaktif (Watch)** | Menjalankan file TypeScript langsung dan otomatis me-refresh output setiap kali file disimpan (`Ctrl + S`). Sangat disarankan saat sesi live coding! |
| `npm start` | **Jalankan Sekali** | Menjalankan file [src/index.ts](file:///d:/data%20rayhan/programs/techer/typescript/final/src/index.ts) sekali tanpa kompilasi manual. |
| `npm run typecheck` | **Cek Error Tipe Saja** | Memeriksa apakah ada kesalahan penulisan tipe data tanpa membuat file build JavaScript (`tsc --noEmit`). |
| `npm run build` | **Kompilasi ke JavaScript** | Menerjemahkan kode TypeScript dari folder `src/` menjadi JavaScript standar di dalam folder `dist/`. Berguna untuk memperlihatkan bagaimana TS bekerja di balik layar. |

---

## 💡 Tips untuk Siswa yang Baru Belajar dari Nol

1. **Jalankan `npm run dev` di terminal**: Biarkan terminal tetap terbuka di samping kode agar siswa bisa langsung melihat hasil `console.log` dan pesan error seketika saat mengetik kode.
2. **Lihat Garis Merah (TypeScript Error)**: Ajarkan siswa bahwa garis merah bergelombang di editor adalah "asisten pintar" yang memberi tahu kesalahan sebelum kode dijalankan.
