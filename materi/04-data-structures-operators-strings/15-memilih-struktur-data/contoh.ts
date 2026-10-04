// ============================================================
// 15 · Memilih Struktur Data yang Tepat — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/15-memilih-struktur-data/contoh.ts
// ============================================================

console.log("=== 4 STUDI KASUS PEMILIHAN STRUKTUR DATA ===");

// 1. Kasus 1: Daftar Riwayat Pesanan (Urutan Penting, Boleh Duplikat)
// -> Pilihan Terbaik: ARRAY
const riwayatPesanan: string[] = [
  "Pizza Margherita",
  "Es Teh Manis",
  "Pizza Margherita", // Pelanggan memesan 2 pizza yang sama
  "Tiramisu",
];
console.log("1. Riwayat Pesanan (Array):", riwayatPesanan);

// 2. Kasus 2: Daftar Tag Kategori Unik pada Blog
// -> Pilihan Terbaik: SET
const tagPostingan = new Set<string>([
  "typescript",
  "webdev",
  "tutorial",
  "typescript", // Diabaikan otomatis
]);
console.log("\n2. Tag Postingan Unik (Set):", tagPostingan);

// 3. Kasus 3: Model Data Profil Pengguna (Struktur Pasti + Method)
// -> Pilihan Terbaik: OBJECT
interface Pengguna {
  id: string;
  nama: string;
  email: string;
  sapa(): string;
}

const user: Pengguna = {
  id: "USR-001",
  nama: "Rayhan",
  email: "rayhan@example.com",
  sapa() {
    return `Halo, saya ${this.nama}!`;
  },
};
console.log("\n3. Model Pengguna (Object):", user.sapa());

// 4. Kasus 4: Cache Kode Status HTTP ke Pesan Respons (Key Berupa Angka)
// -> Pilihan Terbaik: MAP
const statusHttp = new Map<number, string>([
  [200, "OK - Permintaan Berhasil"],
  [201, "Created - Data Berhasil Dibuat"],
  [400, "Bad Request - Format Salah"],
  [404, "Not Found - Halaman Tidak Ditemukan"],
  [500, "Internal Server Error - Terjadi Gangguan Server"],
]);

const kode = 404;
console.log(`\n4. Status HTTP ${kode} (Map):`, statusHttp.get(kode));
