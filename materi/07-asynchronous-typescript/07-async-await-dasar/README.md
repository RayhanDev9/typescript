# 07 · Asynchronous Modern: Async / Await Dasar

## 🎯 Tujuan Belajar
- Memahami mengapa **`async / await`** diciptakan sebagai cara modern terbersih menulis kode asinkron.
- Memahami arti kata kunci **`async`** pada deklarasi fungsi.
- Memahami cara kerja kata kunci **`await`** untuk menunggu dan membuka (*unwrap*) nilai Promise.
- Mengubah kode rantai `.then()` yang panjang menjadi baris kode yang tampak rapi dan sekuensial.

---

## 🧠 Analogi Dunia Nyata: "Menunggu Giliran Cuci Mobil"
- **Pola `.then()`**: Seperti memesan jasa cuci mobil lalu Anda menandatangani formulir instruksi: *"Tolong kalau bodi sudah bersih, MAKA semir bannya (.then), lalu kalau ban sudah disemir, MAKA bersihkan kaca depannya (.then)"*. Kodenya penuh dengan fungsi perantara (*callback*).
- **Pola `async / await`**: Seperti berdiri langsung di depan mobil Anda dan berkata secara alami:
  1. Tunggu bodi mobil selesai dicuci (**`await cuciBodi()`**).
  2. Baru semir bannya (**`await semirBan()`**).
  3. Baru bersihkan kacanya (**`await bersihkanKaca()`**).
  Kode Anda dibaca persis seperti instruksi baris-demi-baris biasa, padahal di baliknya tetap berjalan secara asinkron!

---

## 📘 Konsep Dasar

### 1. Apa itu `async / await`?
`async / await` diperkenalkan untuk mempermudah konsumsi Promise. Ini adalah apa yang disebut di dunia pemrograman sebagai **Syntactic Sugar** (pemanis sintaksis) — cara penulisan yang jauh lebih manusiawi untuk hal yang sama (Promise).

---

### 2. Aturan Kata Kunci `async`
Ketika Anda menambahkan kata `async` di depan sebuah fungsi:
- Fungsi tersebut secara otomatis **pasti mengembalikan objek `Promise`**, bahkan jika Anda hanya me-return angka atau string biasa!

```ts
// Tipe otomatis fungsi ini adalah: () => Promise<string>
async function beriSalam(): Promise<string> {
  return "Halo dari fungsi async!";
}
```

---

### 3. Aturan Kata Kunci `await`
Kata kunci `await` diletakkan di depan sebuah fungsi yang menghasilkan Promise:
- JavaScript akan **menjeda sementara eksekusi fungsi tersebut** sampai Promise-nya selesai (*resolved*).
- Begitu selesai, `await` akan **mengeluarkan nilai murni** dari dalam kotak Promise tersebut!

```ts
// Bandingkan betapa bersihnya penulisan ini:
async function ambilDataTodo() {
  console.log("Mulai mengambil data...");

  // 1. Tunggu respon koneksi
  const response: Response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  // 2. Tunggu proses penguraian JSON
  const data = await response.json();

  console.log("Data berhasil diambil:", data.title);
}

ambilDataTodo();
```

> ⚠️ **Aturan Emas**: Keyword `await` **hanya boleh digunakan di dalam fungsi yang bertanda `async`**!

---

## 🔷 TypeScript Corner: Perbandingan Tipe Data dengan `await`

Perhatikan bagaimana `await` mengubah tipe data:

```ts
// Tanpa await:
const janjiRespon: Promise<Response> = fetch("...");

// Dengan await:
// 'await' membuang bungkus Promise-nya dan menghasilkan nilai aslinya!
const responAsli: Response = await fetch("...");
```

---

## 📌 Ringkasan
- Tambahkan `async` pada fungsi untuk mengizinkan penggunaan `await` di dalamnya.
- `await` menjeda eksekusi fungsi lokal hingga Promise selesai dan mengembalikan nilainya secara langsung.
- Tidak perlu lagi menulis rantai `.then()` bersambung-sambung.
- Di materi berikutnya, kita akan mempelajari cara menangani error pada `async / await` menggunakan **`try ... catch`**.
