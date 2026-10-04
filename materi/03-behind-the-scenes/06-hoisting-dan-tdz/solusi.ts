// ============================================================
// 06 · Hoisting & TDZ — Solusi
// ============================================================

// TODO 1: Penjelasan
/*
  Fungsi `hitungPajak` didefinisikan menggunakan Arrow Function yang disimpan ke dalam
  variabel `const hitungPajak`.
  Variabel `const` terkena aturan Temporal Dead Zone (TDZ) dari awal scope sampai ke baris deklarasinya.
  Oleh karena itu, fungsi ini tidak dapat diakses atau dipanggil sebelum baris inisialisasi `const` tercapai.
*/

const hitungPajak = (nominal: number): number => {
  return nominal * 0.11;
};

console.log("Pajak Rp 100.000 =", hitungPajak(100000));

// TODO 2: 3 Aturan Emas Best Practice:
/*
  1. JANGAN PERNAH gunakan `var`. Selalu gunakan `const` sebagai pilihan utama, dan `let` jika nilainya berubah.
  2. Deklarasikan semua variabel di bagian PALING ATAS dari scope/fungsinya sebelum digunakan.
  3. Selalu aktifkan `"strict": true` di TypeScript agar penggunaan variabel sebelum deklarasi langsung ditandai error.
*/
