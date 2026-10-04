// ============================================================================
// 08 · Modern TypeScript Development
// 01 · Arsitektur Modern: Gambaran Besar (Solusi)
// ============================================================================

// TODO 1:
interface Produk {
  nama: string;
  beratGram: number;
}

// TODO 2:
function hitungOngkir(totalBeratGram: number): number {
  if (totalBeratGram <= 1000) {
    return 10000;
  }
  const tambahanKilo = Math.ceil((totalBeratGram - 1000) / 1000);
  return 10000 + tambahanKilo * 5000;
}

// TODO 3:
function formatKilo(gram: number): string {
  return `${(gram / 1000).toFixed(1)} kg`;
}

// TODO 4:
const beratPesanan: number = 2500;
const ongkir: number = hitungOngkir(beratPesanan);

console.log(`Berat Paket : ${formatKilo(beratPesanan)}`);
console.log(`Biaya Ongkir: Rp ${ongkir.toLocaleString("id-ID")}`);

export {};
