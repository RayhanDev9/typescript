# 18 · Final Challenge: Analisis Data Pertandingan & Parser Log Penerbangan

Selamat telah menyelesaikan seluruh materi di **Modul 04: Data Structures, Modern Operators & Strings**! 🎉

Tantangan akhir ini menggabungkan semua konsep yang telah kamu pelajari menjadi dua proyek analisis data nyata.

---

## 🏆 Bagian 1: Analisis Data Pertandingan Sepak Bola

Kamu menerima data object pertandingan sepak bola dunia antara **Bayern Munich** vs **Borussia Dortmund**.

```ts
const pertandingan = {
  tim1: "Bayern Munich",
  tim2: "Borussia Dortmund",
  pemain: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  skor: "4:0",
  pencetakGol: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  odds: {
    tim1: 1.33,
    seri: 3.25,
    tim2: 6.5,
  },
};
```

### Tugas Analisis Data Sepak Bola:
1. **Destructuring Tim**: Buat array pemain `pemain1` untuk tim1 dan `pemain2` untuk tim2.
2. **Kiper & Pemain Lapangan**: Pada `pemain1`, buat variabel `kiper` untuk pemain pertama, dan array `pemainLapangan` untuk 10 pemain sisanya (gunakan **Rest Pattern**).
3. **Semua Pemain**: Buat satu array `semuaPemain` yang memuat seluruh 22 pemain dari kedua tim (gunakan **Spread Operator**).
4. **Pemain Pengganti**: Buat array `pemainFinalTim1` yang berisi semua pemain awal tim1 ditambah 3 pemain pengganti: `"Thiago"`, `"Coutinho"`, dan `"Perisic"`.
5. **Peluang (Odds)**: Destruktur properti `odds` ke dalam 3 variabel: `tim1`, `seri`, dan `tim2`.
6. **Statistik Gol**: Lakukan loop pada array `pencetakGol` menggunakan `for...of` dan `.entries()` untuk menampilkan:
   `"Gol 1: Lewandowski"`, `"Gol 2: Gnarby"`, dst.
7. **Rata-rata Odds**: Hitung rata-rata odds menggunakan `Object.values(pertandingan.odds)`.
8. **Events Map**: Buat `Map` dari log kejadian menit pertandingan:
   - Menit 17: `"⚽ Gol (Bayern)"`
   - Menit 36: `"🔁 Pergantian Pemain"`
   - Menit 47: `"⚽ Gol (Bayern)"`
   - Menit 64: `"🟨 Kartu Kuning"`
   - Menit 69: `"🔴 Kartu Merah"`
   - Menit 80: `"⚽ Gol (Bayern)"`
   - Menit 92: `"🟨 Kartu Kuning"`
   Tampilkan setiap event dengan penanda babak:
   `"[BABAK 1] 17: ⚽ Gol (Bayern)"` atau `"[BABAK 2] 64: 🟨 Kartu Kuning"`.

---

## ✈️ Bagian 2: Parser Data Jadwal Penerbangan (String Processing)

Kamu menerima data log mentah penerbangan internasional berikut:

```ts
const penerbanganMentah =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
```

### Format yang Diharapkan:
```text
🔴 Delayed Departure dari FAO ke TXL (11h25)
✈️ Arrival dari BRU ke FAO (11h45)
🔴 Delayed Arrival dari HEL ke FAO (12h05)
✈️ Departure dari FAO ke LIS (12h30)
```

### Petunjuk Transformasi:
1. Pisahkan setiap baris dengan `.split("+")`.
2. Pisahkan setiap data dengan `.split(";")`.
3. Bersihkan tipe penerbangan (ganti `_` dengan spasi, tambahkan emoji `🔴` jika ada kata `Delayed`, atau `✈️` jika tepat waktu).
4. Ambil 3 huruf kode bandara asal dan tujuan menggunakan `.slice(0, 3)` dan ubah ke `.toUpperCase()`.
5. Format waktu dengan mengganti tanda titik dua `:` menjadi `h` (misal `11:25` → `11h25`).
6. Ratakan baris output menggunakan `.padStart()`.

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/18-challenge/latihan.ts
```

Bandingkan hasil analisismu dengan [`solusi.ts`](./solusi.ts) jika sudah selesai!
