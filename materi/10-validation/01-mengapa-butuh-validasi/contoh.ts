// ============================================================
// 01 · Mengapa Butuh Validasi? — Contoh
// Jalankan: npm run materi -- materi/10-validation/01-mengapa-butuh-validasi/contoh.ts
// ============================================================

console.log("=== DEMO COMPILE-TIME TYPES VS RUNTIME REALITY ===\n");

export interface DataPelanggan {
  id: number;
  nama: string;
  saldo: number;
}

// ----------------------------------------------------------------------------
// 1. ILUSI KEAMANAN DENGAN 'as' (TYPE ASSERTION TANPA VALIDASI)
// ----------------------------------------------------------------------------
// Simulasi JSON rusak yang datang dari server eksternal (field nama hilang, saldo bertipe teks)
const jsonRusak = '{"id": 101, "username_salah": "Budi", "saldo": "DUA JUTA"}';

console.log("1. Menerima Data Mentah:", jsonRusak);

// Jika kita memaksakan 'as DataPelanggan':
const pelangganPalsu = JSON.parse(jsonRusak) as DataPelanggan;

console.log("\n2. Hasil Type Assertion Palsu (Kompiler Tertipu):");
console.log(`   ID Pelanggan : ${pelangganPalsu.id}`);
console.log(`   Nama diakses : ${pelangganPalsu.nama}`); // undefined!
console.log(`   Tipe nama    : ${typeof pelangganPalsu.nama}`); // "undefined" meskipun TS mengira string!

// ----------------------------------------------------------------------------
// 2. PENDEKATAN AMAN: SAMBUT DENGAN 'unknown' & VALIDASI RUNTIME
// ----------------------------------------------------------------------------
console.log("\n3. Pendekatan Aman Menggunakan Validasi Pemeriksaan:");

function validasiDataPelanggan(input: unknown): DataPelanggan | null {
  // 1. Cek apakah bertipe objek dan bukan null
  if (typeof input !== "object" || input === null) {
    return null;
  }

  // 2. Cek apakah setiap field sesuai syarat tipe data
  const data = input as Record<string, unknown>;

  if (
    typeof data.id !== "number" ||
    typeof data.nama !== "string" ||
    data.nama.trim().length === 0 ||
    typeof data.saldo !== "number" ||
    isNaN(data.saldo)
  ) {
    return null; // Data tidak valid!
  }

  return {
    id: data.id,
    nama: data.nama,
    saldo: data.saldo,
  };
}

// Uji coba data rusak:
const hasilUjiRusak = validasiDataPelanggan(JSON.parse(jsonRusak));
console.log("   Hasil Validasi JSON Rusak :", hasilUjiRusak ? "Lolos" : "Ditolak! (Aman)");

// Uji coba data valid:
const jsonBenar = '{"id": 102, "nama": "Siti Rahma", "saldo": 500000}';
const hasilUjiBenar = validasiDataPelanggan(JSON.parse(jsonBenar));
console.log("   Hasil Validasi JSON Benar :", hasilUjiBenar ? `Lolos! Halo ${hasilUjiBenar.nama}` : "Ditolak!");
