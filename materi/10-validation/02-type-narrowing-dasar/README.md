# 02 · Type Narrowing: `typeof` & `instanceof`

## 🎯 Tujuan Belajar
- Memahami konsep **Type Narrowing**: bagaimana TypeScript secara cerdas mempersempit tipe data suatu variabel di dalam blok percabangan `if` (*Control Flow Analysis*).
- Menguasai operator **`typeof`** untuk mempersempit tipe primitif (string, number, boolean, function).
- Mengetahui jebakan klasik JavaScript pada `typeof`: `typeof null === "object"`.
- Menguasai operator **`instanceof`** untuk mempersempit class dan objek bawaan seperti `Error` atau `Date`.
- Menguasai **Truthiness & Equality Narrowing**.

---

## 🧠 Analogi Dunia Nyata: "Gerbang Pemilah Surat & Paket"
Bayangkan sebuah kantor ekspedisi:
- Benda yang masuk dari truk adalah barang umum (**Union: `Surat | PaketKardus`**).
- Jika Anda menimbangnya dan beratnya di bawah 100 gram (**Kondisi `typeof` / `if`**):
  - Petugas tahu pasti benda ini adalah **Surat Tipis**.
  - Petugas boleh menempelkan prangko kertas (method khusus surat).
- Di luar blok `if`, benda tersebut pasti **Paket Kardus**:
  - Petugas boleh menempelkan lakban tebal dan stiker barcode koli.
- TypeScript bekerja persis seperti petugas tersebut: begitu masuk ke dalam blok `if`, TypeScript **mempersempit (*narrow*)** tipe variabel tersebut!

---

## 📘 Konsep Dasar

### 1. `typeof` Guard (Tipe Primitif)
```ts
function gandakanNilai(input: string | number) {
  // Sebelum if: input bertipe 'string | number'

  if (typeof input === "string") {
    // Di dalam if: TypeScript tahu pasti input adalah 'string'
    return input.repeat(2); // ✅ Autocomplete string aktif
  }

  // Di luar if: TypeScript tahu pasti input adalah 'number'
  return input * 2; // ✅ Operasi matematika aman
}
```

> [!WARNING]
> **Jebakan Klasik `typeof null`**:
> `typeof null` di JavaScript mengembalikan `"object"`. Oleh karena itu, selalu cek `if (input !== null && typeof input === "object")` saat memeriksa objek!

---

### 2. `instanceof` Guard (Class & Objek Prototipe)
Digunakan saat memeriksa instance dari class atau tipe bawaan:

```ts
function formatTanggalLaporan(nilai: Date | string): string {
  if (nilai instanceof Date) {
    // Di dalam if: 'nilai' bertipe Date
    return nilai.toISOString();
  }

  // Di sini: 'nilai' bertipe string
  return nilai.trim();
}
```

Sangat sering dipakai untuk error handling:
```ts
try {
  jalankanSesuatu();
} catch (err: unknown) {
  if (err instanceof Error) {
    console.error("Pesan Error:", err.message); // ✅ Aman mengakses err.message
  }
}
```

---

## 📌 Ringkasan
- TypeScript mengamati alur kode Anda (*Control Flow Analysis*).
- Gunakan `typeof` untuk tipe primitif (string, number, boolean).
- Gunakan `instanceof` untuk class, Error, dan Date.
