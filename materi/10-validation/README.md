# Modul 10: Validation & Type Narrowing (Menjembatani Runtime ke TypeScript)

Modul ini dirancang khusus untuk pemula yang **belajar TypeScript dari nol tanpa belajar JavaScript terlebih dahulu**.

Anda akan mempelajari cara mengamankan data aplikasi di dunia nyata: mulai dari memahami ilusi pengetikan statis vs data runtime, teknik **Type Narrowing** (`typeof`, `instanceof`, `in`), pola **Discriminated Unions** dan **Exhaustive Checking (`never`)**, hingga pembuatan fungsi **Custom Type Guard** dan **Schema Validation modern menggunakan Zod**.

---

## 📁 Daftar Pelajaran & Tantangan

| Folder | Topik Materi | Konsep Kunci |
| :--- | :--- | :--- |
| [`01-mengapa-butuh-validasi/`](./01-mengapa-butuh-validasi/README.md) | **Mengapa Butuh Validasi?** | Compile-Time vs Runtime Reality, bahaya `as Tipe`, tipe `unknown` sebagai gerbang data luar yang aman |
| [`02-type-narrowing-dasar/`](./02-type-narrowing-dasar/README.md) | **Type Narrowing: `typeof` & `instanceof`** | Control Flow Analysis, `typeof` primitif, jebakan `typeof null`, `instanceof` untuk Date, Error, dan Class |
| [`03-in-operator-narrowing/`](./03-in-operator-narrowing/README.md) | **Type Narrowing: Operator `in`** | Membedakan interface/plain objects tanpa class, pengecekan keberadaan properti objek |
| [`04-discriminated-unions/`](./04-discriminated-unions/README.md) | **Discriminated Unions** | Tagged unions, properti pembeda literal (`status: "sukses" \| "gagal"`), narrowing dengan `switch...case` |
| [`05-exhaustive-checking-never/`](./05-exhaustive-checking-never/README.md) | **Exhaustive Checking (`never`)** | Menjamin 100% varian tertangani, deteksi dini varian baru yang belum di-handle di compile time |
| [`06-custom-type-guards/`](./06-custom-type-guards/README.md) | **Custom Type Guards (`is`)** | Sintaks Type Predicate `val is T`, menghubungkan fungsi boolean ke pengetikan compiler, array filter |
| [`07-assertion-functions/`](./07-assertion-functions/README.md) | **Assertion Functions (`asserts`)** | Validasi fail-fast dengan melempar exception (`throw`), menghilangkan `if...else` bersarang |
| [`08-pengenalan-schema-validation-zod/`](./08-pengenalan-schema-validation-zod/README.md) | **Pengenalan Schema Validation & Zod** | Masalah validasi manual, pengenalan Zod, `z.string()`, `z.number()`, `.parse()` vs `.safeParse()` |
| [`09-zod-type-inference/`](./09-zod-type-inference/README.md) | **Zod Type Inference (`z.infer`)** | Single Source of Truth, ekstraksi otomatis tipe TypeScript dari skema runtime tanpa duplikasi kode |
| [`10-validasi-form-dan-aturan-ketat/`](./10-validasi-form-dan-aturan-ketat/README.md) | **Validasi Form & Aturan Ketat** | String constraints (`min`, `max`, `email`, `regex`), pesan error kustom Indonesia, `.flatten().fieldErrors` |
| [`11-validasi-nested-dan-arrays/`](./11-validasi-nested-dan-arrays/README.md) | **Validasi Objek Bersarang & Array** | Sub-skema modular, hierarki objek bersarang, `z.array().nonempty()`, pelacakan path error bersarang |
| [`12-transformasi-dan-sanitasi-zod/`](./12-transformasi-dan-sanitasi-zod/README.md) | **Transformasi & Sanitasi Data** | Pembersihan data saat validasi: `.trim()`, `.toLowerCase()`, default fallback, coercion `z.coerce` |
| [`13-challenge-api-form-validator/`](./13-challenge-api-form-validator/README.md) | **🏆 Capstone Challenge: Checkout Validator** | Membangun E-Commerce Checkout Validation Engine: validasi payload luar, sanitasi, kalkulasi total bersih |

---

## 🛠️ Format Standar Setiap Pelajaran
Setiap sub-materi memiliki berkas terstandarisasi:
1. `README.md` — Teori mendalam, analogi dunia nyata, diagram alur, dan catatan praktik terbaik.
2. `contoh.ts` — Demonstrasi kode interaktif dengan logging yang mudah dipahami.
3. `latihan.ts` — Soal latihan tangan langsung dengan panduan instruksi `🎯 TUGAS`.
4. `solusi.ts` — Kunci jawaban lengkap terverifikasi.

---

## 💻 Cara Menjalankan Materi
Jalankan file materi menggunakan perintah `npm run materi` dari folder root proyek:
```bash
# Contoh: Menjalankan materi Zod Type Inference
npm run materi -- materi/10-validation/09-zod-type-inference/contoh.ts

# Contoh: Menjalankan solusi tantangan akhir Checkout Validator Engine
npm run materi -- materi/10-validation/13-challenge-api-form-validator/solusi.ts
```
