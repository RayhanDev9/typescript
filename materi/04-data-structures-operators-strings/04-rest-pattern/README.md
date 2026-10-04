# 04 · Rest Pattern & Parameters

## 🎯 Tujuan Belajar
- Memahami konsep **Rest (`...`)** untuk mengumpulkan sisa elemen ke dalam satu array/object.
- Membedakan dengan jelas antara **Spread Operator** vs **Rest Pattern**.
- Menggunakan Rest Pattern pada destructuring **Array** dan **Object**.
- Menggunakan **Rest Parameters** pada fungsi untuk menerima jumlah argumen dinamis (tak terbatas).
- Mengetahui aturan penempatan Rest (wajib di posisi **terakhir**) dan tipe TypeScript-nya.

---

## 🧠 Analogi: Kantong Bungkus Sisa

Bayangkan kamu sedang makan prasmanan:
- **Spread (`...`)**: Kamu membuka kotak makanan dan menyebarkan isinya ke atas piring-piring tamu.
- **Rest (`...`)**: Tamu mengambil makanan utama dan lauk favoritnya, lalu **semua sisa makanan lainnya dibungkus ke dalam satu kantong plastik**.

---

## 📘 Konsep Dasar

Meskipun sama-sama menggunakan tiga titik (`...`), perbedaannya sangat jelas dari **posisinya**:

| Nama | Posisi | Fungsi |
| :--- | :--- | :--- |
| **Spread** | Di sisi **kanan** tanda `=` atau dalam pemanggilan fungsi `f(...)` | **Menyebarkan / membongkar** elemen |
| **Rest** | Di sisi **kiri** tanda `=` (destructuring) atau deklarasi parameter fungsi | **Mengumpulkan / mengemas** elemen yang tersisa |

```ts
// 1. SPREAD: berada di kanan =
const arr = [1, 2, ...[3, 4]]; // membongkar [3, 4] -> [1, 2, 3, 4]

// 2. REST: berada di kiri =
const [a, b, ...sisa] = [1, 2, 3, 4, 5]; // mengemas [3, 4, 5] ke variabel sisa
console.log(sisa); // [3, 4, 5]
```

---

### 1. Rest Pattern pada Destructuring Array

Rest mengumpulkan semua elemen setelah elemen yang sudah diambil:

```ts
const menu = ["Pizza", "Pasta", "Risotto", "Focaccia", "Bruschetta"];

// Mengambil 2 menu pertama, sisanya dikumpulkan ke array makananLainnya
const [makananUtama, pasta, ...makananLainnya] = menu;

console.log(makananUtama);    // "Pizza"
console.log(pasta);            // "Pasta"
console.log(makananLainnya);   // ["Risotto", "Focaccia", "Bruschetta"]
```

> ⚠️ **Aturan Penting**: Rest element **HARUS menjadi elemen terakhir** dalam destructuring! `const [a, ...sisa, b] = arr;` adalah **ERROR**.

---

### 2. Rest Pattern pada Destructuring Object

Rest pada object mengumpulkan semua properti yang tersisa ke dalam object baru:

```ts
const profilResto = {
  nama: "Trattoria Bella",
  kota: "Bandung",
  rating: 4.9,
  jamBuka: "10:00 - 22:00",
  kapasitas: 120,
};

// Ambil nama dan kota, sisa properti lainnya masuk ke `detailTambahan`
const { nama, kota, ...detailTambahan } = profilResto;

console.log(nama);           // "Trattoria Bella"
console.log(kota);           // "Bandung"
console.log(detailTambahan); // { rating: 4.9, jamBuka: "10:00 - 22:00", kapasitas: 120 }
```

---

### 3. Rest Parameters pada Fungsi

Rest parameters memungkinkan sebuah fungsi menerima **berapa pun jumlah argumen** dan secara otomatis mengumpulkannya menjadi sebuah array di dalam fungsi:

```ts
// Fungsi menerima 1 atau lebih angka dan menjumlahkannya
function hitungTotal(...daftarAngka: number[]): number {
  let total = 0;
  for (const angka of daftarAngka) {
    total += angka;
  }
  return total;
}

console.log(hitungTotal(10, 20));             // 30
console.log(hitungTotal(5, 10, 15, 20, 25));   // 75
console.log(hitungTotal());                    // 0
```

Kita juga bisa menggabungkan parameter biasa dengan rest parameter:

```ts
function pesanPizza(namaPemesan: string, ukuran: string, ...topping: string[]): void {
  console.log(`Pesanan untuk ${namaPemesan} (${ukuran}):`);
  console.log(`Topping: ${topping.length > 0 ? topping.join(", ") : "Polos (tanpa topping)"}`);
}

pesanPizza("Rayhan", "Large", "Keju Mozzarella", "Daging Sapi", "Jamur");
pesanPizza("Budi", "Medium"); // topping = []
```

---

## 🔷 TypeScript Corner: Type Safety pada Rest Parameters

Di TypeScript, rest parameter **wajib** diberi tipe berupa array atau tuple:

```ts
// Array: jumlah argumen bebas, semua bertipe string
function gabungKata(...kata: string[]): string {
  return kata.join(" ");
}

// Tuple: menentukan minimal tipe argumen
function rekamLog(kode: number, ...pesan: string[]): void {
  console.log(`[LOG ${kode}]:`, pesan.join(" | "));
}
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/04-rest-pattern/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `function hitung(...angka: number[], pengali: number)` | Rest parameter bukan di posisi terakhir → SyntaxError | Taruh rest di akhir: `(pengali: number, ...angka: number[])` |
| `const [...sisa, terakhir] = arr;` | Rest element pada destructuring harus di posisi paling akhir | Ambil dari awal atau gunakan `.slice(-1)` |
| `function uji(...x)` | Di TypeScript, tipe rest parameter tidak boleh `any` implisit | Berikan tipe eksplisit: `...x: string[]` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan semua instruksi `TODO`. Setelah selesai, periksa jawabanmu di [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Rest pattern `...` **mengumpulkan sisa data** menjadi array atau object.
- Posisinya selalu di **sisi kiri `=` (destructuring)** atau di **deklarasi parameter fungsi**.
- Rest parameter selalu berada di posisi **terakhir** dan bertipe `T[]` di TypeScript.
- Menghilangkan kebutuhan objek `arguments` kuno di JavaScript.
