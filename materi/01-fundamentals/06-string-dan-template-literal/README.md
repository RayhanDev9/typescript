# 06 · String & Template Literal

## 🎯 Tujuan Belajar
- Menggabungkan teks dengan operator `+`
- Menulis teks yang lebih rapi dengan **template literal** (backtick `` ` ``)
- Membuat teks **beberapa baris**
- Mengetahui panjang teks dengan `.length`

---

## 🧠 Analogi: Formulir Isian

Template literal mirip **formulir dengan kolom kosong**:

```text
Halo, nama saya ______, umur saya ______ tahun.
```

Kita cukup "mengisi kolomnya" dengan variabel, tanpa menyambung potongan teks satu per satu.

---

## 💻 Cara Lama: Menyambung dengan `+`

```ts
const nama = "Rayhan";
const umur = 25;
const pekerjaan = "guru";

const perkenalan = "Saya " + nama + ", umur " + umur + " tahun, seorang " + pekerjaan + ".";
```

Masalahnya: banyak tanda `+` dan `"`, mudah lupa spasi, dan sulit dibaca.

## ✨ Cara Modern: Template Literal

Pakai **backtick** `` ` `` (tombol di kiri angka 1 pada keyboard), lalu sisipkan nilai dengan `${...}`:

```ts
const perkenalan = `Saya ${nama}, umur ${umur} tahun, seorang ${pekerjaan}.`;
```

Di dalam `${ }` kita bisa menulis **ekspresi** apa saja, termasuk perhitungan:

```ts
const tahunLahir = 2001;
console.log(`Tahun depan saya berumur ${2026 - tahunLahir + 1} tahun`);
```

### Teks Beberapa Baris

```ts
// Cara lama: memakai \n (karakter baris baru)
console.log("Baris 1\nBaris 2");

// Template literal: tekan Enter saja
console.log(`Baris 1
Baris 2`);
```

### Tiga Jenis Tanda Kutip

| Tanda Kutip | Contoh | Bisa `${}`? | Bisa beberapa baris? |
| :--- | :--- | :--- | :--- |
| Kutip dua | `"Halo"` | ❌ | ❌ |
| Kutip satu | `'Halo'` | ❌ | ❌ |
| Backtick | `` `Halo ${nama}` `` | ✅ | ✅ |

> 💡 Tips: tanda kutip berbeda bisa saling memuat. Contohnya `"Jum'at"` atau `` `Dia berkata "halo"` ``.

### Panjang Teks

```ts
const kata = "TypeScript";
console.log(kata.length); // 10
```

---

## 🔷 Versi TypeScript

1. Hasil template literal selalu bertipe **`string`**.
2. TypeScript **memeriksa isi `${ }`**. Salah ketik nama variabel langsung ketahuan:

```ts
console.log(`Halo ${namaa}`);
// ❌ Cannot find name 'namaa'. Did you mean 'nama'?
```

Di JavaScript biasa, kesalahan ini baru ketahuan saat program dijalankan (program crash).

---

## ⚠️ Kesalahan Umum

| Kode | Masalah |
| :--- | :--- |
| `"Halo ${nama}"` | Memakai kutip dua sehingga `${nama}` tampil apa adanya. **Harus backtick** |
| `` `Halo $nama` `` | Lupa kurung kurawal `{ }` |
| `"Saya" + nama` | Lupa spasi sehingga hasilnya `"SayaRayhan"` |

---

## ✍️ Latihan

Kerjakan [`latihan.ts`](./latihan.ts), lalu cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `+` bisa menyambung teks, tapi cepat berantakan
- Template literal `` `...${ekspresi}...` `` lebih rapi dan bisa beberapa baris
- `.length` = jumlah karakter dalam teks
- TypeScript memeriksa ekspresi di dalam `${ }`
