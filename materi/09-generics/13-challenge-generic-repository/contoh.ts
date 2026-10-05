// ============================================================
// 13 · Challenge: Generic In-Memory Repository & Cache — Contoh
// Jalankan: npm run materi -- materi/09-generics/13-challenge-generic-repository/contoh.ts
// ============================================================

console.log("=== DEMO ARCHITECTURE: GENERIC REPOSITORY PATTERN ===\n");

export interface PunyaId {
  id: string | number;
}

// Implementasi sederhana Generic Repository untuk demonstrasi
export class MiniRepository<T extends PunyaId> {
  protected items: Map<T["id"], T> = new Map();

  public tambah(data: T): void {
    if (this.items.has(data.id)) {
      throw new Error(`Item dengan ID ${data.id} sudah ada!`);
    }
    this.items.set(data.id, data);
  }

  public ambilById(id: T["id"]): T | undefined {
    return this.items.get(id);
  }

  public ambilSemua(): readonly T[] {
    return Array.from(this.items.values());
  }
}

// Entitas Contoh 1: Pengguna
interface AkunMember extends PunyaId {
  id: number;
  nama: string;
  poin: number;
}

const repoMember = new MiniRepository<AkunMember>();
repoMember.tambah({ id: 1, nama: "Budi", poin: 150 });
repoMember.tambah({ id: 2, nama: "Citra", poin: 300 });

console.log("1. Seluruh Member di MiniRepository:");
repoMember.ambilSemua().forEach((m) => {
  console.log(`   - [ID: ${m.id}] ${m.nama} (${m.poin} poin)`);
});

// Entitas Contoh 2: Produk Inventaris
interface ProdukKatalog extends PunyaId {
  id: string;
  namaProduk: string;
  harga: number;
}

const repoProduk = new MiniRepository<ProdukKatalog>();
repoProduk.tambah({ id: "PRD-A1", namaProduk: "Mouse Wireless", harga: 250000 });
repoProduk.tambah({ id: "PRD-A2", namaProduk: "Mechanical Keyboard", harga: 750000 });

console.log("\n2. Seluruh Produk di MiniRepository:");
repoProduk.ambilSemua().forEach((p) => {
  console.log(`   - [${p.id}] ${p.namaProduk}: Rp ${p.harga.toLocaleString("id-ID")}`);
});
