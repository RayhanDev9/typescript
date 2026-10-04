// ============================================================================
// 11 · Currying & Partial Application — Contoh
// Jalankan: npx ts-node materi/08-modern-typescript-development/11-currying-dan-partial-application/contoh.ts
// ============================================================================

console.log("=== DEMO CURRYING & PARTIAL APPLICATION ===\n");

// ----------------------------------------------------------------------------
// 1. CURRYING PERHITUNGAN TRANSAKSI (PAJAK + ONGKIR + HARGA DASAR)
// ----------------------------------------------------------------------------
export const hitungBiayaFinal =
  (tarifPajak: number) =>
  (ongkir: number) =>
  (hargaBarang: number): number => {
    const nilaiPajak = hargaBarang * tarifPajak;
    return hargaBarang + nilaiPajak + ongkir;
  };

// Pemanggilan penuh (Curried execution):
const totalSatu = hitungBiayaFinal(0.11)(20000)(100000);
console.log("1. Hasil Eksekusi Currying Penuh:");
console.log(`   Total (PPN 11%, Ongkir 20k, Harga 100k) = Rp ${totalSatu.toLocaleString("id-ID")}\n`);

// ----------------------------------------------------------------------------
// 2. PARTIAL APPLICATION (MEMBUAT FUNGSI KHUSUS WILAYAH JABODETABEK)
// ----------------------------------------------------------------------------
// Kunci PPN 11% dan Ongkir Jabodetabek 10.000
const hitungBelanjaJabodetabek = hitungBiayaFinal(0.11)(10000);

// Sekarang cukup oper harga barang saja!
const belanjaBaju = hitungBelanjaJabodetabek(250000);
const belanjaSepatu = hitungBelanjaJabodetabek(750000);

console.log("2. Partial Application (Khusus Jabodetabek):");
console.log(`   Belanja Baju (250k)   -> Total: Rp ${belanjaBaju.toLocaleString("id-ID")}`);
console.log(`   Belanja Sepatu (750k) -> Total: Rp ${belanjaSepatu.toLocaleString("id-ID")}\n`);

// ----------------------------------------------------------------------------
// 3. CURRYING SISTEM LOGGING APLIKASI
// ----------------------------------------------------------------------------
type TingkatLog = "INFO" | "PERINGATAN" | "ERROR";

export const buatLog =
  (tingkat: TingkatLog) =>
  (namaModul: string) =>
  (pesan: string): string => {
    const waktu = "12:00:00"; // simulasi waktu
    return `[${waktu}] [${tingkat}] [${namaModul}]: ${pesan}`;
  };

// Spesialisasi Logger untuk modul Autentikasi
const logInfoAuth = buatLog("INFO")("Autentikasi");
const logErrorAuth = buatLog("ERROR")("Autentikasi");

console.log("3. Logging Khusus Modul Autentikasi:");
console.log(logInfoAuth("Pengguna 'rayhan' berhasil masuk."));
console.log(logErrorAuth("Percobaan login gagal: Password salah!"));
