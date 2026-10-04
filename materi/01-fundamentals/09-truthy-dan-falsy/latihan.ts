// ============================================================
// 09 · Truthy & Falsy — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/09-truthy-dan-falsy/latihan.ts
// ============================================================

// TODO 1: Tebak dulu: truthy atau falsy? Tulis tebakanmu di komentar,
//         lalu buktikan dengan Boolean().
//         a) "halo"   b) 0   c) "0"   d) ""   e) 100   f) null   g) " "


// TODO 2: Jika `komentar` tidak kosong, tampilkan "Komentar: ...".
//         Jika kosong, tampilkan "Belum ada komentar".
//         (Gunakan truthy/falsy, tanpa membandingkan dengan "")
const komentar: string = "";


// TODO 3: Kode di bawah punya bug logika. Siswa dengan nilai 0 seharusnya
//         tetap tercatat "Nilai: 0", bukan "Nilai belum diinput".
//         Perbaiki kondisinya.
const nilaiUjian: number = 0;
if (nilaiUjian) {
  console.log(`Nilai: ${nilaiUjian}`);
} else {
  console.log("Nilai belum diinput");
}
