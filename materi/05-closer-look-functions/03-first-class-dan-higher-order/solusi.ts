// ============================================================
// 03 · First-Class & Higher-Order Functions — Solusi
// ============================================================

// TODO 1
type KalkulasiFn = (a: number, b: number) => number;

// TODO 2
const tambah: KalkulasiFn = function (a, b) {
  return a + b;
};

const kali: KalkulasiFn = function (a, b) {
  return a * b;
};

// TODO 3
function eksekusiOperasi(a: number, b: number, operasi: KalkulasiFn): void {
  const hasil = operasi(a, b);
  console.log(`[${operasi.name || "Operasi"}] Hasil ${a} dan ${b} = ${hasil}`);
}

// TODO 4
eksekusiOperasi(10, 5, tambah);
eksekusiOperasi(10, 5, kali);
