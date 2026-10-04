# 11 · Looping Object (`Object.keys`, `values`, `entries`)

## 🎯 Tujuan Belajar
- Memahami bahwa objek JavaScript/TypeScript **bukan iterable secara langsung**, sehingga tidak bisa langsung di-`for...of`.
- Menggunakan 3 method statis `Object` untuk perulangan objek:
  1. `Object.keys(obj)`: Mengambil semua nama kunci (*property names*) sebagai array.
  2. `Object.values(obj)`: Mengambil semua nilai (*property values*) sebagai array.
  3. `Object.entries(obj)`: Mengambil pasangan `[key, value]` sebagai array dua dimensi.
- Menggabungkan `Object.entries()` dengan `for...of` dan destructuring.
- Memahami alasan TypeScript mengetikkan `Object.keys()` sebagai `string[]` dan cara mengetikkan objek dengan `Record<K, V>`.

---

## 🧠 Analogi: Buku Kamus Istilah

Objek ibarat buku kamus:
- Ada **Kata / Istilah** (*Keys*).
- Ada **Definisi / Arti** (*Values*).
- Kamu bisa:
  1. Mencetak hanya daftar semua katanya (`Object.keys`).
  2. Mencetak hanya semua definisinya (`Object.values`).
  3. Membuka halaman demi halaman dan membaca setiap kata beserta artinya secara berpasangan (`Object.entries`).

---

## 📘 Konsep Dasar

```ts
const jamBuka = {
  kamis: { buka: 12, tutup: 22 },
  jumat: { buka: 11, tutup: 23 },
  sabtu: { buka: 0,  tutup: 24 }, // Buka 24 jam
};
```

---

### 1. Perulangan Kunci Objek (`Object.keys`)

Mengembalikan array nama kunci properti: `["kamis", "jumat", "sabtu"]`.

```ts
const daftarHari = Object.keys(jamBuka);
console.log(`Restoran buka selama ${daftarHari.length} hari dalam seminggu:`);

for (const hari of Object.keys(jamBuka)) {
  console.log(`- Hari ${hari}`);
}
```

---

### 2. Perulangan Nilai Objek (`Object.values`)

Mengembalikan array nilai properti:

```ts
const daftarJam = Object.values(jamBuka);
console.log(daftarJam);
// [ { buka: 12, tutup: 22 }, { buka: 11, tutup: 23 }, { buka: 0, tutup: 24 } ]
```

---

### 3. Perulangan Pasangan Kunci & Nilai (`Object.entries`)

Mengembalikan array pasangan `[key, value]`. Sangat ampuh jika dipasangkan dengan `for...of` dan destructuring bersarang:

```ts
const entriJam = Object.entries(jamBuka);

// Destructuring: key = hari, value = { buka, tutup }
for (const [hari, { buka, tutup }] of Object.entries(jamBuka)) {
  console.log(`Pada hari ${hari}, kami buka pukul ${buka}:00 dan tutup pukul ${tutup}:00`);
}
```

Output:
```text
Pada hari kamis, kami buka pukul 12:00 dan tutup pukul 22:00
Pada hari jumat, kami buka pukul 11:00 dan tutup pukul 23:00
Pada hari sabtu, kami buka pukul 0:00 dan tutup pukul 24:00
```

---

## 🔷 TypeScript Corner: Kenapa `Object.keys()` Bertipe `string[]`?

Banyak pemula heran kenapa di TypeScript `Object.keys(obj)` mengembalikan `string[]` dan bukan `(keyof typeof obj)[]`.
Alasannya: Objek di JavaScript bersifat terbuka (*duck typing / structural subtyping*), artinya sebuah objek bisa memiliki properti tambahan di runtime yang tidak terdefinisi di interface TypeScript saat compile time.

Jika ingin mengetikkan dictionary dengan tipe kunci dan nilai yang pasti, gunakan utility type `Record<K, V>`:

```ts
type HariKerja = "senin" | "selasa" | "rabu";
interface InfoJam { buka: number; tutup: number; }

const jadwal: Record<HariKerja, InfoJam> = {
  senin: { buka: 8, tutup: 16 },
  selasa: { buka: 8, tutup: 16 },
  rabu: { buka: 8, tutup: 16 },
};
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/11-looping-object/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `for (const x of myObject)` | TypeError: myObject is not iterable | Bungkus dengan `Object.entries(myObject)` |
| `Object.entries` tanpa destructuring | Mengakses `entry[0]` dan `entry[1]` kurang mudah dibaca | Gunakan `for (const [key, val] of Object.entries(obj))` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan setiap `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `Object.keys(obj)` untuk mengiterasi daftar kunci (*keys*).
- `Object.values(obj)` untuk mengiterasi daftar nilai (*values*).
- `Object.entries(obj)` untuk mengiterasi pasangan `[key, value]` sekaligus.
