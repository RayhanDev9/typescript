# 19 · Array & Tuple di TypeScript

## 🎯 Tujuan Belajar
- Memahami struktur data **Array** (daftar data berurutan)
- Mengakses dan memodifikasi elemen array menggunakan **Indeks Berbasis Nol (0-indexed)**
- Mengetahui jumlah data dengan properti **`.length`**
- Mendefinisikan tipe array di TypeScript (`string[]`, `number[]`, `Array<T>`)
- Mengenal tipe **Tuple** (array dengan panjang dan tipe posisi yang tetap)

---

## 🧠 Analogi: Rak Loker Bernomor

Bayangkan rak loker penyimpanan barang:
- Loker pertama diberi nomor **0**
- Loker kedua diberi nomor **1**
- Loker ketiga diberi nomor **2**, dan seterusnya.

```text
Indeks:     [ 0 ]          [ 1 ]          [ 2 ]
Isi:     "Sepatu"       "Helm"         "Jaket"
```

---

## 💻 1. Membuat dan Mengakses Array

```ts
const teman: string[] = ["Andi", "Budi", "Cici"];

// Mengakses data berdasarkan indeks (mulai dari 0):
console.log(teman[0]); // "Andi"
console.log(teman[1]); // "Budi"

// Menghitung jumlah elemen:
console.log(teman.length); // 3

// Mengambil elemen terakhir:
console.log(teman[teman.length - 1]); // "Cici"

// Mengubah isi elemen tertentu:
teman[1] = "Bayu"; // Mengganti "Budi" menjadi "Bayu"
```

---

## 🔷 Versi TypeScript: Tipe Array & Proteksi

### 1. Tipe Homogen (Satu Jenis Data)
```ts
const daftarNilai: number[] = [85, 90, 78];
// atau sintaks generik:
const daftarNama: Array<string> = ["Andi", "Bayu"];

// ❌ TypeScript menolak data yang tidak cocok:
// daftarNilai.push("seratus"); // Type 'string' is not assignable to type 'number'.
```

### 2. Tipe Campuran (Union Array)
Jika array memang dirancang menampung string dan number:
```ts
const dataCampur: (string | number)[] = ["Rayhan", 25, "Bandung", 40123];
```

### 3. Tipe Tuple (Panjang dan Posisi Pasti)
Tuple adalah array khusus yang jumlah elemen dan tipe tiap posisinya sudah dikunci secara ketat:

```ts
// Tuple: [NamaSiswa: string, NilaiUjian: number, StatusLulus: boolean]
let laporanSiswa: [string, number, boolean];

laporanSiswa = ["Andi", 85, true]; // ✅ Cocok dengan urutan

// ❌ Salah urutan atau salah tipe langsung ditolak TypeScript:
// laporanSiswa = [85, "Andi", true]; // Error: tipe tidak sesuai posisi!
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan tugas yang diberikan. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Array adalah daftar data berurutan dengan indeks mulai dari **0**.
- `.length` memberikan jumlah total elemen.
- Di TypeScript, gunakan `tipe[]` untuk array biasa.
- Gunakan **Tuple** `[tipeA, tipeB]` untuk array dengan posisi dan tipe yang terkunci ketat (misal data koordinat atau pasangan key-value).
