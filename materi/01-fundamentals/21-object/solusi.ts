// ============================================================
// 21 · Object & Interface — Solusi
// ============================================================

// TODO 1
interface Buku {
  readonly isbn: string;
  judul: string;
  penulis: string;
  tahunTerbit: number;
  kategori: string[];
  sudahDibaca: boolean;
  peminjamSaatIni?: string;
}

// TODO 2
const bukuFavorit: Buku = {
  isbn: "978-602-03-8591-4",
  judul: "Filosofi Teras",
  penulis: "Henry Manampiring",
  tahunTerbit: 2018,
  kategori: ["Pengembangan Diri", "Filsafat", "Non-Fiksi"],
  sudahDibaca: false
};

// TODO 3
console.log(
  `Buku "${bukuFavorit.judul}" karya ${bukuFavorit.penulis} terbit tahun ${bukuFavorit.tahunTerbit}. Memiliki kategori: ${bukuFavorit.kategori.join(", ")}.`
);

// TODO 4
bukuFavorit.sudahDibaca = true;
bukuFavorit.peminjamSaatIni = "Andi";
console.log("Data buku terkini:", bukuFavorit);
