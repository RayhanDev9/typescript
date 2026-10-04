// ============================================================
// 06 · call dan apply — Contoh
// Jalankan: npm run materi -- materi/05-closer-look-functions/06-call-dan-apply/contoh.ts
// ============================================================

interface DataPenerbangan {
  penerbangan: string;
  namaPenumpang: string;
}

interface Maskapai {
  nama: string;
  kodeIata: string;
  daftarBooking: DataPenerbangan[];
}

const garuda: Maskapai = {
  nama: "Garuda Indonesia",
  kodeIata: "GA",
  daftarBooking: [],
};

const lionAir: Maskapai = {
  nama: "Lion Air",
  kodeIata: "JT",
  daftarBooking: [],
};

const airAsia: Maskapai = {
  nama: "AirAsia",
  kodeIata: "QZ",
  daftarBooking: [],
};

// Fungsi booking yang membutuhkan kata kunci `this: Maskapai`
function pesanTiket(this: Maskapai, nomorPenerbangan: number, namaPenumpang: string): void {
  const kodeLengkap = `${this.kodeIata}${nomorPenerbangan}`;
  console.log(`[SUKSES] ${namaPenumpang} telah memesan tiket ${this.nama} (${kodeLengkap})`);

  this.daftarBooking.push({
    penerbangan: kodeLengkap,
    namaPenumpang,
  });
}

// 1. Menggunakan .call() untuk menetapkan `this`
console.log("=== 1. PENGGUNAAN METHOD .call() ===");
pesanTiket.call(garuda, 812, "Ahmad Rayhan");
pesanTiket.call(lionAir, 530, "Budi Santoso");
pesanTiket.call(airAsia, 701, "Citra Lestari");

console.log("\nBooking Garuda  :", garuda.daftarBooking);
console.log("Booking Lion Air:", lionAir.daftarBooking);

// 2. Menggunakan .apply() dengan Array
console.log("\n=== 2. PENGGUNAAN METHOD .apply() (ES5) ===");
const dataBookingCitra: [number, string] = [702, "Dewi Anggraeni"];
pesanTiket.apply(airAsia, dataBookingCitra);

// 3. Pendekatan Modern: .call() + Spread Operator (...)
console.log("\n=== 3. MODERN: .call() + SPREAD OPERATOR ===");
const dataBookingEka: [number, string] = [815, "Eka Pratama"];
pesanTiket.call(garuda, ...dataBookingEka);

console.log("\nBooking AirAsia Final:", airAsia.daftarBooking);
console.log("Booking Garuda Final :", garuda.daftarBooking);
