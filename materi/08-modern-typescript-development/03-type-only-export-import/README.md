# 03 · Type-Only Export & Import

## 🎯 Tujuan Belajar
- Memahami perbedaan mendasar antara **Runtime Value** (fungsi, objek, kelas, variabel) dan **Type System** (type alias, interface).
- Menguasai sintaks **`export type`** dan **`import type`**.
- Memahami konsep **Inline Type Import**: `import { fungsi, type TipeData } from './modul'`.
- Memahami keuntungan performa: **Zero Runtime Overhead** dan **Tree-Shaking** (bundler tidak akan menyertakan kode tipe ke dalam bundel JavaScript hasil build).

---

## 🧠 Analogi Dunia Nyata: "Cetak Biru Arsitek vs Material Bangunan"
Bayangkan sebuah proyek pembangunan gedung:
- **Material Bangunan (Batu bata, semen, paku)** adalah **Runtime Value**: Mereka berwujud nyata dan dikirim langsung ke lokasi proyek untuk dirakit menjadi gedung yang bisa ditempati.
- **Cetak Biru Arsitek (Blueprint di atas kertas)** adalah **TypeScript Types**: Kertas gambar ini sangat penting bagi para tukang untuk memastikan ukuran tiang tidak melenceng. Namun, saat gedung selesai dan dibuka untuk umum, kertas cetak biru **tidak ikut disemen ke dalam dinding gedung**.
- `import type` memberi tahu TypeScript: *"Ambil cetak biru ini untuk dicek keamanannya saja, jangan pernah bawa file ini ke dalam kode JavaScript akhir!"*

---

## 📘 Konsep Dasar

### 1. Masalah Tanpa `import type`
Secara default, jika kita menulis:
```ts
import { Pengguna, buatPengguna } from "./modulPengguna";
```
Compiler TypeScript cukup pintar untuk menghapus interface `Pengguna` saat transpile ke JS. Namun, pada bundler modern (seperti esbuild, Vite, SWC, Babel) atau saat opsi `"isolatedModules": true` aktif, bundler kadang bingung apakah `Pengguna` adalah class (yang ada di runtime) atau sekadar interface (yang harus dibuang).

### 2. Sintaks `import type` Khusus (Eksplisit)
```ts
// Hanya mengimpor tipe data — Dijamin 100% dibuang dari JavaScript hasil build!
import type { Pengguna, StatusLogin } from "./modulPengguna";

// Mengimpor fungsi runtime
import { buatPengguna } from "./modulPengguna";
```

### 3. Inline Type Import (TypeScript 4.5+)
Anda bisa menggabungkan fungsi runtime dan tipe dalam satu baris import yang rapi:
```ts
import { buatPengguna, type Pengguna } from "./modulPengguna";
```

---

## 🚀 Mengapa Ini Sangat Penting di Dunia Kerja?
1. **Mencegah Circular Dependency**: Seringkali dua file saling membutuhkan tipe masing-masing. Dengan `import type`, siklus ketergantungan runtime (yang menyebabkan bug undefined) hilang total.
2. **Ukuran File Lebih Kecil**: Memastikan bundler tidak memuat dependensi yang tidak pernah dipakai di runtime.
3. **Standar Kode Modern**: Digunakan oleh framework ternama seperti Next.js, Nuxt, Astro, dan NestJS.

---

## 📌 Ringkasan
- Gunakan `import type` ketika Anda hanya butuh interface/type untuk anotasi variabel atau parameter.
- Gunakan `import { fungsi, type Tipe }` untuk menggabungkan fungsi dan tipe secara ringkas.
- Kode tipe **tidak memiliki ukuran (0 byte)** di JavaScript runtime.
