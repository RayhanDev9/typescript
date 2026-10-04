// ============================================================
// 11 · Looping Object — Solusi
// ============================================================

const gajiKaryawan: Record<string, number> = {
  Budi: 6500000,
  Siti: 7200000,
  Agus: 5800000,
  Dewi: 8000000,
};

// TODO 1
const namaKaryawan = Object.keys(gajiKaryawan);
console.log("TODO 1 -> Jumlah karyawan:", namaKaryawan.length, "orang:", namaKaryawan);

// TODO 2
const daftarGaji = Object.values(gajiKaryawan);
let totalPengeluaran = 0;
for (const nominal of daftarGaji) {
  totalPengeluaran += nominal;
}
console.log(`TODO 2 -> Total pengeluaran gaji: Rp${totalPengeluaran.toLocaleString("id-ID")}`);

// TODO 3
console.log("\nTODO 3 -> Daftar Slip Gaji:");
for (const [nama, gaji] of Object.entries(gajiKaryawan)) {
  console.log(`Karyawan: ${nama.padEnd(6)} -> Gaji: Rp${gaji.toLocaleString("id-ID")}`);
}
