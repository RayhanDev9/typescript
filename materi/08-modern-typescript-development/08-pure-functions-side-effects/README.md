# 08 · Pure Functions & Side Effects

## 🎯 Tujuan Belajar
- Memahami dua syarat mutlak **Pure Function (Fungsi Murni)**:
  1. **Deterministik**: Input yang sama akan SELALU menghasilkan output yang sama.
  2. **Tanpa Side Effects (Bebas Efek Samping)**: Tidak memodifikasi variabel di luar fungsi, tidak memutasi parameter input, dan tidak berinteraksi langsung dengan I/O global secara tersembunyi.
- Mengenali ciri-ciri **Impure Function (Fungsi Tidak Murni)**.
- Mampu mengubah (*refactor*) fungsi tidak murni menjadi fungsi murni.
- Memahami mengapa pure functions sangat disukai untuk **Unit Testing** dan **Optimasi Performa (Memoization)**.

---

## 🧠 Analogi Dunia Nyata: "Mesin Kalkulator vs Kotak Ajaib Berhantu"
- **Pure Function (Kalkulator Biasa)**:
  Jika Anda memencet `2 + 3` di kalkulator, hasilnya selalu `5`.
  Mau Anda mencobanya di Jakarta, di London, jam 2 pagi, atau 10 tahun lagi, jawabannya tetap `5`. Kalkulator juga tidak tiba-tiba mengubah saldo rekening bank Anda saat menghitung.
- **Impure Function (Kotak Ajaib Berhantu)**:
  Anda memasukkan angka `2` dan `3`, lalu kotaknya menjawab `7` karena hari ini sedang hujan! Dan tanpa Anda sadari, kunci rumah di saku Anda hilang diambil oleh kotak itu (**Side Effect / Efek Samping**). Sangat tidak bisa diandalkan, bukan?

---

## 📘 Anatomi Pure vs Impure Function

### 1. Ciri-ciri Impure Function (Hindari jika memungkinkan)
Fungsi menjadi **tidak murni** jika:
- Bergantung pada waktu saat ini (`new Date()`).
- Bergantung pada angka acak (`Math.random()`).
- Mengubah variabel global di luar fungsi.
- Memutasi/mengubah isi objek/array yang dikirim sebagai parameter.
- Melakukan operasi I/O (menulis ke file, fetch database, memanipulasi DOM).

```ts
// ❌ CONTOH IMPURE (Memodifikasi variabel luar)
let saldoKasir = 100000;

function tambahKasImpure(jumlah: number): number {
  saldoKasir += jumlah; // Efek samping: mengubah variabel global luar!
  return saldoKasir;
}
```

```ts
// ❌ CONTOH IMPURE (Memutasi array parameter input)
function tambahkanItemImpure(keranjang: string[], itemBaru: string): string[] {
  keranjang.push(itemBaru); // Mengubah array asli si pemanggil!
  return keranjang;
}
```

---

### 2. Cara Mengubah Menjadi Pure Function
Aturan emas: **Jangan sentuh yang di luar, buat salinan baru dan kembalikan nilainya!**

```ts
// ✅ PURE FUNCTION (Salin data, tidak ada mutasi)
function tambahKasPure(saldoSekarang: number, jumlah: number): number {
  return saldoSekarang + jumlah;
}

// ✅ PURE FUNCTION (Menggunakan spread operator untuk salinan baru)
function tambahkanItemPure(keranjang: readonly string[], itemBaru: string): string[] {
  return [...keranjang, itemBaru];
}
```

---

## 🚀 Mengapa Pure Functions Menjadi Rahasia Senior Developer?
1. **100% Bebas Bug Misterius**: Tidak ada efek samping yang tak terduga (*no hidden surprises*).
2. **Sangat Mudah Ditest**: Tidak perlu membuat mock database yang rumit. Cukup kirim input, lalu periksa apakah outputnya sesuai.
3. **Memoization / Caching**: Karena input `(A, B)` selalu menghasilkan `C`, hasilnya bisa disimpan di cache tanpa perlu dihitung ulang!

---

## 📌 Ringkasan
- Pure function hanya peduli pada **input yang diberikan** dan **output yang dikembalikan**.
- Isolasi side effects (seperti HTTP call dan DOM update) ke lapisan terluar aplikasi.
