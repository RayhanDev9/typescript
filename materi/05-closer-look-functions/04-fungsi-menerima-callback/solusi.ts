// ============================================================
// 04 · Fungsi Menerima Callback — Solusi
// ============================================================

interface PesananResto {
  menu: string;
  harga: number;
  kategori: "makanan" | "minuman";
}

const pesananMeja: PesananResto[] = [
  { menu: "Pizza Margherita", harga: 85000, kategori: "makanan" },
  { menu: "Ice Lemon Tea", harga: 18000, kategori: "minuman" },
  { menu: "Pasta Carbonara", harga: 65000, kategori: "makanan" },
  { menu: "Kopi Espresso", harga: 25000, kategori: "minuman" },
];

// TODO 1
type TransformPesananFn = (p: PesananResto) => string;

// TODO 2
function formatDaftarPesanan(
  daftar: PesananResto[],
  fn: TransformPesananFn
): string[] {
  const hasil: string[] = [];
  for (const item of daftar) {
    hasil.push(fn(item));
  }
  return hasil;
}

// TODO 3
console.log("TODO 3.a (Format Harga):");
const format1 = formatDaftarPesanan(
  pesananMeja,
  (p) => `Menu: ${p.menu} (Rp${p.harga.toLocaleString("id-ID")})`
);
console.log(format1);

console.log("\nTODO 3.b (Format Kategori):");
const format2 = formatDaftarPesanan(
  pesananMeja,
  (p) => `[${p.kategori.toUpperCase()}] ${p.menu}`
);
console.log(format2);
