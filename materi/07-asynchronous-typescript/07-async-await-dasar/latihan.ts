// ============================================================
// 07 · Async / Await Dasar — Latihan
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/07-async-await-dasar/latihan.ts
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

interface AlbumMusik {
  userId: number;
  id: number;
  title: string;
}

// TODO 1:
// Buat fungsi bertanda async bernama 'ambilAlbumTerbaru'.
// Berikan anotasi tipe kembalian: Promise<void>.


// TODO 2:
// Di dalam fungsi tersebut:
// - Buat variabel 'response' yang menunggu (await) pemanggilan fetch:
//   "https://jsonplaceholder.typicode.com/albums/5"
// - Buat variabel 'album' yang menunggu (await) response.json() dengan casting 'as AlbumMusik'.
// - Cetak ke console: "Album ditemukan: [album.title] (ID: [album.id])".


// TODO 3:
// Panggil fungsi 'ambilAlbumTerbaru()' di baris paling bawah.


export {};
