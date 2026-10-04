// ============================================================
// 14 · Strict Mode — Solusi
// ============================================================

// TODO 1
function formatUang(nominal: number, kodeMataUang: string): string {
  return `Rp ${nominal.toLocaleString("id-ID")} (${kodeMataUang})`;
}

console.log(formatUang(75000, "IDR"));

// TODO 2
let nomorTelepon: string | undefined = "08123456789";

if (nomorTelepon) {
  console.log("No. HP:", nomorTelepon.toUpperCase());
} else {
  console.log("Nomor telepon belum dicatat.");
}

// TODO 3
// Cara 1: Ubah tipenya menjadi union jika memang boleh null
const antreanAktifUnion: number | null = null;
console.log("Antrean (boleh null):", antreanAktifUnion);

// Cara 2: Isi dengan angka yang valid jika tipenya wajib number
const antreanAktifAngka: number = 0;
console.log("Antrean (angka):", antreanAktifAngka);
