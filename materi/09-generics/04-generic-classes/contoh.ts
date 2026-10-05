// ============================================================
// 04 · Generic Classes — Contoh
// Jalankan: npm run materi -- materi/09-generics/04-generic-classes/contoh.ts
// ============================================================

console.log("=== DEMO GENERIC CLASSES (QUEUE / ANTREAN) ===\n");

// ----------------------------------------------------------------------------
// STRUKTUR DATA ANTREAN GENERIK (FIRST IN, FIRST OUT - FIFO)
// ----------------------------------------------------------------------------
export class Antrean<T> {
  private daftar: T[] = [];

  // Menambah elemen ke ujung belakang antrean
  public masuk(item: T): void {
    this.daftar.push(item);
  }

  // Mengambil dan menghapus elemen dari ujung depan
  public keluar(): T | undefined {
    return this.daftar.shift();
  }

  // Mengintip elemen paling depan tanpa menghapusnya
  public intipDepan(): T | undefined {
    return this.daftar[0];
  }

  // Mengecek apakah antrean kosong
  public apakahKosong(): boolean {
    return this.daftar.length === 0;
  }

  // Mendapatkan jumlah antrean saat ini
  public get jumlah(): number {
    return this.daftar.length;
  }
}

// 1. Antrean Pasien Klinik (Tipe data: string)
console.log("1. Antrean Pasien Dokter:");
const antreanKlinik = new Antrean<string>();
antreanKlinik.masuk("Pak Budi");
antreanKlinik.masuk("Ibu Dewi");
antreanKlinik.masuk("Anak Rian");

console.log(`   Pasien terdepan : ${antreanKlinik.intipDepan()}`);
console.log(`   Total antrean   : ${antreanKlinik.jumlah} orang`);
console.log(`   Dipanggil masuk : ${antreanKlinik.keluar()}`);
console.log(`   Sisa antrean    : ${antreanKlinik.jumlah} orang\n`);

// 2. Antrean Transaksi Kasir (Tipe data: Objek Transaksi)
interface TransaksiKasir {
  idTransaksi: string;
  nominal: number;
}

console.log("2. Antrean Transaksi Kasir:");
const antreanKasir = new Antrean<TransaksiKasir>();
antreanKasir.masuk({ idTransaksi: "TRX-001", nominal: 150000 });
antreanKasir.masuk({ idTransaksi: "TRX-002", nominal: 85000 });

const trxDiproses = antreanKasir.keluar();
if (trxDiproses) {
  console.log(`   Memproses Nota : ${trxDiproses.idTransaksi} (Rp ${trxDiproses.nominal.toLocaleString("id-ID")})`);
}
console.log(`   Sisa antrean   : ${antreanKasir.jumlah} transaksi`);
