// ============================================================
// 11 · Bonus TS: Generics Dasar pada Fungsi — Solusi
// ============================================================

// TODO 1
function bungkusDalamArray<T>(nilai: T): T[] {
  return [nilai];
}

// TODO 2
console.log("TODO 2.a (String) :", bungkusDalamArray("TypeScript"));
console.log("TODO 2.b (Number) :", bungkusDalamArray(2026));
console.log("TODO 2.c (Boolean):", bungkusDalamArray(true));

// TODO 3
function gabungDuaArray<T>(arr1: T[], arr2: T[]): T[] {
  return [...arr1, ...arr2];
}

const angkaGabung = gabungDuaArray([1, 2], [3, 4]);
const kataGabung = gabungDuaArray(["A", "B"], ["C", "D"]);

console.log("\nTODO 3 (Gabung Array):");
console.log("Angka:", angkaGabung);
console.log("Kata :", kataGabung);
