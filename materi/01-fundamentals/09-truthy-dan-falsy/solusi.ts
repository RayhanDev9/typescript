// ============================================================
// 09 · Truthy & Falsy — Solusi
// ============================================================

// TODO 1
console.log(Boolean("halo")); // a) true
console.log(Boolean(0));      // b) false
console.log(Boolean("0"));    // c) true
console.log(Boolean(""));     // d) false
console.log(Boolean(100));    // e) true
console.log(Boolean(null));   // f) false
console.log(Boolean(" "));    // g) true

// TODO 2
const komentar: string = "";
if (komentar) {
  console.log(`Komentar: ${komentar}`);
} else {
  console.log("Belum ada komentar");
}

// TODO 3
const nilaiUjian: number = 0;
if (nilaiUjian >= 0) {
  console.log(`Nilai: ${nilaiUjian}`);
} else {
  console.log("Nilai belum diinput");
}
