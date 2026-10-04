// ============================================================
// 09 · Closure Dasar — Solusi
// ============================================================

// TODO 1
function buatPenghitung(nilaiAwal: number = 0) {
  let hitungan = nilaiAwal;

  return function (): number {
    hitungan++;
    return hitungan;
  };
}

// TODO 2
const counterA = buatPenghitung(10);
const counterB = buatPenghitung(100);

// TODO 3
console.log("Counter A (panggilan 1):", counterA()); // 11
console.log("Counter A (panggilan 2):", counterA()); // 12
console.log("Counter A (panggilan 3):", counterA()); // 13

console.log("Counter B (panggilan 1):", counterB()); // 101
