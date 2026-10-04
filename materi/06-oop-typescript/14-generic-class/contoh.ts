// ============================================================
// 14 · Generic Class — Contoh
// Jalankan: npm run materi -- materi/06-oop-typescript/14-generic-class/contoh.ts
// ============================================================

// 1. Generic Class Antrean (Queue: FIFO)
class Antrean<T> {
  private item: T[] = [];

  public masuk(elemen: T): void {
    this.item.push(elemen);
    console.log(`[ANTREAN] Masuk antrean. Total antrean: ${this.item.length}`);
  }

  public keluar(): T | undefined {
    return this.item.shift(); // Mengambil elemen pertama
  }

  public get panjang(): number {
    return this.item.length;
  }
}

console.log("=== 1. ANTREAN TIKET PESAWAT (STRING) ===");
const antreanCheckin = new Antrean<string>();
antreanCheckin.masuk("Rayhan");
antreanCheckin.masuk("Budi");
antreanCheckin.masuk("Citra");

console.log("Dipanggil pertama:", antreanCheckin.keluar()); // "Rayhan"
console.log("Dipanggil kedua  :", antreanCheckin.keluar()); // "Budi"

// 2. Generic Class Database Repository dengan Constraint
interface ModelDatabase {
  id: number;
}

interface Nasabah extends ModelDatabase {
  nama: string;
  saldo: number;
}

class DatabaseRepository<T extends ModelDatabase> {
  private data: T[] = [];

  public tambah(entitas: T): void {
    this.data.push(entitas);
    console.log(`[DB] Entitas #${entitas.id} berhasil ditambahkan.`);
  }

  public temukanById(id: number): T | undefined {
    return this.data.find((item) => item.id === id);
  }

  public semuaData(): T[] {
    return this.data;
  }
}

console.log("\n=== 2. DATABASE REPOSITORY GENERIC ===");
const repoNasabah = new DatabaseRepository<Nasabah>();

repoNasabah.tambah({ id: 101, nama: "Ahmad Rayhan", saldo: 5000000 });
repoNasabah.tambah({ id: 102, nama: "Dewi Lestari", saldo: 8500000 });

const nasabah101 = repoNasabah.temukanById(101);
console.log("Cari ID 101:", nasabah101?.nama, "| Saldo: Rp", nasabah101?.saldo.toLocaleString("id-ID"));
