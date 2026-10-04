// ============================================================
// 08 · IIFE — Solusi
// ============================================================

// TODO 1
console.log("TODO 1:");
(function () {
  console.log("Sistem inisialisasi berhasil dimuat!");
})();

// TODO 2
console.log("\nTODO 2:");
(() => {
  const versi = "2.4.0";
  console.log(`Versi Aplikasi: ${versi}`);
})();

// TODO 3
console.log("\nTODO 3:");
const totalSetelahDiskon = (() => {
  const hargaAwal = 300000;
  const diskon = 25;
  return hargaAwal - (hargaAwal * diskon) / 100;
})();

console.log(`Total setelah diskon 25%: Rp${totalSetelahDiskon.toLocaleString("id-ID")}`);
