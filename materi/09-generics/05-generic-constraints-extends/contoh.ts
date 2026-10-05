// ============================================================
// 05 · Generic Constraints (extends) — Contoh
// Jalankan: npm run materi -- materi/09-generics/05-generic-constraints-extends/contoh.ts
// ============================================================

console.log("=== DEMO GENERIC CONSTRAINTS (EXTENDS) ===\n");

// ----------------------------------------------------------------------------
// 1. CONSTRAINT PROPERTI PANJANG (.length)
// ----------------------------------------------------------------------------
interface MemilikiPanjang {
  length: number;
}

export function hitungElemen<T extends MemilikiPanjang>(koleksi: T): string {
  const jumlah = koleksi.length;
  let keterangan = "Banyak elemen: " + jumlah;
  if (jumlah === 0) {
    keterangan = "Kosong tidak ada elemen!";
  } else if (jumlah === 1) {
    keterangan = "Hanya berisi 1 elemen.";
  }
  return keterangan;
}

console.log("1. Pengujian Constraint Length:");
console.log("   String :", hitungElemen("Belajar TS"));
console.log("   Array  :", hitungElemen([10, 20, 30]));
console.log("   Kosong :", hitungElemen([]));

// ----------------------------------------------------------------------------
// 2. CONSTRAINT ENTITAS BER-ID (<T extends Identitas>)
// ----------------------------------------------------------------------------
export interface PunyaId {
  id: string | number;
}

export function temukanItemBerdasarkanId<T extends PunyaId>(
  daftar: T[],
  idTarget: string | number
): T | undefined {
  // Karena T dibatasi extends PunyaId, kita bebas mengakses item.id tanpa error!
  return daftar.find((item) => item.id === idTarget);
}

interface Karyawan extends PunyaId {
  nama: string;
  divisi: string;
}

const stafKantor: Karyawan[] = [
  { id: 101, nama: "Hendra", divisi: "IT Support" },
  { id: 102, nama: "Dian", divisi: "Finance" },
  { id: 103, nama: "Budi", divisi: "Marketing" },
];

console.log("\n2. Pengujian Constraint PunyaId:");
const hasilCari = temukanItemBerdasarkanId(stafKantor, 102);
if (hasilCari) {
  console.log(`   Ditemukan: [ID: ${hasilCari.id}] ${hasilCari.nama} (${hasilCari.divisi})`);
}
