# 01 · Arsitektur Pengembangan Modern: Gambaran Besar

## 🎯 Tujuan Belajar
- Memahami evolusi pengembangan web dari era "satu file skrip raksasa" menuju **arsitektur modular modern**.
- Memahami 3 fase siklus hidup aplikasi modern: **Development**, **Build**, dan **Production**.
- Memahami prinsip **Separation of Concerns** (Pemisahan Tanggung Jawab Kode).
- Mengetahui mengapa TypeScript dan alat modern (*tooling*) menjadi standar wajib industri saat ini.

---

## 🧠 Analogi Dunia Nyata: "Mobil Pabrikan vs Mobil Rakitan Sendiri"
Bayangkan sebuah pabrik perakitan mobil:
- Di era kuno, ada orang mencoba membuat mobil dengan menempa seluruh rangka, mesin, roda, dan kaca menjadi satu lempengan besi raksasa. Jika salah satu baut roda patah, seluruh mobil harus dibongkar dan diperbaiki!
- Di pabrik modern:
  - Ada divisi khusus membuat mesin (`mesin.ts`).
  - Ada divisi khusus membuat roda (`roda.ts`).
  - Ada divisi khusus membuat kelistrikan (`listrik.ts`).
  - Di tahap akhir (**Fase Build/Assembly**), semua komponen modular tersebut digabungkan menjadi satu unit mobil siap pakai (**Production**) yang siap melaju di jalan raya.

---

## 📘 Konsep Dasar

### 1. Masalah pada Kode Monolitik Zaman Dulu
Sebelum era modern:
- Semua fungsi ditaruh di dalam satu file skrip panjang yang berisi ribuan baris.
- Variabel global sering kali **saling menimpa tanpa sengaja** (*Variable Collision / Polluted Global Scope*).
- Jika 5 orang programmer bekerja dalam 1 tim, mereka akan terus menerus mengalami konflik saat menggabungkan kode (*git merge conflicts*).

---

### 2. Tiga Fase Siklus Hidup Aplikasi Modern

```text
  [FASE 1: DEVELOPMENT]                [FASE 2: BUILD / TOOLING]               [FASE 3: PRODUCTION]
  • Kode dipecah rapi (ES Modules)     • TypeScript Compiler (tsc)             • File .js murni ringkas
  • Strict Type Checking               • Bundler (Vite / esbuild)              • Ukuran file kecil (Minified)
  • Komentar & dokumentasi jelas       • Tree-shaking (Buang kode mati)        • Cepat dimuat pengguna
```

1. **Fase Development (Pengembangan)**:  
   Fase ketika kita sedang menulis kode di editor (VS Code). Kita menulis TypeScript yang rapi, banyak file modul kecil, lengkap dengan tipe data dan komentar.
2. **Fase Build (Kompilasi & Pengepakan)**:  
   Alat otomatis (*Tooling / Bundler*) memeriksa error tipe, menghapus tipe data TypeScript, menghapus spasi kosong (*Minification*), dan membuang kode yang tidak pernah dipakai (*Tree-shaking*).
3. **Fase Production (Produksi)**:  
   Hasil kompilasi berupa file JavaScript murni yang super efisien dan siap diunggah ke server / hosting agar bisa dibuka oleh pengguna di seluruh dunia.

---

## 📌 Ringkasan
- Aplikasi modern selalu dibangun menggunakan pendekatan **Modular** (memecah kode menjadi komponen-komponen mandiri yang dapat digunakan kembali).
- TypeScript berperan penting di fase **Development** untuk mencegah bug sebelum kode sempat masuk ke fase **Build**.
- Di materi berikutnya, kita akan mempelajari mekanisme resmi untuk menghubungkan file-file terpisah: **ES Modules (`export` & `import`)**.
