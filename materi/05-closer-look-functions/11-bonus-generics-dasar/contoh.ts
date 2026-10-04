// ============================================================
// 11 · Bonus TS: Generics Dasar pada Fungsi — Contoh
// Jalankan: npm run materi -- materi/05-closer-look-functions/11-bonus-generics-dasar/contoh.ts
// ============================================================

// 1. Generic Function Sederhana
function ambilItemTerakhir<T>(daftar: T[]): T | undefined {
  if (daftar.length === 0) return undefined;
  return daftar[daftar.length - 1];
}

console.log("=== 1. GENERIC FUNCTION SEDERHANA ===");
const angkaTerakhir = ambilItemTerakhir([10, 20, 30, 45]);
console.log("Angka terakhir:", angkaTerakhir); // tipe: number | undefined

const namaTerakhir = ambilItemTerakhir(["Garuda", "Lion", "Citilink"]);
console.log("Maskapai terakhir:", namaTerakhir); // tipe: string | undefined

// 2. Generic dengan Dua Type Parameter
function tukarPosisi<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}

console.log("\n=== 2. GENERIC DUA PARAMETER ===");
const hasilTukar = tukarPosisi("Kode", 404);
console.log("Hasil tukar:", hasilTukar); // [404, "Kode"] -> tipe: [number, string]

// 3. Generic Constraint (Membatasi Tipe)
interface EntitasDenganId {
  id: string;
}

function temukanBerdasarkanId<T extends EntitasDenganId>(
  koleksi: T[],
  idCari: string
): T | undefined {
  return koleksi.find((item) => item.id === idCari);
}

interface User {
  id: string;
  nama: string;
}

interface Produk {
  id: string;
  harga: number;
}

const daftarUser: User[] = [
  { id: "U-01", nama: "Rayhan" },
  { id: "U-02", nama: "Budi" },
];

const userDitemukan = temukanBerdasarkanId(daftarUser, "U-01");
console.log("\n=== 3. GENERIC CONSTRAINT EXTENDS ===");
console.log("User ditemukan:", userDitemukan?.nama);
