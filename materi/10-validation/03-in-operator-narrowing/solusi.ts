// ============================================================
// 03 · Type Narrowing: Operator in — Solusi
// Jalankan: npm run materi -- materi/10-validation/03-in-operator-narrowing/solusi.ts
// ============================================================

export interface SepedaMotor {
  platNomor: string;
  kapasitasMesinCC: number;
}

export interface SepedaKayuh {
  nomorSeriRangka: string;
  jumlahGear: number;
}

export type Kendaraan = SepedaMotor | SepedaKayuh;

export function hitungPajak(k: Kendaraan): number {
  if ("kapasitasMesinCC" in k) {
    return k.kapasitasMesinCC * 1500;
  }
  return 0; // Sepeda kayuh bebas pajak
}

export function cetakIdentitasKendaraan(k: Kendaraan): string {
  if ("platNomor" in k) {
    return `Motor Plat [${k.platNomor}]`;
  }
  return `Sepeda Ontel Rangka [${k.nomorSeriRangka}] (${k.jumlahGear} gear)`;
}

console.log("=== PENGUJIAN SOLUSI TYPE NARROWING DENGAN 'IN' ===");

const motorVario: SepedaMotor = {
  platNomor: "B 1234 XYZ",
  kapasitasMesinCC: 160,
};

const sepedaGunung: SepedaKayuh = {
  nomorSeriRangka: "POLYGON-99",
  jumlahGear: 21,
};

console.log("1. Data Motor:");
console.log(`   Identitas : ${cetakIdentitasKendaraan(motorVario)}`);
console.log(`   Pajak     : Rp ${hitungPajak(motorVario).toLocaleString("id-ID")}`);

console.log("\n2. Data Sepeda:");
console.log(`   Identitas : ${cetakIdentitasKendaraan(sepedaGunung)}`);
console.log(`   Pajak     : Rp ${hitungPajak(sepedaGunung).toLocaleString("id-ID")} (Bebas Pajak)`);
