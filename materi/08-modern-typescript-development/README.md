# Modul 8: Modern TypeScript Development (Modules, Tooling & Functional Programming)

Modul ini dirancang khusus untuk pemula yang **belajar TypeScript dari nol tanpa belajar JavaScript terlebih dahulu**.

Anda akan mempelajari bagaimana aplikasi skala industri dibangun secara profesional: mulai dari pemecahan kode menjadi modul-modul terisolasi (**ES Modules**), ekosistem perkakas modern (**NPM, SemVer, Bundler, Source Maps**), hingga paradigma **Functional Programming (FP)** yang menjadi fondasi utama framework web modern (seperti React, Vue Composition API, dan Next.js).

---

## 📁 Daftar Pelajaran & Tantangan

| Folder | Topik Materi | Konsep Kunci |
| :--- | :--- | :--- |
| [`01-arsitektur-modern-overview/`](./01-arsitektur-modern-overview/README.md) | **Arsitektur Web Modern Overview** | Monolith vs Modular, peran Bundler, Compiler TypeScript, dan NPM |
| [`02-es-modules-export-import/`](./02-es-modules-export-import/README.md) | **ES Modules: Export & Import** | Named export/import, default export, module scope, namespace `* as`, alias `as` |
| [`03-type-only-export-import/`](./03-type-only-export-import/README.md) | **Type-Only Export & Import** | `import type`, `export type`, pemisahan runtime vs type system, Tree-Shaking |
| [`04-commonjs-vs-esm/`](./04-commonjs-vs-esm/README.md) | **CommonJS vs ES Modules** | `require()`/`module.exports` vs `import`/`export`, `esModuleInterop`, `.cjs` vs `.mjs` |
| [`05-package-manager-npm/`](./05-package-manager-npm/README.md) | **Package Manager & NPM** | `package.json`, `package-lock.json`, `dependencies` vs `devDependencies`, SemVer, `@types/*` |
| [`06-modern-tooling-bundler/`](./06-modern-tooling-bundler/README.md) | **Modern Tooling & Bundler** | Mengapa butuh bundler (Vite, esbuild), Dependency Graph, Minification, Source Maps (`.map`) |
| [`07-paradigma-functional-programming/`](./07-paradigma-functional-programming/README.md) | **Paradigma Functional Programming** | OOP vs FP, Imperatif (How) vs Deklaratif (What), data flow pipelines |
| [`08-pure-functions-side-effects/`](./08-pure-functions-side-effects/README.md) | **Pure Functions & Side Effects** | Deterministik, tanpa efek samping, isolasi I/O, `readonly` parameter di TypeScript |
| [`09-immutability-dan-deep-updates/`](./09-immutability-dan-deep-updates/README.md) | **Immutability & Deep Updates** | Kekekalan data, shallow copy vs deep update, array non-mutasi, `as const` |
| [`10-higher-order-functions-fp/`](./10-higher-order-functions-fp/README.md) | **Higher-Order Functions (HOF)** | First-class functions, fungsi penerima callback, function factory, generic `<T, R>` |
| [`11-currying-dan-partial-application/`](./11-currying-dan-partial-application/README.md) | **Currying & Partial Application** | Mengubah `f(a,b)` menjadi `f(a)(b)`, partial configuration, fungsi yang reusable |
| [`12-function-composition-piping/`](./12-function-composition-piping/README.md) | **Function Composition & Piping** | Menghilangkan nesting hell, `pipe()` type-safe, perakitan pipa transformasi data |
| [`13-challenge-modern-fp-pipeline/`](./13-challenge-modern-fp-pipeline/README.md) | **Capstone Challenge: FP Data Pipeline** | Membangun pipeline e-commerce end-to-end dengan tipe data ketat, immutability, dan pure logic |

---

## 🛠️ Format Standar Setiap Pelajaran
Setiap sub-materi memiliki berkas terstandarisasi:
1. `README.md` — Teori mendalam, analogi dunia nyata yang ramah pemula, perbandingan tabel, dan ringkasan.
2. `contoh.ts` — Demonstrasi kode interaktif dengan logging yang mudah dipahami.
3. `latihan.ts` — Soal latihan tangan langsung dengan panduan instruksi `🎯 TUGAS`.
4. `solusi.ts` — Kunci jawaban lengkap terverifikasi.

---

## 💻 Cara Menjalankan Materi
Jalankan file materi menggunakan perintah `npm run jalankan` atau `npx ts-node` dari folder root proyek:
```bash
# Contoh: Menjalankan materi ES Modules
npm run jalankan materi/08-modern-typescript-development/02-es-modules-export-import/contoh.ts

# Contoh: Menjalankan tantangan akhir E-Commerce Data Pipeline
npm run jalankan materi/08-modern-typescript-development/13-challenge-modern-fp-pipeline/solusi.ts
```
