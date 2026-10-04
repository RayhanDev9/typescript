# 09 · Mengembalikan Nilai dari Fungsi Async

## 🎯 Tujuan Belajar
- Mengetahui jebakan paling umum pemula: Mengapa memanggil fungsi async langsung menghasilkan **`Promise { <pending> }`**, bukan nilai datanya!
- Memahami bahwa fungsi bertanda `async` **SELALU membungkus nilai kembalian ke dalam `Promise<T>`**.
- Mengambil nilai kembalian fungsi async menggunakan 2 pendekatan: **`.then()`** dan **`await` bertingkat**.
- Memahami konsep **Top-Level Await** pada sistem modul modern.

---

## 🧠 Analogi Dunia Nyata: "Paket Belanja yang Belum Dibuka"
Bayangkan Anda memesan sepatu dari toko online:
- Fungsi biasa adalah Anda pergi ke toko fisik dan langsung menenteng sepatu di kaki Anda.
- **Fungsi `async`** adalah kurir yang mengantar **kardus paket bersegel lakban** ke teras rumah Anda.
- Jika Anda langsung melihat ke teras (`console.log(hasil)`), Anda tidak melihat sepatu, melainkan melihat **Kardus Tertutup (`Promise <pending>`)**!
- Untuk bisa memakai sepatunya, Anda harus membuka segel kardus tersebut terlebih dahulu (**`await`** atau **`.then()`**)!

---

## 📘 Konsep Dasar

### 1. Jebakan `Promise <pending>`
Perhatikan kode berikut:

```ts
async function dapatkanNamaKota(): Promise<string> {
  return "Jakarta";
}

// ❌ JEBAKAN PEMULA:
const kota = dapatkanNamaKota();
console.log(kota); // Output: Promise { <pending> } (BUKAN "Jakarta"!)
```

Mengapa? Karena apapun yang di-`return` oleh fungsi `async`, otomatis dibungkus oleh TypeScript ke dalam `Promise<T>`.

---

### 2. Cara Benar Membaca Nilai Kembalian

#### Cara A: Menggunakan `.then()`
```ts
dapatkanNamaKota().then((namaKota) => {
  console.log("Nama kota berhasil dibuka:", namaKota); // "Jakarta"
});
```

#### Cara B: Menggunakan `await` di Fungsi Pemanggil Lain (Paling Disarankan)
```ts
async function cetakLaporan() {
  // 'await' membuka kardus Promise secara instan
  const kota: string = await dapatkanNamaKota();
  console.log("Kota:", kota); // "Jakarta"
}

cetakLaporan();
```

---

## 🔷 TypeScript Corner: Generic Return Type

Di TypeScript, jika Anda menulis `return 100` di dalam fungsi `async`, tipe kembalian fungsi tersebut **bukanlah `number`**, melainkan **`Promise<number>`**:

```ts
// TypeScript otomatis memaksa penulisan Promise<T>
async function hitungSkor(): Promise<number> {
  return 100;
}

// Jika mencoba menulis : number tanpa Promise, TypeScript akan ERROR:
// async function hitungSkorSalah(): number { ... } ❌
// Error: The return type of an async function or method must be the global Promise<T> type.
```

---

## 📌 Ringkasan
- Semua fungsi `async` mengembalikan sebuah `Promise<T>`.
- Jangan pernah langsung membaca nilai fungsi async tanpa `await` atau `.then()`, karena Anda hanya akan mendapatkan objek `Promise { <pending> }`.
- Gunakan `await` di fungsi lain untuk membuka isi Promise secara beruntun.
