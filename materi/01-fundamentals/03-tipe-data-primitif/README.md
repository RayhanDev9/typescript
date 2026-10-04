# 03 · Tipe Data Primitif

## 🎯 Tujuan Belajar
- Mengenal **7 tipe data primitif**
- Memeriksa tipe nilai dengan `typeof`
- Memahami perbedaan `null` dan `undefined`
- Memahami bahaya `any` dan alternatifnya, `unknown`

---

## 🧠 Analogi: Jenis Wadah

Setiap barang butuh wadah yang cocok: air di botol, beras di karung, surat di amplop.
Begitu juga data. Teks, angka, dan "ya/tidak" adalah **jenis data** yang berbeda.

---

## 📦 7 Tipe Primitif

| Tipe | Contoh | Keterangan |
| :--- | :--- | :--- |
| `number` | `25`, `3.14`, `-7` | Semua angka, baik bulat maupun desimal |
| `string` | `"Halo"`, `'TS'` | Teks, selalu diapit tanda kutip |
| `boolean` | `true`, `false` | Hanya punya dua nilai: benar atau salah |
| `undefined` | `undefined` | Variabel sudah dibuat, tapi **belum diisi** |
| `null` | `null` | **Sengaja** dikosongkan |
| `bigint` | `9007199254740993n` | Angka bulat yang sangat besar (jarang dipakai) |
| `symbol` | `Symbol("id")` | Nilai unik (jarang dipakai pemula) |

> Fokus kita: **number, string, boolean, undefined, null**.

### `undefined` vs `null`

```text
undefined → kursi kosong karena belum ada yang datang
null      → kursi dikosongkan dengan sengaja ("tidak ada pemenang")
```

---

## 🔍 Memeriksa Tipe dengan `typeof`

```ts
console.log(typeof 25);        // "number"
console.log(typeof "Halo");    // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object"  ← bug lama JavaScript!
```

> ⚠️ `typeof null` menghasilkan `"object"`. Ini **kesalahan desain JavaScript** sejak awal yang tidak pernah diperbaiki demi kompatibilitas. Cukup diingat saja.

---

## 🔷 Versi TypeScript

### Tipe di JavaScript vs TypeScript

- **JavaScript**: yang punya tipe adalah **nilainya**. Variabel boleh diisi apa saja kapan saja.
- **TypeScript**: **variabelnya juga** punya tipe dan dijaga.

```ts
let umur = 25;   // tipe: number
umur = "dua puluh lima"; // ❌ Type 'string' is not assignable to type 'number'.
```

### Variabel yang boleh kosong

Dengan mode `strict`, variabel **tidak bisa** berisi `null` kecuali kita izinkan secara eksplisit:

```ts
let pemenang: string | null = null; // "string ATAU null"
pemenang = "Tim Merah";
```

Tanda `|` dibaca **"atau"** (namanya *union type*, akan dibahas lebih dalam nanti).

### ⚠️ `any`: Mematikan Asisten

```ts
let data: any = 10;
data.toUpperCase(); // TypeScript DIAM saja... tapi program CRASH saat dijalankan!
```

`any` membuat TypeScript **berhenti memeriksa**. Semua manfaat TypeScript hilang.
**Hindari `any`.**

### ✅ `unknown`: Alternatif yang Aman

```ts
let data: unknown = "halo";
data.toUpperCase(); // ❌ 'data' is of type 'unknown'.

if (typeof data === "string") {
  console.log(data.toUpperCase()); // ✅ aman, TypeScript sudah tahu ini string
}
```

`unknown` berarti "belum tahu tipenya, jadi **periksa dulu** sebelum dipakai".

| | `any` | `unknown` |
| :--- | :--- | :--- |
| Boleh diisi apa saja | ✅ | ✅ |
| Boleh langsung dipakai | ✅ (berbahaya) | ❌ harus diperiksa dulu |
| Aman? | ❌ | ✅ |

---

## ⚠️ Kesalahan Umum
- Mengira `"25"` (string) sama dengan `25` (number). Tanda kutip mengubah tipe!
- Memakai `any` supaya error hilang. Errornya memang hilang, tapi bug-nya tetap ada.
- Lupa bahwa `typeof null` adalah `"object"`

---

## ✍️ Latihan

Kerjakan [`latihan.ts`](./latihan.ts), lalu cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- 5 tipe utama: `number`, `string`, `boolean`, `undefined`, `null`
- `typeof` menampilkan tipe sebuah nilai
- `string | null` = boleh berisi teks atau kosong
- **Hindari `any`**. Gunakan `unknown` jika tipenya benar-benar belum diketahui
