# 🎓 Kurikulum Pembelajaran TypeScript dari Nol (Untuk Pemula Tanpa JavaScript)

Repositori ini adalah kurikulum lengkap pembelajaran **TypeScript dari dasar** yang dirancang khusus bagi pemula yang **belum pernah belajar JavaScript sebelumnya**. Materi disusun secara sistematis agar siswa langsung terbiasa dengan disiplin pengetikan (*type safety*), struktur kode yang rapi, dan pola pikir pemrograman modern sejak hari pertama.

---

## 📚 Struktur 8 Modul Pembelajaran

```text
├── materi/
│   ├── 01-fundamentals/                    # 26 Pelajaran Dasar (Node.js + TSX)
│   ├── 02-dom-events-project/              # 3 Proyek Game & Web Interaktif (Vite)
│   ├── 03-behind-the-scenes/               # 10 Pelajaran Cara Kerja JS/TS di Balik Layar
│   ├── 04-data-structures-operators-strings# 17 Pelajaran + 1 Final Challenge Analisis Data
│   ├── 05-closer-look-functions/           # 11 Pelajaran + 1 Challenge Aplikasi Polling
│   ├── 06-oop-typescript/                  # 14 Pelajaran + 1 Proyek Sistem Bank (Bankist)
│   ├── 07-asynchronous-typescript/         # 12 Pelajaran + 1 Challenge Data Fetcher API
│   └── 08-modern-typescript-development/   # 12 Pelajaran + 1 Capstone FP Data Pipeline
├── src/
│   └── index.ts                            # Playground bebas
├── package.json
└── tsconfig.json
```

---

## 📖 Ringkasan Modul

### 1️⃣ [Modul 1: TypeScript Fundamentals](./materi/01-fundamentals/README.md)
Fokus pada sintaks dasar, tipe primitif, operator, percabangan, fungsi, array, objek, interface, dan perulangan:
- **Bagian A (Dasar)**: Pelajaran 01 – 13 (`Hello TS`, `Variabel`, `Tipe Primitif`, `let/const/var`, `Operator`, `Template Literal`, `if/else`, `Coercion`, `Truthy/Falsy`, `=== vs ==`, `Boolean Logic`, `switch`, `Ternary`).
- **Bagian B (Fungsi & Struktur Data)**: Pelajaran 14 – 26 (`Strict Mode`, `Fungsi`, `Declaration vs Expression`, `Arrow Function`, `Komposisi Fungsi`, `Array & Tuple`, `Method Array`, `Object & Interface`, `Method & this`, `Loop for`, `Nested Loops`, `Loop while`, `Mini Challenge`).

### 2️⃣ [Modul 2: DOM & Events Projects](./materi/02-dom-events-project/README.md)
Membangun aplikasi web dan game interaktif di browser menggunakan Vanilla TypeScript:
- **[00. Pengenalan DOM](./materi/02-dom-events-project/00-pengenalan-dom/README.md)**: Teori DOM Tree, `querySelector<T>`, event handling, manipulasi CSS class.
- **[01. Guess My Number](./materi/02-dom-events-project/01-guess-my-number/README.md)**: Game tebak angka 1-20 dengan skor dan highscore.
- **[02. Modal Window](./materi/02-dom-events-project/02-modal-window/README.md)**: Komponen popup modal interaktif dengan dukungan tombol keyboard `Escape`.
- **[03. Pig Game](./materi/02-dom-events-project/03-pig-game/README.md)**: Game lempar dadu 2 pemain berbasis state management.

### 3️⃣ [Modul 3: JavaScript & TypeScript Behind the Scenes](./materi/03-behind-the-scenes/README.md)
Mendalami arsitektur mesin dan memori komputer:
- `V8 Engine & Runtime`, `Type Erasure saat kompilasi`, `Execution Context & Call Stack`, `Lexical Scoping & Scope Chain`, `Hoisting & TDZ`, `Keyword this & Call-Site Binding`, `Regular vs Arrow Function`, `Call Stack (Primitif) vs Memory Heap (Reference)`, `Shallow Copy vs Deep Copy (structuredClone)`.

### 4️⃣ [Modul 4: Data Structures, Modern Operators & Strings](./materi/04-data-structures-operators-strings/README.md)
Struktur data modern, operator mutakhir, dan pengolahan teks:
- **Bagian A (Destructuring & Spread/Rest)**: Array & Object Destructuring, Spread `...`, Rest Pattern `...`.
- **Bagian B (Operator Modern)**: Short-Circuit `&&` / `||`, Nullish Coalescing `??`, Logical Assignment `||=` `&&=` `??=`, Loop `for...of`, Enhanced Object Literal, Optional Chaining `?.`, Looping Object (`keys`, `values`, `entries`).
- **Bagian C (Set & Map)**: `Set<T>`, `Map<K, V>`, Iterasi & Konversi Map, Tabel Keputusan Pemilihan Struktur Data.
- **Bagian D (String)**: Method String Bagian 1 & 2 (`slice`, `replace`, `split`, `join`, `padStart`, `repeat`, Masking Data).
- **🏆 18. Final Challenge**: Statistik Pertandingan Sepak Bola & Log Parser Penerbangan.

