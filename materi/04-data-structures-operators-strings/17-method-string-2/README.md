# 17 · Method String Bagian 2

## 🎯 Tujuan Belajar
- Menguasai pemecahan dan penggabungan teks:
  - `.split(separator)`: Memecah string menjadi Array.
  - `.join(glue)`: Menggabungkan Array kembali menjadi String.
- Menguasai perataan dan pengisian karakter (*padding*):
  - `.padStart(panjang, pengisi)`
  - `.padEnd(panjang, pengisi)`
- Mengulang teks dengan `.repeat(jumlah)`.
- Mengimplementasikan studi kasus nyata: **Masking Nomor Kartu Kredit/Rekening** dan **Kapitalisasi Huruf Pertama Setiap Kata (*Title Case*)**.
- Mengenal **Template Literal Types** di TypeScript.

---

## 🧠 Analogi: Memotong Roti & Merangkai Kalung

- **`.split()`**: Memotong roti tawar panjang menjadi lembaran-lembaran roti terpisah (Array).
- **`.join()`**: Mengambil manik-manik terpisah dan merangkainya dengan seutas tali menjadi satu kalung utuh (String).
- **`.padStart()` / `.padEnd()`**: Menambahkan spasi atau karakter bintang di awal/akhir baris agar tabel struk belanja rapi rata kanan/kiri.

---

## 📘 Konsep Dasar

### 1. `.split()` dan `.join()`

```ts
const daftarPesanan = "Pizza+Pasta+Risotto+Tiramisu";

// 1. Memecah string menjadi array
const arrayMenu = daftarPesanan.split("+");
console.log(arrayMenu); // ["Pizza", "Pasta", "Risotto", "Tiramisu"]

// 2. Menggabungkan array kembali menjadi string yang rapi
const teksMenu = arrayMenu.join(", ");
console.log(teksMenu); // "Pizza, Pasta, Risotto, Tiramisu"
```

---

### 2. Kapitalisasi Setiap Kata (*Title Case*)

Kombinasi `.split()`, perulangan/map, dan `.join()`:

```ts
function kapitalisasiNama(namaLengkap: string): string {
  const kataArray = namaLengkap.toLowerCase().split(" ");
  const hasil: string[] = [];

  for (const kata of kataArray) {
    if (kata.length === 0) continue;
    // Huruf pertama besar + sisa huruf
    hasil.push(kata[0].toUpperCase() + kata.slice(1));
  }

  return hasil.join(" ");
}

console.log(kapitalisasiNama("ahmad rayhan pratama"));
// "Ahmad Rayhan Pratama"
```

---

### 3. Padding String (`padStart` & `padEnd`)

Menambahkan karakter pengisi hingga string mencapai panjang tertentu:

```ts
const pesan = "Harap tunggu";
console.log(pesan.padStart(20, "+")); // "++++++++Harap tunggu"
console.log(pesan.padEnd(20, "+"));   // "Harap tunggu++++++++"
```

#### Studi Kasus: Masking Nomor Rekening / Kartu

Hanya menampilkan 4 digit terakhir dan menyamarkan sisanya dengan bintang `*`:

```ts
function samarkanKartu(nomorKartu: string): string {
  const empatDigitTerakhir = nomorKartu.slice(-4);
  return empatDigitTerakhir.padStart(nomorKartu.length, "*");
}

console.log(samarkanKartu("1234567890123456")); // "************3456"
console.log(samarkanKartu("456789123"));        // "*****9123"
```

---

### 4. Mengulang Teks dengan `.repeat()`

```ts
const peringatanCuaca = (jumlahPeringatan: number) => {
  console.log(`Peringatan Badai! ${"⛈️".repeat(jumlahPeringatan)}`);
};

peringatanCuaca(3); // "Peringatan Badai! ⛈️⛈️⛈️"
```

---

## 🔷 TypeScript Corner: Template Literal Types

TypeScript memungkinkan kita membuat tipe berbasis pola string template:

```ts
type Posisi = "atas" | "bawah";
type Arah = "kiri" | "kanan";

// Menghasilkan union: "atas-kiri" | "atas-kanan" | "bawah-kiri" | "bawah-kanan"
type LokasiKotak = `${Posisi}-${Arah}`;

const letak: LokasiKotak = "atas-kanan";
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/17-method-string-2/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `str.split("")` vs `str.split(" ")` | `split("")` memecah per huruf, `split(" ")` memecah per kata | Pilih pemisah yang sesuai kebutuhan |
| Target panjang `padStart` lebih kecil dari panjang string | Fungsi tidak melakukan apa-apa dan mengembalikan string asli | Pastikan target panjang lebih besar dari panjang teks |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `.split()` mengubah string menjadi array; `.join()` merangkai array menjadi string.
- `.padStart()` dan `.padEnd()` untuk perataan teks dan penyembunyian (*masking*) data sensitif.
- `.repeat()` untuk menduplikasi teks secara instan.
