# 01 · Destructuring Array

## 🎯 Tujuan Belajar
- Memahami konsep **destructuring** (membongkar) elemen array ke variabel mandiri.
- Mengambil elemen berurutan maupun melompati elemen tertentu dengan koma kosong (`, ,`).
- Menukar nilai 2 variabel secara instan tanpa variabel sementara (`[a, b] = [b, a]`).
- Membongkar array bersarang (*nested array*).
- Menetapkan **nilai default** (*default values*) saat elemen tidak ada / `undefined`.
- Mengenal keunggulan TypeScript saat mendestruktur **Tuple** `[string, number]`.

---

## 🧠 Analogi: Mengeluarkan Menu dari Paket Makanan

Bayangkan kamu memesan **Paket Hemat Restoran** yang berisi `["Ayam Bakar", "Nasi Uduk", "Es Teh"]`.

- **Cara Lama**: Kamu harus mengambil satu per satu dengan nomor urut (indeks):
  - Ambil makanan utama = `paket[0]`
  - Ambil karbohidrat = `paket[1]`
  - Ambil minuman = `paket[2]`
- **Cara Destructuring**: Kamu langsung membuka kotaknya dan menaruh masing-masing ke piringnya dalam satu kali langkah:
  `const [makanan, nasi, minuman] = paket;`

---

## 📘 Konsep Dasar

### 1. Cara Lama vs Destructuring

```ts
const menu: string[] = ["Pizza Margherita", "Spaghetti Carbonara", "Risotto Jamur"];

// ❌ Cara Lama (berulang-ulang menulis nama array dan indeks)
const menu1 = menu[0];
const menu2 = menu[1];

// ✅ Cara Modern (Destructuring Array)
const [pertama, kedua] = menu;
console.log(pertama); // "Pizza Margherita"
console.log(kedua);   // "Spaghetti Carbonara"
```

> ⚠️ Array aslinya **TIDAK berubah**. Destructuring hanya menyalin nilainya ke variabel baru.

---

### 2. Melompati Elemen (Skipping)

Jika kita hanya ingin mengambil elemen ke-1 dan ke-3, cukup biarkan posisinya kosong dengan tanda koma `,`:

```ts
const menu: string[] = ["Pizza", "Pasta", "Risotto", "Tiramisu"];

// Lewati elemen ke-2 ("Pasta")
const [makananUtama, , makananPenutup] = menu;

console.log(makananUtama);   // "Pizza"
console.log(makananPenutup); // "Risotto"
```

---

### 3. Menukar Nilai Dua Variabel (Swap)

Tanpa destructuring, menukar dua variabel membutuhkan variabel pembantu (`temp`). Dengan destructuring, kita bisa menukarnya dalam 1 baris:

```ts
let kokiUtama: string = "Andi";
let asistenKoki: string = "Budi";

// Menukar posisi koki
[kokiUtama, asistenKoki] = [asistenKoki, kokiUtama];

console.log(kokiUtama);   // "Budi"
console.log(asistenKoki); // "Andi"
```

---

### 4. Mengambil Nilai Balik Fungsi yang Berupa Array

Fungsi bisa mengembalikan array yang berisi beberapa hasil sekaligus, lalu pemanggil fungsi langsung membongkarnya:

```ts
function pesanMenu(kategoriIndex: number, menuIndex: number): [string, string] {
  const kategori = ["Makanan", "Minuman"];
  const daftarMenu = ["Nasi Goreng", "Jus Alpukat"];
  return [kategori[kategoriIndex], daftarMenu[menuIndex]];
}

const [kategoriTerpilih, menuTerpilih] = pesanMenu(0, 0);
console.log(`Pesanan: ${menuTerpilih} (${kategoriTerpilih})`);
```

---

### 5. Nested Destructuring (Array Bersarang)

Untuk array di dalam array, gunakan kurung siku bertingkat yang cocok dengan posisinya:

```ts
// Tipe tuple bersarang: elemen ke-3 adalah array [number, number]
const nested: [number, number, [number, number]] = [2, 4, [5, 6]];

// Mengambil angka 2 dan angka 6
const [pertama, , [, angkaEnam]] = nested;
console.log(pertama, angkaEnam); // 2 6
```

---

### 6. Nilai Default (Default Values)

Jika kita mencoba mendestruktur indeks yang tidak ada, hasilnya `undefined`. Kita bisa menyiapkan nilai cadangan (default):

```ts
const nilaiUjian: number[] = [85, 90];

// Nilai ke-3 tidak ada di array, jadi memakai nilai default 0
const [nilai1 = 0, nilai2 = 0, nilai3 = 0] = nilaiUjian;

console.log(nilai1); // 85
console.log(nilai2); // 90
console.log(nilai3); // 0 (karena tidak ada di array aslinya)
```

---

## 🔷 TypeScript Corner: Destructuring Tuple

Di TypeScript, **Tuple** adalah array dengan jumlah elemen dan tipe data yang sudah pasti di setiap posisinya.

```ts
// Tipe tuple: [namaProduk, harga, statusTersedia]
const itemRestoran: [string, number, boolean] = ["Kopi Latte", 35000, true];

// TypeScript otomatis tahu tipe masing-masing variabel:
// nama -> string
// harga -> number
// ada -> boolean
const [nama, harga, ada] = itemRestoran;
```

TypeScript akan memberikan autocompletion dan type safety otomatis untuk setiap variabel hasil destructuring!

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/01-destructuring-array/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `const { a, b } = [10, 20];` | Menggunakan kurung kurawal `{}` untuk array | Gunakan kurung siku `const [a, b] = [10, 20];` |
| `const [a, b] = null;` | Mendestruktur nilai `null` atau `undefined` akan melempar runtime error | Pastikan nilai berupa array atau berikan fallback `(arr ?? [])` |
| `const [x, y, z] = [1, 2];` | Variabel `z` bernilai `undefined` tanpa disadari | Beri nilai default `const [x, y, z = 0] = ...` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan setiap instruksi `TODO`. Setelah selesai, bandingkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Destructuring array menggunakan tanda kurung siku di sisi kiri persamaan: `const [a, b] = array;`.
- Urutan variabel **sesuai posisi indeks** di dalam array.
- Gunakan koma kosong `, ,` untuk melompati elemen.
- Tukar nilai variabel tanpa variabel pembantu: `[x, y] = [y, x]`.
- Siapkan nilai default `[a = default]` untuk mengantisipasi data yang kurang.
