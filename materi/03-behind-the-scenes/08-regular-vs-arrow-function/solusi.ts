// ============================================================
// 08 · Regular vs Arrow Function — Solusi
// ============================================================

interface KuisOnline {
  judul: string;
  durasiDetik: number;
  mulai(): void;
}

// TODO 1 Solusi:
// Method utama objek harus menggunakan Regular Function (Method Shorthand)
const kuisTypeScript: KuisOnline = {
  judul: "Kuis Dasar TypeScript",
  durasiDetik: 60,

  mulai() {
    console.log(`Kuis "${this.judul}" dimulai! Waktu: ${this.durasiDetik} detik.`);
  }
};

kuisTypeScript.mulai();
