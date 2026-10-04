// ============================================================
// 07 · Async / Await Dasar — Contoh
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/07-async-await-dasar/contoh.ts
// ============================================================

interface Post {
  id: number;
  title: string;
}

// 1. CARA LAMA: Menggunakan Rantai .then()
function ambilDataCaraLama(): void {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json() as Promise<Post>)
    .then((post: Post) => {
      console.log("[Cara Lama .then] Judul:", post.title);
    });
}

// 2. CARA MODERN: Menggunakan async / await
// Jauh lebih bersih, mudah dibaca, dan tampak seperti kode sinkron!
async function ambilDataCaraModern(): Promise<void> {
  console.log("=== Memulai Pengambilan Data dengan async/await ===");

  // Menunggu fetch selesai
  const response: Response = await fetch("https://jsonplaceholder.typicode.com/posts/2");

  // Menunggu parsing JSON selesai
  const post = (await response.json()) as Post;

  console.log("[Cara Modern async/await] ID:", post.id);
  console.log("[Cara Modern async/await] Judul:", post.title);
}

// Menjalankan fungsi
ambilDataCaraLama();
ambilDataCaraModern();

export {};
