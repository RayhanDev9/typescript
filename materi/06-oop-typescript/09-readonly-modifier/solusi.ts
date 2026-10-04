// ============================================================
// 09 · readonly Modifier — Solusi
// ============================================================

// TODO 1
class KTP {
  constructor(
    public readonly nik: string,
    public nama: string,
    public readonly tempatLahir: string,
    public alamat: string
  ) {}
}

// TODO 2
const ktpSaya = new KTP(
  "3273012345670001",
  "Ahmad Rayhan",
  "Bandung",
  "Jl. Dago No. 10"
);

console.log("=== DATA KTP AWAL ===");
console.log(`NIK    : ${ktpSaya.nik}`);
console.log(`Nama   : ${ktpSaya.nama}`);
console.log(`TTL    : ${ktpSaya.tempatLahir}`);
console.log(`Alamat : ${ktpSaya.alamat}`);

// TODO 3
ktpSaya.alamat = "Jl. Asia Afrika No. 50";

console.log("\n=== DATA KTP SETELAH PINDAH ALAMAT ===");
console.log(`Alamat Baru : ${ktpSaya.alamat}`);
