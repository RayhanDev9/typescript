// ============================================================
// 13 · Challenge: Generic In-Memory Repository & Cache — Solusi
// Jalankan: npm run materi -- materi/09-generics/13-challenge-generic-repository/solusi.ts
// ============================================================

import { type PunyaId } from "./contoh";
import { type BukuPerpustakaan } from "./latihan";

export class Repository<T extends PunyaId> {
  private data: Map<T["id"], T> = new Map();

  // 1. Tambah data baru
  public tambah(item: T): void {
    if (this.data.has(item.id)) {
      throw new Error(`Data dengan ID '${item.id}' sudah terdaftar!`);
    }
    this.data.set(item.id, item);
  }

  // 2. Ambil data berdasarkan ID
  public ambilById(id: T["id"]): T | undefined {
    return this.data.get(id);
  }

  // 3. Ambil seluruh data (Readonly Array)
  public ambilSemua(): readonly T[] {
    return Array.from(this.data.values());
  }

  // 4. Perbarui data sebagian dengan Partial<T>
  public perbarui(id: T["id"], revisi: Partial<T>): T | undefined {
    const itemAda = this.data.get(id);
    if (!itemAda) {
      return undefined;
    }

    const itemUpdate: T = {
      ...itemAda,
      ...revisi,
      id: itemAda.id, // ID tidak boleh diganti
    };

    this.data.set(id, itemUpdate);
    return itemUpdate;
  }

  // 5. Hapus data berdasarkan ID
  public hapus(id: T["id"]): boolean {
    return this.data.delete(id);
  }

  // 6. Cari data berdasarkan kriteria parsial
  public cari(kriteria: Partial<T>): T[] {
    return this.ambilSemua().filter((item) => {
      for (const key in kriteria) {
        if (item[key as keyof T] !== kriteria[key as keyof T]) {
          return false;
        }
      }
      return true;
    });
  }

  // Mendapatkan jumlah record
  public get total(): number {
    return this.data.size;
  }
}

console.log("=== PENGUJIAN SOLUSI GENERIC REPOSITORY & CACHE ===\n");

const repoBuku = new Repository<BukuPerpustakaan>();

// 1. Uji Tambah
repoBuku.tambah({
  id: "BK-01",
  judul: "Pemrograman TypeScript Modern",
  penulis: "Rayhan Dwi",
  tahun: 2026,
  dipinjam: false,
});

repoBuku.tambah({
  id: "BK-02",
  judul: "Arsitektur Microservices",
  penulis: "Hendra",
  tahun: 2025,
  dipinjam: true,
});

repoBuku.tambah({
  id: "BK-03",
  judul: "Desain Sistem Terdistribusi",
  penulis: "Rayhan Dwi",
  tahun: 2026,
  dipinjam: false,
});

console.log(`1. Total Buku Terdaftar: ${repoBuku.total} buku`);

// 2. Uji Ambil by ID
const bukuSatu = repoBuku.ambilById("BK-01");
console.log(`2. Ambil BK-01 : "${bukuSatu?.judul}" karya ${bukuSatu?.penulis}`);

// 3. Uji Perbarui dengan Partial<T> (Memperbarui status peminjaman)
const bukuDipinjamkan = repoBuku.perbarui("BK-01", { dipinjam: true });
console.log(`3. Status BK-01 Pasca Update : dipinjam = ${bukuDipinjamkan?.dipinjam}`);

// 4. Uji Cari dengan Kriteria Parsial
const bukuRayhan2026 = repoBuku.cari({ penulis: "Rayhan Dwi", tahun: 2026 });
console.log(`\n4. Hasil Pencarian Buku (Penulis: Rayhan Dwi, Tahun: 2026):`);
bukuRayhan2026.forEach((b, idx) => {
  console.log(`   ${idx + 1}. [${b.id}] ${b.judul} (${b.tahun})`);
});

// 5. Uji Hapus
const statusHapus = repoBuku.hapus("BK-02");
console.log(`\n5. Hapus BK-02 : Berhasil = ${statusHapus}`);
console.log(`   Sisa Buku   : ${repoBuku.total} buku`);
