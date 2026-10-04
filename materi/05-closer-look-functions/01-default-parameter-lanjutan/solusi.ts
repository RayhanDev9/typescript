// ============================================================
// 01 · Default Parameter Lanjutan — Solusi
// ============================================================

// TODO 1
function hitungBiayaKamarHotel(
  namaTamu: string,
  jumlahMalam: number = 1,
  tarifPerMalam: number = 500000,
  totalBiaya: number = jumlahMalam * tarifPerMalam
): string {
  return `Tamu ${namaTamu} memesan ${jumlahMalam} malam. Total: Rp${totalBiaya.toLocaleString("id-ID")}`;
}

// TODO 2
console.log(hitungBiayaKamarHotel("Budi"));
console.log(hitungBiayaKamarHotel("Siti", 3));
console.log(hitungBiayaKamarHotel("Rayhan", undefined, 400000));
