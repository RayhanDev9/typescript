// ============================================================
// 12 · Pernyataan switch — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/12-switch/contoh.ts
// ============================================================

// --- 1. Contoh Dasar Switch dengan Variabel String ---
const hari: string = "senin";

console.log("=== Jadwal Mingguan ===");
switch (hari) {
  case "senin":
    console.log("Hari Senin: Perencanaan sprint dan susun materi 📋");
    break;
  case "selasa":
    console.log("Hari Selasa: Live coding & konsultasi siswa 💻");
    break;
  case "rabu":
  case "kamis":
    // Pengelompokan beberapa case (Rabu ATAU Kamis)
    console.log("Hari Rabu/Kamis: Praktik langsung dan review tugas 🚀");
    break;
  case "jumat":
    console.log("Hari Jumat: Evaluasi pekanan dan persiapan kuis 🎯");
    break;
  case "sabtu":
  case "minggu":
    console.log("Akhir pekan: Istirahat dan refresh pikiran ☕");
    break;
  default:
    console.log("Hari tidak valid!");
    break;
}

// --- 2. Switch dengan Union Literal Types (TypeScript) ---
type KategoriKendaraan = "motor" | "mobil" | "truk" | "bus";

function cekTarifTol(kendaraan: KategoriKendaraan): number {
  let tarif: number;

  switch (kendaraan) {
    case "motor":
      tarif = 5000;
      break;
    case "mobil":
      tarif = 15000;
      break;
    case "bus":
      tarif = 25000;
      break;
    case "truk":
      tarif = 35000;
      break;
  }

  return tarif;
}

const jenisKendaraan: KategoriKendaraan = "mobil";
const tarifMobil = cekTarifTol(jenisKendaraan);
console.log(`Tarif tol untuk ${jenisKendaraan}: Rp ${tarifMobil.toLocaleString("id-ID")}`);
console.log(`Tarif tol untuk bus: Rp ${cekTarifTol("bus").toLocaleString("id-ID")}`);
