# 03 · Spread Operator (`...`)

## 🎯 Tujuan Belajar
- Memahami fungsi operator **Spread (`...`)** untuk menyebarkan elemen array atau properti objek.
- Membuat salinan dangkal (*shallow copy*) array dan object tanpa referensi memori yang sama.
- Menggabungkan dua atau lebih array / object dengan mudah.
- Mengirimkan elemen array sebagai argumen individual ke dalam fungsi.
- Mengetahui perilaku tipe TypeScript saat melakukan spread pada array atau objek.

---

## 🧠 Analogi: Menuang Isi Toples

Bayangkan kamu memiliki **toples permen** berisi `["permen mint", "permen cokelat"]`.
- Jika kamu memberikan toplesnya langsung (reference), perubahan permen di toples itu akan memengaruhi pemilik lama.
- Dengan **Spread (`...`)**, kamu membuka toplesnya lalu **menuangkan isinya satu per satu** ke dalam mangkuk baru yang lebih besar bersama permen-permen lainnya.

---

## 📘 Konsep Dasar

Operator Spread ditulis dengan **tiga titik berturut-turut (`...`)**. Posisinya berada di **sisi kanan** tanda sama dengan `=` atau di dalam tanda kurung pemanggilan fungsi `()`.

### 1. Memperluas Array

```ts
const menuUtama = ["Pizza", "Pasta"];

// Menambahkan elemen baru dan menyebarkan menu lama
const menuLengkap = [...menuUtama, "Risotto", "Lasagna"];
console.log(menuLengkap); // ["Pizza", "Pasta", "Risotto", "Lasagna"]
```

---

### 2. Menggabungkan Beberapa Array

```ts
const makanan = ["Nasi Goreng", "Mie Ayam"];
const minuman = ["Es Teh", "Jus Jeruk"];

// Menggabungkan 2 array menjadi 1
const semuaMenu = [...makanan, ...minuman];
console.log(semuaMenu); // ["Nasi Goreng", "Mie Ayam", "Es Teh", "Jus Jeruk"]
```

---

### 3. Membuat Shallow Copy (Salinan Dangkal)

Ingat kembali materi **Modul 03 (Primitif vs Reference)**: Array adalah objek referensi. Jika kita menyalinnya dengan `const arr2 = arr1;`, keduanya menunjuk ke alamat memori yang sama!

Dengan Spread, kita membuat array baru yang independen:

```ts
const menuAsli = ["Pizza", "Burger"];
const menuSalinan = [...menuAsli]; // Array baru!

menuSalinan.push("Kentang Goreng");

console.log(menuAsli);    // ["Pizza", "Burger"] (Tetap aman!)
console.log(menuSalinan); // ["Pizza", "Burger", "Kentang Goreng"]
```

> ⚠️ **Catatan**: Spread hanya melakukan *shallow copy* (1 level). Jika ada objek di dalam array, objek bersarang tersebut tetap berbagi referensi.

---

### 4. Spread Operator pada Objek (ES2018+)

Spread juga bekerja dengan sangat baik pada objek untuk menyalin properti atau menimpa properti tertentu (*override*):

```ts
interface Restoran {
  nama: string;
  kota: string;
  bintang: number;
}

const restoranPusat: Restoran = {
  nama: "Resto Enak",
  kota: "Jakarta",
  bintang: 4,
};

// Buat cabang baru di Bandung dengan bintang 5
const cabangBandung: Restoran = {
  ...restoranPusat,
  kota: "Bandung", // menimpa properti kota
  bintang: 5,     // menimpa properti bintang
};

console.log(cabangBandung);
// { nama: "Resto Enak", kota: "Bandung", bintang: 5 }
```

---

### 5. Menyebarkan Array ke Argumen Fungsi

Jika sebuah fungsi membutuhkan parameter terpisah, kita bisa menyebarkan array langsung ke pemanggilan fungsi:

```ts
function pesanMinuman(bahan1: string, bahan2: string, bahan3: string): void {
  console.log(`Minuman segar dari: ${bahan1}, ${bahan2}, dan ${bahan3}`);
}

const komposisi: [string, string, string] = ["Mangga", "Susu", "Madu"];

// ✅ Gunakan spread daripada menulis komposisi[0], komposisi[1], komposisi[2]
pesanMinuman(...komposisi);

// Contoh bawaan JavaScript:
const daftarNilai = [75, 92, 88, 64, 99];
console.log(Math.max(...daftarNilai)); // 99
```

---

## 🔷 TypeScript Corner: Spread dengan Union Types & Tuple

Saat menggabungkan array dengan tipe yang berbeda:

```ts
const angka: number[] = [1, 2, 3];
const teks: string[] = ["a", "b"];

// TypeScript secara otomatis menyimpulkan tipe gabungan: (number | string)[]
const gabungan = [...angka, ...teks];
```

Jika fungsi memerlukan parameter dengan jumlah pasti, TypeScript meminta kita mendefinisikan array sebagai **tuple**:

```ts
// Tuple dengan 3 elemen pasti
const bahanJus: [string, string, string] = ["Alpukat", "Cokelat", "Es"];
pesanMinuman(...bahanJus); // ✅ TypeScript tahu pasti ada 3 string
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/03-spread-operator/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `const gabung = [arr1, arr2];` | Menghasilkan nested array `[[...], [...]]` | Gunakan spread: `[...arr1, ...arr2]` |
| `Math.max(daftarAngka)` | `Math.max` menerima argumen numerik, bukan array (hasilnya `NaN`) | Gunakan spread: `Math.max(...daftarAngka)` |
| Menimpa properti sebelum spread: `{ nama: "Baru", ...obj }` | Properti `nama` dari `obj` akan menimpa `"Baru"` | Taruh spread di awal: `{ ...obj, nama: "Baru" }` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan setiap instruksi `TODO`. Setelah selesai, bandingkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Spread operator `...` **menyebarkan / membongkar** semua elemen array atau properti objek.
- Berada di sisi **kanan** `=` atau di dalam kurung fungsi `func(...arr)`.
- Sangat ampuh untuk shallow copy, menggabungkan data, dan mengirim argumen ke fungsi numerik seperti `Math.max` / `Math.min`.
