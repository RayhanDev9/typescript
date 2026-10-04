// ============================================================
// 07 · Async / Await Dasar — Solusi
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/07-async-await-dasar/solusi.ts
// ============================================================

interface AlbumMusik {
  userId: number;
  id: number;
  title: string;
}

// TODO 1 & 2:
async function ambilAlbumTerbaru(): Promise<void> {
  const url = "https://jsonplaceholder.typicode.com/albums/5";

  // Menunggu fetch dan parsing json dengan await
  const response: Response = await fetch(url);
  const album = (await response.json()) as AlbumMusik;

  console.log(`Album ditemukan: "${album.title}" (ID: ${album.id})`);
}

// TODO 3:
ambilAlbumTerbaru();

export {};
