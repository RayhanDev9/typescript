# 16 · Function Declaration vs Function Expression

## 🎯 Tujuan Belajar
- Mengetahui dua cara utama mendefinisikan fungsi: **Declaration** dan **Expression**
- Memahami konsep **First-Class Functions** (fungsi dapat disimpan dalam variabel layaknya data biasa)
- Memahami perbedaan perilaku pemanggilan sebelum deklarasi (**Hoisting**)
- Menulis **Function Type Signature** di TypeScript (misal: `(x: number) => number`)

---

## 🧠 Analogi: Menyewa Koki vs Resep Tertulis

- **Function Declaration**: Seperti koki tetap di restoran yang selalu siap dipanggil kapan saja sepanjang hari, bahkan sebelum restoran buka.
- **Function Expression**: Seperti resep masakan yang baru ditulis ke dalam buku catatan. Sebelum resepnya dicatat, kamu belum bisa memasak hidangan tersebut.

---

## 💻 1. Function Declaration

Cara klasik yang paling sering kita lihat:

```ts
// Boleh dipanggil SEBELUM baris definisinya (karena Hoisting)
const umur1 = hitungUmur1(2001);

function hitungUmur1(tahunLahir: number): number {
  return 2026 - tahunLahir;
}
```

---

## 💻 2. Function Expression

Membuat fungsi anonim (tanpa nama langsung) dan menyimpannya ke dalam sebuah variabel `const`:

```ts
// ❌ TIDAK BISA dipanggil sebelum baris ini
const hitungUmur2 = function (tahunLahir: number): number {
  return 2026 - tahunLahir;
};

const umur2 = hitungUmur2(2001);
```

### Mengapa Function Expression Sangat Populer?
Di JavaScript dan TypeScript, fungsi adalah **First-Class Citizens** (warga kelas satu). Artinya fungsi diperlakukan sama seperti data biasa (string, number, boolean):
- Bisa disimpan di dalam variabel.
- Bisa dikirimkan sebagai argumen ke fungsi lain.
- Bisa dikembalikan sebagai nilai dari fungsi lain.

---

## 🔷 Versi TypeScript: Function Types (Tipe Bentuk Fungsi)

Di TypeScript, kita bisa membuat definisi tipe khusus untuk sebuah fungsi menggunakan format `(parameter: Tipe) => TipeReturn`:

```ts
// 1. Membuat cetak biru tipe fungsi
type OperasiMatematika = (angka1: number, angka2: number) => number;

// 2. Menerapkan tipe tersebut ke variabel fungsi
const tambah: OperasiMatematika = function (a, b) {
  return a + b; // TypeScript otomatis tahu bahwa a dan b adalah number!
};

const kali: OperasiMatematika = function (a, b) {
  return a * b;
};

console.log(tambah(10, 5)); // 15
console.log(kali(10, 5));   // 50
```

---

## ⚖️ Mana yang Sebaiknya Dipakai?

Kedua cara ini sangat umum dijumpai di dunia kerja:
- **Function Declaration**: Sangat bagus untuk fungsi utama yang ingin mudah dibaca dari atas ke bawah.
- **Function Expression**: Sangat bagus untuk menjaga struktur kode yang modular, deklaratif, dan saat membutuhkan *type signature* yang ketat.

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan soalnya. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- **Function Declaration** menggunakan sintaks `function nama() {}` dan mendukung *hoisting*.
- **Function Expression** menyimpan fungsi ke dalam variabel `const nama = function() {}`.
- Di TypeScript, bentuk input dan output fungsi dapat didefinisikan dengan *Function Type*: `(p: Tipe) => TipeKembalian`.
