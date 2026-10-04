# 02 · Di Balik Layar: Constructor Function & Operator `new`

## 🎯 Tujuan Belajar
- Memahami bagaimana OOP bekerja di JavaScript sebelum hadirnya keyword `class` (menggunakan **Constructor Function**).
- Menguasai **4 Langkah Magis** yang terjadi secara otomatis saat operator `new` dipanggil.
- Mengetahui mengapa kita tidak boleh menaruh method langsung di dalam constructor function (masalah pemborosan memori).
- Memahami mengapa TypeScript jauh lebih menyukai deklarasi `class` modern.

---

## 🧠 Analogi: Cetakan Logam dan Operator `new`

Bayangkan kamu memiliki sebuah **Mesin Cetak Koin**:
- `Constructor Function` adalah **bentuk cetakan koinnya**.
- Operator `new` adalah **tuas penekan**: Ketika tuas ditarik, mesin mengambil sepotong lempengan kosong (`{}`), mencetak ukiran nama di atasnya (`this.nama`), memberi stempel resmi perusahaan (`prototype`), lalu mengeluarkan koin jadi tersebut (`return`).

---

## 📘 4 Langkah Magis Operator `new`

Ketika kita menulis: `const user1 = new User("Rayhan", 2000);`
Empat hal ini terjadi di balik layar secara berurutan:

```text
1. Sebuah objek kosong {} baru dibuat di memori.
2. Fungsi User dipanggil, dan 'this' diarahkan ke objek kosong tersebut (this = {}).
3. Objek baru dihubungkan ke prototype constructor (obj.__proto__ = User.prototype).
4. Objek yang telah terisi properti tersebut secara otomatis di-return.
```

---

### Kode Constructor Function Tradisional

```ts
// Nama constructor function selalu diawali HURUF BESAR (PascalCase)
function Penumpang(this: any, nama: string, tahunLahir: number) {
  // Instance properties
  this.nama = nama;
  this.tahunLahir = tahunLahir;

  // ❌ JANGAN taruh method di dalam constructor seperti ini:
  // this.hitungUmur = function() { return 2026 - this.tahunLahir; }
  // karena method tersebut akan diduplikasi ribuan kali di setiap instance!
}

// Menambahkan method di prototype agar dipakai bersama (1 salinan memori):
Penumpang.prototype.hitungUmur = function () {
  return 2026 - this.tahunLahir;
};

// Membuat instance dengan operator `new`
const p1 = new (Penumpang as any)("Ahmad Rayhan", 2000);
console.log(p1.nama);               // "Ahmad Rayhan"
console.log(p1.hitungUmur());       // 26
console.log(p1 instanceof Penumpang); // true
```

---

## 🔷 Kenapa TypeScript Lebih Menyukai `class`?

Constructor function di JavaScript murni tidak memiliki *type definition* bawaan yang rapi untuk instance. TypeScript mengharuskan banyak *type casting* jika memakai cara lama ini.

Oleh karena itu, di dunia TypeScript modern, **selalu gunakan sintaks `class`**, karena `class` menyediakan type-checking otomatis dan autocompletion terbaik!

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/02-constructor-function-dan-new/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Constructor function dipanggil dengan operator `new`.
- 4 Langkah `new`: Buat `{}` → Ikat `this` → Sambungkan prototype → `return` objek.
- Method selalu ditempatkan pada `.prototype`, bukan di dalam body constructor.
