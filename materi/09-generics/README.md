# Modul 9: Generics in TypeScript (Fleksibilitas & Reusabilitas Type-Safe)

Modul ini dirancang khusus untuk pemula yang **belajar TypeScript dari nol tanpa belajar JavaScript terlebih dahulu**.

Anda akan mempelajari pilar terpenting dalam pemrograman TypeScript tingkat menengah dan lanjut: **Generics**. Fitur ini memungkinkan kita menulis fungsi, interface, struktur data, dan kelas yang dapat digunakan kembali (*reusable*) untuk berbagai macam jenis data, tanpa mengorbankan keamanan pengetikan tipe (*type safety*) sedikitpun.

---

## 📁 Daftar Pelajaran & Tantangan

| Folder | Topik Materi | Konsep Kunci |
| :--- | :--- | :--- |
| [`01-apa-itu-generic/`](./01-apa-itu-generic/README.md) | **Apa Itu Generic?** | Masalah duplikasi kode vs bahaya `any`, variabel tipe `<T>`, analogi wadah transparan berlabel |
| [`02-generic-functions/`](./02-generic-functions/README.md) | **Generic Functions** | Type argument inference, explicit type argument, multiple type parameters `<T, U>`, swap tuple |
| [`03-generic-interfaces-types/`](./03-generic-interfaces-types/README.md) | **Generic Interfaces & Types** | Standar pembungkus respon API (`ApiResponse<T>`), Discriminated Result Pattern, nested generics |
| [`04-generic-classes/`](./04-generic-classes/README.md) | **Generic Classes** | Struktur data aman: Queue / Antrean FIFO (`Antrean<T>`), Stack LIFO (`Tumpukan<T>`), isolasi state |
| [`05-generic-constraints-extends/`](./05-generic-constraints-extends/README.md) | **Generic Constraints (`extends`)** | Membatasi parameter tipe `<T extends MemilikiPanjang>`, `<T extends PunyaId>`, kontrak properti |
| [`06-keyof-dan-lookup-types/`](./06-keyof-dan-lookup-types/README.md) | **Operator `keyof` & Lookup Types** | Ekstraksi kunci objek, relasi tipe `<T, K extends keyof T>`, pencegahan typo nama properti |
| [`07-default-generic-type/`](./07-default-generic-type/README.md) | **Default Generic Type** | Nilai default parameter tipe `<T = string>`, kenyamanan ergonomi kode pemanggil |
| [`08-utility-types-transformasi/`](./08-utility-types-transformasi/README.md) | **Utility Types: Transformasi** | `Partial<T>` (update parsial), `Required<T>` (wajib lengkap), `Readonly<T>` (anti mutasi) |
| [`09-utility-types-seleksi/`](./09-utility-types-seleksi/README.md) | **Utility Types: Seleksi Field** | `Pick<T, K>` (pilih kolom), `Omit<T, K>` (buang rahasia), `Record<K, T>` (kamus data / dictionary) |
| [`10-utility-types-ekstraksi/`](./10-utility-types-ekstraksi/README.md) | **Utility Types: Ekstraksi** | `Exclude<T, U>`, `Extract<T, U>`, `NonNullable<T>`, `ReturnType<typeof fn>`, `Parameters<typeof fn>` |
| [`11-conditional-types-dasar/`](./11-conditional-types-dasar/README.md) | **Conditional Types Dasar** | Logika percabangan tipe: `T extends U ? X : Y`, return type dinamis, cara kerja Exclude di balik layar |
| [`12-mapped-types-dasar/`](./12-mapped-types-dasar/README.md) | **Mapped Types Dasar** | Perulangan properti `[K in keyof T]`, modifier `+?`, `-?`, `readonly`, kustom utility type |
| [`13-challenge-generic-repository/`](./13-challenge-generic-repository/README.md) | **🏆 Capstone Challenge: Generic Repository** | Membangun In-Memory Repository & Storage Cache dengan CRUD, filter kriteria `Partial<T>`, dan indexing aman |

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
# Contoh: Menjalankan materi Generic Functions
npm run materi -- materi/09-generics/02-generic-functions/contoh.ts

# Contoh: Menjalankan solusi tantangan akhir Generic Repository
npm run materi -- materi/09-generics/13-challenge-generic-repository/solusi.ts
```
