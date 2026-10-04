# 08 · Konversi & Coercion Tipe

## 🎯 Tujuan Belajar
- Mengubah tipe data **secara manual** (konversi) dengan `Number()` dan `String()`
- Mengenal `NaN` (*Not a Number*)
- Memahami **coercion**, yaitu perubahan tipe **otomatis** oleh JavaScript
- Melihat bagaimana TypeScript melindungi kita dari coercion yang membingungkan

---

## 🧠 Analogi: Penerjemah

- **Konversi** = kamu **sengaja** menyewa penerjemah untuk menerjemahkan dokumen.
- **Coercion** = seseorang menerjemahkan **diam-diam tanpa izin**. Kadang benar, kadang hasilnya ngawur.

---

## 💻 Konversi (Manual, Disengaja)

### Teks → Angka: `Number()`

Data dari form, input pengguna, atau file **hampir selalu berupa teks**, walaupun isinya angka.

```ts
const inputTahun = "2001"; // string!

console.log(inputTahun + 18);         // "200118"  ← teks disambung, bukan dijumlah
console.log(Number(inputTahun) + 18); // 2019      ✅
```

### Jika Teks Tidak Bisa Diubah: `NaN`

```ts
console.log(Number("Rayhan")); // NaN
console.log(typeof NaN);       // "number"  ← NaN adalah "angka yang tidak valid"
```

Cara memeriksa apakah sebuah nilai NaN:

```ts
const hasil = Number("abc");
console.log(Number.isNaN(hasil)); // true
```

### Angka → Teks: `String()`

```ts
const kodeKelas = String(12); // "12"
```

---

## 💻 Coercion (Otomatis oleh JavaScript)

JavaScript **mengubah tipe sendiri** saat dua tipe berbeda bertemu dalam satu operasi:

| Ekspresi (JavaScript) | Hasil | Penjelasan |
| :--- | :--- | :--- |
| `"Umur " + 25` | `"Umur 25"` | `+` dengan teks → angka diubah menjadi **teks** |
| `"23" - "10"` | `13` | `-` → teks diubah menjadi **angka** |
| `"5" * "2"` | `10` | `*` → teks diubah menjadi **angka** |
| `"10" > 5` | `true` | Perbandingan → teks diubah menjadi **angka** |
| `"10" + 5 - 3` | `102` | `"105"` lalu dikurangi 3 → 🤯 |

Membingungkan, bukan? Inilah sumber banyak bug di JavaScript.

---

## 🔷 Versi TypeScript: Coercion yang Membingungkan Ditolak

```ts
console.log("Umur " + 25); // ✅ boleh, menyambung teks dengan angka itu wajar

console.log("23" - "10");
// ❌ The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.

console.log("10" > 5);
// ❌ Operator '>' cannot be applied to types 'string' and 'number'.
```

TypeScript memaksa kita **mengonversi secara eksplisit**, sehingga maksud kode menjadi jelas:

```ts
console.log(Number("23") - Number("10")); // 13 ✅
console.log(Number("10") > 5);            // true ✅
```

> ⚠️ TypeScript **masih membolehkan** `"10" + 5` (hasilnya `"105"`), karena menyambung teks adalah operasi yang sah. Tetap waspada!

---

## ⚠️ Kesalahan Umum
- Lupa mengonversi input teks sebelum dijumlah, sehingga `"10" + "5"` menjadi `"105"`
- Mengira `Number("abc")` akan error. Ternyata hasilnya `NaN`, dan program tetap jalan
- `Number("")` (teks kosong) hasilnya `0`, **bukan** NaN

---

## ✍️ Latihan

Kerjakan [`latihan.ts`](./latihan.ts), lalu cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- **Konversi** = disengaja, memakai `Number()` dan `String()`
- **Coercion** = otomatis oleh JavaScript dan sering membingungkan
- `NaN` = hasil konversi angka yang gagal. Periksa dengan `Number.isNaN()`
- TypeScript menolak sebagian besar coercion, jadi **konversi selalu ditulis eksplisit**
