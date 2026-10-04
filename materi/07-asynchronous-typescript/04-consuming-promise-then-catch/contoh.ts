// ============================================================
// 04 · Mengonsumsi Promise (then, catch, finally) — Contoh
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/04-consuming-promise-then-catch/contoh.ts
// ============================================================

// 1. Fungsi Penghasil Promise
function verifikasiAkun(username: string): Promise<{ akunId: string; role: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "budi_dev") {
        resolve({ akunId: "ACC-88", role: "Developer" });
      } else {
        reject(new Error("Akun tidak ditemukan atau kata sandi salah!"));
      }
    }, 300);
  });
}

function ambilProyek(akunId: string): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Mengambil daftar proyek untuk ID: ${akunId}...`);
      resolve(["Sistem Kasir", "Aplikasi Mobile", "Portal Web"]);
    }, 300);
  });
}

// 2. Mengonsumsi dengan Rantai Promise (Promise Chaining)
console.log("=== Memulai Autentikasi Pengguna ===");
let sedangMemuat: boolean = true;
console.log(`[Status Awal] Sedang memuat: ${sedangMemuat}`);

verifikasiAkun("budi_dev")
  .then((dataAkun) => {
    console.log("1. Verifikasi Berhasil! Selamat datang:", dataAkun.role);

    // MENGEMBALIKAN Promise baru agar bisa disambung ke .then berikutnya!
    return ambilProyek(dataAkun.akunId);
  })
  .then((daftarProyek: string[]) => {
    console.log("2. Proyek yang sedang dikerjakan:", daftarProyek.join(", "));
  })
  .catch((error: Error) => {
    // Satu blok catch di akhir untuk menangani semua kegagalan di atas
    console.error("❌ Terjadi Kesalahan:", error.message);
  })
  .finally(() => {
    // Selalu berjalan di akhir
    sedangMemuat = false;
    console.log(`[Status Akhir] Sedang memuat: ${sedangMemuat} (Selesai).`);
  });

export {};
