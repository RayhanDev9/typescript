// ============================================================
// 09 · Primitif vs Reference — Solusi
// ============================================================

const daftarSkorTimA: number[] = [10, 20, 30];
const daftarSkorTimB: number[] = daftarSkorTimA;

daftarSkorTimB.push(40);

// TODO 1 & 2
console.log("Skor Tim A:", daftarSkorTimA); // [10, 20, 30, 40]
console.log("Skor Tim B:", daftarSkorTimB); // [10, 20, 30, 40]

/*
  Penjelasan:
  Array adalah tipe Reference yang disimpan di dalam Memory Heap.
  Baris `const daftarSkorTimB = daftarSkorTimA` tidak menduplikasi isi array,
  melainkan hanya menyalin alamat memori pointer di Call Stack.
  Ketika method `.push(40)` dipanggil, data di alamat heap tersebut dimodifikasi,
  sehingga variabel apa pun yang menunjuk ke alamat tersebut akan melihat perubahan yang sama.
*/
