# 08 · IIFE (Immediately Invoked Function Expressions)

## 🎯 Tujuan Belajar
- Memahami konsep **IIFE**: fungsi yang **dideklarasikan dan langsung dijalankan satu kali seketika itu juga**.
- Menguasai sintaks IIFE dengan fungsi biasa `(function() { ... })()` dan arrow function `(() => { ... })()`.
- Mengetahui konteks sejarah: mengapa IIFE sangat penting di era JavaScript kuno (enkapsulasi & mencegah polusi global scope).
- Mengetahui peran IIFE di era modern (TypeScript / ES Modules).

---

## 🧠 Analogi: Kapsul Sekali Pakai

Bayangkan sebuah **Kapsul Waktu / Kembang Api**:
- Begitu dinyalakan, ia langsung meledak dan menjalankan aksinya sekali saja.
- Setelah selesai, kapsulnya langsung musnah dan tidak meninggalkan sampah variabel di ruang tamu (global scope).

---

## 📘 Konsep Dasar

### 1. Mengapa Butuh IIFE? (Sintaks Dasar)

Jika kita menulis fungsi biasa:
```ts
const jalankan = function () {
  console.log("Dijalankan nanti saat dipanggil");
};
jalankan(); // Harus dipanggil manual
```

Dengan IIFE, kita membungkus fungsi dalam tanda kurung `(...)` agar dianggap sebagai sebuah *expression*, lalu langsung menambahkan tanda kurung eksekusi `()` di belakangnya:

```ts
// 1. IIFE Fungsi Biasa
(function () {
  const rahasia = "Data Terkunci";
  console.log("IIFE Berjalan Seketika!");
})();

// console.log(rahasia); // ❌ Error: Cannot find name 'rahasia' (Privat!)

// 2. IIFE Arrow Function
(() => {
  console.log("IIFE Arrow Function juga langsung dieksekusi!");
})();
```

---

### 2. IIFE yang Mengembalikan Nilai

Kita bisa menggunakan IIFE untuk menginisialisasi variabel yang membutuhkan kalkulasi logika kompleks:

```ts
const statusSistem = (() => {
  const waktu = new Date().getHours();
  const bebanServer = 45; // persen
  if (waktu >= 0 && waktu < 5) return "MAINTENANCE";
  return bebanServer > 80 ? "SIAGA" : "NORMAL";
})();

console.log("Status Server:", statusSistem); // "NORMAL"
```

---

### 3. IIFE di Era JavaScript & TypeScript Modern

Di masa lalu sebelum ES6 (sebelum ada `let`, `const`, dan file modul), semua variabel `var` bersarang di Global Scope. IIFE adalah satu-satunya cara membuat variabel privat.

Di TypeScript modern:
- Setiap file dengan `import`/`export` sudah merupakan **Module Scope terisolasi**.
- Blok biasa `{ const privat = 1; }` sudah menciptakan block scope.
- Namun, IIFE tetap berguna untuk inisialisasi variabel kompleks atau menjalankan kode *async* langsung di file lama (*Async IIFE*).

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/08-iife/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `function() { ... }()` | SyntaxError karena JS menganggap ini function declaration biasa yang tidak bernama | Bungkus seluruh fungsi dengan kurung: `(function() { ... })()` |
| Lupa tanda titik koma `;` sebelum IIFE di file dengan banyak baris | JS parser bisa menganggap baris sebelumnya sebagai pemanggilan fungsi | Selalu beri titik koma di akhir baris |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- IIFE dieksekusi **satu kali seketika** saat didefinisikan.
- Format: `(function() { ... })();` atau `(() => { ... })();`.
- Menciptakan scope privat yang tidak bisa diakses dari luar.
