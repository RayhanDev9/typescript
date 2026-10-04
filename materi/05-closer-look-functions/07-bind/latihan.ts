// ============================================================
// 07 · Method bind — Latihan
// Jalankan: npm run materi -- materi/05-closer-look-functions/07-bind/latihan.ts
// ============================================================

interface WarungKopi {
  nama: string;
  kota: string;
}

const kopiSenja: WarungKopi = {
  nama: "Kopi Senja",
  kota: "Yogyakarta",
};

const kopiSubuh: WarungKopi = {
  nama: "Kopi Subuh",
  kota: "Bandung",
};

function buatPesananKopi(this: WarungKopi, ukuran: string, jenisKopi: string, atasNama: string): void {
  console.log(`[${this.nama} - ${this.kota}] Pesanan ${ukuran} ${jenisKopi} untuk ${atasNama}.`);
}

// TODO 1: Buat fungsi `pesanKopiSenja` yang mengikat `this` ke `kopiSenja`
//         menggunakan `.bind()`. Panggil dengan ukuran "Large", jenis "Caramel Latte", atas nama "Rayhan".


// TODO 2: Buat fungsi `pesanKopiBandungLarge` yang mengikat `this` ke `kopiSubuh`
//         DAN mengunci parameter ukuran menjadi "Large" (Partial Application).
//         Panggil dengan jenis "Americano", atas nama "Budi".


// TODO 3: Diberikan fungsi perkalian `kali(a: number, b: number): number`.
//         Gunakan `.bind(null, ...)` untuk membuat fungsi `dobel` (mengalikan angka dengan 2)
//         dan fungsi `tripel` (mengalikan angka dengan 3).
function kali(a: number, b: number): number {
  return a * b;
}

