// ============================================================
// 07 · Keyword this — Solusi
// ============================================================

interface Kendaraan {
  merek: string;
  kecepatanMaks: number;
  info(): void;
}

// TODO 1
const mobilSport: Kendaraan = {
  merek: "Ferrari",
  kecepatanMaks: 320,
  info() {
    console.log(`Mobil ${this.merek} melaju hingga kecepatan maksimal ${this.kecepatanMaks} km/jam 🏎️`);
  }
};

// TODO 2
const trukKargo: Kendaraan = {
  merek: "Volvo Truck",
  kecepatanMaks: 110,
  info: mobilSport.info // Meminjam method info
};

// TODO 3
mobilSport.info();
trukKargo.info();
