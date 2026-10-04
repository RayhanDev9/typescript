// ============================================================================
// 07 · Asynchronous TypeScript
// 10 · Menjalankan Promise Secara Paralel (Solusi)
// ============================================================================

function simulasikanCekStok(namaBarang: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Stok ${namaBarang}: Tersedia 10 unit`);
    }, 300);
  });
}

// TODO 1 & 2:
async function cekSemuaGudang(): Promise<void> {
  console.log("=== Memeriksa Seluruh Gudang Secara Paralel ===");

  const [stokLaptop, stokMouse, stokKeyboard] = await Promise.all([
    simulasikanCekStok("Laptop"),
    simulasikanCekStok("Mouse"),
    simulasikanCekStok("Keyboard"),
  ]);

  // TODO 3:
  console.log("1.", stokLaptop);
  console.log("2.", stokMouse);
  console.log("3.", stokKeyboard);
}

// TODO 4:
cekSemuaGudang();

export {};
