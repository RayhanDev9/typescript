// ============================================================
// 10 · Optional Chaining (?.) — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/10-optional-chaining/contoh.ts
// ============================================================

interface JamBuka {
  buka: number;
  tutup: number;
}

interface Restoran {
  nama: string;
  jamOperasional?: {
    senin?: JamBuka;
    kamis?: JamBuka;
    jumat?: JamBuka;
  };
  menuFavorit?: string[];
  pesanMeja?: (jumlahOrang: number) => void;
}

const restoA: Restoran = {
  nama: "Trattoria Deliziosa",
  jamOperasional: {
    senin: { buka: 10, tutup: 22 },
    jumat: { buka: 9, tutup: 23 },
  },
  menuFavorit: ["Pizza Margherita", "Pasta Pesto"],
  pesanMeja: (jumlah: number) => console.log(`[SUKSES] Meja untuk ${jumlah} orang telah dipesan!`),
};

const restoB: Restoran = {
  nama: "Kedai Kopi Minimalis",
};

console.log("=== 1. OPTIONAL CHAINING PADA PROPERTI BERSARANG ===");

// Mengakses properti hari yang ada
console.log("Resto A - Buka Senin:", restoA.jamOperasional?.senin?.buka); // 10

// Mengakses properti hari yang TIDAK ada di restoA (kamis)
console.log("Resto A - Buka Kamis:", restoA.jamOperasional?.kamis?.buka); // undefined

// Mengakses objek jamOperasional yang TIDAK ada sama sekali di restoB
console.log("Resto B - Buka Senin:", restoB.jamOperasional?.senin?.buka); // undefined (Aman!)

console.log("\n=== 2. KOMBINASI DENGAN NULLISH COALESCING (??) ===");
const hariPeriksa = ["senin", "selasa", "rabu", "kamis", "jumat"];

for (const hari of hariPeriksa) {
  // Akses dinamis dengan kurung siku [hari]
  const jamBuka = (restoA.jamOperasional as any)?.[hari]?.buka ?? "TUTUP";
  console.log(`Hari ${hari.padEnd(6)}: Buka jam ${jamBuka}`);
}

console.log("\n=== 3. OPTIONAL CHAINING PADA METHOD (?.) ===");
// Method ada
restoA.pesanMeja?.(4);

// Method TIDAK ada (di restoB) -> dilewati dengan aman
restoB.pesanMeja?.(2);
console.log("Pemanggilan restoB.pesanMeja?.() selesai tanpa error.");

console.log("\n=== 4. OPTIONAL CHAINING PADA ARRAY (?.[]) ===");
console.log("Menu #1 Resto A:", restoA.menuFavorit?.[0] ?? "Menu belum tersedia");
console.log("Menu #1 Resto B:", restoB.menuFavorit?.[0] ?? "Menu belum tersedia");
