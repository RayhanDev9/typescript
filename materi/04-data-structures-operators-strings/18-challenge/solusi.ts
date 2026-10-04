// ============================================================
// 18 · Final Challenge Modul 04 — Solusi
// ============================================================

// ============================================================
// 🏆 BAGIAN 1: ANALISIS DATA PERTANDINGAN SEPAK BOLA
// ============================================================

interface DataPertandingan {
  tim1: string;
  tim2: string;
  pemain: [string[], string[]];
  skor: string;
  pencetakGol: string[];
  odds: {
    tim1: number;
    seri: number;
    tim2: number;
  };
}

const pertandingan: DataPertandingan = {
  tim1: "Bayern Munich",
  tim2: "Borussia Dortmund",
  pemain: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  skor: "4:0",
  pencetakGol: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  odds: {
    tim1: 1.33,
    seri: 3.25,
    tim2: 6.5,
  },
};

console.log("=== HASIL ANALISIS SEPAK BOLA ===");

// TODO 1: Destructuring pemain tim
const [pemain1, pemain2] = pertandingan.pemain;
console.log("1. Pemain Tim 1:", pemain1.length, "| Tim 2:", pemain2.length);

// TODO 2: Kiper & Pemain Lapangan (Rest Pattern)
const [kiper, ...pemainLapangan] = pemain1;
console.log(`2. Kiper Tim 1: ${kiper}, Pemain Lapangan: ${pemainLapangan.join(", ")}`);

// TODO 3: Semua pemain (Spread Operator)
const semuaPemain = [...pemain1, ...pemain2];
console.log("3. Total seluruh pemain:", semuaPemain.length);

// TODO 4: Pemain Pengganti
const pemainFinalTim1 = [...pemain1, "Thiago", "Coutinho", "Perisic"];
console.log("4. Skuad Final Tim 1 (+substitutes):", pemainFinalTim1);

// TODO 5: Destruktur Odds
const {
  odds: { tim1, seri, tim2 },
} = pertandingan;
console.log(`5. Odds: Menang Tim1: ${tim1}, Seri: ${seri}, Menang Tim2: ${tim2}`);

// TODO 6: Statistik Pencetak Gol
console.log("\n6. Daftar Pencetak Gol:");
for (const [index, pencetak] of pertandingan.pencetakGol.entries()) {
  console.log(`   Gol ${index + 1}: ${pencetak}`);
}

// TODO 7: Rata-rata Odds
const daftarOdds = Object.values(pertandingan.odds);
let totalOdds = 0;
for (const odd of daftarOdds) {
  totalOdds += odd;
}
const rataRataOdds = totalOdds / daftarOdds.length;
console.log(`\n7. Rata-rata Peluang Taruhan: ${rataRataOdds.toFixed(2)}`);

// TODO 8: Map Peristiwa Pertandingan
const peristiwaGame = new Map<number, string>([
  [17, "⚽ Gol (Bayern)"],
  [36, "🔁 Pergantian Pemain"],
  [47, "⚽ Gol (Bayern)"],
  [64, "🟨 Kartu Kuning"],
  [69, "🔴 Kartu Merah"],
  [80, "⚽ Gol (Bayern)"],
  [92, "🟨 Kartu Kuning"],
]);

console.log("\n8. Log Kejadian Pertandingan:");
for (const [menit, aksi] of peristiwaGame) {
  const babak = menit <= 45 ? "[BABAK 1]" : "[BABAK 2]";
  console.log(`   ${babak} Menit ${String(menit).padStart(2, "0")}: ${aksi}`);
}

// ============================================================
// ✈️ BAGIAN 2: PARSER JADWAL PENERBANGAN
// ============================================================

console.log("\n=== HASIL LOG JADWAL PENERBANGAN ===");

const penerbanganMentah =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const ambilKodeBandara = (str: string) => str.slice(0, 3).toUpperCase();

for (const baris of penerbanganMentah.split("+")) {
  const [tipe, asal, tujuan, jam] = baris.split(";");
  
  const icon = tipe.startsWith("_Delayed") ? "🔴" : "✈️";
  const namaTipe = tipe.replaceAll("_", " ").trim();
  const kodeAsal = ambilKodeBandara(asal);
  const kodeTujuan = ambilKodeBandara(tujuan);
  const jamFormat = jam.replace(":", "h");

  const output = `${icon} ${namaTipe} dari ${kodeAsal} ke ${kodeTujuan} (${jamFormat})`;
  console.log(output.padStart(45));
}
