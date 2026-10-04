# 04 · CommonJS vs ES Modules

## 🎯 Tujuan Belajar
- Memahami dua sistem modul utama di ekosistem JavaScript & TypeScript: **CommonJS (CJS)** dan **ES Modules (ESM)**.
- Mengetahui perbedaan sintaks: `require()` / `module.exports` vs `import` / `export`.
- Memahami kapan dan mengapa Node.js bertransisi dari CommonJS ke ES Modules.
- Memahami konfigurasi `"type": "module"` pada `package.json` dan perbedaan ekstensi file (`.cjs`, `.mjs`, `.cts`, `.mts`).
- Memahami opsi kompilasi TypeScript: `"moduleResolution"` dan `"esModuleInterop"`.

---

## 🧠 Analogi Dunia Nyata: "Listrik Colokan Kaki 2 vs Kaki 3 Standar Global"
- **CommonJS (CJS)** seperti standar colokan listrik lokal yang dibuat khusus untuk satu negara di masa lalu (Node.js awal tahun 2009). Bekerja dengan sangat baik di dalam negeri (server), tetapi alat-alat dari browser tidak bisa mencoloknya.
- **ES Modules (ESM)** adalah standar colokan internasional universal yang disahkan oleh komite resmi (ECMAScript 2015). Sekarang, baik di dalam rumah (Node.js/Bun/Deno) maupun di hotel seluruh dunia (Browser Chrome, Safari, Firefox), semua menggunakan colokan universal yang sama!

---

## 📘 Perbandingan Lengkap: CJS vs ESM

| Fitur | CommonJS (CJS) | ES Modules (ESM) |
| :--- | :--- | :--- |
| **Sintaks Ekspor** | `module.exports = ...` / `exports.foo = ...` | `export const ...` / `export default ...` |
| **Sintaks Impor** | `const fs = require('fs')` | `import fs from 'fs'` |
| **Waktu Pemuatan** | Sinkron (Synchronous) saat runtime | Statis / Asinkron saat parsing kode |
| **Dukungan Browser** | Tidak bisa langsung di browser (butuh bundler) | Didukung native oleh semua browser modern (`<script type="module">`) |
| **Tree-Shaking** | Sulit dioptimasi | Sangat mudah dioptimasi oleh bundler |
| **Ekstensi File Khusus** | `.cjs` (TypeScript: `.cts`) | `.mjs` (TypeScript: `.mts`) |

---

## 💻 Contoh Perbandingan Kode

### 1. Gaya Lama: CommonJS (Node.js Klasik)
```js
// lib.js (CJS)
const versi = "1.0.0";
function sapa(nama) {
  return `Halo ${nama}`;
}
module.exports = { versi, sapa };

// index.js (CJS)
const { versi, sapa } = require("./lib");
console.log(sapa("Budi"));
```

### 2. Gaya Modern: ES Modules (Standar TypeScript & Web Modern)
```ts
// lib.ts (ESM)
export const versi = "1.0.0";
export function sapa(nama: string): string {
  return `Halo ${nama}`;
}

// index.ts (ESM)
import { versi, sapa } from "./lib";
console.log(sapa("Budi"));
```

---

## ⚙️ Peran TypeScript: `esModuleInterop`
Di masa transisi, banyak pustaka pihak ketiga (seperti `lodash` atau `express`) masih ditulis dalam CommonJS.
TypeScript menyediakan bendera di `tsconfig.json`:
```json
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```
Dengan `"esModuleInterop": true`, Anda bisa mengimpor pustaka CommonJS menggunakan sintaks modern `import` tanpa error:
```ts
import path from "path"; // Bekerja mulus meski path adalah modul CJS bawaan Node!
```

---

## 📌 Ringkasan
- Dalam proyek baru TypeScript modern, **selalu gunakan ES Modules (`import`/`export`)**.
- Jika Anda melihat `require()` atau `module.exports` dalam tutorial atau kode warisan lama, pahamilah itu adalah CommonJS.
- TypeScript memungkinkan kita menulis ESM dan dapat mengompilasinya menjadi CJS atau ESM sesuai target lingkungan kita.
