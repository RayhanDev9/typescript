# 10 · Menjalankan Promise Secara Paralel: `Promise.all`

## 🎯 Tujuan Belajar
- Memahami perbedaan efisiensi waktu antara eksekusi **Sekuensial (Bergantian)** dan **Paralel (Bersamaan)**.
- Menggunakan **`Promise.all<T>()`** untuk menembakkan banyak permintaan asinkron sekaligus.
- Memahami sifat **Fail-Fast** pada `Promise.all`: Satu error menggagalkan seluruh antrean.
- Menggunakan teknik Destructuring Tuple di TypeScript untuk membongkar hasil `Promise.all`.

---

## 🧠 Analogi Dunia Nyata: "Membeli Makanan di 3 Restoran Berbeda"
Bayangkan Anda ingin makan malam lengkap: Nasi Goreng, Es Teh, dan Martabak Manis:
- **Cara Sekuensial (Lambat - 30 Menit)**:
  Anda pergi ke warung nasi goreng, tunggu sampai matang (10 menit). Baru jalan ke warung es teh, tunggu sampai dibuatkan (10 menit). Baru jalan ke gerobak martabak, tunggu sampai matang (10 menit).  
  **Total waktu terbuang: 30 menit!**
- **Cara Paralel (`Promise.all`) (Cepat - Hanya 10 Menit)**:
  Anda memesan via aplikasi ojek online sekaligus ke 3 restoran tersebut secara bersamaan! Ketiga koki memasak di saat yang sama.  
  **Total waktu tunggu: Hanya 10 menit (mengikuti yang paling lama)!**

---

## 📘 Konsep Dasar

### 1. Masalah pada `await` Sekuensial
Jika 3 tugas asinkron **tidak saling membutuhkan data satu sama lain**, jangan menuliskannya secara berturut-turut dengan `await`:

```ts
// ❌ LAMBAT: Request 2 baru berjalan SETELAH Request 1 selesai!
const user = await ambilUser();      // butuh 1 detik
const produk = await ambilProduk();  // butuh 1 detik
const cuaca = await ambilCuaca();    // butuh 1 detik
// Total waktu = 3 detik!
```

---

### 2. Solusi: `Promise.all`
`Promise.all` menerima sebuah **array berisi Promise**, lalu menjalankannya secara bersamaan di latar belakang:

```ts
// ✅ CEPAT: Ketiganya ditembakkan bersamaan!
const [user, produk, cuaca] = await Promise.all([
  ambilUser(),
  ambilProduk(),
  ambilCuaca(),
]);
// Total waktu = Hanya 1 detik!
```

---

## ⚠️ Peringatan Penting: Sifat Fail-Fast

`Promise.all` memiliki aturan: **"Semua harus sukses, atau tidak sama sekali!"**  
Jika ada 10 Promise yang berjalan, lalu 9 sukses dan **1 saja gagal (*rejected*)**, maka `Promise.all` akan langsung melompat ke blok `catch` dan membuang 9 data lainnya.

```ts
try {
  const hasil = await Promise.all([janjiA, janjiB, janjiC_YANG_GAGAL]);
} catch (error) {
  // Langsung terlempar ke sini begitu janjiC gagal!
  console.error("Salah satu janji gagal ditepati!");
}
```

---

## 🔷 TypeScript Corner: Tuple Type Inference

TypeScript secara cerdas membaca tipe dari masing-masing elemen array yang dimasukkan ke `Promise.all`:

```ts
// TypeScript tahu:
// - hasil[0] bertipe string
// - hasil[1] bertipe number
const [teks, angka] = await Promise.all([
  Promise.resolve("Halo"),
  Promise.resolve(42),
]);
```

---

## 📌 Ringkasan
- Gunakan `Promise.all` jika Anda memiliki banyak tugas asinkron independen yang bisa dijalankan bersamaan.
- Menghemat waktu *latency* jaringan secara drastis.
- Bersifat *Fail-Fast*: jika satu Promise gagal, seluruh `Promise.all` dianggap gagal.
- Di materi berikutnya, kita akan melihat combinator lain seperti `Promise.allSettled` yang tidak mudah gagal.
