// ============================================================
// 10 · Utility Types: Ekstraksi & Filter — Contoh
// Jalankan: npm run materi -- materi/09-generics/10-utility-types-ekstraksi/contoh.ts
// ============================================================

console.log("=== DEMO UTILITY TYPES: EXCLUDE, EXTRACT, RETURNTYPE ===\n");

// ----------------------------------------------------------------------------
// 1. EXCLUDE & EXTRACT PADA UNION TYPE
// ----------------------------------------------------------------------------
export type JenisTransaksi =
  | "transfer_bank"
  | "kartu_kredit"
  | "e_wallet"
  | "bayar_di_tempat"
  | "kripto";

// Membuang metode pembayaran non-digital
export type PembayaranDigital = Exclude<JenisTransaksi, "bayar_di_tempat">;

// Menyaring hanya metode berbasis dompet / bank langsung
export type PembayaranLangsung = Extract<JenisTransaksi, "transfer_bank" | "e_wallet">;

console.log("1. Operasi Union Type (Tipe terverifikasi di compile time)");

// ----------------------------------------------------------------------------
// 2. NONNULLABLE: MEMBERSIHKAN NILAI NULL & UNDEFINED
// ----------------------------------------------------------------------------
type TipeInputForm = string | number | null | undefined;
export type TipeInputValid = NonNullable<TipeInputForm>; // string | number

function prosesInput(data: TipeInputValid): void {
  console.log("Memproses data bersih:", data);
}
// prosesInput(null); // ❌ Error: Argument of type 'null' is not assignable to parameter of type 'string | number'.

// ----------------------------------------------------------------------------
// 3. RETURNTYPE & PARAMETERS: REVERSE ENGINEERING TIPE DARI FUNGSI
// ----------------------------------------------------------------------------
export function buatLaporanTransaksi(id: string, nominal: number) {
  const ppn = nominal * 0.11;
  const total = nominal + ppn;

  return {
    idTransaksi: id,
    tanggal: new Date().toLocaleDateString("id-ID"),
    rincian: {
      nominalDasar: nominal,
      pajakPPN: ppn,
      totalBayar: total,
    },
    status: "SELESAI" as const,
  };
}

// Mengekstrak tipe return secara otomatis tanpa mendefinisikan interface manual
export type LaporanHasil = ReturnType<typeof buatLaporanTransaksi>;

// Mengekstrak tipe parameter [id: string, nominal: number]
export type ParameterLaporan = Parameters<typeof buatLaporanTransaksi>;

const laporanBaru: LaporanHasil = buatLaporanTransaksi("TRX-9988", 500000);

console.log("\n2. Hasil Ekstraksi ReturnType dari Fungsi:");
console.log(`   ID Transaksi : ${laporanBaru.idTransaksi}`);
console.log(`   Nominal      : Rp ${laporanBaru.rincian.nominalDasar.toLocaleString("id-ID")}`);
console.log(`   PPN (11%)    : Rp ${laporanBaru.rincian.pajakPPN.toLocaleString("id-ID")}`);
console.log(`   Total Tagihan: Rp ${laporanBaru.rincian.totalBayar.toLocaleString("id-ID")}`);
