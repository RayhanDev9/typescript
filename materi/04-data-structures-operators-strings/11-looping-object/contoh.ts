// ============================================================
// 11 · Looping Object — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/11-looping-object/contoh.ts
// ============================================================

interface JamBuka {
  buka: number;
  tutup: number;
}

const jamOperasionalResto: Record<string, JamBuka> = {
  kamis: { buka: 12, tutup: 22 },
  jumat: { buka: 11, tutup: 23 },
  sabtu: { buka: 0, tutup: 24 }, // 24 jam
};

// 1. Looping Kunci (Keys) dengan Object.keys
const hariBuka = Object.keys(jamOperasionalResto);
console.log("=== 1. OBJECT.KEYS ===");
console.log(`Resto buka selama ${hariBuka.length} hari:`, hariBuka);

let teksBuka = `Buka pada hari: `;
for (const hari of hariBuka) {
  teksBuka += `${hari}, `;
}
console.log(teksBuka);

// 2. Looping Nilai (Values) dengan Object.values
const daftarJam = Object.values(jamOperasionalResto);
console.log("\n=== 2. OBJECT.VALUES ===");
console.log(daftarJam);

// 3. Looping Pasangan Kunci & Nilai (Entries)
console.log("\n=== 3. OBJECT.ENTRIES + DESTRUCTURING ===");
for (const [hari, { buka, tutup }] of Object.entries(jamOperasionalResto)) {
  console.log(`Pada hari ${hari.padEnd(6)}, buka pukul ${buka}:00 s/d ${tutup}:00`);
}

// 4. Contoh Lain: Data Skor Game
const skorPemain: Record<string, number> = {
  Andi: 120,
  Budi: 95,
  Citra: 150,
  Doni: 80,
};

console.log("\n=== 4. CONTOH SKOR PEMAIN ===");
let totalSkor = 0;
for (const skor of Object.values(skorPemain)) {
  totalSkor += skor;
}
const rataRata = totalSkor / Object.values(skorPemain).length;
console.log(`Rata-rata skor (${Object.keys(skorPemain).length} pemain): ${rataRata}`);
