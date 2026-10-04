// ============================================================
// 14 · Generic Class — Latihan
// Jalankan: npm run materi -- materi/06-oop-typescript/14-generic-class/latihan.ts
// ============================================================

// TODO 1: Buat generic class `KotakPenyimpanan<T>`:
//         - Properti internal: `private isi: T[] = [];`
//         - Method `simpan(barang: T): void` -> menambahkan barang ke `this.isi`.
//         - Method `ambilSemua(): T[]` -> mengembalikan salinan seluruh barang `[...this.isi]`.
//         - Method `hitungTotal(): number` -> mengembalikan `this.isi.length`.


// TODO 2: Ujilah `KotakPenyimpanan`:
//         a. Buat `kotakAngka` bertipe `KotakPenyimpanan<number>` dan simpan angka [100, 200, 300].
//         b. Buat `kotakKata` bertipe `KotakPenyimpanan<string>` dan simpan kata ["TypeScript", "OOP"].
//         c. Cetak isi dan jumlah total kedua kotak tersebut.

