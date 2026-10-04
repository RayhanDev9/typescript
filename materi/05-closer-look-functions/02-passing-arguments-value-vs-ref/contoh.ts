// ============================================================
// 02 · Passing Arguments: Value vs Reference — Contoh
// Jalankan: npm run materi -- materi/05-closer-look-functions/02-passing-arguments-value-vs-ref/contoh.ts
// ============================================================

// 1. Tipe Primitif: Pass by Value (Salinan Nilai)
let kodePenerbangan = "GA-101";

function perbaruiKode(kode: string): void {
  kode = "GA-999"; // Hanya mengubah variabel lokal 'kode' di dalam fungsi
  console.log("Di dalam fungsi perbaruiKode:", kode);
}

console.log("=== 1. PASS BY VALUE (PRIMITIF) ===");
console.log("Sebelum fungsi dipanggil :", kodePenerbangan); // "GA-101"
perbaruiKode(kodePenerbangan);
console.log("Setelah fungsi dipanggil :", kodePenerbangan); // "GA-101" (Asli tetap aman!)

// 2. Tipe Objek: Pass by Reference (Berbagi Alamat Memori)
interface DataPenumpang {
  nama: string;
  nomorPaspor: string;
}

const penumpang1: DataPenumpang = {
  nama: "Rayhan",
  nomorPaspor: "B1234567",
};

function checkInPenumpang(p: DataPenumpang): void {
  // Mengubah properti objek langsung!
  p.nama = "Tuan " + p.nama;
  p.nomorPaspor = p.nomorPaspor.toUpperCase();
}

console.log("\n=== 2. PASS BY REFERENCE (OBJEK) ===");
console.log("Sebelum check-in :", penumpang1);
checkInPenumpang(penumpang1);
console.log("Setelah check-in  :", penumpang1); // Objek luar ikut berubah!

// 3. Mencegah Mutasi dengan Readonly di TypeScript
interface TiketReadOnly {
  readonly id: string;
  readonly tujuan: string;
  readonly harga: number;
}

function prosesTiketAman(tiket: Readonly<TiketReadOnly>): void {
  console.log(`\n=== 3. READONLY TYPE SAFETY ===`);
  console.log(`Memproses tiket ${tiket.id} tujuan ${tiket.tujuan} (Rp${tiket.harga.toLocaleString("id-ID")})`);

  // Baris di bawah akan ditolak oleh TypeScript:
  // tiket.harga = 0; // ❌ Cannot assign to 'harga' because it is a read-only property.
}

const tiketSaya: TiketReadOnly = {
  id: "TKT-888",
  tujuan: "Bali",
  harga: 1500000,
};

prosesTiketAman(tiketSaya);
