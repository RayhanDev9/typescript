// ============================================================
// 04 · Execution Context & Call Stack — Contoh
// Jalankan: npm run materi -- materi/03-behind-the-scenes/04-execution-context-dan-call-stack/contoh.ts
// ============================================================

// 1. Variabel di Global Context
const appName: string = "TypeScript Analyzer";

function prosesC(angka: number): number {
  console.log("-> Masuk prosesC (Paling atas di Call Stack)");
  return angka * 10;
}

function prosesB(nilai: number): number {
  console.log("-> Masuk prosesB");
  const hasilC = prosesC(nilai + 5);
  console.log("<- Keluar prosesB");
  return hasilC;
}

function prosesA(): void {
  console.log("-> Masuk prosesA");
  const hasilAkhir = prosesB(2);
  console.log(`<- Keluar prosesA. Hasil: ${hasilAkhir}`);
}

console.log("Mulai Program di Global Context");
prosesA();
console.log("Selesai Program di Global Context");
