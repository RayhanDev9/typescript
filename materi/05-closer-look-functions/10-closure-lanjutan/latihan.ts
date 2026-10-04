// ============================================================
// 10 · Contoh Closure Lanjutan — Latihan
// Jalankan: npm run materi -- materi/05-closer-look-functions/10-closure-lanjutan/latihan.ts
// ============================================================

// TODO 1: Buat fungsi factory `buatBrankas(passwordAwal: string)`
//         yang menyimpan variabel privat `let rahasia: string = "Harta Karun"`
//         dan `let password = passwordAwal`.
//         Fungsi harus mengembalikan objek dengan 2 method:
//         - `bukaBrankas(passInput: string): string | null` -> jika passInput cocok kembalikan isi rahasia, jika salah kembalikan null.
//         - `simpanRahasia(passInput: string, dataBaru: string): boolean` -> ganti isi rahasia jika passInput cocok.


// TODO 2: Buat sebuah brankas dengan password "kunci123".
//         Ujilah dengan:
//         a. Buka dengan password salah "1111" (harus null).
//         b. Buka dengan password benar "kunci123" (harus "Harta Karun").
//         c. Simpan rahasia baru "Emas 5kg" dengan password benar, lalu buka kembali.

