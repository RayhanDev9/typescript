// ============================================================================
// 07 · Asynchronous TypeScript
// 07 · Asynchronous Modern: Async / Await Dasar (Latihan)
// ============================================================================

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
