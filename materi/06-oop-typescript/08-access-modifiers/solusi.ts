// ============================================================
// 08 · Access Modifiers — Solusi
// ============================================================

// TODO 1
class Karyawan {
  constructor(
    public nama: string,
    protected departemen: string,
    private gaji: number
  ) {}

  public tampilkanProfil(): void {
    console.log(`[KARYAWAN] ${this.nama} - Departemen: ${this.departemen}`);
  }

  public getGaji(): number {
    return this.gaji;
  }
}

// TODO 2
class StaffIT extends Karyawan {
  constructor(nama: string, gaji: number) {
    super(nama, "Teknologi Informasi", gaji);
  }

  public infoStaff(): void {
    console.log(`[STAFF IT] ${this.nama} bekerja di divisi ${this.departemen}`);
  }
}

// TODO 3
console.log("=== PROFIL STAFF ===");
const staff1 = new StaffIT("Andi Pratama", 8000000);
staff1.tampilkanProfil();
staff1.infoStaff();
console.log(`Gaji: Rp${staff1.getGaji().toLocaleString("id-ID")}`);
