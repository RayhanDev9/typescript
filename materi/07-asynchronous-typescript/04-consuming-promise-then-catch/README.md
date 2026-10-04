# 04 · Mengonsumsi Promise: `.then()`, `.catch()`, dan `.finally()`

## 🎯 Tujuan Belajar
- Memahami cara mengambil hasil sukses dari sebuah Promise menggunakan method **`.then()`**.
- Memahami cara menangkap kegagalan (*error*) secara elegan menggunakan method **`.catch()`**.
- Menggunakan method **`.finally()`** untuk mengeksekusi kode pembersihan (seperti mematikan ikon *loading*).
- Menguasai teknik **Rantai Promise (*Promise Chaining*)** untuk menyelesaikan tugas berantai tanpa *Callback Hell*.

---

## 🧠 Analogi Dunia Nyata: "Rantai Pembuatan Kue"
Bayangkan Anda memesan kue ulang tahun bertingkat:
- **`.then(panggangKue)`**: Setelah adonan siap, MAKA panggang kue.
- **`.then(olesKrim)`**: Setelah kue matang, MAKA oleskan krim cokelat.
- **`.then(pasangLilin)`**: Setelah krim rapi, MAKA pasang lilin di atasnya.
- **`.catch(tanganiMasalah)`**: JIKA di salah satu tahapan ada yang gosong atau jatuh, satu petugas darurat langsung siap menangani masalah tersebut di akhir!
- **`.finally(cuciPeralatan)`**: Entah kuenya berhasil atau gagal, peralatan dapur **tetap harus dicuci bersih**.

---

## 📘 Konsep Dasar

### 1. Mengambil Nilai dengan `.then()`
Method `.then()` menerima fungsi callback yang akan menerima data hasil `resolve`:

```ts
const janjiData = ambilDataDariServer();

janjiData.then((data) => {
  console.log("Data berhasil diterima:", data);
});
```

---

### 2. Menangkap Error dengan `.catch()`
Jika Promise di-`reject` atau terjadi lemparan error di tengah jalan, alur program akan langsung melompat ke blok `.catch()`:

```ts
janjiData
  .then((data) => {
    console.log("Sukses:", data);
  })
  .catch((error: Error) => {
    console.error("Terjadi kegagalan:", error.message);
  });
```

---

### 3. Pembersihan Akhir dengan `.finally()`
Blok `.finally()` **selalu dijalankan** di akhir, baik Promise berstatus *fulfilled* (sukses) maupun *rejected* (gagal). Sangat cocok untuk mematikan indikator *loading*:

```ts
tampilkanLoadingSpinner();

ambilData()
  .then(data => renderData(data))
  .catch(err => tampilkanPesanError(err))
  .finally(() => {
    // Selalu matikan animasi loading apapun hasilnya!
    sembunyikanLoadingSpinner();
  });
```

---

## ⚡ Rantai Promise (*Promise Chaining*): Solusi Callback Hell!

Di Materi 02, kita melihat bagaimana callback bertingkat membuat kode menjorok ke kanan.  
Dengan Promise Chaining, setiap kali sebuah `.then()` mengembalikan Promise baru, kita cukup menyambungnya dengan `.then()` berikutnya **ke arah bawah secara rata kiri**:

```ts
// ✅ Rapi, lurus dari atas ke bawah:
loginPengguna("admin")
  .then((user) => {
    console.log("1. Berhasil login sebagai:", user.id);
    return cekSaldo(user.id); // Mengembalikan Promise baru!
  })
  .then((saldo) => {
    console.log("2. Saldo diterima:", saldo);
    return lakukanTransfer(100000); // Mengembalikan Promise baru lagi!
  })
  .then((bukti) => {
    console.log("3. Transaksi tuntas:", bukti);
  })
  .catch((error: Error) => {
    // CUKUP 1 BLOK CATCH DI AKHIR UNTUK SEMUA TAHAP!
    console.error("Terjadi kesalahan pada salah satu proses:", error.message);
  });
```

---

## ⚠️ Kesalahan Umum Pemula

1. **Lupa me-return Promise di dalam `.then()`**:
   ```ts
   // ❌ SALAH: Lupa kata 'return'
   .then(user => {
     cekSaldo(user.id); // Promise jalan tapi hasilnya tidak diteruskan ke .then berikutnya!
   })
   .then(saldo => {
     console.log(saldo); // undefined!
   })

   // ✅ BENAR:
   .then(user => {
     return cekSaldo(user.id);
   })
   ```

2. **Membuat `.catch()` di setiap baris**:
   Tidak perlu menulis `.catch()` di setiap `.then()`. Cukup letakkan satu `.catch()` di ujung rantai, ia otomatis menangkap error dari langkah mana pun!

---

## 📌 Ringkasan
- `.then()` dijalankan saat Promise berstatus *fulfilled*.
- `.catch()` menangani kegagalan dari langkah mana pun di dalam rantai Promise.
- `.finally()` selalu dijalankan di akhir untuk pembersihan.
- Selalu gunakan `return` saat menyambung Promise baru di dalam `.then()`.
