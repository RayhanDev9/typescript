# 02 · ES Modules: Export & Import

## 🎯 Tujuan Belajar
- Memahami standar resmi sistem modul modern: **ES Modules (ESM)**.
- Mengetahui konsep **Module Scope** (kode di dalam satu file bersifat terisolasi dan aman dari tabrakan variabel global).
- Menguasai **Named Export & Import** (`export const ...` & `import { ... }`).
- Menguasai **Default Export & Import** (`export default ...`).
- Mengganti nama modul menggunakan kata kunci **`as`** dan mengimpor namespace **`import * as ...`**.

---

## 🧠 Analogi Dunia Nyata: "Toko Perkakas & Pembeli"
Bayangkan Anda memiliki sebuah toko perkakas (`tokoPerkakas.ts`):
- Di dalam gudang toko Anda ada 100 barang.
- Anda hanya menaruh obeng dan palu di etalase depan (**`export`**). Barang yang tidak ditaruh di etalase tetap menjadi rahasia pribadi toko Anda.
- Seorang tukang bangunan (`tukang.ts`) datang dan hanya membeli obeng dan palu tersebut (**`import { obeng, palu }`**).
- Tidak ada yang bisa sembarangan mengacak-acak barang lain di dalam toko tanpa izin ekspor!

---

## 📘 Konsep Dasar

### 1. Named Export (Ekspor Bernama)
Anda bisa mengekspor banyak variabel, konstanta, atau fungsi dari satu file:

```ts
// File: matematika.ts
export const PI = 3.14159;

export function tambah(a: number, b: number): number {
  return a + b;
}

export function kali(a: number, b: number): number {
  return a * b;
}
```

Cara mengimpor di file lain:
```ts
// File: utama.ts
import { PI, tambah } from "./matematika";

console.log("Nilai PI:", PI);
console.log("Hasil Tambah:", tambah(5, 3));
```

---

### 2. Default Export (Ekspor Utama / Default)
Hanya boleh ada **maksimal satu `default export` per file**. Biasanya digunakan jika satu file hanya berfokus pada satu komponen atau kelas utama:

```ts
// File: Pengguna.ts
export default class Pengguna {
  constructor(public nama: string) {}
}
```

Cara mengimpor:
```ts
// File: utama.ts (Bebas memberi nama tanpa tanda kurung kurawal {})
import Pengguna from "./Pengguna";
```

---

### 3. Mengganti Nama dengan `as` & Impor Semua (`* as`)

```ts
// 1. Mengganti nama jika ada bentrok nama fungsi
import { tambah as jumlahkan } from "./matematika";

// 2. Mengimpor semua ekspor ke dalam satu objek namespace
import * as MathHelper from "./matematika";

console.log(MathHelper.PI);
console.log(MathHelper.kali(4, 5));
```

---

## 📌 Ringkasan
- Gunakan **Named Export (`export`)** jika satu file mengekspor banyak fungsi/konstanta pembantu.
- Gunakan **Default Export (`export default`)** jika file tersebut hanya memiliki satu entitas utama.
- Gunakan **`as`** untuk menghindari tabrakan nama variabel antar file yang berbeda.
