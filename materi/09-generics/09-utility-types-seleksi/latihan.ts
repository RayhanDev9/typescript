// ============================================================
// 09 · Utility Types: Seleksi Field — Latihan
// Jalankan: npm run materi -- materi/09-generics/09-utility-types-seleksi/latihan.ts
// ============================================================

/**
 * 🎯 TUGAS:
 * 1. Diberikan interface `ArtikelBlog` di bawah ini.
 * 2. Buat tipe `CuplikanArtikel` menggunakan `Pick`:
 *    - Ambil hanya field: `id`, `judul`, dan `penulis`.
 * 3. Buat tipe `FormArtikelBaru` menggunakan `Omit`:
 *    - Buang field `id` dan `jumlahDilihat` (karena kedua field ini otomatis diisi sistem, bukan oleh penulis).
 * 4. Buat tipe `StatusArtikel = "draf" | "terbit" | "arsip"`.
 *    Buat variabel `jumlahPerStatus` bertipe `Record<StatusArtikel, number>`:
 *    - Isi jumlah artikel untuk masing-masing status.
 * 5. Buat dan cetak contoh data untuk masing-masing tipe di atas!
 */

export interface ArtikelBlog {
  id: string;
  judul: string;
  konten: string;
  penulis: string;
  status: "draf" | "terbit" | "arsip";
  jumlahDilihat: number;
}

// Tulis tipe data dan implementasi pengujian Anda di bawah ini:




// Eksekusi untuk menguji:
// console.log("Cuplikan:", cuplikan);
// console.log("Form Baru:", formBaru);
// console.log("Statistik:", jumlahPerStatus);
