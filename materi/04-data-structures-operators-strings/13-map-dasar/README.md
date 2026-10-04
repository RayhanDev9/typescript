# 13 · Map: Dasar (`Map<K, V>`)

## 🎯 Tujuan Belajar
- Memahami struktur data **Map** sebagai pasangan *key-value* modern.
- Mengetahui perbedaan besar antara **Map** vs **Object biasa**: key pada Map **bisa berupa tipe data apa saja** (string, number, boolean, array, bahkan object!).
- Menggunakan method dasar Map: `.set()`, `.get()`, `.has()`, `.delete()`, `.clear()`, dan `.size`.
- Memahami konsep method chaining pada `.set()`.
- Mengetahui bahwa di TypeScript, `.get(key)` mengembalikan tipe `V | undefined`.

---

## 🧠 Analogi: Penitipan Barang dengan Kunci Apa Saja

- **Object biasa**: Lemari loker yang hanya menerima nomor kunci berupa **tulisan teks** (*string* atau *symbol*).
- **Map**: Loker super canggih. Kamu bisa memakai gantungan kunci berupa **angka**, kartu RFID bertipe **boolean**, atau bahkan **benda fisik lain (object)** sebagai kuncinya!

---

## 📘 Konsep Dasar

### 1. Membuat dan Mengisi Map

```ts
// Membuat Map baru dengan tipe Key: string, Value: any
const resto = new Map<string, any>();

// Menambahkan data dengan .set(key, value)
resto.set("nama", "Trattoria Bella");
resto.set("kategori", ["Italia", "Pizzeria"]);
```

---

### 2. Keunggulan Map: Key Tipe Apa Saja!

```ts
// Key berupa angka:
resto.set(1, "Cabang Bandung");
resto.set(2, "Cabang Jakarta");

// Key berupa boolean:
resto.set(true, "Restoran Sedang Buka");
resto.set(false, "Restoran Sedang Tutup");

// Key berupa array atau object:
const arrKey = [1, 2];
resto.set(arrKey, "Data Khusus Meja VIP");
```

---

### 3. Method Chaining pada `.set()`

Karena `.set()` mengembalikan objek Map itu sendiri, kita bisa menyambungkannya secara berantai (*chaining*):

```ts
resto
  .set("buka", 10)
  .set("tutup", 22)
  .set(true, "Buka sekarang!")
  .set(false, "Sudah tutup");
```

---

### 4. Mengambil Nilai (`.get`) & Memeriksa (`.has`)

```ts
console.log(resto.get("nama")); // "Trattoria Bella"
console.log(resto.get(1));      // "Cabang Bandung"

// Trik logika cerdas dengan boolean key:
const jamSekarang = 14;
const sedangBuka = jamSekarang >= resto.get("buka") && jamSekarang < resto.get("tutup");

// Mengambil pesan langsung dari Map berdasarkan kondisi boolean:
console.log(resto.get(sedangBuka)); // "Buka sekarang!"
```

---

## 🔷 TypeScript Corner: Generic `Map<K, V>`

TypeScript mengharuskan kita mendefinisikan tipe kunci (`K`) dan nilai (`V`):

```ts
// Kunci bertipe string, Nilai bertipe number
const daftarHarga = new Map<string, number>();

daftarHarga.set("Pizza", 75000);
daftarHarga.set("Pasta", 60000);

// Nilai kembalian .get() adalah `number | undefined` karena kuncinya mungkin tidak ditemukan!
const hargaPizza: number | undefined = daftarHarga.get("Pizza");
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/13-map-dasar/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `map.set([1, 2], "Data"); map.get([1, 2]);` | Mengembalikan `undefined` karena kedua array menempati alamat memori (referensi) berbeda! | Simpan array ke variabel dulu: `const k = [1, 2]; map.set(k, "Data"); map.get(k);` |
| `map["nama"]` | Mengakses Map seperti object biasa tidak akan memicu fungsionalitas Map | Gunakan `map.get("nama")` dan `map.set("nama", ...)` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `Map` menyimpan pasangan *key-value* dengan tipe key yang fleksibel.
- Method utama: `.set()`, `.get()`, `.has()`, `.delete()`, `.clear()`, dan `.size`.
- `.set()` mendukung method chaining.
