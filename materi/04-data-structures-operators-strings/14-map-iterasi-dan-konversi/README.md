# 14 · Map: Iterasi & Konversi

## 🎯 Tujuan Belajar
- Memahami cara menginisialisasi Map langsung menggunakan **array 2D (array of arrays)**.
- Mengubah **Object biasa menjadi Map** menggunakan `Object.entries(obj)`.
- Mengubah **Map menjadi Object biasa** menggunakan `Object.fromEntries(map)`.
- Mengubah **Map menjadi Array** menggunakan spread operator `[...map]`.
- Mengiterasi Map secara langsung dengan `for...of` dan destructuring `[key, value]`.

---

## 🧠 Analogi: Mengimpor dan Mengekspor Data

- Kamu memiliki tabel Excel daftar harga barang.
- Kamu bisa mengimpor seluruh tabel tersebut ke dalam sistem Map hanya dengan memasukkan data baris dan kolomnya.
- Sebaliknya, data di dalam Map bisa kamu ekspor kembali menjadi format file lain (Object biasa atau Array daftar) kapan saja dibutuhkan.

---

## 📘 Konsep Dasar

### 1. Inisialisasi Map dengan Array 2D

Daripada memanggil `.set()` berkali-kali, kita bisa langsung memasukkan array of pairs `[key, value]` ke constructor `new Map()`:

```ts
const daftarHarga = new Map<string, number>([
  ["Pizza", 75000],
  ["Pasta", 55000],
  ["Risotto", 65000],
]);

console.log(daftarHarga.get("Pizza")); // 75000
```

---

### 2. Mengubah Objek Biasa menjadi Map

Ingat bahwa `Object.entries(obj)` menghasilkan array berformat `[[key1, val1], [key2, val2]]`. Format ini **cocok persis** dengan format yang dibutuhkan constructor Map:

```ts
const jamBukaObj = {
  kamis: { buka: 12, tutup: 22 },
  jumat: { buka: 11, tutup: 23 },
  sabtu: { buka: 0,  tutup: 24 },
};

// Konversi: Object -> Map
const jamBukaMap = new Map(Object.entries(jamBukaObj));
console.log(jamBukaMap.get("jumat")); // { buka: 11, tutup: 23 }
```

---

### 3. Mengiterasi Map dengan `for...of`

Map adalah iterable bawaan, dan setiap perulangannya langsung mengembalikan pasangan `[key, value]`:

```ts
for (const [menu, harga] of daftarHarga) {
  console.log(`Menu ${menu.padEnd(8)}: Rp${harga.toLocaleString("id-ID")}`);
}
```

Kita juga bisa mengiterasi hanya kuncinya atau hanya nilainya:
- `for (const key of daftarHarga.keys())`
- `for (const val of daftarHarga.values())`

---

### 4. Mengubah Map Kembali Menjadi Objek atau Array

```ts
// 1. Map -> Array 2D
const arrayDariMap = [...daftarHarga];

// 2. Map -> Object biasa (ES2019 Object.fromEntries)
const objectDariMap = Object.fromEntries(daftarHarga);
console.log(objectDariMap); // { Pizza: 75000, Pasta: 55000, Risotto: 65000 }
```

---

## 🔷 TypeScript Corner: Type Safety Konversi

Saat mengonversi `Object.entries()` ke Map di TypeScript:

```ts
interface Profil {
  nama: string;
  level: number;
}

const userObj: Record<string, Profil> = {
  u1: { nama: "Andi", level: 2 },
};

const userMap = new Map<string, Profil>(Object.entries(userObj));
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/14-map-iterasi-dan-konversi/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `new Map({ a: 1, b: 2 })` | Constructor Map menerima array 2D, bukan objek biasa | Gunakan `new Map(Object.entries(obj))` |
| Mengira `Object.fromEntries` bekerja pada Array 1D | Menerima array berpasangan `[key, val]` atau Map | Pastikan strukturnya adalah pasangan key-value |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `new Map([[k1, v1], [k2, v2]])` membuat Map secara langsung.
- `new Map(Object.entries(obj))` mengubah Object → Map.
- `Object.fromEntries(map)` mengubah Map → Object.
- `[...map]` mengubah Map → Array 2D.
