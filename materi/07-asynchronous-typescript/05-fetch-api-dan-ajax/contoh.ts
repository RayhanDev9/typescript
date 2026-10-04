// ============================================================================
// 07 · Asynchronous TypeScript
// 05 · Fetch API & AJAX Modern (Contoh)
// ============================================================================

// 1. Mendefinisikan Bentuk Data Respon API Menggunakan Interface
interface PostinganBlog {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// 2. Mengambil Data Menggunakan fetch()
const urlAPI = "https://jsonplaceholder.typicode.com/posts/1";

console.log("=== Mengirim Permintaan HTTP ke Server... ===");

fetch(urlAPI)
  .then((response: Response) => {
    console.log("1. Respon Diterima! Status HTTP:", response.status, response.statusText);

    // Mengurai aliran teks JSON menjadi objek TypeScript
    return response.json() as Promise<PostinganBlog>;
  })
  .then((postingan: PostinganBlog) => {
    console.log("\n2. Data JSON Berhasil Diurai:");
    console.log("-----------------------------------------");
    console.log(`ID Postingan : ${postingan.id}`);
    console.log(`Judul        : ${postingan.title}`);
    console.log(`Isi Ringkas  : ${postingan.body.slice(0, 50)}...`);
    console.log("-----------------------------------------");
  })
  .catch((error: Error) => {
    console.error("Terjadi kegagalan jaringan:", error.message);
  });

export {};
