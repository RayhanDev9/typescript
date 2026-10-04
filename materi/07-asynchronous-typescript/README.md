# Modul 7: Asynchronous TypeScript (Promises, Async/Await & AJAX)

Modul ini dirancang khusus untuk pemula yang **belajar TypeScript dari nol tanpa belajar JavaScript terlebih dahulu**.

Anda akan mempelajari bagaimana TypeScript menangani proses yang memakan waktu (seperti mengambil data dari internet, membaca file, atau pengatur waktu) tanpa membekukan (*freeze*) aplikasi, mulai dari konsep dasar callback, evolusi Promise, hingga penulisan kode modern yang elegan dengan `async / await`.

---

## 📁 Daftar Pelajaran & Tantangan

| Folder | Topik Materi | Konsep Kunci |
| :--- | :--- | :--- |
| [`01-pengenalan-asynchronous/`](./01-pengenalan-asynchronous/README.md) | **Pengenalan Asynchronous** | Synchronous vs Asynchronous, Non-blocking I/O, `setTimeout`, `setInterval` |
| [`02-callback-dan-callback-hell/`](./02-callback-dan-callback-hell/README.md) | **Callback & Callback Hell** | Callback asinkron, pola error-first callback, bahaya *Pyramid of Doom* |
| [`03-konsep-promise/`](./03-konsep-promise/README.md) | **Konsep Dasar Promise** | Siklus hidup Promise (`Pending`, `Fulfilled`, `Rejected`), `new Promise<T>()` |
| [`04-consuming-promise-then-catch/`](./04-consuming-promise-then-catch/README.md) | **Mengonsumsi Promise** | `.then()`, `.catch()`, `.finally()`, teknik *Promise Chaining* |
| [`05-fetch-api-dan-ajax/`](./05-fetch-api-dan-ajax/README.md) | **Fetch API & AJAX Modern** | HTTP Request dengan `fetch()`, `response.json()`, memodelkan tipe via `interface` |
| [`06-error-handling-promise/`](./06-error-handling-promise/README.md) | **Penanganan Error Promise** | Mengapa status 404/500 tidak di-reject, pengecekan `response.ok`, `throw new Error` |
| [`07-async-await-dasar/`](./07-async-await-dasar/README.md) | **Async / Await Dasar** | Kata kunci `async` dan `await`, menyederhanakan rantai Promise |
| [`08-error-handling-try-catch/`](./08-error-handling-try-catch/README.md) | **Error Handling: try...catch** | Blok `try...catch...finally`, penanganan tipe `unknown`, `instanceof Error` |
| [`09-returning-values-from-async/`](./09-returning-values-from-async/README.md) | **Return Value Fungsi Async** | Menghindari jebakan `Promise <pending>`, unwrapping nilai dengan `await` |
| [`10-running-promises-parallel/`](./10-running-promises-parallel/README.md) | **Promise Paralel (Promise.all)** | Eksekusi bersamaan dengan `Promise.all<T>()`, sifat fail-fast, optimasi latensi |
| [`11-promise-combinators-lainnya/`](./11-promise-combinators-lainnya/README.md) | **Promise Combinator Lainnya** | `Promise.allSettled()` (laporan lengkap), `Promise.race()` (timeout), `Promise.any()` |
| [`12-behind-the-scenes-event-loop/`](./12-behind-the-scenes-event-loop/README.md) | **Di Balik Layar: Event Loop** | Call Stack, Web APIs, Microtask Queue (VIP Promise) vs Callback Queue |
| [`13-challenge-aplikasi-data-fetcher/`](./13-challenge-aplikasi-data-fetcher/README.md) | **Coding Challenge Integrasi** | Membangun GitHub User & Repo Dashboard Fetcher dengan parallel requests & types |

---

## 🛠️ Format Standar Setiap Pelajaran
Setiap sub-materi memiliki 4 file terstandarisasi:
1. `README.md` — Teori lengkap, analogi dunia nyata, tipe data TypeScript, dan peringatan jebakan pemula.
2. `contoh.ts` — Demonstrasi kode dengan penjelasan lengkap berbahasa Indonesia.
3. `latihan.ts` — Soal tantangan dengan instruksi bertahap `// TODO:`.
4. `solusi.ts` — Kunci jawaban lengkap beserta penjelasannya.

---

## 💻 Cara Menjalankan Materi
Jalankan file materi menggunakan perintah `npm run jalankan` dari folder root proyek:
```bash
# Contoh: Menjalankan materi async/await dasar
npm run jalankan materi/07-asynchronous-typescript/07-async-await-dasar/contoh.ts

# Contoh: Menjalankan challenge GitHub Data Fetcher
npm run jalankan materi/07-asynchronous-typescript/13-challenge-aplikasi-data-fetcher/solusi.ts
```
