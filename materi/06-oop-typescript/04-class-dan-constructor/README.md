# 04 · Class & Constructor

## 🎯 Tujuan Belajar
- Memahami sintaks modern **`class`** di ES6 / TypeScript sebagai cara standar membuat objek berorientasi objek.
- Mendeklarasikan **`constructor`**, properti instansi (*instance properties*), dan method instansi (*instance methods*).
- Menguasai fitur super produktif TypeScript: **Parameter Properties Shorthand** (`constructor(public nama: string)`).
- Mengetahui bahwa Class adalah *first-class citizen* dan tidak mengalami *hoisting*.

---

## 🧠 Analogi: Cetakan Pabrik Modern

- `class Orang {}` adalah mesin pabrik otomatis.
- `constructor()` adalah tombol start mesin yang menerima bahan mentah (nama, umur) dan menyusunnya menjadi produk jadi.
- Method di dalam class secara otomatis ditaruh di dalam prototype tanpa perlu kita tulis manual `Orang.prototype.method = ...`.

---

## 📘 Konsep Dasar

### 1. Deklarasi Class Standar

```ts
class PenumpangPesawat {
  // 1. Deklarasi Properti
  public nama: string;
  public nomorKursi: string;
  public sudahBoarding: boolean;

  // 2. Constructor: Dijalankan otomatis saat `new` dipanggil
  constructor(nama: string, nomorKursi: string) {
    this.nama = nama;
    this.nomorKursi = nomorKursi;
    this.sudahBoarding = false;
  }

  // 3. Instance Methods: Otomatis masuk ke Prototype!
  public checkIn(): void {
    this.sudahBoarding = true;
    console.log(`[BOARDING PASS] ${this.nama} di kursi ${this.nomorKursi} siap naik pesawat.`);
  }
}

const p1 = new PenumpangPesawat("Ahmad Rayhan", "12A");
p1.checkIn();
```

---

### 2. Fitur TypeScript: Parameter Properties Shorthand 🚀

Di TypeScript, kita bisa menyingkat deklarasi properti dan penugasan `this.x = x` menjadi **1 baris saja** dengan menambahkan access modifier (`public`, `private`, `protected`, `readonly`) langsung di parameter constructor:

```ts
// ✨ CARA RINGKAS DAN STANDAR INDUSTRI:
class PenumpangRingkas {
  public sudahBoarding: boolean = false;

  // TypeScript otomatis membuat properti `nama` dan `nomorKursi`,
  // sekaligus menjalankan `this.nama = nama` dan `this.nomorKursi = nomorKursi`!
  constructor(
    public nama: string,
    public nomorKursi: string
  ) {}

  public checkIn(): void {
    this.sudahBoarding = true;
    console.log(`[BOARDING] ${this.nama} (${this.nomorKursi}) sukses!`);
  }
}

const p2 = new PenumpangRingkas("Budi Santoso", "14C");
p2.checkIn();
```

---

## ⚠️ 3 Aturan Penting tentang Class di JS/TS

1. Class **TIDAK di-hoist** (harus dideklarasikan sebelum dipanggil).
2. Class adalah *first-class citizen* (bisa dikirim ke fungsi atau dikembalikan dari fungsi).
3. Body class selalu dieksekusi dalam **Strict Mode** secara otomatis.

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/04-class-dan-constructor/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `class` membuat kode OOP jauh lebih bersih dan mudah dibaca daripada Constructor Function lama.
- Gunakan **Parameter Properties** `constructor(public x: string)` untuk menghemat penulisan kode.
