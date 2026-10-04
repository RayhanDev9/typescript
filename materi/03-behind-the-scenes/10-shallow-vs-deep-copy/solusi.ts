// ============================================================
// 10 · Shallow vs Deep Copy — Solusi
// ============================================================

interface ProfilGame {
  namaPemain: string;
  level: number;
  inventori: {
    senjata: string;
    emas: number;
  };
}

const pemainUtama: ProfilGame = {
  namaPemain: "Ksatria",
  level: 10,
  inventori: {
    senjata: "Pedang Besi",
    emas: 500
  }
};

// TODO 1
const pemainCadangan: ProfilGame = structuredClone(pemainUtama);

// TODO 2
pemainCadangan.namaPemain = "Ksatria Bayangan";
pemainCadangan.level = 12;
pemainCadangan.inventori.senjata = "Tombak Emas";
pemainCadangan.inventori.emas = 1000;

// TODO 3
console.log("=== Profil Pemain Utama (Asli) ===");
console.log(pemainUtama);

console.log("\n=== Profil Pemain Cadangan (Deep Clone) ===");
console.log(pemainCadangan);
