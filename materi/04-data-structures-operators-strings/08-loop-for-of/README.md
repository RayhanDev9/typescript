# 08 · Loop `for...of`

## 🎯 Tujuan Belajar
- Memahami perulangan modern `for...of` untuk membaca elemen array satu per satu.
- Membedakan `for...of` dengan `for` biasa dan `for...in`.
- Mengambil **indeks dan nilai** sekaligus menggunakan method `.entries()`.
- Menggabungkan `for...of` dengan **destructuring array** `[indeks, elemen]`.
- Mengetahui bahwa `continue` dan `break` dapat digunakan di dalam loop `for...of`.

---

## 🧠 Analogi: Membuka Paket Surat

- **`for` biasa**: *"Ambil surat ke-0, lalu ambil surat ke-1, sampai surat ke-N..."* (terlalu banyak urusan hitung indeks).
- **`for...of`**: *"Untuk setiap surat yang ada di dalam kotak surat, buka dan baca isinya."* (langsung fokus pada datanya).

---

## 📘 Konsep Dasar

Perulangan `for...of` diperkenalkan di ES6 sebagai cara paling bersih dan ekspresif untuk mengiterasi struktur data yang *iterable* (Array, String, Set, Map):

### 1. Perulangan Elemen Sederhana

```ts
const menuRestoran = ["Pizza", "Pasta", "Risotto", "Tiramisu"];

for (const menu of menuRestoran) {
  console.log(menu);
}
```

Kelebihan dibandingkan `.forEach()`: di dalam `for...of`, kita **tetap bisa menggunakan kata kunci `break`** (berhenti) dan **`continue`** (lompat).

---

### 2. Mengambil Indeks dengan `.entries()`

Jika kita membutuhkan nomor urut / indeks dari setiap elemen, gunakan method `.entries()` yang mengembalikan pasangan array `[index, element]`:

```ts
for (const item of menuRestoran.entries()) {
  console.log(item); // [0, "Pizza"], [1, "Pasta"], dst.
}
```

---

### 3. Menggabungkan `for...of` dengan Destructuring

Daripada mengakses `item[0]` dan `item[1]`, kita langsung membongkarnya di deklarasi loop:

```ts
// Langsung mendestruktur tuple [index, menu]
for (const [index, menu] of menuRestoran.entries()) {
  console.log(`Menu #${index + 1}: ${menu}`);
}
```

Output:
```text
Menu #1: Pizza
Menu #2: Pasta
Menu #3: Risotto
Menu #4: Tiramisu
```

---

## 🔷 TypeScript Corner: Type Inference pada `for...of`

TypeScript secara otomatis mengetahui tipe data setiap variabel:
- `for (const menu of menuRestoran)` → `menu` diinferensikan sebagai `string`.
- `for (const [i, menu] of menuRestoran.entries())` → `i` bertipe `number`, `menu` bertipe `string`.

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/08-loop-for-of/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `for (const x in menuArray)` | `for...in` mengambil **kunci/indeks string**, bukan elemen array | Gunakan `for...of` untuk elemen array |
| `for (const [i, x] of arr)` | Mencoba mendestruktur array biasa tanpa `.entries()` | Tambahkan `.entries()`: `arr.entries()` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `for...of` mengiterasi nilai elemen secara langsung.
- Gunakan `.entries()` + destructuring `[i, val]` jika membutuhkan indeks.
- Mendukung `break` dan `continue`.
