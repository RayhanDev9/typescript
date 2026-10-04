// ============================================================
// 22 · Method Object & this — Solusi
// ============================================================

// TODO 1
interface PesertaFitness {
  nama: string;
  beratKg: number;
  tinggiMeter: number;
  hitungBMI(): number;
  kategoriBMI(): string;
  ringkasan(): string;
}

// TODO 2
const pesertaAndi: PesertaFitness = {
  nama: "Andi",
  beratKg: 78,
  tinggiMeter: 1.69,

  hitungBMI() {
    return this.beratKg / this.tinggiMeter ** 2;
  },

  kategoriBMI() {
    const bmi = this.hitungBMI();
    if (bmi < 18.5) return "Kurus";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Gemuk";
    return "Obesitas";
  },

  ringkasan() {
    return `${this.nama} (Berat: ${this.beratKg}kg, Tinggi: ${this.tinggiMeter}m) memiliki BMI ${this.hitungBMI().toFixed(1)} [Kategori: ${this.kategoriBMI()}]`;
  }
};

const pesertaBudi: PesertaFitness = {
  nama: "Budi",
  beratKg: 92,
  tinggiMeter: 1.95,

  hitungBMI() {
    return this.beratKg / this.tinggiMeter ** 2;
  },

  kategoriBMI() {
    const bmi = this.hitungBMI();
    if (bmi < 18.5) return "Kurus";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Gemuk";
    return "Obesitas";
  },

  ringkasan() {
    return `${this.nama} (Berat: ${this.beratKg}kg, Tinggi: ${this.tinggiMeter}m) memiliki BMI ${this.hitungBMI().toFixed(1)} [Kategori: ${this.kategoriBMI()}]`;
  }
};

// TODO 3
console.log(pesertaAndi.ringkasan());
console.log(pesertaBudi.ringkasan());

if (pesertaAndi.hitungBMI() > pesertaBudi.hitungBMI()) {
  console.log(`BMI ${pesertaAndi.nama} (${pesertaAndi.hitungBMI().toFixed(1)}) lebih tinggi dari ${pesertaBudi.nama} (${pesertaBudi.hitungBMI().toFixed(1)})`);
} else {
  console.log(`BMI ${pesertaBudi.nama} (${pesertaBudi.hitungBMI().toFixed(1)}) lebih tinggi dari ${pesertaAndi.nama} (${pesertaAndi.hitungBMI().toFixed(1)})`);
}
