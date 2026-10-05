# 01 · Apa Itu Generic?

## 🎯 Tujuan Belajar
- Memahami latar belakang mengapa TypeScript membutuhkan fitur **Generics**.
- Mengenali dua jebakan umum sebelum mengenal Generics: **Duplikasi Kode** dan **Bahaya Tipe `any`**.
- Memahami konsep dasar **Type Variable** (Variabel Tipe), yang umumnya disimbolkan dengan huruf `<T>`.
- Mampu membaca dan menulis fungsi generik paling dasar.

---

## 🧠 Analogi Dunia Nyata: "Kotak Tupperware Transparan vs Kardus Misterius"
Bayangkan Anda ingin menyimpan makanan di kulkas:
- **Pendekatan Kaku (Tanpa Generic)**: Anda membeli 1 wadah khusus yang hanya boleh diisi apel (`WadahApel`). Jika besok ingin menyimpan jeruk, Anda terpaksa membeli wadah baru (`WadahJeruk`). Anda akan punya 100 wadah berbeda hanya karena jenis makanannya berbeda (**Duplikasi Kode**).
- **Pendekatan Tipe `any` (Kardus Hitam Misterius)**: Anda memasukkan makanan apa saja ke dalam kardus hitam tanpa label. Siapapun bisa memasukkan sepatu kotor atau batu ke dalamnya. Saat dibuka seminggu kemudian, Anda tidak tahu apa isinya dan bisa keracunan (**Bahaya Runtime Error & Kehilangan Autocomplete**).
- **Pendekatan Generics (Wadah Tupperware Bening Berlabel `<T>`)**: Anda punya 1 jenis wadah fleksibel. Saat Anda memasukkan apel, wadah itu secara otomatis mengunci diri sebagai *Wadah Khusus Apel*. Anda tahu persis apa isinya, aman, dan wadah yang sama bisa dipakai untuk jenis makanan lain di masa depan!

---

## 📘 Masalah di Kode Nyata

### Kasus: Mengambil Elemen Pertama dari Sebuah Array

#### 1. Pendekatan Kaku (Duplikasi Fungsi)
```ts
function ambilPertamaAngka(arr: number[]): number {
  return arr[0];
}

function ambilPertamaTeks(arr: string[]): string {
  return arr[0];
}
// ❌ Boros waktu dan tenaga jika ada 20 tipe data berbeda!
```

#### 2. Pendekatan Bahaya `any` (Kehilangan Keamanan Tipe)
```ts
function ambilPertamaAny(arr: any[]): any {
  return arr[0];
}

const hasil = ambilPertamaAny(["Halo", "Dunia"]);
// TypeScript menganggap tipe 'hasil' adalah 'any'.
// Kita kehilangan fitur saran kode (autocomplete) dan pengecekan error!
```

#### 3. Solusi Elegan: Generic `<T>`
```ts
function ambilPertama<T>(arr: T[]): T {
  return arr[0];
}

// TypeScript secara cerdas mendeteksi:
const angka = ambilPertama([10, 20, 30]); // Tipe otomatis: number
const teks = ambilPertama(["A", "B", "C"]); // Tipe otomatis: string
```

---

## 📌 Mengapa Huruf `T`?
Huruf `T` adalah singkatan dari **Type**. Ini adalah konvensi standar internasional para programmer TypeScript.
Jika memiliki lebih dari satu parameter generic, biasanya dilanjutkan dengan huruf:
- `T` (Type pertama)
- `U` (Type kedua)
- `V` (Type ketiga)
- `K` (Key) & `V` (Value) untuk objek/map.

---

## 📌 Ringkasan
- Generic memungkinkan kita membuat fungsi, antarmuka, dan kelas yang **reusable** untuk berbagai tipe data.
- Generic menjaga **keamanan tipe (type-safety)** 100% tanpa kompromi, berbeda dengan `any` yang mematikan fitur TypeScript.
