// ============================================================
// 06 · Keyof & Lookup Types — Contoh
// Jalankan: npm run materi -- materi/09-generics/06-keyof-dan-lookup-types/contoh.ts
// ============================================================

console.log("=== DEMO OPERATOR KEYOF & LOOKUP TYPES ===\n");

export interface Mobil {
  merek: string;
  model: string;
  tahun: number;
  tersedia: boolean;
}

// 1. Ekstraksi Kunci dengan keyof
type KunciMobil = keyof Mobil; // "merek" | "model" | "tahun" | "tersedia"

// 2. Fungsi Getter Type-Safe dengan <T, K extends keyof T>
export function ambilNilai<T, K extends keyof T>(objek: T, kunci: K): T[K] {
  return objek[kunci];
}

// 3. Fungsi Setter Type-Safe
export function perbaruiNilai<T, K extends keyof T>(
  objek: T,
  kunci: K,
  nilaiBaru: T[K]
): T {
  return {
    ...objek,
    [kunci]: nilaiBaru,
  };
}

const avanza: Mobil = {
  merek: "Toyota",
  model: "Avanza G",
  tahun: 2022,
  tersedia: true,
};

console.log("1. Objek Awal Mobil:");
console.log(avanza);

// Pengambilan Nilai secara Type-Safe
const merekMobil = ambilNilai(avanza, "merek"); // Tipe: string
const tahunMobil = ambilNilai(avanza, "tahun"); // Tipe: number

console.log("\n2. Mengambil Nilai dengan Type-Safety:");
console.log(`   Merek : ${merekMobil.toUpperCase()}`);
console.log(`   Tahun : ${tahunMobil + 1}`);

// Pembaruan Nilai (Nilai baru dicek tipe datanya secara ketat sesuai properti)
const avanzaUpdate = perbaruiNilai(avanza, "tahun", 2024);
// perbaruiNilai(avanza, "tahun", "Dua Ribu"); // ❌ Compile Error: 'string' tidak bisa dimasukkan ke 'tahun' yang bertipe number!

console.log("\n3. Objek Setelah Pembaruan:");
console.log(avanzaUpdate);
