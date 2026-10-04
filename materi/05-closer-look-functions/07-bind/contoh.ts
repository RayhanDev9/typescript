// ============================================================
// 07 · Method bind — Contoh
// Jalankan: npm run materi -- materi/05-closer-look-functions/07-bind/contoh.ts
// ============================================================

interface Pesawat {
  namaMaskapai: string;
  kodePenerbangan: string;
}

const garuda: Pesawat = {
  namaMaskapai: "Garuda Indonesia",
  kodePenerbangan: "GA",
};

const citilink: Pesawat = {
  namaMaskapai: "Citilink",
  kodePenerbangan: "QG",
};

function pesanTiket(this: Pesawat, nomor: number, namaPenumpang: string): void {
  console.log(
    `[TIKET] ${namaPenumpang} -> ${this.namaMaskapai} (${this.kodePenerbangan}${nomor})`
  );
}

// 1. Mengikat `this` ke Citilink
console.log("=== 1. MENGIKAT THIS DENGAN .bind() ===");
const bookingCitilink = pesanTiket.bind(citilink);

// Panggil fungsi terikat berkali-kali
bookingCitilink(101, "Ahmad Rayhan");
bookingCitilink(102, "Budi Santoso");

// 2. Partial Application (Mengunci Parameter Awal)
console.log("\n=== 2. PARTIAL APPLICATION (MENGUNCI PARAMETER) ===");
// Mengunci this = garuda DAN nomor = 812 (hanya butuh namaPenumpang saat pemanggilan)
const bookingGaruda812 = pesanTiket.bind(garuda, 812);

bookingGaruda812("Citra Lestari");
bookingGaruda812("Dewi Anggraeni");

// 3. Partial Application pada Fungsi Biasa
console.log("\n=== 3. PARTIAL APPLICATION TANPA THIS (FUNGSI BIASA) ===");
const hitungDiskon = (persen: number, harga: number): number => {
  return harga - (harga * persen) / 100;
};

// Buat fungsi diskon khusus 20% dan 50%
const diskon20 = hitungDiskon.bind(null, 20);
const diskon50 = hitungDiskon.bind(null, 50);

const hargaAwal = 500000;
console.log(`Harga Awal : Rp${hargaAwal.toLocaleString("id-ID")}`);
console.log(`Diskon 20% : Rp${diskon20(hargaAwal).toLocaleString("id-ID")}`);
console.log(`Diskon 50% : Rp${diskon50(hargaAwal).toLocaleString("id-ID")}`);
