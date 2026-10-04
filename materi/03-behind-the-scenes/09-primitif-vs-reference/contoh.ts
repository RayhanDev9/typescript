// ============================================================
// 09 · Primitif vs Reference — Contoh
// Jalankan: npm run materi -- materi/03-behind-the-scenes/09-primitif-vs-reference/contoh.ts
// ============================================================

// --- 1. Tipe Primitif (Disimpan di Call Stack) ---
let hargaAwal: number = 10000;
let hargaDiskon: number = hargaAwal;

hargaDiskon = 8000;

console.log("=== Tipe Primitif ===");
console.log("Harga Awal   :", hargaAwal);   // 10000 (tidak berubah)
console.log("Harga Diskon :", hargaDiskon); // 8000

// --- 2. Tipe Reference / Objek (Disimpan di Memory Heap) ---
interface AkunPengguna {
  username: string;
  saldo: number;
}

const akun1: AkunPengguna = {
  username: "rayhan_ts",
  saldo: 500000
};

// Menyalin referensi (alamat memori heap yang sama):
const akun2: AkunPengguna = akun1;

// Mengubah akun2:
akun2.saldo = 750000;

console.log("\n=== Tipe Reference (Objek) ===");
console.log("Saldo Akun 1:", akun1.saldo); // 750000 (Ikut berubah!)
console.log("Saldo Akun 2:", akun2.saldo); // 750000
console.log("Apakah akun1 === akun2?", akun1 === akun2); // true (alamat memori sama)
