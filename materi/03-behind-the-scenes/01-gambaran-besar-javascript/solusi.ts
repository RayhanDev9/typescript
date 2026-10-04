// ============================================================
// 01 · Gambaran Besar JavaScript & TS — Solusi
// ============================================================

// TODO 1
function transformasiArray(
  angkaList: number[],
  fungsiTransformasi: (n: number) => number
): number[] {
  const hasil: number[] = [];
  for (let i = 0; i < angkaList.length; i++) {
    hasil.push(fungsiTransformasi(angkaList[i]));
  }
  return hasil;
}

// TODO 2
const kuadratkan = (n: number): number => n * n;
const tambahSepuluh = (n: number): number => n + 10;

const dataAwal = [1, 2, 3, 4, 5];

console.log("Data Awal :", dataAwal);
console.log("Kuadrat   :", transformasiArray(dataAwal, kuadratkan));
console.log("+ 10      :", transformasiArray(dataAwal, tambahSepuluh));
