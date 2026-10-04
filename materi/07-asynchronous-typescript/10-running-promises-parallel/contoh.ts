// ============================================================================
// 07 · Asynchronous TypeScript
// 10 · Menjalankan Promise Secara Paralel: Promise.all (Contoh)
// ============================================================================

interface DataSederhana {
  id: number;
  title?: string;
  name?: string;
}

async function ambilEndpoint(path: string): Promise<DataSederhana> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${path}`);
  return res.json() as Promise<DataSederhana>;
}

async function jalankanUjiParalel(): Promise<void> {
  console.log("=== Memulai 3 Request HTTP Bersamaan via Promise.all ===");

  const waktuMulai = Date.now();

  try {
    // 3 Promise ditembakkan ke internet secara bersamaan!
    const [user, post, todo] = await Promise.all([
      ambilEndpoint("users/1"),
      ambilEndpoint("posts/1"),
      ambilEndpoint("todos/1"),
    ]);

    const durasi = Date.now() - waktuMulai;

    console.log("1. User Diterima :", user.name);
    console.log("2. Post Diterima :", post.title);
    console.log("3. Todo Diterima :", todo.title);
    console.log(`\n⚡ Selesai dalam ${durasi} ms (Jauh lebih cepat daripada sekuensial)!`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Salah satu request gagal:", error.message);
    }
  }
}

jalankanUjiParalel();

export {};
