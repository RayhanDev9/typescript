# 22 · Method Object & Pengenalan Kata Kunci `this`

## 🎯 Tujuan Belajar
- Mengetahui bahwa fungsi yang disimpan di dalam objek disebut **Method**
- Menggunakan kata kunci **`this`** untuk mengakses data internal objek
- Mendefinisikan tipe method di dalam **`interface`** TypeScript
- Memahami mengapa method objek umumnya menggunakan fungsi biasa (*bukan arrow function*)

---

## 🧠 Analogi: Karyawan dan Dompet Pribadinya

Jika sebuah objek adalah **seseorang**:
- **Properti** adalah data dirinya: nama, tahun lahir, pekerjaan.
- **Method** adalah kemampuan/tindakan yang bisa dilakukannya: `hitungUmur()`, `sapaTeman()`.
- **`this`** adalah kata ganti *"diri saya sendiri"*. Saat orang tersebut berkata *"umur saya adalah 2026 dikurangi tahun lahir saya"*, ia merujuk pada tahun lahir miliknya sendiri (`this.tahunLahir`).

---

## 💻 1. Membuat Method dan Menggunakan `this`

```ts
interface Siswa {
  namaDepan: string;
  namaBelakang: string;
  tahunLahir: number;
  // Method signature
  hitungUmur(): number;
  buatRingkasan(): string;
}

const rayhan: Siswa = {
  namaDepan: "Rayhan",
  namaBelakang: "Pratama",
  tahunLahir: 2001,

  // Method 1: Menghitung umur menggunakan properti milik sendiri (this)
  hitungUmur() {
    return 2026 - this.tahunLahir;
  },

  // Method 2: Menghasilkan ringkasan profil
  buatRingkasan() {
    return `${this.namaDepan} ${this.namaBelakang} berumur ${this.hitungUmur()} tahun.`;
  }
};

console.log(rayhan.hitungUmur());     // 25
console.log(rayhan.buatRingkasan()); // "Rayhan Pratama berumur 25 tahun."
```

---

## ⚠️ Mengapa Tidak Memakai Arrow Function untuk Method?

Di JavaScript dan TypeScript, **Arrow Function (`=>`) tidak memiliki kata kunci `this` sendiri**!
Jika kamu menulis:

```ts
const orang = {
  nama: "Budi",
  sapa: () => {
    // ❌ this di sini TIDAK merujuk ke objek `orang`!
    return `Halo saya ${this.nama}`;
  }
};
```

> 💡 Gunakan sintaks fungsi biasa / *method shorthand* `namaMethod() { ... }` setiap kali membuat method di dalam objek. (Mekanisme mendalam tentang `this` akan kita bedah di **Modul 3: Behind the Scenes**).

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan tantangannya. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Method adalah fungsi yang menjadi bagian dari suatu objek.
- `this` merujuk pada objek pemilik method tersebut.
- Definisikan bentuk method di dalam `interface` dengan format `namaMethod(param: Tipe): TipeReturn;`.
- Hindari arrow function saat membuat method objek agar `this` bekerja dengan benar.
