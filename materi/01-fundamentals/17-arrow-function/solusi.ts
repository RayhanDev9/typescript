// ============================================================
// 17 · Arrow Function — Solusi
// ============================================================

// TODO 1
const hitungKelilingLingkaran = (jariJari: number): number => 2 * 3.14 * jariJari;

console.log("Keliling r=7:", hitungKelilingLingkaran(7));

// TODO 2
const hitungOngkir = (jarakKm: number, asuransi: boolean = false): number => {
  const biayaDasar = jarakKm * 2500;
  return asuransi ? biayaDasar + 5000 : biayaDasar;
};

console.log("Ongkir 10 km (tanpa asuransi): Rp", hitungOngkir(10));
console.log("Ongkir 10 km (dengan asuransi): Rp", hitungOngkir(10, true));

// TODO 3
const buatBio = (nama: string, pekerjaan?: string): string => {
  if (pekerjaan) {
    return `${nama} adalah seorang ${pekerjaan}`;
  }
  return `${nama} belum mencantumkan pekerjaan`;
};

console.log(buatBio("Rayhan", "Guru TypeScript"));
console.log(buatBio("Budi"));
