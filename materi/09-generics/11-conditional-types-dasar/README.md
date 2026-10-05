# 11 · Conditional Types Dasar

## 🎯 Tujuan Belajar
- Memahami konsep **Conditional Types**: logika percabangan `if...else` yang dieksekusi langsung oleh compiler TypeScript.
- Menguasai sintaks ternary tipe: **`T extends U ? TrueType : FalseType`**.
- Memahami bagaimana conditional types membuat tipe kembalian fungsi menjadi dinamis dan sangat cerdas.
- Memahami rahasia di balik layar cara kerja utility type `Exclude<T, U>`.

---

## 🧠 Analogi Dunia Nyata: "Gerbang Pintu Tol Otomatis"
Bayangkan sebuah gerbang tol otomatis:
- Sensor mendeteksi kendaraan yang mendekat (`T`).
- **Aturan Syarat (`T extends Truk`)**:
  - Jika ya (Kondisi True) ➔ Gerbang mengarahkan ke Jalur Khusus Muatan Berat (**Tipe A**).
  - Jika bukan (Kondisi False) ➔ Gerbang mengarahkan ke Jalur Mobil Pribadi (**Tipe B**).
- Keputusan jalur dibuat secara instan berdasarkan karakteristik kendaraan yang datang!

---

## 📘 Konsep Dasar

### 1. Sintaks Ternary pada Tipe
```ts
// "Jika T adalah string, maka bernilai 'YA', selain itu 'BUKAN'"
type ApakahString<T> = T extends string ? "YA" : "BUKAN";

type Hasil1 = ApakahString<string>; // "YA"
type Hasil2 = ApakahString<number>; // "BUKAN"
```

---

### 2. Tipe Kembalian Dinamis pada Fungsi
Conditional type memungkinkan satu fungsi memiliki tipe kembalian yang berbeda tergantung argumen yang dimasukkan:

```ts
// Jika isRaw bernilai true, kembalikan string mentah. Jika false, kembalikan number.
type TipeKembalian<T extends boolean> = T extends true ? string : number;

function ambilDataFormat<T extends boolean>(formatTeks: T): TipeKembalian<T> {
  if (formatTeks) {
    return "Rp 50.000" as TipeKembalian<T>;
  } else {
    return 50000 as TipeKembalian<T>;
  }
}

const angka = ambilDataFormat(false); // Otomatis bertipe number (50000)
const teks = ambilDataFormat(true);   // Otomatis bertipe string ("Rp 50.000")
```

---

### 3. Menguak Rahasia: Bagaimana `Exclude` Dibuat?
Di TypeScript bawaan, `Exclude` hanyalah satu baris conditional type yang memanfaatkan tipe `never`:

```ts
type MyExclude<T, U> = T extends U ? never : T;
```
Ketika `T` adalah union `"A" | "B"`, TypeScript mendistribusikan satu per satu:
- `"A" extends "A"` ➔ `never` (dibuang dari union)
- `"B" extends "A"` ➔ `"B"` (dipertahankan)
Hasil akhir: `"B"`. Sangat jenius dan elegan!

---

## 📌 Ringkasan
- Conditional type menggunakan operator ternary `? :` dengan kata kunci `extends`.
- Memberikan kecerdasan tingkat tinggi pada sistem pengetikan aplikasi skala enterprise.
