# 🎓 Kurikulum Pembelajaran TypeScript dari Nol (Untuk Pemula Tanpa JavaScript)

Repositori ini adalah kurikulum lengkap pembelajaran **TypeScript dari dasar** yang dirancang khusus bagi pemula yang **belum pernah belajar JavaScript sebelumnya**. Materi disusun secara sistematis agar siswa langsung terbiasa dengan disiplin pengetikan (*type safety*), struktur kode yang rapi, dan pola pikir pemrograman modern sejak hari pertama.

---

## 📚 Struktur 3 Modul Pembelajaran

```text
├── materi/
│   ├── 01-fundamentals/          # 26 Pelajaran Dasar (Node.js + TSX)
│   │   ├── 01-hello-typescript/
│   │   ├── ...
│   │   └── 26-mini-challenge/
│   ├── 02-dom-events-project/    # 3 Proyek Game & Web Interaktif (Vite)
│   │   ├── 00-pengenalan-dom/
│   │   ├── 01-guess-my-number/
│   │   ├── 02-modal-window/
│   │   └── 03-pig-game/
│   └── 03-behind-the-scenes/     # 10 Pelajaran Cara Kerja JS/TS di Balik Layar
│       ├── 01-gambaran-besar-javascript/
│       ├── ...
│       └── 10-shallow-vs-deep-copy/
├── src/
│   └── index.ts                  # Playground bebas
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

---

## 🚀 Cara Menjalankan Materi

### 1. Menjalankan File Modul 1 & Modul 3 (Terminal/Node.js)
```bash
# Mode Watch (Otomatis reload setiap Ctrl + S):
npm run materi -- materi/01-fundamentals/01-hello-typescript/contoh.ts

# Jalankan sekali:
npm run jalankan -- materi/01-fundamentals/26-mini-challenge/solusi.ts

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
