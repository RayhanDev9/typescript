// ============================================================
// 05 · Fungsi Mengembalikan Fungsi — Solusi
// ============================================================

// TODO 1
function buatSalamBahasa(salam: string) {
  return function (nama: string): string {
    return `${salam}, ${nama}!`;
  };
}

const sapaJepang = buatSalamBahasa("Konnichiwa");
console.log("TODO 1 ->", sapaJepang("Tanaka"));

// TODO 2
const salamArrow = (salam: string) => (nama: string): string => `${salam}, ${nama}!`;
console.log("TODO 2 ->", salamArrow("Bonjour")("Pierre"));

// TODO 3
function buatPangkat(pangkat: number) {
  return (angka: number): number => angka ** pangkat;
}

const kuadrat = buatPangkat(2);
const kubik = buatPangkat(3);

console.log("TODO 3 -> Kuadrat 4:", kuadrat(4)); // 16
console.log("TODO 3 -> Kubik 4  :", kubik(4));   // 64
