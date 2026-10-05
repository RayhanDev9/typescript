// ============================================================
// 18 · Fungsi Memanggil Fungsi — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/18-fungsi-memanggil-fungsi/contoh.ts
// ============================================================

// --- 1. Contoh Sederhana: Jus Buah ---
const potongBuah = (buah: number): number => buah * 4;

function buatJus(apel: number, jeruk: number): string {
  const potongApel = potongBuah(apel);
  const potongJeruk = potongBuah(jeruk);
  return `Jus dengan ${potongApel} potong apel dan ${potongJeruk} potong jeruk 🥤`;
}

console.log(buatJus(2, 3));
// --- 2. Contoh Dunia Nyata: Sistem Pembayaran Toko ---

// Fungsi Helper 1: Format angka ke mata uang Rupiah
function formatRupiah(nominal: number): string {
  return `Rp ${nominal.toLocaleString("id-ID")}`;
}

// Fungsi Helper 2: Hitung diskon member
function hitungDiskonMember(total: number, adalahMember: boolean): number {
  return adalahMember ? total * 0.1 : 0; // 10% jika member
}

// Fungsi Helper 3: Hitung Pajak PPN
function hitungPPN(subtotal: number): number {
  return subtotal * 0.11; // 11%
}

// Fungsi Utama: Buat Struk Pembayaran
function buatStrukBelanja(
  totalBelanja: number,
  adalahMember: boolean,
  namaPelanggan: string
): string {
  const diskon = hitungDiskonMember(totalBelanja, adalahMember);
  const setelahDiskon = totalBelanja - diskon;
  const ppn = hitungPPN(setelahDiskon);
  const totalAkhir = setelahDiskon + ppn;

  return `
================ STRUK TOKO MAJU ================
Pelanggan     : ${namaPelanggan} (${adalahMember ? "Member" : "Non-Member"})
Total Belanja : ${formatRupiah(totalBelanja)}
Diskon Member : -${formatRupiah(diskon)}
PPN (11%)     : +${formatRupiah(ppn)}
-------------------------------------------------
TOTAL BAYAR   : ${formatRupiah(totalAkhir)}
=================================================`;
}

console.log(buatStrukBelanja(250000, true, "Rayhan"));
console.log(buatStrukBelanja(100000, false, "Budi"));
