// ============================================================
// 03 · Type Narrowing: Operator in — Latihan
// Jalankan: npm run materi -- materi/10-validation/03-in-operator-narrowing/latihan.ts
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

/**
 * 🎯 TUGAS:
 * 1. Buat fungsi `hitungPajak(k: Kendaraan): number`:
 *    - Gunakan operator `in` untuk memeriksa apakah kendaraan memiliki mesin (`kapasitasMesinCC`).
 *    - Jika Sepeda Motor: hitung pajak sebesar `kapasitasMesinCC * 1500` rupiah.
 *    - Jika Sepeda Kayuh (tidak bermesin): pajak selalu Rp 0 (Bebas pajak).
 *
 * 2. Buat fungsi `cetakIdentitasKendaraan(k: Kendaraan): string`:
 *    - Jika Sepeda Motor: kembalikan string `Motor dengan Plat: ${k.platNomor}`.
 *    - Jika Sepeda Kayuh: kembalikan string `Sepeda Ontel Rangka: ${k.nomorSeriRangka} (${k.jumlahGear} gear)`.
 *
 * 3. Uji dengan contoh objek motor dan sepeda di bawah ini.
 */

const motorVario: SepedaMotor = {
  platNomor: "B 1234 XYZ",
  kapasitasMesinCC: 160,
};

const sepedaGunung: SepedaKayuh = {
  nomorSeriRangka: "POLYGON-99",
  jumlahGear: 21,
};

// Tulis implementasi kedua fungsi Anda di bawah ini:




// Eksekusi untuk menguji:
// console.log(cetakIdentitasKendaraan(motorVario), "-> Pajak: Rp", hitungPajak(motorVario));
// console.log(cetakIdentitasKendaraan(sepedaGunung), "-> Pajak: Rp", hitungPajak(sepedaGunung));
