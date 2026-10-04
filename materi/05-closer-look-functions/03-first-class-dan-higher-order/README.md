# 03 · First-Class & Higher-Order Functions

## 🎯 Tujuan Belajar
- Memahami konsep **First-Class Functions**: fungsi diperlakukan sama seperti nilai biasa (string, number, object).
- Memahami definisi **Higher-Order Function (HOF)**: fungsi yang **menerima fungsi lain sebagai argumen** ATAU **mengembalikan fungsi baru**.
- Mendefinisikan **Function Type Alias** di TypeScript: `type PengubahTeks = (str: string) => string;`.
- Membedakan peran **Higher-Order Function** vs **Callback Function**.

---

## 🧠 Analogi: Koki Utama dan Resep Bumbu

- **First-Class Function**: Resep masakan tertulis di kartu. Kartu ini bisa kamu simpan di laci (variabel), kamu oper ke teman (parameter), atau kamu jadikan hadiah (return value).
- **Higher-Order Function**: Koki Utama yang menerima kartu resep bumbu dari asistennya, lalu mengeksekusi masakan dengan bumbu tersebut.
- **Callback Function**: Resep bumbu spesifik yang diserahkan ke Koki Utama.

---

## 📘 Konsep Dasar

### 1. Fungsi adalah Nilai (First-Class Citizen)

Karena fungsi adalah sebuah nilai (objek fungsional):
- Bisa disimpan dalam variabel / properti objek.
- Memiliki properti bawaan seperti `fn.name` (nama fungsi) dan `fn.length` (jumlah parameter).

```ts
const hitungPajak = (nominal: number): number => nominal * 0.11;

console.log(hitungPajak.name);   // "hitungPajak"
console.log(hitungPajak.length); // 1 (menerima 1 parameter)
```

---

### 2. Apa itu Higher-Order Function (HOF)?

Sebuah fungsi disebut **Higher-Order Function** jika memenuhi salah satu (atau kedua) syarat berikut:
1. **Menerima fungsi lain sebagai argumen** (fungsi yang diterima disebut *Callback Function*).
2. **Mengembalikan fungsi lain** sebagai nilai return-nya.

```text
┌────────────────────────────────────────────────────────┐
│              HIGHER-ORDER FUNCTION                     │
│                                                        │
│   Input: (Data, CallbackFn) ──► Menjalankan CallbackFn │
│                                 pada Data              │
│                                                        │
│   Output: Hasil Olahan                                 │
└────────────────────────────────────────────────────────┘
```

---

### 3. Function Type Alias di TypeScript

Untuk membuat kode rapi dan aman, kita membuat tipe khusus untuk fungsi callback:

```ts
// Mendefinisikan kontrak tipe fungsi
type PengubahString = (teks: string) => string;

// Fungsi callback konkret
const buatHurufBesar: PengubahString = (s) => s.toUpperCase();
const sensorKarakter: PengubahString = (s) => s.replaceAll("a", "*");

// Higher-Order Function yang menerima callback
function transformasiKata(kata: string, fn: PengubahString): void {
  console.log(`Kata asli   : ${kata}`);
  console.log(`Hasil olah  : ${fn(kata)}`);
  console.log(`Dibuat oleh : ${fn.name}`);
}

transformasiKata("garuda indonesia", buatHurufBesar);
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/03-first-class-dan-higher-order/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `transformasiKata("kata", fn())` | Memanggil fungsi langsung `fn()` dengan tanda kurung, bukan mengoper fungsinya | Oper nama fungsinya tanpa tanda kurung: `fn` |
| `type Fn = (a: number) => {}` | Di TypeScript tipe return adalah tipe datanya, bukan blok kurung kurawal | `type Fn = (a: number) => number;` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- First-Class Function = fungsi diperlakukan sebagai nilai biasa.
- Higher-Order Function = fungsi yang menerima fungsi lain sebagai parameter atau mengembalikan fungsi.
- Di TypeScript, gunakan `type NamaFn = (param: Tipe) => ReturnTipe;`.
