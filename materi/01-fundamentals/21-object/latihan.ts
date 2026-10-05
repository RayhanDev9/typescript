// ============================================================
// 21 · Object & Interface — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/21-object/latihan.ts
// ============================================================

// TODO 1: Buat interface TypeScript bernama `Buku`:
//   - `isbn`: string (readonly)
//   - `judul`: string
//   - `penulis`: string
//   - `tahunTerbit`: number
//   - `kategori`: string[]
//   - `sudahDibaca`: boolean
//   - `peminjamSaatIni`: string (opsional, gunakan `?`)

interface TypeBuku {
  readonly isbn: string;
  judul: string;
  penulis: string;
  tahunTerbit: number;
  kategori: string[];
  sudahDibaca: boolean;
  piminjamSaatIni?: string;
}

// TODO 2: Buat objek `bukuFavorit: Buku` dengan data buku pilihanmu
//         (biarkan `peminjamSaatIni` tidak diisi terlebih dahulu).
const bukuFavorit: TypeBuku = {
  isbn: "is-099",
  judul: "mencari apa",
  penulis: "Rayhan",
  tahunTerbit: 2026,
  kategori: ["Semanagt", "Pencerahan"],
  sudahDibaca: false,
  piminjamSaatIni: "Rendy",
};

// TODO 3: Tampilkan informasi buku dengan format:
//         "Buku [judul] karya [penulis] terbit tahun [tahunTerbit]. Memiliki kategori: [kategori]".

console.info(
  `Buku ${bukuFavorit.judul} karya ${bukuFavorit.penulis} terbit tahun ${bukuFavorit.tahunTerbit}`,
);
// TODO 4: Ubah properti `sudahDibaca` menjadi true dan isi `peminjamSaatIni` dengan nama "Andi".
//         Tampilkan objek `bukuFavorit` yang sudah diperbarui.
bukuFavorit.sudahDibaca = true;
bukuFavorit.piminjamSaatIni = "Andi";

console.info(bukuFavorit);
