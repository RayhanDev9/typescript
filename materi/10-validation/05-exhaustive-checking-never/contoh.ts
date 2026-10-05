// ============================================================
// 05 · Exhaustive Checking dengan never — Contoh
// Jalankan: npm run materi -- materi/10-validation/05-exhaustive-checking-never/contoh.ts
// ============================================================

console.log("=== DEMO EXHAUSTIVE CHECKING DENGAN TIPE NEVER ===\n");

export type LevelKeanggotaan = "BRONZE" | "SILVER" | "GOLD" | "PLATINUM";

export function hitungCashback(level: LevelKeanggotaan, totalBelanja: number): number {
  switch (level) {
    case "BRONZE":
      return totalBelanja * 0.01; // 1%
    case "SILVER":
      return totalBelanja * 0.03; // 3%
    case "GOLD":
      return totalBelanja * 0.05; // 5%
    case "PLATINUM":
      return totalBelanja * 0.1; // 10%
    default: {
      // 🛡️ EXHAUSTIVE CHECK:
      // Jika semua case di atas menangani LevelKeanggotaan dengan lengkap,
      // maka di blok default ini variabel 'level' bernilai tipe 'never'.
      const _pemeriksaanLengkap: never = level;
      throw new Error(`Kasus level member belum ditangani: ${_pemeriksaanLengkap}`);
    }
  }
}

const belanja = 1000000;

console.log("1. Pengujian Cashback Semua Level:");
console.log(`   Bronze   : Rp ${hitungCashback("BRONZE", belanja).toLocaleString("id-ID")}`);
console.log(`   Silver   : Rp ${hitungCashback("SILVER", belanja).toLocaleString("id-ID")}`);
console.log(`   Gold     : Rp ${hitungCashback("GOLD", belanja).toLocaleString("id-ID")}`);
console.log(`   Platinum : Rp ${hitungCashback("PLATINUM", belanja).toLocaleString("id-ID")}`);

// ----------------------------------------------------------------------------
// 2. FUNGSI HELPER ASSERTION UNTUK EXHAUSTIVE CHECK
// ----------------------------------------------------------------------------
// Banyak developer menyukai fungsi helper kecil seperti ini:
export function pastikanTidakTerjangkau(x: never): never {
  throw new Error(`Kondisi tidak terduga tercapai dengan nilai: ${JSON.stringify(x)}`);
}

type ModeTema = "terang" | "gelap";

function ambilWarnaLatar(tema: ModeTema): string {
  switch (tema) {
    case "terang":
      return "#FFFFFF";
    case "gelap":
      return "#1E1E1E";
    default:
      return pastikanTidakTerjangkau(tema); // Jaminan 100% aman
  }
}

console.log("\n2. Pengujian Mode Tema:", ambilWarnaLatar("gelap"));
