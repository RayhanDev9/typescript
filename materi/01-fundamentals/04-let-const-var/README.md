# 04 · `let`, `const`, dan `var`

## 🎯 Tujuan Belajar
- Mengetahui kapan memakai `let` dan kapan memakai `const`
- Memahami mengapa `var` sebaiknya **tidak dipakai**
- Mengenal **tipe literal** yang dihasilkan oleh `const`

---

## 🧠 Analogi

| Kata kunci | Analogi |
| :--- | :--- |
| `let` | **Papan tulis**: isinya boleh dihapus dan diganti |
| `const` | **Prasasti batu**: sekali diukir, tidak bisa diubah |
| `var` | Papan tulis model lama yang punya banyak "keanehan" |

---

## 💻 `let`: Nilai Boleh Berubah

```ts
let umur = 30;
umur = 31; // ✅ boleh (ini disebut reassign / mengisi ulang)
```

Gunakan `let` jika nilainya **memang akan berubah**, misalnya skor game atau penghitung.

## 💻 `const`: Nilai Tetap

```ts
const tahunLahir = 1995;
tahunLahir = 1996;
// ❌ Cannot assign to 'tahunLahir' because it is a constant.
```

`const` **wajib** langsung diisi nilai saat dibuat:

```ts
const kodePos;
// ❌ 'const' declarations must be initialized.
```

## 💻 `var`: Cara Lama (Hindari)

```ts
var pekerjaan = "guru";
pekerjaan = "programmer"; // boleh, mirip let
```

`var` adalah cara lama sebelum `let` dan `const` ada (sebelum tahun 2015). Perilakunya berbeda dalam hal **scope**, yang akan dibahas di modul *Behind the Scenes*. Untuk sekarang: **jangan pakai `var`**.

---

## ✅ Aturan Praktis

> **Selalu mulai dengan `const`.** Ganti ke `let` hanya jika nilainya memang perlu diubah.

Dengan cara ini, kode lebih mudah dibaca karena variabel yang bisa berubah terlihat jelas, dan bug lebih sedikit.

---

## 🔷 Versi TypeScript: Tipe Literal

Arahkan mouse ke variabel berikut di VS Code:

```ts
let hargaLet = 5000;     // tipe: number
const hargaConst = 5000; // tipe: 5000   ← bukan number!
```

Mengapa berbeda?
- `let` bisa berubah, jadi TypeScript memberi tipe umum: **`number`**.
- `const` **tidak akan pernah berubah**, jadi TypeScript memberi tipe yang **persis**: **`5000`**.

Tipe yang berupa nilai persis seperti ini disebut **tipe literal**. Nanti kita akan memakainya untuk membatasi pilihan nilai:

```ts
let ukuranKaos: "S" | "M" | "L" = "M";
ukuranKaos = "XL"; // ❌ Type '"XL"' is not assignable to type '"S" | "M" | "L"'.
```

### Bonus: Lupa Kata Kunci

```ts
namaSaya = "Rayhan"; // ❌ Cannot find name 'namaSaya'.
```

Di JavaScript lama, baris ini **diam-diam** membuat variabel global (sumber bug). TypeScript langsung menolaknya.

---

## ⚠️ Kesalahan Umum

| Pesan Error | Penyebab |
| :--- | :--- |
| `Cannot assign to 'x' because it is a constant` | Mengubah nilai `const`. Ganti ke `let` jika memang perlu berubah |
| `'const' declarations must be initialized` | `const` dibuat tanpa nilai |
| `Cannot find name 'x'` | Lupa menulis `let` atau `const` |

---

## ✍️ Latihan

Kerjakan [`latihan.ts`](./latihan.ts), lalu cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `const` = tidak bisa diisi ulang. Jadikan **pilihan utama**
- `let` = boleh diisi ulang. Pakai jika nilainya memang berubah
- `var` = cara lama, **hindari**
- `const` menghasilkan **tipe literal** (nilai persis), sedangkan `let` menghasilkan tipe umum
