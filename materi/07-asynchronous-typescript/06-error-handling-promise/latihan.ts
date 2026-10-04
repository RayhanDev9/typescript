// ============================================================
// 06 · Penanganan Error Promise — Latihan
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/06-error-handling-promise/latihan.ts
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

// TODO 1:
// Buat fungsi 'ambilDataKomentar(komentarId: number): Promise<string>'.
// Endpoint: `https://jsonplaceholder.typicode.com/comments/${komentarId}`


// TODO 2:
// Di dalam fungsi tersebut:
// - Panggil fetch(endpoint).
// - Periksa if (!response.ok). Jika true, lempar error baru:
//   throw new Error(`Komentar ID ${komentarId} gagal dimuat (Status: ${response.status})`);
// - Jika response.ok bernilai true, parse JSON dan kembalikan properti 'name' dari komentar.


// TODO 3:
// Uji panggil fungsi ambilDataKomentar(1) dengan .then() dan .catch().


// TODO 4:
// Uji panggil fungsi ambilDataKomentar(-500) (ID tidak valid) untuk memastikan blok .catch()
// berhasil menangkap pesan error yang Anda lempar!


export {};
