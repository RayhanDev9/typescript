// ============================================================
// 08 · Regular vs Arrow Function — Latihan
// Jalankan: npm run materi -- materi/03-behind-the-scenes/08-regular-vs-arrow-function/latihan.ts
// ============================================================

// Kasus: Sistem Timer Hitung Mundur Quiz

interface KuisOnline {
  judul: string;
  durasiDetik: number;
  mulai(): void;
}

// TODO 1: Kode di bawah memiliki bug referensi `this` karena salah memilih jenis fungsi.
//         Perbaiki kode di bawah ini agar method `mulai()` dapat menampilkan
//         judul kuis dan durasi detiknya dengan benar tanpa error!

const kuisTypeScript: KuisOnline = {
  judul: "Kuis Dasar TypeScript",
  durasiDetik: 60,

  // Perbaiki method ini (apakah harus regular function atau arrow function?):
  mulai: () => {
    // console.log(`Kuis "${this.judul}" dimulai! Waktu: ${this.durasiDetik} detik.`);
  }
};

kuisTypeScript.mulai();
