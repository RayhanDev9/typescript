# 06 · `call` dan `apply`

## 🎯 Tujuan Belajar
- Memahami mengapa kata kunci `this` bisa bernilai `undefined` ketika suatu method objek disimpan ke variabel mandiri.
- Menggunakan method **`.call()`** untuk meminjam method dan menetapkan objek target `this` secara manual.
- Menggunakan method **`.apply()`** yang menerima argumen dalam bentuk Array.
- Mengetahui bahwa di JavaScript/TypeScript modern, kombinasi `.call()` + **Spread Operator (`...`)** telah menggantikan kebutuhan `.apply()`.
- Mengetikkan parameter `this` secara eksplisit di TypeScript.

---

## 🧠 Analogi: Meminjam Stempel Perusahaan

Bayangkan sebuah fungsi booking adalah **Alat Stempel Tiket**:
- Di kantor maskapai **Garuda** (`garuda.booking`), stempel otomatis mencetak nama *"Garuda"*.
- Jika maskapai **Citilink** ingin meminjam alat stempel tersebut, Citilink memberikan bukunya ke alat stempel sambil berkata: *"Tolong stempelkan untuk Citilink"* (`booking.call(citilink, ...)`).

---

## 📘 Konsep Dasar

### 1. Masalah: Kehilangan `this`

```ts
interface Maskapai {
  kodeMaskapai: string;
  nama: string;
  daftarBooking: { penerbangan: string; namaPenumpang: string }[];
  booking(nomorPenerbangan: number, namaPenumpang: string): void;
}

const garuda: Maskapai = {
  kodeMaskapai: "GA",
  nama: "Garuda Indonesia",
  daftarBooking: [],
  booking(nomorPenerbangan, namaPenumpang) {
    console.log(
      `${namaPenumpang} memesan kursi di ${this.nama} penerbangan ${this.kodeMaskapai}${nomorPenerbangan}`
    );
    this.daftarBooking.push({
      penerbangan: `${this.kodeMaskapai}${nomorPenerbangan}`,
      namaPenumpang,
    });
  },
};

garuda.booking(101, "Rayhan"); // Berhasil!

// ❌ Jika method dipindahkan ke variabel biasa:
const fungsiBooking = garuda.booking;
// fungsiBooking(102, "Budi"); // ERROR: Cannot read property of undefined (karena 'this' hilang!)
```

---

### 2. Solusi 1: `.call(thisArg, arg1, arg2, ...)`

Method `.call()` mengeksekusi fungsi secara langsung dengan menentukan objek mana yang menjadi `this`:

```ts
const citilink: Maskapai = {
  kodeMaskapai: "QG",
  nama: "Citilink",
  daftarBooking: [],
  booking: garuda.booking,
};

// Mengarahkan `this` ke objek citilink
fungsiBooking.call(citilink, 202, "Budi");
// "Budi memesan kursi di Citilink penerbangan QG202"
```

---

### 3. Solusi 2: `.apply(thisArg, [argsArray])`

Method `.apply()` bekerja persis seperti `.call()`, tetapi menerima argumen dalam bentuk **Array**:

```ts
const dataPenerbangan: [number, string] = [303, "Citra"];

// Cara lama ES5:
fungsiBooking.apply(citilink, dataPenerbangan);

// ✅ Cara Modern ES6+ (lebih disukai):
fungsiBooking.call(citilink, ...dataPenerbangan);
```

---

## 🔷 TypeScript Corner: Parameter `this` Eksplisit

Di TypeScript, kita bisa mendeklarasikan tipe `this` sebagai parameter pertama fungsi:

```ts
function cetakTiket(this: Maskapai, noKursi: string) {
  console.log(`Tiket ${this.nama} - Kursi: ${noKursi}`);
}
```

> [!NOTE]
> Parameter `this` ini hanya diperiksa oleh compiler TypeScript saat kompilasi (*compile-time*) dan **dihapus sepenuhnya** dari JavaScript hasil akhir.

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/06-call-dan-apply/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `fn.call(obj, [1, 2])` | Mengirim array ke `.call()` akan menyebabkan array tersebut masuk sebagai argumen pertama | Gunakan `fn.apply(obj, [1, 2])` atau `fn.call(obj, ...[1, 2])` |
| Menggunakan arrow function untuk method yang butuh `this` dinamis | Arrow function tidak memiliki kata kunci `this` sendiri | Gunakan fungsi reguler untuk method objek |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `.call(thisArg, arg1, arg2)` mengeksekusi fungsi dengan `this` yang ditentukan dan argumen koma.
- `.apply(thisArg, [args])` mengeksekusi fungsi dengan argumen berupa array.
- Di TypeScript, tentukan `this: TipeObjek` pada deklarasi parameter pertama fungsi.
