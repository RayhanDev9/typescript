# 25 · Perulangan: Loop `while`

## 🎯 Tujuan Belajar
- Menggunakan struktur perulangan **`while`**
- Memahami kapan sebaiknya menggunakan **`for`** vs **`while`**
- Melakukan simulasi acak (*random*) menggunakan `Math.random()`
- Mencegah bahaya perulangan tak terbatas (*Infinite Loop*)

---

## 🧠 Analogi: Melempar Dadu Sampai Muncul Angka 6

- Jika kamu disuruh: *"Lempar dadu sebanyak **10 kali**"* → Gunakan **`for` loop** (jumlah putaran pasti: 10).
- Jika kamu disuruh: *"Lempar dadu terus-menerus **sampai keluar angka 6**"* → Gunakan **`while` loop** (kita tidak tahu butuh berapa kali lempar).

---

## 💻 1. Struktur Dasar `while` Loop

```ts
let hitung = 1;

while (hitung <= 5) {
  console.log(`Hitungan ke-${hitung}`);
  hitung++; // ⚠️ PENTING: Update kondisi agar tidak loop selamanya!
}
```

Perulangan `while` **hanya membutuhkan satu kondisi**. Selama kondisi tersebut bernilai `true`, blok di dalamnya akan terus dijalankan.

---

## 🎲 2. Contoh: Simulasi Lempar Dadu

Membuat angka acak 1 sampai 6: `Math.trunc(Math.random() * 6) + 1`

```ts
let dadu: number = Math.trunc(Math.random() * 6) + 1;
let jumlahLemparan = 0;

while (dadu !== 6) {
  jumlahLemparan++;
  console.log(`Lemparan #${jumlahLemparan}: Keluar angka ${dadu} 🎲`);

  // Acak ulang dadu untuk putaran berikutnya:
  dadu = Math.trunc(Math.random() * 6) + 1;
}

console.log(`\n🎉 Hore! Berhasil mendapatkan angka 6 setelah ${jumlahLemparan + 1} kali lemparan!`);
```

---

## ⚠️ Bahaya Infinite Loop (Loop Abadi)

Jika kamu lupa memperbarui variabel kondisi di dalam `while`:
```ts
let i = 1;
while (i <= 5) {
  console.log(i);
  // Lupa i++!
  // Nilai i selalu 1, kondisi selalu true, program akan HANG / MACET!
}
```

> 💡 Jika programmu macet di terminal karena loop abadi, tekan **`Ctrl + C`** untuk menghentikan proses.

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan tugasnya. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Gunakan `for` ketika **jumlah perulangan sudah diketahui**.
- Gunakan `while` ketika **perulangan bergantung pada kondisi dinamis** yang belum pasti kapan selesainya.
- Pastikan ada perubahan nilai di dalam `while` yang pada akhirnya akan membuat kondisi bernilai `false`.
