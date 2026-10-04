// ============================================================
// 08 · Regular vs Arrow Function — Contoh
// Jalankan: npm run materi -- materi/03-behind-the-scenes/08-regular-vs-arrow-function/contoh.ts
// ============================================================

// --- 1. Masalah Arrow Function Sebagai Method Objek ---
const penggunaSalah = {
  nama: "Rayhan",
  // ⚠️ Method dengan Arrow Function
  sapa: () => {
    // @ts-ignore
    console.log("Salah -> Halo, saya:", this?.nama); // undefined
  }
};

penggunaSalah.sapa();

// --- 2. Solusi: Regular Function Sebagai Method Utama ---
const penggunaBenar = {
  nama: "Rayhan",
  hobi: ["Membaca", "TypeScript", "Kopi"],

  // Regular Method: memiliki `this` yang menunjuk ke objek penggunaBenar
  tampilkanHobi() {
    console.log(`\n=== Daftar Hobi ${this.nama} ===`);

    // Callback di dalam method: gunakan Arrow Function agar `this` tetap terhubung!
    this.hobi.forEach((item, index) => {
      console.log(`${index + 1}. ${this.nama} suka ${item}`);
    });
  }
};

penggunaBenar.tampilkanHobi();
