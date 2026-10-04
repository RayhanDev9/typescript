# 16 · Method String Bagian 1

## 🎯 Tujuan Belajar
- Memahami bahwa string di JavaScript/TypeScript bersifat **immutable (tidak bisa diubah langsung di tempat)**, sehingga setiap method string selalu menghasilkan string baru.
- Menguasai method pencarian dan pemotongan:
  - `.indexOf(sub)`, `.lastIndexOf(sub)`
  - `.slice(mulai, akhir)` (termasuk penggunaan indeks negatif)
- Menguasai method transformasi dan pembersihan teks:
  - `.toLowerCase()`, `.toUpperCase()`
  - `.trim()`, `.trimStart()`, `.trimEnd()`
- Menguasai method penggantian dan pengecekan:
  - `.replace(target, pengganti)`, `.replaceAll(target, pengganti)`
  - `.includes(sub)`, `.startsWith(sub)`, `.endsWith(sub)`
- Mengenal **String Literal Union Types** di TypeScript untuk validasi input.

---

## 🧠 Analogi: Mesin Fotokopi & Editor Teks

- Dokumen asli tidak pernah dicoret-coret (**immutable**).
- Setiap kali kamu menjalankan perintah (misalnya ganti huruf besar), mesin membuat salinan baru di kertas terpisah dengan perubahan yang kamu minta.

---

## 📘 Konsep Dasar

### 1. Mencari Posisi & Memotong Teks (`slice`)

```ts
const maskapai = "Garuda Indonesia Airlines";

// 1. Mencari indeks huruf/kata
console.log(maskapai.indexOf("Indonesia")); // 7
console.log(maskapai.lastIndexOf("a"));     // 18

// 2. Memotong teks dengan .slice(start, end)
console.log(maskapai.slice(0, 6));          // "Garuda" (indeks 0 s/d sebelum 6)
console.log(maskapai.slice(7));             // "Indonesia Airlines" (dari 7 sampai akhir)

// 3. Indeks Negatif (dihitung dari belakang)
console.log(maskapai.slice(-8));            // "Airlines"
console.log(maskapai.slice(0, -9));         // "Garuda Indonesia"
```

---

### 2. Mengubah Huruf & Membersihkan Spasi (`trim`)

```ts
const emailInput = "   Rayhan.Dev@Example.COM \n";

// Mengubah ke huruf kecil dan menghapus spasi liar
const emailBersih = emailInput.toLowerCase().trim();
console.log(emailBersih); // "rayhan.dev@example.com"
```

---

### 3. Mengganti Karakter (`replace` & `replaceAll`)

```ts
const pengumuman = "Pintu keberangkatan 01. Harap segera ke Pintu 01!";

// .replace hanya mengganti yang pertama ditemukan
console.log(pengumuman.replace("01", "05"));
// "Pintu keberangkatan 05. Harap segera ke Pintu 01!"

// .replaceAll mengganti SEMUA kemunculan
console.log(pengumuman.replaceAll("01", "05"));
// "Pintu keberangkatan 05. Harap segera ke Pintu 05!"
```

---

### 4. Mengecek Isi Teks (`includes`, `startsWith`, `endsWith`)

Mengembalikan nilai boolean `true`/`false`:

```ts
const kodePenerbangan = "GA-812";

console.log(kodePenerbangan.startsWith("GA")); // true (Garuda)
console.log(kodePenerbangan.endsWith("812"));  // true
console.log(kodePenerbangan.includes("-"));    // true
```

---

## 🔷 TypeScript Corner: String Literal Union

Di TypeScript, kita bisa membatasi teks agar hanya menerima nilai string tertentu:

```ts
type StatusPesanan = "MENUNGGU" | "DIPROSES" | "SELESAI" | "DIBATALKAN";

function ubahStatus(status: StatusPesanan): void {
  console.log("Status baru:", status.toLowerCase());
}

ubahStatus("SELESAI");
// ubahStatus("SEDANG_DIKIRIM"); // ❌ Error TypeScript: Argument of type '"SEDANG_DIKIRIM"' is not assignable to parameter of type 'StatusPesanan'.
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/16-method-string-1/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `str[0] = "A";` | String di JS/TS bersifat immutable, perintah ini diabaikan | Bentuk string baru dengan `.slice()` atau `.replace()` |
| `str.toUpperCase(); console.log(str);` | Tidak menampung return value ke variabel baru | `str = str.toUpperCase();` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- String bersifat immutable; method string menghasilkan string baru.
- `.slice(start, end)` untuk memotong teks.
- `.trim()` dan `.toLowerCase()` untuk standardisasi input teks.
- `.includes()`, `.startsWith()`, `.endsWith()` untuk validasi teks.
