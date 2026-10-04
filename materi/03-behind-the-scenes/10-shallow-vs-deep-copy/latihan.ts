// ============================================================
// 10 · Shallow vs Deep Copy — Latihan
// Jalankan: npm run materi -- materi/03-behind-the-scenes/10-shallow-vs-deep-copy/latihan.ts
// ============================================================

// Kasus: Kloning Profil Game Pemain

interface ProfilGame {
  namaPemain: string;
  level: number;
  inventori: {
    senjata: string;
    emas: number;
  };
}

const pemainUtama: ProfilGame = {
  namaPemain: "Ksatria",
  level: 10,
  inventori: {
    senjata: "Pedang Besi",
    emas: 500
  }
};

// TODO 1: Buat `pemainCadangan` menggunakan Deep Copy (`structuredClone(pemainUtama)`).


// TODO 2: Lakukan perubahan pada `pemainCadangan`:
//         - Ubah `namaPemain` menjadi "Ksatria Bayangan"
//         - Ubah `level` menjadi 12
//         - Ubah `inventori.senjata` menjadi "Tombak Emas"
//         - Tambah `inventori.emas` menjadi 1000


// TODO 3: Cetak `pemainUtama` dan `pemainCadangan` ke terminal.
//         Buktikan bahwa `pemainUtama.inventori` TIDAK mengalami perubahan sama sekali!
