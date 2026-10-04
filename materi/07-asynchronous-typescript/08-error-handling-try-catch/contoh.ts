// ============================================================
// 08 · Error Handling (try...catch) — Contoh
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/08-error-handling-try-catch/contoh.ts
// ============================================================

interface DataPengguna {
  id: number;
  name: string;
  email: string;
}

async function muatPengguna(id: number): Promise<void> {
  let sedangMemuat: boolean = true;
  console.log(`\n[Mulai] Memuat pengguna #${id}... (Loading: ${sedangMemuat})`);

  try {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    const response: Response = await fetch(url);

    // Memeriksa status HTTP
    if (!response.ok) {
      throw new Error(`Data gagal dimuat dari server! Kode HTTP: ${response.status}`);
    }

    const pengguna = (await response.json()) as DataPengguna;
    console.log("✅ Berhasil Ditemukan:", pengguna.name, `(${pengguna.email})`);
  } catch (error: unknown) {
    // Menangani error yang bertipe 'unknown' di TypeScript
    if (error instanceof Error) {
      console.error("❌ Tertangkap Error:", error.message);
    } else {
      console.error("❌ Error tak terduga:", error);
    }
  } finally {
    // Selalu dieksekusi di akhir
    sedangMemuat = false;
    console.log(`[Selesai] Proses pemuatan tuntas. (Loading: ${sedangMemuat})`);
  }
}

// 1. Uji Kasus Sukses (User #1 Ada)
muatPengguna(1);

// 2. Uji Kasus Error (User #999 Tidak Ada)
setTimeout(() => {
  muatPengguna(999);
}, 600);

export {};
