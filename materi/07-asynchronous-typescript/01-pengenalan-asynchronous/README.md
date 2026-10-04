# 01 · Pengenalan Asynchronous: Synchronous vs Asynchronous

## 🎯 Tujuan Belajar
- Memahami perbedaan fundamental antara eksekusi **Synchronous (Sinkron)** dan **Asynchronous (Asinkron)**.
- Memahami konsep **Blocking (Memblokir)** dan **Non-Blocking I/O**.
- Menggunakan fungsi pengatur waktu bawaan: **`setTimeout`**, **`clearTimeout`**, dan **`setInterval`**.
- Mengetahui tipe data pengatur waktu (*timer*) di TypeScript (`NodeJS.Timeout` vs `number`).

---

## 🧠 Analogi Dunia Nyata: "Kasir Toko Tradisional vs Restoran Cepat Saji"

### 1. Synchronous (Antrean Kasir Tradisional - Memblokir)
Bayangkan Anda mengantre di kasir toko:
- Pelanggan nomor 1 memesan barang yang harus diambil dari gudang yang jauh (butuh waktu 10 menit).
- Kasir **berdiam diri menunggu** barang tersebut datang.
- Selama 10 menit itu, **antrean di belakang macet total**. Tidak ada pelanggan lain yang bisa dilayani.
- Ini disebut **Blocking** (menghalangi proses berikutnya).

### 2. Asynchronous (Restoran Cepat Saji Modern - Non-Blocking)
Bayangkan Anda memesan burger di restoran modern:
- Anda memesan burger paket lengkap ke kasir.
- Kasir tidak menyuruh Anda berdiri mematung di depan meja kasir selama 10 menit!
- Kasir memberikan Anda selembar struk atau **alat pager getar (*buzzer*)**, lalu berkata: *"Silakan duduk dulu ya kak, pagernya akan bergetar saat pesanan sudah matang."*
- Kasir langsung melayani pelanggan nomor 2, 3, dan seterusnya tanpa henti!
- Ketika burger Anda sudah matang di dapur, pager Anda bergetar (**Callback Event**), dan Anda maju mengambil burger tersebut.
- Ini disebut **Non-Blocking** (program tetap berjalan sambil menunggu tugas latar belakang selesai).

---

## 📘 Konsep Dasar

### 1. Mengapa JavaScript/TypeScript Dibuat Asinkron?
JavaScript secara bawaan bersifat **Single-Threaded** (hanya memiliki 1 jalur eksekusi benang kerja di memori).
Jika JavaScript bekerja secara sinkron saat mengambil data dari internet (misal menunggu respons server selama 3 detik):
- Halaman web akan membeku total (*freeze*).
- Tombol tidak bisa diklik, animasi berhenti, dan pengguna mengira aplikasi Anda rusak.
- Dengan sifat **Asynchronous**, tugas yang memakan waktu lama diserahkan ke latar belakang (*background*), dan program utama tetap responsif melayani interaksi pengguna!

---

### 2. Fungsi Asinkron Pertama: `setTimeout`
`setTimeout` menunda eksekusi sebuah fungsi callback setelah durasi milidetik tertentu:

```ts
console.log("1. Mulai memesan burger");

// Tugas asinkron di latar belakang (tunggu 2000 ms = 2 detik)
setTimeout(() => {
  console.log("3. Burger matang dan siap diambil! 🍔");
}, 2000);

console.log("2. Mencari tempat duduk santai...");
```

**Output di Terminal:**
```text
1. Mulai memesan burger
2. Mencari tempat duduk santai...
3. Burger matang dan siap diambil! 🍔
```
Perhatikan bahwa baris `"2. Mencari tempat duduk..."` dicetak **lebih dulu** daripada burger matang! Program tidak membeku menunggu 2 detik.

---

## 🔷 TypeScript Corner: Tipe Data Timer

Di TypeScript, hasil dari fungsi `setTimeout` memiliki tipe yang berbeda tergantung lingkungan:
- Di lingkungan **Node.js**: Bertipe `NodeJS.Timeout`.
- Di lingkungan **Browser**: Bertipe `number` (ID angka unik).

Jika kode Anda berjalan di Node.js, gunakan pembatalan timer dengan aman:

```ts
// Tipe otomatis: NodeJS.Timeout
const timerId: NodeJS.Timeout = setTimeout(() => {
  console.log("Pesan ini tidak akan pernah muncul!");
}, 5000);

// Membatalkan timer sebelum waktunya tiba
clearTimeout(timerId);
```

---

## ⚠️ Kesalahan Umum Pemula: `setTimeout` 0 Detik

Banyak pemula mengira jika menulis `setTimeout(..., 0)`, fungsinya akan langsung dieksekusi seketika:

```ts
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

**Hasilnya tetap:** `A` ➡️ `C` ➡️ baru `B`!  
Mengapa? Karena fungsi di dalam `setTimeout` selalu dipindahkan ke **antrean latar belakang (*Event Queue*)** dan baru akan dipanggil setelah semua baris kode utama di *Call Stack* selesai dieksekusi.

---

## 📌 Ringkasan
- **Synchronous**: Dieksekusi baris demi baris secara berurutan. Perintah berikutnya harus menunggu perintah sebelumnya selesai.
- **Asynchronous**: Perintah yang memakan waktu dialihkan ke latar belakang, sehingga aplikasi tetap cepat dan tidak membeku (*non-blocking*).
- `setTimeout` menunda eksekusi fungsi callback setelah durasi waktu tertentu.
- `clearTimeout` digunakan untuk membatalkan timer yang sedang berjalan.
