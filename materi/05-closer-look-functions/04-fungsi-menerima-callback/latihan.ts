// ============================================================
// 04 · Fungsi Menerima Callback — Latihan
// Jalankan: npm run materi -- materi/05-closer-look-functions/04-fungsi-menerima-callback/latihan.ts
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

// TODO 1: Buat tipe callback `TransformPesananFn` yang menerima parameter `(p: PesananResto)`
//         dan mengembalikan nilai `string`.


// TODO 2: Buat Higher-Order Function `formatDaftarPesanan(daftar: PesananResto[], fn: TransformPesananFn): string[]`
//         yang mengiterasi setiap pesanan dan mengubahnya menggunakan callback `fn`.


// TODO 3: Panggil `formatDaftarPesanan` dengan 2 callback berbeda:
//         a. Callback yang mengembalikan: "Menu: <menu> (Rp<harga>)"
//         b. Callback yang mengembalikan: "[<kategori>] <menu>"

