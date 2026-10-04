// ============================================================
// 18 · Final Challenge Modul 04 — Latihan
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/18-challenge/latihan.ts
// ============================================================

// ============================================================
// 🏆 BAGIAN 1: ANALISIS DATA PERTANDINGAN SEPAK BOLA
// ============================================================

interface DataPertandingan {
  tim1: string;
  tim2: string;
  pemain: [string[], string[]];
  skor: string;
  pencetakGol: string[];
  odds: {
    tim1: number;
    seri: number;
    tim2: number;
  };
}

const pertandingan: DataPertandingan = {
  tim1: "Bayern Munich",
  tim2: "Borussia Dortmund",
  pemain: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  skor: "4:0",
  pencetakGol: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  odds: {
    tim1: 1.33,
    seri: 3.25,
    tim2: 6.5,
  },
};

// TODO 1: Bongkar array `pemain` ke dalam variabel `pemain1` dan `pemain2`.


// TODO 2: Dari `pemain1`, buat variabel `kiper` untuk pemain pertama,
//         dan array `pemainLapangan` untuk 10 pemain lainnya menggunakan Rest Pattern.


// TODO 3: Buat satu array `semuaPemain` yang menggabungkan seluruh pemain
//         dari `pemain1` dan `pemain2` menggunakan Spread Operator.


// TODO 4: Buat array `pemainFinalTim1` yang berisi semua pemain awal tim1
//         ditambah 3 pemain pengganti: "Thiago", "Coutinho", "Perisic".


// TODO 5: Destruktur properti `odds` ke dalam 3 variabel: `tim1`, `seri`, dan `tim2`.


// TODO 6: Lakukan perulangan pada array `pencetakGol` dengan `for...of` dan `.entries()`
//         untuk mencetak: "Gol 1: Lewandowski", "Gol 2: Gnarby", dst.


// TODO 7: Hitung nilai rata-rata dari seluruh odds (tim1, seri, tim2)
//         menggunakan `Object.values(pertandingan.odds)`.


// TODO 8: Buat sebuah Map bernama `peristiwaGame` yang memetakan menit ke jenis peristiwa:
//         - Menit 17: "⚽ Gol (Bayern)"
//         - Menit 36: "🔁 Pergantian Pemain"
//         - Menit 47: "⚽ Gol (Bayern)"
//         - Menit 64: "🟨 Kartu Kuning"
//         - Menit 69: "🔴 Kartu Merah"
//         - Menit 80: "⚽ Gol (Bayern)"
//         - Menit 92: "🟨 Kartu Kuning"
//         Iterasi Map tersebut dan cetak dengan format:
//         "[BABAK 1] Menit 17: ⚽ Gol (Bayern)" (jika menit <= 45)
//         "[BABAK 2] Menit 64: 🟨 Kartu Kuning" (jika menit > 45)



// ============================================================
// ✈️ BAGIAN 2: PARSER JADWAL PENERBANGAN
// ============================================================

const penerbanganMentah =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// TODO 9: Parse string penerbangan di atas dan tampilkan output yang rapi:
//         Format tiap baris:
//         "<icon> <Tipe> dari <KODE_ASAL> ke <KODE_TUJUAN> (<JAM>)"
//         - Jika ada 'Delayed', icon = '🔴', jika tidak icon = '✈️'
//         - Kode bandara adalah 3 huruf pertama diubah ke HURUF BESAR (fao -> FAO)
//         - Jam diubah formatnya (11:25 -> 11h25)

