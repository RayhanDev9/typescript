# 09 · Truthy & Falsy

## 🎯 Tujuan Belajar
- Mengenal **5 nilai falsy** di JavaScript
- Memahami bagaimana `if` memperlakukan nilai yang **bukan boolean**
- Mengubah nilai menjadi boolean dengan `Boolean()`
- Mewaspadai jebakan angka `0`

---

## 🧠 Analogi: Kotak "Ada Isinya?"

Saat ditanya *"Apakah dompetmu ada isinya?"*, kamu tidak menjawab dengan angka, tapi dengan **ya/tidak**.
Begitu juga `if`: nilai apa pun yang dimasukkan akan dianggap sebagai **ya (truthy)** atau **tidak (falsy)**.

---

## ❌ 5 Nilai Falsy (+ `false`)

Nilai-nilai ini dianggap `false` jika dipakai sebagai kondisi:

| Nilai | Tipe |
| :--- | :--- |
| `0` | number |
| `""` (teks kosong) | string |
| `undefined` | undefined |
| `null` | null |
| `NaN` | number |

Ditambah `false` itu sendiri.
**Semua nilai lain adalah truthy**, termasuk `"0"`, `" "` (spasi), `-1`, dan `"false"`.

```ts
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("Rayhan")); // true
console.log(Boolean("0"));      // true  ← teks "0" tidak kosong!
console.log(Boolean(-5));       // true
```

---

## 💻 Dalam `if`

```ts
const uangJajan = 0;

if (uangJajan) {
  console.log("Jangan boros ya!");
} else {
  console.log("Uang jajan habis 😢"); // ← dijalankan, karena 0 falsy
}
```

```ts
const namaPanggilan = "";

if (namaPanggilan) {
  console.log(`Halo, ${namaPanggilan}`);
} else {
  console.log("Nama panggilan belum diisi"); // ← dijalankan
}
```

---

## ⚠️ Jebakan Angka 0

```ts
const skorPemain = 0; // skor 0 adalah skor yang SAH!

if (skorPemain) {
  console.log(`Skor: ${skorPemain}`);
} else {
  console.log("Belum ada skor"); // ❌ SALAH! Pemain sudah bermain, skornya memang 0
}
```

**Perbaikan**: bandingkan secara eksplisit:

```ts
if (skorPemain !== undefined) { ... }
// atau
if (skorPemain >= 0) { ... }
```

> 💡 Gunakan truthy/falsy untuk **teks** dan **null/undefined**. Untuk **angka**, lebih aman memakai perbandingan eksplisit.

---

## 🔷 Versi TypeScript: Truthiness Narrowing

TypeScript **ikut membaca** pengecekan truthy dan mempersempit tipenya:

```ts
const namaPengguna: string | undefined = ...; // bisa ada, bisa tidak

if (namaPengguna) {
  // Di sini TypeScript tahu namaPengguna PASTI string
  console.log(namaPengguna.toUpperCase()); // ✅
}

console.log(namaPengguna.toUpperCase());
// ❌ 'namaPengguna' is possibly 'undefined'.
```

Fitur ini disebut **narrowing** (penyempitan tipe). Dengan narrowing, TypeScript mencegah error klasik *"Cannot read properties of undefined"*, salah satu error yang paling sering muncul di JavaScript.

---

## ✍️ Latihan

Kerjakan [`latihan.ts`](./latihan.ts), lalu cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Falsy: `0`, `""`, `undefined`, `null`, `NaN`, dan `false`. **Selain itu truthy**
- `if` otomatis mengubah nilai menjadi boolean
- Hati-hati dengan `0`. Untuk angka, pakai perbandingan eksplisit
- TypeScript mempersempit tipe setelah pengecekan truthy (**narrowing**)
