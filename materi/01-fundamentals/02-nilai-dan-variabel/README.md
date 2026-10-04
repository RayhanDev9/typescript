# 02 · Nilai & Variabel

## 🎯 Tujuan Belajar
- Memahami apa itu **nilai** (value)
- Menyimpan nilai ke dalam **variabel**
- Mengikuti **aturan penamaan** variabel
- Memberi **anotasi tipe** dan memahami **inferensi tipe**

---

## 🧠 Analogi: Variabel = Kotak Berlabel

Bayangkan sebuah **kotak** dengan **label nama** di luarnya:

```text
┌──────────────┐
│   "Rayhan"   │  ← isi (nilai)
└──────────────┘
   namaDepan      ← label (nama variabel)
```

- **Nilai** adalah data, misalnya `"Rayhan"`, `25`, atau `true`.
- **Variabel** adalah kotak berlabel untuk menyimpan nilai itu agar bisa dipakai lagi.

Di TypeScript, kotaknya juga punya **jenis**. Kotak khusus teks tidak boleh diisi angka.

---

## 💻 Membuat Variabel

```ts
let namaDepan = "Rayhan";
console.log(namaDepan); // Rayhan
```

| Bagian | Arti |
| :--- | :--- |
| `let` | Kata kunci untuk membuat variabel |
| `namaDepan` | Nama variabel (label kotak) |
| `=` | Operator **assignment**: "isi dengan" (bukan "sama dengan") |
| `"Rayhan"` | Nilai yang disimpan |

Keuntungan variabel: cukup ubah **satu tempat**, dan semua yang memakainya ikut berubah.

---

## 📏 Aturan Penamaan

| ✅ Boleh | ❌ Tidak Boleh | Alasan |
| :--- | :--- | :--- |
| `namaDepan` | `nama depan` | Tidak boleh ada spasi |
| `umur2` | `2umur` | Tidak boleh diawali angka |
| `total_harga`, `$harga` | `total-harga` | Hanya huruf, angka, `_`, dan `$` |
| `kelas` | `new`, `function`, `let` | Kata kunci (reserved word) tidak boleh dipakai |

**Konvensi (kebiasaan baik):**
- Pakai **camelCase**: kata pertama huruf kecil, kata berikutnya diawali huruf besar → `jumlahSiswaAktif`
- Nama harus **deskriptif**: `hargaProduk` lebih jelas daripada `x` atau `hp`
- Huruf besar dan kecil dibedakan: `nama` ≠ `Nama`

---

## 🔷 Versi TypeScript: Anotasi Tipe vs Inferensi Tipe

### Anotasi Tipe (ditulis manual)

```ts
let namaKota: string = "Bandung";
let jumlahSiswa: number = 30;
let sudahLulus: boolean = false;
```

`: string` artinya "kotak ini **hanya** untuk teks".

### Inferensi Tipe (ditebak otomatis)

```ts
let namaKota = "Bandung"; // TypeScript tahu ini string
```

TypeScript cukup pintar menebak tipe dari nilai awalnya.
**Arahkan mouse ke nama variabel** di VS Code untuk melihat tipe hasil tebakannya.

> 💡 **Kapan menulis anotasi?** Jika nilai awalnya sudah jelas, inferensi sudah cukup. Anotasi berguna saat variabel dibuat **tanpa nilai awal**:
> ```ts
> let nilaiUjian: number;
> nilaiUjian = 90;
> ```

### TypeScript Menjaga Isi Kotak

```ts
let jumlahSiswa: number = 30;
jumlahSiswa = "tiga puluh";
// ❌ Type 'string' is not assignable to type 'number'.
```

Di JavaScript biasa, kode ini **lolos** dan bug-nya baru ketahuan nanti. TypeScript langsung memberi tahu.

---

## ⚠️ Kesalahan Umum

| Pesan Error | Arti |
| :--- | :--- |
| `Type 'string' is not assignable to type 'number'` | Kamu mengisi kotak angka dengan teks |
| `Cannot find name 'namaDepn'` | Salah ketik nama variabel |
| `Cannot redeclare block-scoped variable 'nama'` | Variabel dengan nama yang sama dibuat dua kali |

---

## ✍️ Latihan

Kerjakan [`latihan.ts`](./latihan.ts), lalu cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- **Nilai** = data; **variabel** = kotak berlabel untuk menyimpan nilai
- Gunakan nama yang **deskriptif** dengan gaya **camelCase**
- `: tipe` = anotasi tipe. Jika tidak ditulis, TypeScript **menebak** (inferensi)
- Setelah tipenya ditentukan, isi variabel **tidak bisa diganti** dengan tipe lain
