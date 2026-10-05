// ============================================================
// 03 · Generic Interfaces & Type Aliases — Solusi
// Jalankan: npm run materi -- materi/09-generics/03-generic-interfaces-types/solusi.ts
// ============================================================

export interface HalamanData<T> {
  halaman: number;
  totalHalaman: number;
  totalData: number;
  data: T[];
}

export interface Buku {
  id: string;
  judul: string;
  penulis: string;
  harga: number;
}

const perpustakaan: HalamanData<Buku> = {
  halaman: 1,
  totalHalaman: 3,
  totalData: 25,
  data: [
    { id: "BK-01", judul: "Belajar TypeScript dari Nol", penulis: "Rayhan Dwi", harga: 120000 },
    { id: "BK-02", judul: "Arsitektur Web Modern", penulis: "Hendra Wijaya", harga: 145000 },
  ],
};

export function tampilkanHalamanBuku(halaman: HalamanData<Buku>): void {
  console.log("=== KATALOG BUKU PERPUSTAKAAN ===");
  console.log(`Halaman       : ${halaman.halaman} dari ${halaman.totalHalaman}`);
  console.log(`Total Koleksi : ${halaman.totalData} buku`);
  console.log("---------------------------------");
  halaman.data.forEach((buku, idx) => {
    console.log(
      `${idx + 1}. [${buku.id}] "${buku.judul}" karya ${buku.penulis} - Rp ${buku.harga.toLocaleString("id-ID")}`
    );
  });
  console.log("=================================");
}

// Eksekusi untuk menguji
tampilkanHalamanBuku(perpustakaan);
