// ============================================================
// 11 · Promise Combinators Lainnya — Contoh
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/11-promise-combinators-lainnya/contoh.ts
// ============================================================

// 1. Contoh Promise.allSettled
async function demoAllSettled(): Promise<void> {
  console.log("=== 1. Uji Coba Promise.allSettled ===");

  const hasil = await Promise.allSettled([
    Promise.resolve("Data Pengguna Siap ✅"),
    Promise.reject(new Error("Koneksi Database Timeout ❌")),
    Promise.resolve("Data Transaksi Siap ✅"),
  ]);

  hasil.forEach((laporan, index) => {
    if (laporan.status === "fulfilled") {
      console.log(`Tugas #${index + 1} Berhasil:`, laporan.value);
    } else {
      console.log(`Tugas #${index + 1} Gagal:`, (laporan.reason as Error).message);
    }
  });
}

// 2. Contoh Promise.race untuk Mekanisme Timeout
function timeoutHelper(ms: number): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Batas waktu ${ms}ms terlampaui!`));
    }, ms);
  });
}

function tugasLambat(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data super berat akhirnya selesai!"), 800);
  });
}

async function demoRace(): Promise<void> {
  console.log("\n=== 2. Uji Coba Promise.race (Adu Cepat) ===");

  try {
    // Balapan antara tugas 800ms vs batas timeout 400ms
    const pemenang = await Promise.race([tugasLambat(), timeoutHelper(400)]);
    console.log("Pemenang:", pemenang);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Kalah dalam balapan:", err.message);
    }
  }
}

// Menjalankan demo secara berurutan
async function jalankan(): Promise<void> {
  await demoAllSettled();
  await demoRace();
}

jalankan();

export {};
