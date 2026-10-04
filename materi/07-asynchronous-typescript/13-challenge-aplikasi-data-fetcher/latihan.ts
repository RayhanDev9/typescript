// ============================================================
// 13 · Challenge: Aplikasi Data Fetcher — Latihan
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/13-challenge-aplikasi-data-fetcher/latihan.ts
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini untuk membangun sistem pencari data GitHub!

// TODO 1:
// Definisikan interface 'ProfilGithub' dengan properti:
// - login: string
// - name: string | null
// - bio: string | null
// - public_repos: number
// - followers: number


// TODO 2:
// Definisikan interface 'RepositoriGithub' dengan properti:
// - id: number
// - name: string
// - stargazers_count: number
// - html_url: string


// TODO 3:
// Buat fungsi async 'ambilProfil(username: string): Promise<ProfilGithub>'.
// Endpoint: `https://api.github.com/users/${username}`
// Periksa jika !res.ok, lempar Error: `User @${username} tidak ditemukan!`.


// TODO 4:
// Buat fungsi async 'ambilRepositori(username: string): Promise<RepositoriGithub[]>'.
// Endpoint: `https://api.github.com/users/${username}/repos?per_page=3&sort=updated`
// Periksa jika !res.ok, lempar Error: `Gagal memuat repositori @${username}!`.


// TODO 5:
// Buat fungsi async utama 'tampilkanDashboardGithub(username: string): Promise<void>'.
// Di dalam blok try...catch:
// - Gunakan Promise.all untuk mengambil profil dan repo secara bersamaan.
// - Tampilkan informasi profil ke console.
// - Lakukan perulangan pada repositori dan tampilkan nama repo serta jumlah bintangnya.
// - Tangani error di blok catch dengan (err instanceof Error).


// TODO 6:
// Panggil tampilkanDashboardGithub("torvalds") untuk menguji hasilnya!


export {};
