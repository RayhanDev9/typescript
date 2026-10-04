// ============================================================================
// 07 · Asynchronous TypeScript
// 09 · Mengembalikan Nilai dari Fungsi Async (Solusi)
// ============================================================================

// TODO 1:
async function hitungHargaTotal(hargaBarang: number, jumlah: number): Promise<number> {
  // Simulasi jeda server
  await new Promise((resolve) => setTimeout(resolve, 300));
  return hargaBarang * jumlah;
}

// TODO 2:
async function cetakTotalTransaksi(): Promise<void> {
  // Mengambil nilai hasil dari fungsi async dengan await
  const total: number = await hitungHargaTotal(25000, 4);
  console.log(`Total Transaksi Akhir: Rp ${total.toLocaleString("id-ID")}`);
}

// TODO 3:
cetakTotalTransaksi();

export {};
