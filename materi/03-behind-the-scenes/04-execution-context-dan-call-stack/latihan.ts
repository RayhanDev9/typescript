// ============================================================
// 04 · Execution Context & Call Stack — Latihan
// Jalankan: npm run materi -- materi/03-behind-the-scenes/04-execution-context-dan-call-stack/latihan.ts
// ============================================================

// TODO 1: Amati kode rekursi di bawah ini.
//         Fungsi `hitungFaktorial` akan memanggil dirinya sendiri sampai n === 1.
function hitungFaktorial(n: number): number {
  if (n <= 1) {
    console.log(`Dasar rekursi tercapai (n = ${n}). Mulai melepas tumpukan (Pop)...`);
    return 1;
  }
  console.log(`Push ke Call Stack: hitungFaktorial(${n})`);
  const hasil = n * hitungFaktorial(n - 1);
  console.log(`Pop dari Call Stack: hitungFaktorial(${n}) menghasilkan ${hasil}`);
  return hasil;
}

// TODO 2: Panggil `hitungFaktorial(4)` dan amati bagaimana urutan pesan Push dan Pop muncul di terminal.
