// ============================================================
// 02 · Destructuring Object — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/02-destructuring-object/contoh.ts
// ============================================================

interface Restoran {
  nama: string;
  lokasi: string;
  kategori: string[];
  menuUtama: string[];
  jamBuka: {
    senin: { buka: number; tutup: number };
    jumat: { buka: number; tutup: number };
  };
}

const restoran: Restoran = {
  nama: "Trattoria Bella",
  lokasi: "Jl. Diponegoro No. 8, Bandung",
  kategori: ["Italia", "Pizza", "Pasta", "Vegetarian"],
  menuUtama: ["Pizza Margherita", "Lasagna", "Fettuccine Alfredo"],
  jamBuka: {
    senin: { buka: 11, tutup: 21 },
    jumat: { buka: 10, tutup: 23 },
  },
};

// 1. Destructuring Dasar
const { nama, lokasi, kategori } = restoran;
console.log("--- 1. Destructuring Dasar ---");
console.log("Nama Restoran:", nama);
console.log("Lokasi:", lokasi);
console.log("Kategori:", kategori);

// 2. Mengganti Nama Variabel (Renaming / Aliasing)
const { nama: namaRestoran, menuUtama: hidanganUtama } = restoran;
console.log("\n--- 2. Renaming Variabel ---");
console.log("Nama Baru:", namaRestoran);
console.log("Menu Utama Baru:", hidanganUtama);

// 3. Nilai Default (Default Values)
interface MenuTambahan {
  promoHariIni?: string;
  diskonPersen?: number;
}

const promo: MenuTambahan = {
  promoHariIni: "Beli 1 Gratis 1 Minuman",
};

const { promoHariIni = "Tidak ada promo", diskonPersen = 0 } = promo;
console.log("\n--- 3. Nilai Default ---");
console.log("Promo:", promoHariIni);
console.log("Diskon:", diskonPersen, "%");

// 4. Nested Destructuring (Objek Bersarang)
const {
  jamBuka: {
    jumat: { buka: jamBukaJumat, tutup: jamTutupJumat },
  },
} = restoran;

console.log("\n--- 4. Nested Destructuring ---");
console.log(`Jumat buka jam ${jamBukaJumat}:00 s/d ${jamTutupJumat}:00`);

// 5. Destructuring pada Parameter Fungsi
interface DetailPengiriman {
  namaPenerima: string;
  alamatTujuan: string;
  ongkir?: number;
  pesanan: string[];
}

function kirimPesanan({
  namaPenerima,
  alamatTujuan,
  ongkir = 10000,
  pesanan,
}: DetailPengiriman): void {
  console.log("\n--- 5. Parameter Fungsi Destructuring ---");
  console.log(`Penerima : ${namaPenerima}`);
  console.log(`Tujuan   : ${alamatTujuan}`);
  console.log(`Ongkir   : Rp${ongkir.toLocaleString("id-ID")}`);
  console.log(`Pesanan  : ${pesanan.join(", ")}`);
}

kirimPesanan({
  namaPenerima: "Rayhan",
  alamatTujuan: "Jl. Asia Afrika No. 12",
  pesanan: ["Pizza Margherita", "Es Lemon Tea"],
  ongkir: 15000,
});
