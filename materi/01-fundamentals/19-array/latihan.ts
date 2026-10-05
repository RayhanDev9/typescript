// ============================================================
// 19 · Array & Tuple — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/19-array/latihan.ts
// ============================================================

// TODO 1: Buat array bertipe `number[]` bernama `daftarTahunLahir`
//         berisi 4 angka tahun (misal: 1990, 1995, 2001, 2010).

const daftarTahunLahir: readonly number[] = [1990, 1995, 2001, 2010];

// daftarTahunLahir[0] = 22;
// TODO 2: Buat fungsi `hitungUmur` yang menerima tahun (number) dan mengembalikan umur (2026 - tahun).
//         Gunakan fungsi tersebut untuk menghitung umur dari elemen PERTAMA, KEDUA, dan TERAKHIR
//         dari array `daftarTahunLahir`. Simpan hasilnya ke array baru `daftarUmur: number[]`.

interface TypeHitungUmur {
  (umur: number, tahun: number): number;
}

const hitungUmur: TypeHitungUmur = (umur, tahun) => {
  return Math.abs(tahun - umur);
};

console.info(hitungUmur(2005, 2026));

// TODO 3: Definisikan tipe Tuple `DataProduk` yang berisi:
//         - Posisi 0: Kode SKU (string)
//         - Posisi 1: Nama Barang (string)
//         - Posisi 2: Harga Barang (number)
//         - Posisi 3: Stok Tersedia (number)
//         Buat variabel `laptop: DataProduk` dan tampilkan informasinya ke terminal.

type TypeDataProduk = [string, string, number, number];

const leptop: TypeDataProduk = ["oi-011", "Arcer", 100000, 30];

console.info(leptop);
