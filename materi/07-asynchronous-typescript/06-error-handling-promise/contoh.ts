// ============================================================
// 06 · Penanganan Error Promise — Contoh
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/06-error-handling-promise/contoh.ts
// ============================================================

interface Postingan {
  id: number;
  title: string;
}

function ambilPostingan(id: number): Promise<Postingan> {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  return fetch(url).then((response: Response) => {
    // Memeriksa apakah status HTTP sukses (200-299)
    if (!response.ok) {
      // Melempar error manual jika 404 atau 500
      throw new Error(`Permintaan gagal! Server merespon kode: ${response.status} (${response.statusText})`);
    }

    return response.json() as Promise<Postingan>;
  });
}

// 1. Uji Coba Kasus Sukses (ID 1 Ada)
console.log("=== Kasus 1: Mengambil Data Valid ===");
ambilPostingan(1)
  .then((post) => {
    console.log("✅ Berhasil Ditemukan:", post.title);
  })
  .catch((err: unknown) => {
    if (err instanceof Error) {
      console.error("❌ Error Kasus 1:", err.message);
    }
  });

// 2. Uji Coba Kasus Error 404 (ID 999999 Tidak Ada)
setTimeout(() => {
  console.log("\n=== Kasus 2: Mengambil Data yang Tidak Ada (404) ===");
  ambilPostingan(999999)
    .then((post) => {
      console.log("Data ditemukan:", post);
    })
    .catch((err: unknown) => {
      if (err instanceof Error) {
        console.error("❌ Tertangkap di .catch():", err.message);
      }
    });
}, 800);

export {};
