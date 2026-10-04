// ============================================================================
// 08 · Modern TypeScript Development
// 01 · Arsitektur Modern: Gambaran Besar (Contoh)
// ============================================================================

// 1. Pemisahan Tanggung Jawab (Separation of Concerns)
// Bayangkan 3 bagian ini berada di file yang berbeda di masa depan:

// [Bagian 1: Data Model]
interface Kursus {
  id: string;
  judul: string;
  harga: number;
}

const daftarKursus: Kursus[] = [
  { id: "C-1", judul: "TypeScript untuk Pemula", harga: 150000 },
  { id: "C-2", judul: "Asynchronous Mastery", harga: 180000 },
];

// [Bagian 2: Logika Bisnis (Business Logic)]
function hitungTotalBelanja(item: Kursus[]): number {
  return item.reduce((total, k) => total + k.harga, 0);
}

function terapkanDiskon(total: number, persen: number): number {
  return total - (total * (persen / 100));
}

// [Bagian 3: Format Presentasi (Presentation Layer)]
function formatRupiah(angka: number): string {
  return `Rp ${angka.toLocaleString("id-ID")}`;
}

// 2. Menggabungkan Komponen-Komponen Tersebut
console.log("=== Simulasi Alur Sistem Modular Modern ===");
const subtotal = hitungTotalBelanja(daftarKursus);
const totalAkhir = terapkanDiskon(subtotal, 10); // Diskon 10%

console.log("Subtotal Belanja :", formatRupiah(subtotal));
console.log("Total Setelah Diskon (10%):", formatRupiah(totalAkhir));

export {};
