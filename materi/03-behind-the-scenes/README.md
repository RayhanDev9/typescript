# Modul 3: JavaScript & TypeScript Behind the Scenes

Modul ini membongkar rahasia **cara kerja JavaScript dan TypeScript di balik layar**.

Setelah siswa bisa menulis kode dasar di Modul 1 dan memanipulasi DOM di Modul 2, modul ini akan menjawab pertanyaan mendasar:
- *Mengapa variabel `let` tidak bisa dipanggil sebelum dideklarasikan, sedangkan `function` bisa?*
- *Bagaimana memori komputer menyimpan angka dibanding objek?*
- *Apa yang sebenarnya terjadi saat TypeScript dikompilasi ke JavaScript?*
- *Ke mana perginya kata kunci `this` saat kita menggunakan arrow function?*

---

## 📁 Daftar Pelajaran

| # | Pelajaran | Topik & Diagram Kunci |
| :-- | :--- | :--- |
| 01 | [Gambaran Besar JavaScript](./01-gambaran-besar-javascript/README.md) | High-Level, JIT Compilation, Single-Threaded, Superset TypeScript |
| 02 | [Dari TypeScript ke JavaScript](./02-dari-typescript-ke-javascript/README.md) | Kompilasi `tsc`, **Type Erasure** (tipe hilang saat runtime), bedah `dist/` |
| 03 | [Engine & Runtime](./03-engine-dan-runtime/README.md) | V8 Engine, Memory Heap, Call Stack, Web API, Event Loop |
| 04 | [Execution Context & Call Stack](./04-execution-context-dan-call-stack/README.md) | Global Context, Function Context, Call Stack Push/Pop |
| 05 | [Scope & Scope Chain](./05-scope-dan-scope-chain/README.md) | Lexical Scoping, Global vs Function vs Block Scope, Variable Lookup |
| 06 | [Hoisting & TDZ (Temporal Dead Zone)](./06-hoisting-dan-tdz/README.md) | Fase Creation vs Execution, Mengapa `var` undefined dan `let` error TDZ |
| 07 | [Keyword `this`](./07-keyword-this/README.md) | 4 Aturan `this`: Method, Function biasa, Arrow Function, Event Listener |
| 08 | [Regular vs Arrow Function](./08-regular-vs-arrow-function/README.md) | Pewarisan Lexical `this`, objek `arguments`, flag `noImplicitThis` |
| 09 | [Primitif vs Reference (Memori)](./09-primitif-vs-reference/README.md) | Call Stack (Primitif) vs Memory Heap (Reference), Alamat Pointer |
| 10 | [Shallow vs Deep Copy](./10-shallow-vs-deep-copy/README.md) | Spread `{ ...obj }`, `structuredClone()`, `Readonly<T>`, `as const` |

---

## 🚀 Cara Menjalankan

Semua materi di modul ini berjalan di Node.js menggunakan runner `tsx`:

```bash
npm run materi -- materi/03-behind-the-scenes/01-gambaran-besar-javascript/contoh.ts
```
