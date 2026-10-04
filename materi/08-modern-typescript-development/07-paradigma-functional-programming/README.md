# 07 · Paradigma Functional Programming

## 🎯 Tujuan Belajar
- Memahami konsep dasar **Functional Programming (FP)** sebagai paradigma penulisan kode modern.
- Mengetahui perbedaan mendasar antara **Pemrograman Imperatif** (How to do) dan **Pemrograman Deklaratif / FP** (What to do).
- Memahami mental model FP: **Data Mengalir Melalui Fungsi** (Data Pipelines).
- Memahami mengapa framework modern (seperti React, Vue 3 Composition API, Redux) sangat memprioritaskan gaya fungsional dibanding OOP murni.

---

## 🧠 Analogi Dunia Nyata: "Pabrik Perakitan Mobil vs Robot Mandiri"
- **Object-Oriented Programming (OOP)**: Seperti membuat robot mandiri yang memiliki tubuh, nama, dan ingatan internal sendiri. Kita memanggil `robot.berjalan()` atau `robot.isiBensin()`. Robot tersebut menyimpan *state* internal yang bisa berubah-ubah.
- **Functional Programming (FP)**: Seperti **Ban Berjalan (Conveyor Belt)** di pabrik:
  - Bahan mentah (Data) diletakkan di atas ban berjalan.
  - Melewati Mesin 1 (Fungsi Cetak Besi) ➔ menghasilkan rangka.
  - Melewati Mesin 2 (Fungsi Pengecatan) ➔ menghasilkan bodi berwarna.
  - Melewati Mesin 3 (Fungsi Pasang Roda) ➔ menghasilkan mobil jadi.
  - Mesin-mesin tersebut tidak menyimpan ingatan, mereka hanya menerima bahan masuk dan mengeluarkan bahan baru tanpa merusak cetakan aslinya!

---

## 📘 Perbandingan: Imperatif vs Deklaratif (FP)

Kasus: Mengambil angka genap dari daftar angka, lalu mengalikannya dengan 2.

### 1. Gaya Imperatif (Langkah demi Langkah / How)
Fokus pada instruksi detail komputer: inisialisasi array kosong, lakukan perulangan `for`, cek modulo, ubah indeks, `push` ke array.
```ts
const angka = [1, 2, 3, 4, 5, 6];
const hasilImperatif: number[] = [];

for (let i = 0; i < angka.length; i++) {
  if (angka[i] % 2 === 0) {
    hasilImperatif.push(angka[i] * 2);
  }
}
```

### 2. Gaya Deklaratif / Fungsional (What)
Fokus pada transformasi data apa yang kita inginkan:
```ts
const angka = [1, 2, 3, 4, 5, 6];

const hasilFungsional = angka
  .filter((n) => n % 2 === 0) // Ambil yang genap
  .map((n) => n * 2);          // Kalikan 2
```

---

## 🌟 Pilar Utama Functional Programming
1. **Pure Functions (Fungsi Murni)**: Input yang sama selalu menghasilkan output yang sama tanpa mengubah dunia luar.
2. **Immutability (Kekekalan Data)**: Data tidak pernah diedit langsung (*no mutation*); jika ada perubahan, kita buat salinan baru.
3. **First-Class & Higher-Order Functions**: Fungsi diperlakukan setara variabel (bisa disimpan, dioper sebagai argumen, atau di-return dari fungsi lain).
4. **Function Composition**: Menggabungkan fungsi-fungsi kecil menjadi alur kerja yang lebih besar.

---

## 📌 Ringkasan
- Gaya FP membuat kode lebih mudah dibaca, lebih sedikit bug akibat *shared state*, dan sangat mudah diuji (*unit test*).
- TypeScript memberikan perlindungan tipe super ketat pada transformasi data fungsional.
