# 03 · Konsep Dasar Promise

## 🎯 Tujuan Belajar
- Memahami apa itu **Promise** dan bagaimana Promise memecahkan masalah *Callback Hell*.
- Memahami 3 status siklus hidup Promise: **`Pending`**, **`Fulfilled`**, dan **`Rejected`**.
- Mempelajari cara membuat objek Promise baru menggunakan konstruktor **`new Promise<T>()`**.
- Menggunakan Generic Type TypeScript pada Promise untuk menjamin keselamatan tipe data masa depan (*Type Safety*).

---

## 🧠 Analogi Dunia Nyata: "Tiket Undian / Antrean Restoran"
Bayangkan teman Anda berjanji mentraktir Anda makan siang besok:
1. **Hari Ini (Status: Pending / Menunggu)**:  
   Janji sudah dibuat, tetapi makan siangnya belum terjadi. Anda memegang janji tersebut di tangan Anda (*Promise*).
2. **Besok - Kemungkinan 1 (Status: Fulfilled / Berhasil Ditepati)**:  
   Teman Anda datang membawakan pizza lezat 🍕. Janji **terpenuhi (*Resolved/Fulfilled*)**, dan Anda menerima pizzanya.
3. **Besok - Kemungkinan 2 (Status: Rejected / Ditolak / Gagal)**:  
   Teman Anda sakit atau dompetnya hilang. Janji **gagal ditepati (*Rejected*)**, dan Anda menerima alasan kegagalannya.

```text
               ┌─── [Fulfilled] ──> Menghasilkan NILAI DATA (Resolve)
               │
[Promise: Pending]
               │
               └─── [Rejected]  ──> Menghasilkan PESAN ERROR (Reject)
```

---

## 📘 Konsep Dasar

### 1. Definisi Promise
Promise adalah **sebuah objek penampung (*placeholder*) untuk sebuah nilai yang belum selesai dihitung saat ini, tetapi akan tersedia di masa depan**.

Dengan Promise:
- Kita tidak perlu lagi menitipkan callback bersarang ke dalam fungsi.
- Fungsi cukup **mengembalikan sebuah objek Promise**, lalu kita bisa menentukan apa yang harus dilakukan setelah Promise tersebut selesai.

---

### 2. Cara Membuat Promise Sendiri (`new Promise`)
Konstruktor Promise menerima sebuah fungsi eksekutor dengan 2 argumen:
- `resolve(nilai)`: Dipanggil jika tugas asinkron sukses.
- `reject(alasanError)`: Dipanggil jika tugas asinkron gagal.

```ts
const janjiKopi = new Promise<string>((resolve, reject) => {
  const mesinKopiBagus = true;

  setTimeout(() => {
    if (mesinKopiBagus) {
      resolve("Secangkir Kopi Espresso Panas ☕");
    } else {
      reject(new Error("Mesin kopi rusak! ❌"));
    }
  }, 1000);
});
```

---

## 🔷 TypeScript Corner: Generic Type `Promise<T>`

Di TypeScript, setiap Promise **wajib memiliki tipe data generic `<T>`** yang mewakili jenis data yang akan dihasilkan jika Promise berhasil:

```ts
// Promise ini berjanji akan mengembalikan angka (number) di masa depan
const janjiAngka = new Promise<number>((resolve, reject) => {
  resolve(42);
});

// Promise ini berjanji akan mengembalikan objek Pengguna
interface Pengguna {
  id: number;
  nama: string;
}

const janjiPengguna = new Promise<Pengguna>((resolve, reject) => {
  resolve({ id: 1, nama: "Budi" });
});
```

Jika Anda mencoba memanggil `resolve("bukan angka")` pada `Promise<number>`, TypeScript akan langsung memberikan garis merah di editor!

---

## 📌 Ringkasan
- Promise menggantikan callback bersarang menjadi objek yang elegan dan terstruktur.
- Status Promise hanya ada 3: `Pending` ➡️ lalu berakhir di `Fulfilled` ATAU `Rejected`.
- Sekali status Promise berubah menjadi Fulfilled atau Rejected, statusnya **tidak akan pernah bisa berubah lagi (Immutable)**.
- Di materi berikutnya, kita akan mempelajari cara membuka dan mengonsumsi isi Promise menggunakan `.then()` dan `.catch()`.
