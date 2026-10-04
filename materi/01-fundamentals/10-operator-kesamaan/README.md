# 10 · Operator Kesamaan: `===` vs `==`

## 🎯 Tujuan Belajar
- Membandingkan dua nilai dengan `===` dan `!==`
- Memahami mengapa `==` **sebaiknya dihindari**
- Melihat bagaimana TypeScript mendeteksi perbandingan yang **mustahil benar**

---

## 🧠 Analogi: Petugas Keamanan

- `===` (**strict**) = petugas yang memeriksa **KTP dan wajah**. Keduanya harus cocok.
- `==` (**loose**) = petugas yang hanya melihat sekilas: *"Mirip kok, silakan masuk."*

---

## 💻 `===` Strict Equality

Bernilai `true` hanya jika **nilai DAN tipenya sama**.

```ts
console.log(18 === 18);   // true
console.log(18 === 19);   // false
console.log("18" === 18); // false (string vs number)
```

## 💻 `!==` Strict Inequality

Kebalikan dari `===`, yaitu "**tidak sama dengan**".

```ts
console.log(18 !== 19); // true
```

## 😵 `==` Loose Equality (Hindari)

`==` melakukan **coercion** dulu (lihat pelajaran 08) sebelum membandingkan:

| Ekspresi (JavaScript) | Hasil |
| :--- | :--- |
| `"18" == 18` | `true` 🤔 |
| `0 == ""` | `true` 🤯 |
| `0 == false` | `true` |
| `null == undefined` | `true` |

> ✅ **Aturan emas: selalu pakai `===` dan `!==`.**

---

## 💻 Contoh: Menebak Angka Favorit

```ts
const input = "23";                // data dari pengguna (teks)
const angkaFavorit = Number(input); // konversi dulu!

if (angkaFavorit === 23) {
  console.log("Keren! 23 angka yang hebat");
} else if (angkaFavorit === 7) {
  console.log("7 juga angka yang keren");
} else {
  console.log("Angka yang menarik");
}

if (angkaFavorit !== 23) {
  console.log("Kenapa bukan 23?");
}
```

---

## 🔷 Versi TypeScript: Perbandingan Mustahil Terdeteksi

```ts
const umur: number = 18;

if (umur === "18") { }
// ❌ This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.
```

TypeScript tahu bahwa **angka tidak mungkin sama dengan teks**, sehingga perbandingan ini pasti `false` dan kemungkinan besar adalah bug. Peringatan yang sama juga muncul untuk `==`.

### Bonus: Tipe Literal Ikut Diperiksa

Masih ingat tipe literal dari `const` (pelajaran 04)?

```ts
const nilaiTetap = 18;   // tipe: 18
if (nilaiTetap === 19) { }
// ❌ This comparison appears to be unintentional because the types '18' and '19' have no overlap.
```

TypeScript benar: `nilaiTetap` **selalu** 18, jadi perbandingan ini tidak berguna. Di program nyata, nilai yang dibandingkan biasanya berasal dari input atau hasil perhitungan, sehingga tipenya `number`.

---

## ⚠️ Kesalahan Umum

| Kode | Masalah |
| :--- | :--- |
| `if (umur = 18)` | Satu `=` adalah **assignment**, bukan perbandingan |
| `if (input === 23)` | `input` masih teks. Konversi dulu dengan `Number()` |
| `if (x == y)` | Gunakan `===` |

---

## ✍️ Latihan

Kerjakan [`latihan.ts`](./latihan.ts), lalu cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `===` / `!==` membandingkan **nilai dan tipe**. Selalu pakai ini
- `==` / `!=` melakukan coercion lebih dulu. **Hindari**
- TypeScript menandai perbandingan antar tipe yang tidak mungkin sama
