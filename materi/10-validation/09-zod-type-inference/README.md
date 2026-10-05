# 09 · Zod Type Inference (`z.infer`)

## 🎯 Tujuan Belajar
- Memahami konsep **Single Source of Truth** (Satu-satunya Sumber Kebenaran) dalam pemodelan data.
- Menyadari masalah duplikasi kerja: menulis `interface` TypeScript manual DAN menulis kode validasi secara terpisah.
- Menguasai utilitas magis **`z.infer<typeof Skema>`** untuk mengekstrak tipe TypeScript murni langsung dari skema Zod.
- Mampu mengintegrasikan tipe hasil inferensi ke dalam fungsi, parameter, dan antarmuka komponen.

---

## 🧠 Analogi Dunia Nyata: "Cetak Uang Logam & Buku Katalog Bank Indonesia"
- **Cara Lama (Tanpa Type Inference)**:
  1. Pabrik mencetak cetakan logam uang koin Rp 1.000 (**Validator Runtime**).
  2. Di ruangan lain, seorang desainer menggambar ulang gambar koin itu dari nol untuk dicetak di buku katalog (**Interface TypeScript**).
  3. Jika suatu hari desain koin Rp 1.000 direvisi oleh pabrik, tetapi desainer katalog lupa mengupdate gambarnya, terjadi kekacauan dan ketidakcocokan data (**Out of Sync Bug**)!
- **Cara Zod (`z.infer`)**:
  Pabrik cukup membuat cetakan logam (**Schema Zod**). Lalu ada kamera fotokopi otomatis yang memindai cetakan itu dan langsung menghasilkan gambar katalog resmi tanpa perlu digambar ulang secara manual (**`z.infer`**). Apapun perubahan pada cetakan, katalog otomatis selalu akurat 100%!

---

## 📘 Konsep Dasar

### 1. Masalah Duplikasi Tanpa `z.infer`
```ts
// ❌ Duplikasi 1: Interface manual
interface Pesanan {
  id: string;
  total: number;
}

// ❌ Duplikasi 2: Skema validasi terpisah
const SkemaPesanan = z.object({
  id: z.string(),
  total: z.number(),
});
// Jika kita ingin menambah kolom 'alamat', kita wajib mengedit KEDUA tempat di atas!
```

---

### 2. Solusi Elegan: Cukup Buat Skema, Infer Tipenya!
```ts
import { z } from "zod";

// 1. Definisikan Skema Zod
export const SkemaPesanan = z.object({
  id: z.string(),
  total: z.number(),
  metode: z.enum(["COD", "TRANSFER"]),
});

// 2. Ekstrak Tipe TypeScript secara Otomatis!
export type Pesanan = z.infer<typeof SkemaPesanan>;

// Hasil tipe 'Pesanan' identik dengan:
// interface Pesanan {
//   id: string;
//   total: number;
//   metode: "COD" | "TRANSFER";
// }
```

---

## 🚀 Penggunaan Nyata pada Fungsi
Gunakan tipe hasil inferensi sebagai tipe parameter atau variabel di kode aplikasi Anda:

```ts
function cetakNota(order: Pesanan): void {
  console.log(`Nota: ${order.id} | Total: Rp ${order.total}`);
}
```

---

## 📌 Ringkasan
- `z.infer<typeof Skema>` menjamin skema runtime dan tipe TypeScript selalu sinkron 100%.
- Menghemat waktu penulisan kode dan menghilangkan potensi bug karena lupa memperbarui tipe data.
