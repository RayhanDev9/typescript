// ============================================================================
// 10 · Higher-Order Functions dalam FP — Solusi
// Jalankan: npx ts-node materi/08-modern-typescript-development/10-higher-order-functions-fp/solusi.ts
// ============================================================================

export function buatPemisahTeks(
  pemisah: string
): (daftarKata: string[]) => string {
  return (daftarKata: string[]): string => {
    return daftarKata.join(pemisah);
  };
}

export function buatFormatUang(
  simbol: string
): (nominal: number) => string {
  return (nominal: number): string => {
    return `${simbol} ${nominal.toLocaleString("id-ID")}`;
  };
}

console.log("=== PENGUJIAN SOLUSI HOF FACTORY ===");

const gabungKoma = buatPemisahTeks(", ");
const gabungStrip = buatPemisahTeks(" - ");

console.log("1. Penggabung Teks Koma  :", gabungKoma(["Apel", "Jeruk", "Mangga"]));
console.log("2. Penggabung Teks Strip :", gabungStrip(["HTML", "CSS", "TypeScript"]));

const formatIDR = buatFormatUang("Rp");
const formatUSD = buatFormatUang("$");

console.log("3. Format IDR            :", formatIDR(750000));
console.log("4. Format USD            :", formatUSD(1200));
