# 08 · Pengenalan Schema Validation & Zod

## 🎯 Tujuan Belajar
- Menyadari kelemahan validasi manual menggunakan puluhan baris `typeof` dan `if...else` (melelahkan, kotor, dan rawan terlewat).
- Memahami konsep **Schema Validation** (Validasi Berbasis Skema).
- Mengenal **Zod**: Pustaka (*library*) validasi skema standar industri yang dirancang khusus untuk ekosistem TypeScript (*TypeScript-First*).
- Menguasai pembuatan skema dasar: `z.string()`, `z.number()`, `z.boolean()`, `z.object()`.
- Memahami perbedaan dua metode parsing Zod: **`.parse()`** (melempar exception) vs **`.safeParse()`** (mengembalikan objek hasil tanpa crash).

---

## 🧠 Analogi Dunia Nyata: "Pemeriksa Manual vs Mesin Cetakan Presisi Otomatis"
- **Validasi Manual (Pelajaran 01 - 07)**:
  Seperti seorang mandor yang memeriksa setiap bata bangunan dengan penggaris kayu secara manual: *"Apakah tingginya 10 cm? Apakah lebarnya 5 cm? Apakah warnanya merah?"*. Jika ada 50 jenis barang, mandor akan kelelahan dan bisa salah ukur (**Ratusan baris `typeof` yang membosankan**).
- **Schema Validation dengan Zod**:
  Seperti **Mesin Cetakan Presisi Otomatis**:
  Anda cukup membuat satu cetakan logam presisi (**Schema Zod**). Setiap benda yang masuk langsung dilewatkan ke cetakan tersebut. Jika ukurannya pas 1 milimeter pun, benda lolos instan; jika melenceng, mesin otomatis membunyikan alarm detail bagian mana yang tidak pas!

---

## 📘 Konsep Dasar

### 1. Mendefinisikan Skema Zod
```ts
import { z } from "zod";

// Membuat cetakan (Schema)
const SkemaPengguna = z.object({
  id: z.number(),
  nama: z.string(),
  aktif: z.boolean(),
});
```

---

### 2. Metode 1: `parse()` (Melempar Error jika Gagal)
Gunakan `parse` jika Anda ingin menghentikan alur program (*fail-fast*) atau saat berada di dalam blok `try...catch`:
```ts
try {
  const dataLolos = SkemaPengguna.parse({
    id: 1,
    nama: "Rayhan",
    aktif: true,
  });
  console.log("Valid!", dataLolos);
} catch (err) {
  console.error("Data tidak sesuai skema!");
}
```

---

### 3. Metode 2: `safeParse()` (Sangat Direkomendasikan - Tanpa Try/Catch)
`safeParse` mengembalikan objek hasil yang aman tanpa pernah melempar error:
```ts
const hasil = SkemaPengguna.safeParse(dataMentah);

if (hasil.success) {
  // TypeScript tahu pasti hasil.data valid!
  console.log(hasil.data.nama);
} else {
  // Penanganan error yang rapi
  console.log("Daftar Masalah:", hasil.error.issues);
}
```

---

## 📌 Ringkasan
- Zod adalah library validasi terpopuler di dunia TypeScript saat ini.
- Skema Zod bertindak sebagai penjaga gerbang runtime yang mengubah data `unknown` menjadi data yang aman dan berpengetikan ketat.
- Selalu prioritaskan `.safeParse()` untuk validasi data formulir atau respon API.
