// ============================================================
// 16 · Method String Bagian 1 — Solusi
// ============================================================

// TODO 1
const kalimat = "Saya sedang belajar TypeScript hari ini!";
const posisiTS = kalimat.indexOf("TypeScript");
const kataTS = kalimat.slice(posisiTS, posisiTS + "TypeScript".length);
console.log("TODO 1 -> Posisi:", posisiTS, "| Hasil slice:", `"${kataTS}"`);

// TODO 2
const emailMentah = "   User.Baru_2026@Gmail.COM   ";
const emailBersih = emailMentah.trim().toLowerCase();
console.log("TODO 2 -> Email Bersih:", emailBersih);

// TODO 3
const transaksi = "Biaya langganan 10 dollar per bulan atau 100 dollar per tahun.";
const transaksiRupiah = transaksi.replaceAll("dollar", "rupiah");
console.log("TODO 3 ->", transaksiRupiah);

// TODO 4
function cekEkstensiGambar(namaFile: string): boolean {
  const fileKecil = namaFile.toLowerCase();
  return (
    fileKecil.endsWith(".png") ||
    fileKecil.endsWith(".jpg") ||
    fileKecil.endsWith(".jpeg")
  );
}

console.log("TODO 4 -> Cek 'foto.PNG':", cekEkstensiGambar("foto.PNG")); // true
console.log("TODO 4 -> Cek 'data.pdf':", cekEkstensiGambar("data.pdf")); // false
console.log("TODO 4 -> Cek 'avatar.jpeg':", cekEkstensiGambar("avatar.jpeg")); // true
