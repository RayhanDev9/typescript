// ============================================================
// 09 · Closure Dasar — Contoh
// Jalankan: npm run materi -- materi/05-closer-look-functions/09-closure-dasar/contoh.ts
// ============================================================

// 1. Contoh Dasar: Penghitung Penumpang
function buatPencatatPenumpang(namaMaskapai: string) {
  let totalPenumpang = 0; // Variabel yang akan ditangkap oleh Closure

  return function (jumlahBaru: number = 1): void {
    totalPenumpang += jumlahBaru;
    console.log(
      `[${namaMaskapai}] Bertambah ${jumlahBaru} penumpang. Total saat ini: ${totalPenumpang} orang.`
    );
  };
}

console.log("=== 1. CLOSURE PENUMPANG MASKAPAI ===");

// Instance 1: Garuda
const catatGaruda = buatPencatatPenumpang("Garuda Indonesia");
catatGaruda(50);
catatGaruda(30);

// Instance 2: Lion Air (Closure Terpisah)
console.log("\n=== 2. RUANG CLOSURE TERPISAH ===");
const catatLion = buatPencatatPenumpang("Lion Air");
catatLion(100);

// Panggil Garuda lagi (membuktikan state Garuda tidak terganggu Lion Air)
catatGaruda(20);

// 2. Closure Mengubah Nilai Variabel di Luar
let fungsiLuar: () => void;

function inisialisasi() {
  const dataRahasia = "KODE-AKSES-404";

  fungsiLuar = function () {
    console.log(`\n=== 3. CLOSURE DARI VARIABEL GLOBAL ===`);
    console.log("Data rahasia dari fungsi inisialisasi:", dataRahasia);
  };
}

inisialisasi();
fungsiLuar!(); // Walaupun inisialisasi sudah selesai, fungsiLuar tetap bisa membaca dataRahasia!
