// ============================================================
// 04 · Generic Classes — Solusi
// Jalankan: npm run materi -- materi/09-generics/04-generic-classes/solusi.ts
// ============================================================

export class Tumpukan<T> {
  private elemen: T[] = [];

  public dorong(item: T): void {
    this.elemen.push(item);
  }

  public tarik(): T | undefined {
    return this.elemen.pop();
  }

  public intipAtas(): T | undefined {
    return this.elemen[this.elemen.length - 1];
  }

  public get ukuran(): number {
    return this.elemen.length;
  }

  public apakahKosong(): boolean {
    return this.elemen.length === 0;
  }
}

console.log("=== PENGUJIAN SOLUSI GENERIC STACK (TUMPUKAN) ===");

const riwayatUndo = new Tumpukan<string>();

riwayatUndo.dorong("1. Ketik Judul Dokumen");
riwayatUndo.dorong("2. Beri Warna Teks Merah");
riwayatUndo.dorong("3. Hapus Paragraf 2");

console.log(`Total Aksi Tersimpan : ${riwayatUndo.ukuran}`);
console.log(`Aksi Paling Atas     : ${riwayatUndo.intipAtas()}`);

console.log("\n--- Menjalankan Operasi Undo ---");
const aksiBatal = riwayatUndo.tarik();
console.log(`Aksi yang Dibatalkan : ${aksiBatal}`);

console.log(`Aksi Sekarang Paling Atas : ${riwayatUndo.intipAtas()}`);
console.log(`Sisa Tumpukan             : ${riwayatUndo.ukuran} aksi`);
