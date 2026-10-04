# 09 · Enhanced Object Literal

## 🎯 Tujuan Belajar
- Memahami 3 fitur **Enhanced Object Literal** di ES6+:
  1. **Property Value Shorthand**: Menyingkat `nama: nama` menjadi `nama`.
  2. **Method Shorthand**: Menyingkat `hitung: function() {}` menjadi `hitung() {}`.
  3. **Computed Property Names**: Menentukan nama kunci objek secara dinamis menggunakan kurung siku `[ekspresi]`.
- Menggabungkan computed property dengan type union literal di TypeScript.

---

## 🧠 Analogi: Formulir Pintar yang Terisi Otomatis

- Dahulu, jika nama variabelmu adalah `namaRestoran`, kamu harus menulis dua kali: `namaRestoran: namaRestoran`.
- Sekarang, formulirnya cukup pintar: jika nama kolom dan nama variabelmu sama, tulis sekali saja: `namaRestoran`.
- Bahkan nama kolomnya bisa dihitung secara otomatis berdasarkan variabel lain (computed property)!

---

## 📘 Konsep Dasar

### 1. Property Value Shorthand

Jika nama properti objek sama dengan nama variabel yang ingin dimasukkan nilainya:

```ts
const nama = "Warung Kopi";
const lokasi = "Yogyakarta";

// ❌ Cara Lama (ES5)
const restoLama = {
  nama: nama,
  lokasi: lokasi,
};

// ✅ Cara Modern (Shorthand)
const restoModern = {
  nama,
  lokasi,
};
```

---

### 2. Method Shorthand

Tidak perlu lagi menulis kata kunci `: function`:

```ts
// ❌ Cara Lama
const restoLama = {
  pesan: function (menu: string) {
    console.log(`Memesan ${menu}`);
  },
};

// ✅ Cara Modern (Method Shorthand)
const restoModern = {
  pesan(menu: string) {
    console.log(`Memesan ${menu}`);
  },
};
```

---

### 3. Computed Property Names (Nama Kunci Dinamis)

Kita bisa menggunakan tanda kurung siku `[ekspresi]` di dalam object literal untuk menghitung nama properti secara dinamis dari variabel atau array:

```ts
const hariBuka = ["senin", "selasa", "rabu", "kamis", "jumat"];

const jamOperasional = {
  [hariBuka[0]]: { buka: 8, tutup: 20 },
  [hariBuka[4]]: { buka: 8, tutup: 22 },
  [`hari_${1 + 1}`]: "Hari Libur Khusus",
};

console.log(jamOperasional.senin);  // { buka: 8, tutup: 20 }
console.log(jamOperasional.jumat);  // { buka: 8, tutup: 22 }
console.log(jamOperasional.hari_2); // "Hari Libur Khusus"
```

---

## 🔷 TypeScript Corner: Computed Properties dengan Union Types

```ts
type KategoriMenu = "makanan" | "minuman" | "penutup";

const daftarHarga: Record<KategoriMenu, number> = {
  makanan: 35000,
  minuman: 15000,
  penutup: 20000,
};
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/09-enhanced-object-literal/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `const obj = { hariBuka[0]: 10 }` | Kurang kurung siku `[]` untuk nama kunci dinamis | `const obj = { [hariBuka[0]]: 10 }` |
| `const obj = { method(): { return 1; } }` | Kesalahan sintaks titik dua `:` saat deklarasi method shorthand | `const obj = { method() { return 1; } }` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `{ nama, umur }` menyingkat penulisan properti objek.
- `{ sapa() {} }` menyingkat penulisan method di dalam objek.
- `{ [kunciDinamis]: nilai }` memungkinkan nama properti dihitung dari ekspresi atau variabel.
