// ============================================================
// 05 · Fungsi Mengembalikan Fungsi — Contoh
// Jalankan: npm run materi -- materi/05-closer-look-functions/05-fungsi-mengembalikan-fungsi/contoh.ts
// ============================================================

// 1. Bentuk Tradisional (Function Declaration / Expression)
function buatPengirimPesan(awalan: string) {
  return function (namaPenerima: string, isiPesan: string): void {
    console.log(`[${awalan.toUpperCase()}] Kepada: ${namaPenerima} -> ${isiPesan}`);
  };
}

console.log("=== 1. PEMBUAT FUNGSI LOG PESAN ===");
const kirimPeringatan = buatPengirimPesan("Peringatan");
const kirimInfo = buatPengirimPesan("Informasi");

kirimPeringatan("Semua Penumpang", "Penerbangan ditunda 30 menit.");
kirimInfo("Budi", "Gerbang keberangkatan telah dibuka di Pintu 4.");

// 2. Bentuk Ringkas Menggunakan Arrow Function
const buatPengali = (pengali: number) => (angka: number): number => {
  return angka * pengali;
};

console.log("\n=== 2. CURRYING MATEMATIKA ===");
const kaliDua = buatPengali(2);
const kaliSepuluh = buatPengali(10);

console.log("5 x 2  =", kaliDua(5));
console.log("5 x 10 =", kaliSepuluh(5));

// Memanggil langsung secara berantai (f(a)(b))
console.log("7 x 3 (langsung berantai) =", buatPengali(3)(7));

// 3. Studi Kasus: Generator Tarif Diskon Member
type HitungDiskonFn = (totalBelanja: number) => number;

function buatDiskonToko(levelMember: "Gold" | "Silver" | "Regular"): HitungDiskonFn {
  const persenMap = {
    Gold: 20,
    Silver: 10,
    Regular: 0,
  };

  const persen = persenMap[levelMember];

  return (totalBelanja: number): number => {
    const potongan = (totalBelanja * persen) / 100;
    return totalBelanja - potongan;
  };
}

console.log("\n=== 3. DISKON MEMBER ===");
const hitungGold = buatDiskonToko("Gold");
const hitungSilver = buatDiskonToko("Silver");

const tagihan = 500000;
console.log(`Tagihan Asli : Rp${tagihan.toLocaleString("id-ID")}`);
console.log(`Member Gold  : Rp${hitungGold(tagihan).toLocaleString("id-ID")}`);
console.log(`Member Silver: Rp${hitungSilver(tagihan).toLocaleString("id-ID")}`);
