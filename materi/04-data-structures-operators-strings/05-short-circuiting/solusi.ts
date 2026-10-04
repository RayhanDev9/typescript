// ============================================================
// 05 · Short-Circuiting (&& dan ||) — Solusi
// ============================================================

// TODO 1
const strKosong: any = "";
const strAdmin: any = "Admin";
const strAktif: any = "Aktif";
const valNull: any = null;

const hasilOr1 = strKosong || "Default";
const hasilOr2 = strAdmin || "Guest";
const hasilAnd1 = strAktif && "Login Sukses";
const hasilAnd2 = valNull && "Data Ada";

console.log("TODO 1:", { hasilOr1, hasilOr2, hasilAnd1, hasilAnd2 });
// hasilOr1: "Default", hasilOr2: "Admin", hasilAnd1: "Login Sukses", hasilAnd2: null

// TODO 2
const inputUser: string = "";
const namaTampilan = inputUser || "Tamu Tanpa Nama";
console.log("TODO 2 (Nama tampilan):", namaTampilan);

// TODO 3
type NotifikasiFn = ((pesan: string) => void) | undefined;
const kirimNotifikasi: NotifikasiFn = (pesan: string) => {
  console.log("Notifikasi Terkirim:", pesan);
};

kirimNotifikasi && kirimNotifikasi("Halo! Sistem sedang diperbarui.");
