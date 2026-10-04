// ============================================================
// 11 · Promise Combinators Lainnya — Latihan
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/11-promise-combinators-lainnya/latihan.ts
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

// Simulasi 3 Server API Cuaca:
function serverJakarta(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Jakarta: 30°C"), 500));
}

function serverBandung(): Promise<string> {
  return new Promise((_, reject) => setTimeout(() => reject(new Error("Server Bandung Rusak")), 200));
}

function serverSurabaya(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Surabaya: 33°C"), 300));
}

// TODO 1:
// Buat fungsi async bernama 'kumpulkanLaporanCuaca(): Promise<void>'.
// Gunakan Promise.allSettled() untuk menunggu ketiga server (Jakarta, Bandung, Surabaya).
// Cetak setiap laporan: jika status "fulfilled" cetak nilainya, jika "rejected" cetak alasannya.


// TODO 2:
// Buat fungsi async bernama 'ambilCuacaTercepatPertama(): Promise<void>'.
// Gunakan Promise.any() untuk mengambil data dari server yang paling cepat sukses (mengabaikan Bandung yang rusak).
// Cetak cuaca kota tercepat yang didapatkan ke console!


// TODO 3:
// Panggil kedua fungsi di atas.


export {};
