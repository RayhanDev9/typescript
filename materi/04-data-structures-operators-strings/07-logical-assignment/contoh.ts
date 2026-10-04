// ============================================================
// 07 · Logical Assignment (||=, &&=, ??=) — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/07-logical-assignment/contoh.ts
// ============================================================

interface RestoProfil {
  nama: string;
  kapasitasTamu?: number;
  pemilik?: string;
}

const resto1: RestoProfil = {
  nama: "Ristorante Roma",
  kapasitasTamu: 0, // Meja sedang terisi penuh, 0 sisa meja
};

const resto2: RestoProfil = {
  nama: "Cafe Paris",
  pemilik: "Jean Pierre",
};

console.log("=== 1. PERBANDINGAN ||= vs ??= ===");

// Menggunakan ??= (Nullish Assignment)
resto1.kapasitasTamu ??= 10;
resto2.kapasitasTamu ??= 10;

console.log("Kapasitas resto1 (0 tidak boleh berubah) :", resto1.kapasitasTamu); // 0
console.log("Kapasitas resto2 (undefined diisi 10)    :", resto2.kapasitasTamu); // 10

console.log("\n=== 2. PENGGUNAAN &&= (AND ASSIGNMENT) ===");
// Mengubah nilai HANYA jika properti sudah ada nilainya

resto1.pemilik &&= "<ANONIM>";
resto2.pemilik &&= "<ANONIM>";

console.log("Pemilik resto1 (tetap undefined) :", resto1.pemilik); // undefined
console.log("Pemilik resto2 (berubah ke ANONIM) :", resto2.pemilik); // "<ANONIM>"

console.log("\n=== 3. CONTOH PADA KONFIGURASI SISTEM ===");
interface OpsiServer {
  port?: number;
  host?: string;
  debugMode?: boolean;
}

function startServer(opsi: OpsiServer): void {
  // Isi konfigurasi default jika pengguna tidak menentukannya
  opsi.port ??= 3000;
  opsi.host ??= "localhost";
  opsi.debugMode ??= true;

  console.log(`Server berjalan di http://${opsi.host}:${opsi.port} (Debug: ${opsi.debugMode})`);
}

startServer({ port: 8080 });
startServer({});
