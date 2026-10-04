// ============================================================
// 19 · Array & Tuple — Solusi
// ============================================================

// TODO 1
const daftarTahunLahir: number[] = [1990, 1995, 2001, 2010];

// TODO 2
const hitungUmur = (tahun: number): number => 2026 - tahun;

const umur0 = hitungUmur(daftarTahunLahir[0]);
const umur1 = hitungUmur(daftarTahunLahir[1]);
const umurTerakhir = hitungUmur(daftarTahunLahir[daftarTahunLahir.length - 1]);

const daftarUmur: number[] = [umur0, umur1, umurTerakhir];
console.log("Daftar umur yang dihitung:", daftarUmur);

// TODO 3
type DataProduk = [string, string, number, number];

const laptop: DataProduk = ["SKU-LAP-001", "Laptop Pro 16", 18500000, 15];

console.log(`Produk : ${laptop[1]} (${laptop[0]})`);
console.log(`Harga  : Rp ${laptop[2].toLocaleString("id-ID")}`);
console.log(`Stok   : ${laptop[3]} unit`);