### 5️⃣ [Modul 5: A Closer Look at Functions](./materi/05-closer-look-functions/README.md)
Mendalami fungsionalitas tingkat lanjut (*Advanced Functions*):
- `Default Parameter Lanjutan`, `Passing Arguments (Value vs Reference)`, `First-Class & Higher-Order Functions`, `Callback Abstraction`, `Fungsi Mengembalikan Fungsi (Currying)`, `call & apply`, `bind & Partial Application`, `IIFE`, `Closure Dasar & Execution Context`, `Closure Lanjutan (Timer & Private State)`, `Bonus: Generics Dasar <T>`.
- **🏆 12. Challenge**: Sistem Aplikasi Polling Suara Interaktif.

### 6️⃣ [Modul 6: Object-Oriented Programming (OOP) dengan TypeScript](./materi/06-oop-typescript/README.md)
Pemrograman Berorientasi Objek modern standar industri:
- `4 Pilar OOP`, `Constructor Function & Operator new`, `Prototype & Prototype Chain`, `ES6 Class & TS Parameter Properties`, `Getter & Setter`, `Static Members`, `Inheritance (extends & super)`, `Access Modifiers (public, private, protected vs #private)`, `readonly Modifier`, `Interface & implements`, `Abstract Class & Methods`, `Polimorfisme`, `Method Chaining (return this)`, `Generic Class <T>`.
- **🏆 15. Proyek Akhir**: Sistem Manajemen Perbankan Bankist OOP.

### 7️⃣ [Modul 7: Asynchronous TypeScript](./materi/07-asynchronous-typescript/README.md)
Pemrograman asinkron modern untuk pengolahan API dan proses latar belakang:
- `Pengenalan Asynchronous`, `Callback & Callback Hell`, `Konsep Promise (Pending, Fulfilled, Rejected)`, `Consuming Promise (.then, .catch, .finally)`, `Fetch API & AJAX Modern`, `Error Handling Promise`, `Async / Await Dasar`, `Error Handling try...catch`, `Returning Values from Async Functions`, `Promise Paralel (Promise.all)`, `Promise Combinators (allSettled, race, any)`, `Behind the Scenes: Event Loop & Microtask Queue`.
- **🏆 13. Coding Challenge**: GitHub User & Repository Explorer Dashboard.

### 8️⃣ [Modul 8: Modern TypeScript Development & Functional Programming](./materi/08-modern-typescript-development/README.md)
Arsitektur modular, ekosistem tooling, dan paradigma fungsional modern:
- `Arsitektur Web Modern Overview`, `ES Modules (Export & Import)`, `Type-Only Export & Import`, `CommonJS vs ES Modules`, `Package Manager & NPM (SemVer, DevDependencies)`, `Modern Tooling & Bundler (Vite, esbuild, Minification, Source Maps)`, `Paradigma Functional Programming (FP)`, `Pure Functions & Side Effects`, `Immutability & Deep Updates`, `Higher-Order Functions (HOF)`, `Currying & Partial Application`, `Function Composition & Piping`.
- **🏆 13. Capstone Challenge**: E-Commerce Transaction & Data Processing Pipeline.

---

## 🚀 Cara Menjalankan Materi

### 1. Menjalankan File Materi Node.js (Modul 1, 3, 4, 5, 6, 7, 8)
```bash
# Mode Watch (Otomatis reload setiap Ctrl + S):
npm run materi -- materi/04-data-structures-operators-strings/01-destructuring-array/contoh.ts

# Jalankan sekali:
npm run jalankan -- materi/07-asynchronous-typescript/13-challenge-aplikasi-data-fetcher/solusi.ts
npm run jalankan -- materi/08-modern-typescript-development/13-challenge-modern-fp-pipeline/solusi.ts

# Verifikasi tidak ada error tipe di seluruh materi:
npm run typecheck
```

### 2. Menjalankan Proyek Modul 2 (Browser / Web)
```bash
# Masuk ke folder proyek yang ingin dijalankan:
cd materi/02-dom-events-project/01-guess-my-number/final
npm install
npm run dev
```

---

## 🎯 Format Setiap Pelajaran
1. **`README.md`**: Tujuan belajar, analogi sehari-hari, tabel perbandingan, diagram alur, dan catatan keamanan TypeScript.
2. **`contoh.ts`**: Kode demonstrasi siap pakai untuk live coding pengajar.
3. **`latihan.ts`**: Soal latihan dengan tanda `// TODO` untuk dikerjakan siswa secara mandiri.
4. **`solusi.ts`**: Kunci jawaban lengkap beserta penjelasan kode.
