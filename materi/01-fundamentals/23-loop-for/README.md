# 23 · Perulangan: Loop `for`

## 🎯 Tujuan Belajar
- Mengotomatiskan tugas berulang menggunakan **`for` loop**
- Memahami 3 bagian anatomi `for`: **Inisialisasi**, **Kondisi**, dan **Perubahan Counter**
- Melompati satu putaran perulangan menggunakan **`continue`**
- Menghentikan paksa seluruh perulangan menggunakan **`break`**

---

## 🧠 Analogi: Lari Keliling Lapangan

Bayangkan instruktur olahraga berkata:
*"Lari keliling lapangan sebanyak **5 putaran**, mulai dari putaran ke-**1**!"*

- **Mulai**: Putaran = 1 (`let i = 1`)
- **Periksa**: Apakah putaran masih $\le 5$? (`i <= 5`)
- **Tindakan**: Lari 1 keliling!
- **Selesai 1 putaran**: Tambah hitungan putaran (+1) (`i++`)

---

## 💻 1. Anatomi Loop `for`

```ts
//   1. Inisialisasi   2. Kondisi    4. Update
for (let i: number = 1; i <= 5;       i++) {
  // 3. Blok kode yang diulang
  console.log(`Lari putaran ke-${i} 🏃`);
}
```

```text
Putaran 1: i = 1 (1 <= 5 ? YA)  ──► jalankan kode ──► i++ (i jadi 2)
Putaran 2: i = 2 (2 <= 5 ? YA)  ──► jalankan kode ──► i++ (i jadi 3)
Putaran 3: i = 3 (3 <= 5 ? YA)  ──► jalankan kode ──► i++ (i jadi 4)
Putaran 4: i = 4 (4 <= 5 ? YA)  ──► jalankan kode ──► i++ (i jadi 5)
Putaran 5: i = 5 (5 <= 5 ? YA)  ──► jalankan kode ──► i++ (i jadi 6)
Putaran 6: i = 6 (6 <= 5 ? TIDAK) ──► SELESAI, KELUAR DARI LOOP
```

---

## ⚡ 2. `continue` dan `break`

### `continue` (Lewati putaran ini, lanjut ke putaran berikutnya)
```ts
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Putaran ke-3 dilewati untuk istirahat minum 💧");
    continue; // Langsung lompat ke i = 4
  }
  console.log(`Latihan beban set ke-${i} 🏋️`);
}
```

### `break` (Hentikan dan keluar dari loop sekarang juga)
```ts
for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    console.log("Kram otot! Latihan dihentikan 🛑");
    break; // Loop berhenti total, putaran 4 ke atas tidak dijalankan
  }
  console.log(`Lompat tali ke-${i}`);
}
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan tugasnya. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Loop `for` digunakan saat kita tahu berapa kali perulangan harus berjalan.
- Terdiri dari 3 bagian: `for (inisialisasi; kondisi; counter) { ... }`.
- `continue` melompati sisa baris di putaran saat ini.
- `break` menghentikan loop sepenuhnya.
