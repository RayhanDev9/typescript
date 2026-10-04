# 05 · Operator Dasar

## 🎯 Tujuan Belajar
- Memakai operator **aritmatika** untuk berhitung
- Memakai operator **assignment** untuk mengubah nilai variabel
- Memakai operator **perbandingan** yang menghasilkan `true`/`false`
- Memahami **prioritas operator** (mana yang dihitung duluan)

---

## 🧠 Analogi: Kalkulator

Operator adalah **tombol** di kalkulator: `+`, `-`, `×`, `÷`. Operator mengambil satu atau beberapa nilai lalu menghasilkan **nilai baru**.

---

## ➕ Operator Aritmatika

| Operator | Arti | Contoh | Hasil |
| :--- | :--- | :--- | :--- |
| `+` | Tambah | `10 + 3` | `13` |
| `-` | Kurang | `10 - 3` | `7` |
| `*` | Kali | `10 * 3` | `30` |
| `/` | Bagi | `10 / 4` | `2.5` |
| `%` | Sisa bagi (modulo) | `10 % 3` | `1` |
| `**` | Pangkat | `2 ** 3` | `8` (2×2×2) |

> 💡 `%` sering dipakai untuk mengecek bilangan **genap**: `angka % 2` hasilnya `0` jika genap.

`+` juga bisa **menggabungkan teks**:

```ts
const namaDepan = "Rayhan";
const namaBelakang = "Pratama";
console.log(namaDepan + " " + namaBelakang); // Rayhan Pratama
```

---

## 📝 Operator Assignment

| Operator | Sama dengan | Contoh (`x` awalnya 10) |
| :--- | :--- | :--- |
| `=` | Isi nilai | `x = 10` |
| `+=` | `x = x + ...` | `x += 5` → `15` |
| `-=` | `x = x - ...` | `x -= 3` → `7` |
| `*=` | `x = x * ...` | `x *= 2` → `20` |
| `/=` | `x = x / ...` | `x /= 2` → `5` |
| `++` | `x = x + 1` | `x++` → `11` |
| `--` | `x = x - 1` | `x--` → `9` |

> Operator assignment **mengubah** nilai variabel, jadi variabelnya harus dibuat dengan `let`.

---

## ⚖️ Operator Perbandingan

Hasilnya selalu **boolean** (`true` atau `false`).

| Operator | Arti | Contoh | Hasil |
| :--- | :--- | :--- | :--- |
| `>` | Lebih besar | `20 > 18` | `true` |
| `<` | Lebih kecil | `20 < 18` | `false` |
| `>=` | Lebih besar atau sama | `18 >= 18` | `true` |
| `<=` | Lebih kecil atau sama | `17 <= 18` | `true` |

```ts
const umurSiswa = 17;
const bolehMembuatSIM = umurSiswa >= 17;
console.log(bolehMembuatSIM); // true
```

*(Operator `===` dan `!==` dibahas di pelajaran 10.)*

---

## 🧮 Prioritas Operator

Sama seperti di matematika: **kali/bagi dihitung sebelum tambah/kurang**.

```ts
console.log(2 + 3 * 4);   // 14, bukan 20
console.log((2 + 3) * 4); // 20, karena tanda kurung dihitung duluan
```

Urutan sederhana (dari yang paling duluan):
1. `( )` tanda kurung
2. `**` pangkat
3. `*` `/` `%`
4. `+` `-`
5. `>` `<` `>=` `<=`
6. `=` `+=` `-=` ... (assignment, paling akhir)

> 💡 **Ragu? Pakai tanda kurung.** Kode menjadi lebih jelas dibaca.

Contoh menghitung rata-rata:

```ts
const nilaiA = 80;
const nilaiB = 90;
const rataRata = (nilaiA + nilaiB) / 2; // 85
// Tanpa kurung: nilaiA + nilaiB / 2 = 80 + 45 = 125 ❌
```

---

## 🔷 Versi TypeScript: Operator Harus Masuk Akal

JavaScript membolehkan operasi aneh dan diam-diam menghasilkan nilai tak terduga. TypeScript menolaknya:

```ts
console.log("10" - 5);
// ❌ The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
// (Di JavaScript hasilnya 5, karena teks diubah menjadi angka diam-diam)

let total: number = 100;
total += "50";
// ❌ Type 'string' is not assignable to type 'number'.
// (Di JavaScript hasilnya teks "10050"!)
```

---

## ⚠️ Kesalahan Umum
- Lupa prioritas operator: `a + b / 2` bukan rata-rata
- Memakai `+=` pada variabel `const`
- Mencampur teks dan angka: `"10" + 5` menghasilkan `"105"`, bukan `15`

---

## ✍️ Latihan

Kerjakan [`latihan.ts`](./latihan.ts), lalu cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Aritmatika: `+ - * / % **`
- Assignment: `= += -= *= /= ++ --`
- Perbandingan: `> < >= <=` → menghasilkan boolean
- Kali/bagi dihitung sebelum tambah/kurang. Gunakan `( )` agar jelas
- TypeScript menolak operasi yang tidak masuk akal, misalnya teks dikurangi angka
