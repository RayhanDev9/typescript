# 13 · Coding Challenge: GitHub User Data Fetcher

## 🎯 Misi Tantangan
Pada tantangan integrasi ini, Anda diminta membangun modul pengambil data profil dan repositori GitHub publik (*GitHub Data Fetcher*) menggunakan seluruh konsep yang telah dipelajari di Modul 07:
1. Mendefinisikan **TypeScript Interface** yang ketat dan presisi.
2. Menggunakan **`fetch()`** dan **`async / await`**.
3. Menangani error status HTTP (misal: user tidak ditemukan) menggunakan **`try ... catch`** dan **`if (!res.ok)`**.
4. Mengoptimalkan waktu respon dengan menjalankan request profil dan repositori secara **Paralel (`Promise.all`)**.
5. Mengolah data hasil response (menghitung total bintang/stargazers dan memfilter data).

---

## 📋 Spesifikasi Kebutuhan

### 1. Interface
- `ProfilGithub`: `login` (string), `name` (string), `bio` (string | null), `public_repos` (number), `followers` (number).
- `RepositoriGithub`: `id` (number), `name` (string), `stargazers_count` (number), `html_url` (string).

### 2. Fungsi yang Harus Dibuat
1. `ambilProfilUser(username: string): Promise<ProfilGithub>`: Mengambil data dari `https://api.github.com/users/{username}`.
2. `ambilRepositoriUser(username: string): Promise<RepositoriGithub[]>`: Mengambil data dari `https://api.github.com/users/{username}/repos?per_page=3`.
3. `tampilkanRingkasanUser(username: string): Promise<void>`:
   - Menembakkan kedua request di atas secara bersamaan menggunakan **`Promise.all`**.
   - Menampilkan nama, bio, dan total repositori.
   - Menampilkan 3 repositori teratas beserta jumlah bintangnya (*stars*).
   - Menangani error dengan anggun jika username tidak ditemukan.

---

## ✍️ Mulai Mengerjakan
Buka file [`latihan.ts`](./latihan.ts) dan ikuti semua instruksi `// TODO:`. Jika sudah selesai, cocokkan dengan [`solusi.ts`](./solusi.ts)!
