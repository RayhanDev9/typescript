# 17 · Arrow Function (Fungsi Panah)

## 🎯 Tujuan Belajar
- Menulis fungsi modern menggunakan sintaks **Arrow Function** (`=>`)
- Menggunakan **Implicit Return** (pengembalian nilai langsung satu baris tanpa kata kunci `return`)
- Menentukan **Default Parameter** (nilai bawaan jika argumen tidak dikirim)
- Menggunakan **Optional Parameter** (`?`) di TypeScript

---

## 🧠 Analogi: Panah Arah `=>`

Sintaks tanda panah `=>` bisa dibaca secara alami:

```text
(bahan masakan) => menghasilkan makanan
(angka) => angka * 2
```

Panah ini menghubungkan **apa yang masuk** di sebelah kiri dengan **apa yang dihasilkan** di sebelah kanan.

---

## 💻 1. Bentuk Arrow Function

### a. Satu Baris (Implicit Return)
Jika fungsi hanya berisi satu baris perhitungan, kita tidak perlu kurung kurawal `{ }` dan tidak perlu kata kunci `return`:

```ts
const hitungUmur = (tahunLahir: number): number => 2026 - tahunLahir;

console.log(hitungUmur(2001)); // 25
```

### b. Banyak Baris (Block Body)
Jika ada beberapa baris perintah atau logika `if/else`, gunakan kurung kurawal `{ }` dan **wajib** menulis `return`:

```ts
const tahunSampaiPensiun = (tahunLahir: number, nama: string): string => {
  const umur = 2026 - tahunLahir;
  const sisaTahun = 60 - umur;

  if (sisaTahun > 0) {
    return `${nama} akan pensiun dalam ${sisaTahun} tahun lagi.`;
  } else {
    return `${nama} sudah memasuki masa pensiun 🎉`;
  }
};
```

---

## 🔷 Versi TypeScript: Parameter Default & Opsional

### 1. Default Parameter (Nilai Bawaan)
Memberikan nilai awal otomatis jika pemanggil tidak mengirimkan argumen:

```ts
const hitungDiskon = (harga: number, diskonPersen: number = 10): number => {
  return harga - harga * (diskonPersen / 100);
};

console.log(hitungDiskon(100000));     // 90000 (menggunakan default 10%)
console.log(hitungDiskon(100000, 25)); // 75000 (menggunakan 25%)
```

### 2. Optional Parameter (`?`)
Tanda tanya `?` memberi tahu TypeScript bahwa parameter tersebut **boleh diisi, boleh tidak**:

```ts
const sapaPengguna = (nama: string, gelar?: string): string => {
  if (gelar) {
    return `Halo, ${gelar} ${nama}!`;
  }
  return `Halo, ${nama}!`;
};

console.log(sapaPengguna("Rayhan"));          // "Halo, Rayhan!"
console.log(sapaPengguna("Rayhan", "Dr."));   // "Halo, Dr. Rayhan!"
```

> ⚠️ **Aturan TypeScript**: Parameter opsional (`?`) dan parameter default **wajib ditaruh di posisi paling belakang** setelah parameter wajib.

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan tugasnya. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Arrow function ditulis dengan `(params) => output`.
- Satu baris tidak memerlukan `{}` dan `return` (*implicit return*).
- Default parameter (`param = nilai`) memberi nilai cadangan otomatis.
- Optional parameter (`param?: tipe`) diizinkan untuk argumen yang tidak wajib.
