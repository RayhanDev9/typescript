// ============================================================
// 14 · Map: Iterasi & Konversi — Solusi
// ============================================================

// TODO 1
const kursMataUang = new Map<string, number>([
  ["USD", 16000],
  ["EUR", 17500],
  ["SGD", 12000],
  ["JPY", 105],
]);

console.log("TODO 1 (Kurs Map):", kursMataUang);

// TODO 2
console.log("\nTODO 2 (Daftar Kurs):");
for (const [kode, nominal] of kursMataUang) {
  console.log(`1 ${kode} = Rp${nominal.toLocaleString("id-ID")}`);
}

// TODO 3
const nilaiSiswa: Record<string, number> = {
  Andi: 85,
  Budi: 90,
  Citra: 78,
  Dewi: 95,
};

const mapNilai = new Map<string, number>(Object.entries(nilaiSiswa));
console.log("\nTODO 3 (Map Nilai):", mapNilai);
console.log("Nilai Budi:", mapNilai.get("Budi"));

// TODO 4
const objKurs = Object.fromEntries(kursMataUang);
console.log("\nTODO 4 (Object Kembali):", objKurs);
