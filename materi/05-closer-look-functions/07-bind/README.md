# 07 · Method `bind`

## 🎯 Tujuan Belajar
- Memahami perbedaan fundamental antara `.call()` (eksekusi langsung) vs **`.bind()` (mengembalikan fungsi baru)**.
- Mengunci kata kunci `this` secara permanen ke objek tertentu menggunakan `.bind(thisArg)`.
- Memahami teknik **Partial Application**: mengisi sebagian parameter awal fungsi di depan secara permanen.
- Mengetahui penggunaan `.bind()` dalam mengamankan method objek saat dijadikan callback handler.

---

## 🧠 Analogi: Kunci Duplikat Khusus

- **`.call()`**: Menyewa koki tamu untuk memasak malam ini saja (eksekusi langsung di tempat).
- **`.bind()`**: Memberikan kartu tanda pengenal permanen kepada koki tersebut. Mulai saat itu, setiap kali dia dipanggil bekerja, dia **selalu terikat** dan bertindak atas nama restoranmu tanpa perlu disetel ulang.

---

## 📘 Konsep Dasar

### 1. Mengikat `this` secara Permanen

```ts
interface Maskapai {
  nama: string;
  kodeIata: string;
  booking(nomorPenerbangan: number, namaPenumpang: string): void;
}

const garuda: Maskapai = {
  nama: "Garuda Indonesia",
  kodeIata: "GA",
  booking(nomor, nama) {
    console.log(`${nama} memesan tiket ${this.nama} (${this.kodeIata}${nomor})`);
  },
};

const lionAir = { nama: "Lion Air", kodeIata: "JT" };

// Membuat fungsi booking khusus yang SELALU terikat ke lionAir
const bookingLion = garuda.booking.bind(lionAir);

// Panggil berkali-kali tanpa perlu menulis .call() lagi:
bookingLion(530, "Budi");
bookingLion(531, "Citra");
```

---

### 2. Partial Application (Mengunci Parameter Awal)

Selain mengikat `this`, `.bind()` juga bisa **mengunci nilai parameter awal**:

```ts
// Mengunci nomor penerbangan 812 khusus untuk Garuda
const bookingGaruda812 = garuda.booking.bind(garuda, 812);

// Sekarang kita hanya perlu mengirimkan sisa parameternya (namaPenumpang):
bookingGaruda812("Rayhan Pratama");
// "Rayhan Pratama memesan tiket Garuda Indonesia (GA812)"

bookingGaruda812("Siti Rahma");
// "Siti Rahma memesan tiket Garuda Indonesia (GA812)"
```

---

### 3. Partial Application Tanpa `this` (`null`)

Kita bisa menggunakan `.bind()` hanya untuk mengunci argumen pada fungsi biasa:

```ts
const hitungPajak = (tarif: number, nominal: number): number => {
  return nominal + nominal * tarif;
};

// Buat fungsi khusus PPN 11% (this diset null karena tidak dibutuhkan)
const tambahPPN = hitungPajak.bind(null, 0.11);

console.log(tambahPPN(100000)); // 111000
console.log(tambahPPN(200000)); // 222000
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/07-bind/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `const hasil = fn.bind(obj)()` | Mengira `bind` langsung mengembalikan nilai eksekusi | `bind` mengembalikan fungsi; panggil dengan `()` untuk mengeksekusinya |
| Mengirim argumen yang salah urutannya saat Partial Application | Nilai argumen di `bind` akan mengisi parameter dari kiri ke kanan | Pastikan parameter yang ingin dikunci berada di urutan awal |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `.bind(thisArg, ...presetArgs)` mengembalikan **fungsi baru** yang terikat.
- `this` tidak akan bisa ditimpa lagi setelah di-bind.
- Partial Application menyederhanakan fungsi umum menjadi fungsi yang lebih spesifik.
