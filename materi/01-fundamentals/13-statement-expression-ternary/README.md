# 13 · Statement, Expression & Operator Ternary

## 🎯 Tujuan Belajar
- Membedakan antara **Expression** (ungkapan yang menghasilkan nilai) dan **Statement** (pernyataan instruksi lengkap)
- Menggunakan **Operator Ternary** (`? :`) untuk menyederhanakan keputusan `if/else` satu baris
- Menyematkan keputusan logika langsung di dalam **Template Literal** (`${...}`)
- Memahami inferensi tipe hasil operator ternary di TypeScript

---

## 🧠 Analogi: Kata vs Kalimat Lengkap

Dalam tata bahasa:
- **Kata / Frasa (Expression)**: `"sebuah apel merah"` atau `"dua puluh tiga"`. Ini bukan kalimat lengkap, tetapi **menghasilkan suatu objek/nilai**.
- **Kalimat Lengkap (Statement)**: *"Saya pergi ke pasar membeli buah lalu pulang."* Ini adalah serangkaian tindakan lengkap yang memerintahkan sesuatu.

---

## 🔍 Apa itu Expression vs Statement?

### 1. Expression (Menghasilkan Nilai)
Ekspresi adalah potongan kode apa pun yang **menghasilkan suatu nilai**.

Contoh Expression:
```ts
3 + 4            // menghasilkan 7
1995             // menghasilkan 1995
true && false    // menghasilkan false
"Halo " + "Dunia" // menghasilkan "Halo Dunia"
```

### 2. Statement (Instruksi Tindakan Penuh)
Statement adalah kalimat lengkap yang melakukan suatu tindakan (aksi) tetapi **tidak menghasilkan nilai secara langsung** yang bisa disimpan di variabel atau dimasukkan ke argumen.

Contoh Statement:
```ts
// Deklarasi variabel adalah statement
const tahunSekarang = 2026;

// if / else adalah statement (tidak bisa disimpan langsung ke variabel)
if (tahunSekarang >= 2026) {
  console.log("Masa depan!");
}
```

> 💡 **Aturan Emas**: Di tempat yang hanya menerima nilai (misal: di dalam `${...}` pada template literal), kamu **hanya bisa meletakkan Expression**, bukan Statement seperti `if/else`.

---

## ⚡ Operator Ternary (`? :`)

Operator ternary adalah **kondisional dalam bentuk Expression** (bisa menghasilkan nilai). Sering disebut juga *kondisional tiga bagian*:

```text
kondisi ? nilai_jika_true : nilai_jika_false
```

### Perbandingan dengan `if / else`:

```ts
const umur: number = 19;

// Cara 1: Menggunakan if/else (Statement)
let minuman: string;
if (umur >= 18) {
  minuman = "Kopi Panas ☕";
} else {
  minuman = "Susu Cokelat 🥛";
}

// Cara 2: Menggunakan Operator Ternary (Expression)
const minumanTernary: string = umur >= 18 ? "Kopi Panas ☕" : "Susu Cokelat 🥛";
```

### Menaruh Logika Langsung di Template Literal:

Karena ternary adalah *expression*, kita bisa menaruhnya langsung di dalam backtick `${...}`:

```ts
const sudahMakan: boolean = true;
console.log(`Status perut: ${sudahMakan ? "Kenyang 😊" : "Lapar 🤤"}`);
```

---

## 🔷 Versi TypeScript: Inferensi Tipe Ternary

TypeScript secara cerdas akan menggabungkan (*union*) tipe dari kedua cabang ternary jika keduanya memiliki tipe berbeda:

```ts
const adaDiskon: boolean = false;

// Jika true → string ("Potongan 10%"), jika false → number (0)
// TypeScript otomatis memberi tipe: string | number
const infoDiskon = adaDiskon ? "Potongan 10%" : 0;
```

---

## ⚖️ Kapan Pakai Ternary vs `if/else`?

| Kondisi | Rekomendasi |
| :--- | :--- |
| Memilih 1 dari 2 nilai secara singkat (misal mengisi variabel atau di dalam template literal) | Gunakan **Ternary (`? :`)** |
| Logika memiliki efek samping (*side-effects* seperti banyak `console.log`, manipulasi data bertahap) | Gunakan **`if / else`** |
| Kondisi bersarang banyak (*nested ternary*) | Gunakan **`if / else`** (jangan buat ternary bertingkat yang sulit dibaca) |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan tugas yang diberikan. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- **Expression** menghasilkan nilai; **Statement** adalah instruksi tindakan penuh.
- Template literal `${...}` hanya menerima **Expression**.
- **Operator Ternary** (`kondisi ? jikaTrue : jikaFalse`) mengubah keputusan logika menjadi sebuah expression yang menghasilkan nilai.
- TypeScript secara otomatis menganalisis tipe dari kedua cabang hasil ternary.
