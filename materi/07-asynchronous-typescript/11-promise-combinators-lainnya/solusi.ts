// ============================================================================
// 07 · Asynchronous TypeScript
// 11 · Promise Combinator (Solusi)
// ============================================================================

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
async function kumpulkanLaporanCuaca(): Promise<void> {
  console.log("=== Laporan Seluruh Server (allSettled) ===");
  const hasil = await Promise.allSettled([
    serverJakarta(),
    serverBandung(),
    serverSurabaya(),
  ]);

  hasil.forEach((item, idx) => {
    if (item.status === "fulfilled") {
      console.log(`Server #${idx + 1}: ${item.value}`);
    } else {
      console.log(`Server #${idx + 1}: Gagal (${(item.reason as Error).message})`);
    }
  });
}

// TODO 2:
async function ambilCuacaTercepatPertama(): Promise<void> {
  console.log("\n=== Mengambil Server Pertama yang Sukses (any) ===");
  try {
    const tercepatSukses = await Promise.any([
      serverJakarta(),
      serverBandung(),
      serverSurabaya(),
    ]);
    console.log("Kota tercepat yang berhasil merespon:", tercepatSukses);
  } catch (err) {
    console.error("Semua server gagal:", err);
  }
}

// TODO 3:
async function main(): Promise<void> {
  await kumpulkanLaporanCuaca();
  await ambilCuacaTercepatPertama();
}

main();

export {};
