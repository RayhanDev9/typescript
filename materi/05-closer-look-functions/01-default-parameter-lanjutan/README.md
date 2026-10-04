# 01 · Default Parameter Lanjutan

## 🎯 Tujuan Belajar
- Memahami fitur **Default Parameter** modern di ES6+.
- Menggunakan parameter sebelumnya untuk menghitung nilai default parameter berikutnya (misal: `harga = hargaDasar * jumlahPenumpang`).
- Mengetahui bahwa mengirim nilai `undefined` akan memicu nilai default, sedangkan `null` atau `0` **tidak** akan memicu nilai default.
- Memahami bagaimana TypeScript menginferensikan tipe data parameter default secara otomatis.

---

## 🧠 Analogi: Menu Paket dengan Pilihan Otomatis

Bayangkan formulir pemesanan tiket pesawat:
- Jika kamu tidak mengisi jumlah kursi, sistem secara otomatis mengisinya dengan **1 penumpang**.
- Jika kamu tidak memasukkan total harga, sistem langsung menghitung: `harga = 1.500.000 × jumlah kursi`.
- Sistem cerdas ini menghemat waktu pengguna karena nilai bawaan saling terhubung.

---

## 📘 Konsep Dasar

### 1. Default Parameter Berbasis Parameter Lain

Di JavaScript/TypeScript modern, nilai default bisa berupa ekspresi matematika atau perhitungan dari parameter yang didefinisikan sebelumnya:

```ts
interface TiketPesawat {
  kodePenerbangan: string;
  jumlahPenumpang: number;
  totalHarga: number;
}

const daftarBooking: TiketPesawat[] = [];

function bookingTiket(
  kodePenerbangan: string,
  jumlahPenumpang: number = 1,
  totalHarga: number = 1500000 * jumlahPenumpang
): TiketPesawat {
  const tiket: TiketPesawat = {
    kodePenerbangan,
    jumlahPenumpang,
    totalHarga,
  };

  daftarBooking.push(tiket);
  return tiket;
}

// 1. Memakai semua default
bookingTiket("GA-101");
// { kodePenerbangan: "GA-101", jumlahPenumpang: 1, totalHarga: 1500000 }

// 2. Menentukan jumlah penumpang, totalHarga otomatis dihitung x3
bookingTiket("GA-102", 3);
// { kodePenerbangan: "GA-102", jumlahPenumpang: 3, totalHarga: 4500000 }

// 3. Menimpa total harga manual (misal ada promo)
bookingTiket("GA-103", 2, 2000000);
// { kodePenerbangan: "GA-103", jumlahPenumpang: 2, totalHarga: 2000000 }
```

---

### 2. Melewati Parameter untuk Memicu Default (`undefined`)

Jika kita ingin mengubah parameter ke-3 tetapi ingin parameter ke-2 tetap memakai nilai default, kirimkan `undefined`:

```ts
// Melewati jumlahPenumpang agar tetap 1, tapi memberi harga khusus 999.000
bookingTiket("GA-104", undefined, 999000);
```

> ⚠️ **Penting**: Mengirim `null` **TIDAK** memicu default value. Di JavaScript, `null` dianggap sebagai nilai nyata yang sengaja dikirim!

---

## 🔷 TypeScript Corner: Inferensi Tipe Parameter

Ketika kamu memberikan nilai default pada parameter, TypeScript otomatis menyimpulkan tipenya tanpa perlu kamu tulis berulang:

```ts
// TypeScript otomatis tahu `diskonPersen` bertipe number
function hitungPromo(harga: number, diskonPersen = 10) {
  return harga - (harga * diskonPersen) / 100;
}
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/01-default-parameter-lanjutan/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `function hitung(b = a * 2, a: number)` | Parameter `b` mencoba mengakses `a` sebelum `a` didefinisikan (Temporal Dead Zone) | Letakkan parameter acuan di depan: `(a: number, b = a * 2)` |
| `bookingTiket("GA-101", null, 1000)` | `null` tidak memicu default parameter dan bernilai `null` | Kirim `undefined` jika ingin memicu nilai default |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Parameter default dapat menggunakan perhitungan ekspresi dari parameter sebelumnya.
- Hanya `undefined` (atau tidak mengirim argumen) yang akan mengaktifkan nilai default.
- TypeScript secara otomatis menginferensikan tipe parameter default.
