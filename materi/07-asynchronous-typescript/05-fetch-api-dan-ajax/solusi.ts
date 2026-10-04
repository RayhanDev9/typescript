// ============================================================
// 05 · Fetch API & AJAX Modern — Solusi
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/05-fetch-api-dan-ajax/solusi.ts
// ============================================================

// TODO 1:
interface ProfilUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

// TODO 2 s/d 5:
fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response: Response) => {
    return response.json() as Promise<ProfilUser>;
  })
  .then((user: ProfilUser) => {
    console.log("=== Profil Pengguna Berhasil Diambil ===");
    console.log(`Nama     : ${user.name}`);
    console.log(`Email    : ${user.email}`);
    console.log(`Username : @${user.username}`);
  })
  .catch((error: Error) => {
    console.error("Gagal mengambil profil:", error.message);
  });

export {};
