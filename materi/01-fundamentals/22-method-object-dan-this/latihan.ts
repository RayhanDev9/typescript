// ============================================================
// 22 · Method Object & this — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/22-method-object-dan-this/latihan.ts
// ============================================================

// Kasus: Kalkulator BMI Objek Pribadi
// Rumus BMI: berat (kg) / (tinggi (m) ** 2)

// TODO 1: Buat interface TypeScript bernama `PesertaFitness`:
//   - `nama`: string
//   - `beratKg`: number
//   - `tinggiMeter`: number
//   - `hitungBMI()`: mengembalikan number (hasil BMI)
//   - `kategoriBMI()`: mengembalikan string ("Kurus", "Normal", "Gemuk", "Obesitas")
//   - `ringkasan()`: mengembalikan string profil lengkap beserta BMI dan kategorinya

interface TypePesertaFitnes {
  nama: string;
  beratKg: number;
  tinggiMeter: number;
  hitungBMI(): number;
  kategoriBMI(): "Kurus" | "Normal" | "Gemuk" | "Obesitas";
  ringkasan(): string;
}

// TODO 2: Buat objek `pesertaAndi: PesertaFitness` dengan berat 78 kg dan tinggi 1.69 m.
//         Buat objek `pesertaBudi: PesertaFitness` dengan berat 92 kg dan tinggi 1.95 m.

const pesertaAndi: TypePesertaFitnes = {
  nama: "Andi",
  beratKg: 92,
  tinggiMeter: 1.95,
  hitungBMI() {
    return this.beratKg / (this.tinggiMeter * this.tinggiMeter);
  },
  kategoriBMI() {
    const bmi = this.hitungBMI();
    if (bmi < 18.5) {
      return "Kurus";
    } else if (bmi < 25) {
      return "Normal";
    } else if (bmi < 30) {
      return "Gemuk";
    } else {
      return "Obesitas";
    }
  },
  ringkasan() {
    return `Nama ${this.nama}, berat ${this.beratKg}, tinggi ${this.tinggiMeter}, jumlah bmi ${this.hitungBMI()}, kategori ${this.kategoriBMI()}`;
  },
};

// TODO 3: Tampilkan `ringkasan()` untuk kedua peserta.
//         Bandingkan siapa yang memiliki BMI lebih tinggi dan tampilkan nama pemenangnya!

console.info(pesertaAndi.ringkasan());
