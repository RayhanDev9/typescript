// ============================================================
// 05 · Short-Circuiting (&& dan ||) — Contoh
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/05-short-circuiting/contoh.ts
// ============================================================

console.log("=== 1. SHORT-CIRCUITING DENGAN OPERATOR || (OR) ===");
// Operator || mengembalikan nilai TRUTHY pertama yang ditemui

const val1: any = 3;
const val2: any = "";
const val3: any = undefined;
const val4: any = null;
const val5: any = "Rayhan";

console.log(val1 || val5);                   // 3 (karena 3 adalah truthy pertama)
console.log(val2 || val5);                   // "Rayhan" (karena "" falsy)
console.log(true || 0);                      // true
console.log(val3 || val4);                   // null (keduanya falsy, ambil yang terakhir)
console.log(val3 || 0 || "" || "Halo" || 23); // "Halo" (truthy pertama)

// Contoh Kasus Nyata: Mengisi Nilai Bawaan (Default Value)
interface Resto {
  nama: string;
  kapasitasTamu?: number;
  pesanAntar?: (menu: string) => void;
}

const warung1: Resto = {
  nama: "Warung Sederhana",
};

// Jika kapasitasTamu undefined, gunakan 10
const jumlahTamu1 = warung1.kapasitasTamu || 10;
console.log(`Kapasitas warung1: ${jumlahTamu1} orang`); // 10

// ⚠️ Perangkap || dengan angka 0
const warung2: Resto = {
  nama: "Resto Tutup",
  kapasitasTamu: 0, // Memang 0 tamu saat ini
};
const jumlahTamu2 = warung2.kapasitasTamu || 10;
console.log(`Kapasitas warung2 (keliru jadi 10 karena 0 falsy): ${jumlahTamu2}`);

console.log("\n=== 2. SHORT-CIRCUITING DENGAN OPERATOR && (AND) ===");
// Operator && mengembalikan nilai FALSY pertama yang ditemui,
// atau nilai terakhir jika SEMUA operand bernilai truthy

const nol: any = 0;
const tujuh: any = 7;

console.log(nol && val5);                    // 0 (karena 0 falsy)
console.log(tujuh && val5);                  // "Rayhan" (keduanya truthy)
console.log(val5 && 23 && val4 && "Dunia"); // null (karena val4 bernilai null/falsy)

// Contoh Kasus Nyata: Pemanggilan Metode Opsional
const warung3: Resto = {
  nama: "Resto Cepat Saji",
  pesanAntar: (menu: string) => console.log(`[SUKSES] Pesanan ${menu} sedang diantar!`),
};

// Pemanggilan fungsi opsional dengan &&:
function cobaPesanAntar(resto: Resto, menu: string) {
  // Hanya panggil pesanAntar jika fungsinya memang didefinisikan (truthy)
  resto.pesanAntar && resto.pesanAntar(menu);
}

cobaPesanAntar(warung1, "Nasi Goreng"); // Tidak melakukan apa-apa karena warung1.pesanAntar undefined
cobaPesanAntar(warung3, "Burger Komplit"); // Berhasil memanggil!
