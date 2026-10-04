# Modul 1: TypeScript Fundamentals

Modul ini mengajarkan dasar-dasar pemrograman **langsung dengan TypeScript**, tanpa perlu belajar JavaScript lebih dulu.
Setiap konsep JavaScript dipasangkan dengan konsep tipe TypeScript yang berkaitan.

## Cara Menjalankan File Materi

Jalankan semua perintah dari folder utama project (`final/`).

```bash
# Mode watch: otomatis jalan ulang setiap file disimpan (Ctrl + S)
npm run materi -- materi/01-fundamentals/01-hello-typescript/contoh.ts

# Jalan sekali saja
npm run jalankan -- materi/01-fundamentals/01-hello-typescript/contoh.ts

# Cek error tipe di SEMUA file
npm run typecheck
```

> 💡 Tanda `--` setelah nama script wajib ada. Tanda ini meneruskan path file ke `tsx`.

## Isi Setiap Pelajaran

| File | Kegunaan |
| :--- | :--- |
| `README.md` | Penjelasan konsep, analogi, dan kesalahan umum |
| `contoh.ts` | Kode demo untuk live coding di kelas |
| `latihan.ts` | Soal untuk siswa (cari tanda `TODO`) |
| `solusi.ts` | Jawaban latihan. Buka setelah mencoba sendiri |

## Daftar Pelajaran

### Bagian A: Dasar

| # | Pelajaran | Topik Utama |
| :-- | :--- | :--- |
| 01 | [Hello TypeScript](./01-hello-typescript/README.md) | Apa itu program, `console.log`, komentar |
| 02 | [Nilai & Variabel](./02-nilai-dan-variabel/README.md) | Variabel, aturan penamaan, anotasi tipe, inferensi |
| 03 | [Tipe Data Primitif](./03-tipe-data-primitif/README.md) | `string`, `number`, `boolean`, `null`, `undefined`, `any` vs `unknown` |
| 04 | [`let`, `const`, `var`](./04-let-const-var/README.md) | Mengubah nilai variabel, tipe literal |
| 05 | [Operator Dasar](./05-operator-dasar/README.md) | Aritmatika, assignment, perbandingan, prioritas |
| 06 | [String & Template Literal](./06-string-dan-template-literal/README.md) | Menggabungkan teks, backtick |
| 07 | [Keputusan: `if / else`](./07-if-else/README.md) | Percabangan, block scope, variabel wajib diisi |
| 08 | [Konversi & Coercion Tipe](./08-konversi-dan-coercion/README.md) | `Number()`, `String()`, `NaN` |
| 09 | [Truthy & Falsy](./09-truthy-dan-falsy/README.md) | Nilai yang dianggap `false` |
| 10 | [Operator Kesamaan](./10-operator-kesamaan/README.md) | `===` vs `==` |
| 11 | [Logika Boolean](./11-logika-boolean/README.md) | `&&`, `\|\|`, `!` |
| 12 | [`switch`](./12-switch/README.md) | Banyak cabang, union type literal |
| 13 | [Statement, Expression & Ternary](./13-statement-expression-ternary/README.md) | Operator `? :` |

### Bagian B: Fungsi & Struktur Data

| # | Pelajaran | Topik Utama |
| :-- | :--- | :--- |
| 14 | [Strict Mode](./14-strict-mode/README.md) | `"use strict"`, `strict: true` di tsconfig, pencegahan silent bug |
| 15 | [Fungsi](./15-fungsi/README.md) | Parameter, return, tipe parameter, tipe return, tipe `void` |
| 16 | [Declaration vs Expression](./16-declaration-vs-expression/README.md) | Function declaration vs expression, tipe fungsi `(x: number) => number` |
| 17 | [Arrow Function](./17-arrow-function/README.md) | Sintaks panah `=>`, implicit return, parameter opsional `?`, default |
| 18 | [Fungsi Memanggil Fungsi](./18-fungsi-memanggil-fungsi/README.md) | Komposisi fungsi, prinsip DRY (Don't Repeat Yourself) |
| 19 | [Array](./19-array/README.md) | Struktur array, `number[]`, `string[]`, tipe Tuple `[string, number]` |
| 20 | [Method Array Dasar](./20-method-array-dasar/README.md) | `push`, `pop`, `shift`, `unshift`, `indexOf`, `includes` |
| 21 | [Object](./21-object/README.md) | Key-value, dot vs bracket notation, `type` alias, `interface` |
| 22 | [Method Object & `this`](./22-method-object-dan-this/README.md) | Method di dalam object, pengenalan keyword `this` |
| 23 | [Loop `for`](./23-loop-for/README.md) | Struktur counter loop, `continue`, `break` |
| 24 | [Loop Array & Bersarang](./24-loop-array-dan-bersarang/README.md) | Iterasi array dengan loop, loop mundur, loop bersarang (*nested*) |
| 25 | [Loop `while`](./25-loop-while/README.md) | Perulangan kondisi dinamis, simulasi lempar dadu |
| 26 | [Mini Challenge: Kalkulator Tip & Penilaian](./26-mini-challenge/README.md) | Proyek gabungan semua materi Bagian A & B |
