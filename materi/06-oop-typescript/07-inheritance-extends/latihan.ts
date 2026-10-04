// ============================================================
// 07 · Pewarisan Class (extends & super) — Latihan
// Jalankan: npm run materi -- materi/06-oop-typescript/07-inheritance-extends/latihan.ts
// ============================================================

// TODO 1: Diberikan class `Pegawai` di bawah ini.
class Pegawai {
  constructor(
    public nama: string,
    public gajiPokok: number
  ) {}

  public cetakGaji(): void {
    console.log(`[PEGAWAI] ${this.nama} -> Gaji: Rp${this.gajiPokok.toLocaleString("id-ID")}`);
  }
}

// TODO 2: Buat class `Manager` yang mewarisi (`extends`) class `Pegawai`:
//         - Constructor menerima: `nama: string`, `gajiPokok: number`, dan `bonusTunjangan: number`.
//         - Panggil `super(nama, gajiPokok)`.
//         - Override method `cetakGaji()` untuk mencetak total gaji (gajiPokok + bonusTunjangan).


// TODO 3: Buat 1 instance `Pegawai` ("Budi", gaji: 5.000.000)
//         dan 1 instance `Manager` ("Siti", gaji: 12.000.000, bonus: 4.000.000).
//         Panggil `cetakGaji()` pada kedua objek tersebut.

