// ============================================================
// 01 · Gambaran Besar JavaScript & TS — Contoh
// Jalankan: npm run materi -- materi/03-behind-the-scenes/01-gambaran-besar-javascript/contoh.ts
// ============================================================

// 1. First-Class Functions: Fungsi sebagai data
const sapa = (nama: string): string => `Halo, ${nama}!`;

// Fungsi menerima fungsi lain sebagai argumen
function prosesPengguna(nama: string, fungsiSapa: (n: string) => string): void {
  console.log(fungsiSapa(nama));
}

prosesPengguna("Rayhan", sapa);

// 2. Multi-Paradigma: Fungsional vs Berorientasi Objek
// Pendekatan OOP
class Kalkulator {
  tambah(a: number, b: number): number {
    return a + b;
  }
}
const k = new Kalkulator();
console.log("OOP Tambah:", k.tambah(10, 5));

// Pendekatan Fungsional
const tambahFungsional = (a: number, b: number): number => a + b;
console.log("Fungsional Tambah:", tambahFungsional(10, 5));
