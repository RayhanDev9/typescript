// ============================================================
// 11 · Logika Boolean — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/11-logika-boolean/contoh.ts
// ============================================================

const punyaSIM: boolean = true;
const penglihatanBaik: boolean = true;
const sedangLelah: boolean = false;

// --- && (DAN) ---
console.log("Punya SIM DAN penglihatan baik:", punyaSIM && penglihatanBaik); // true

// --- || (ATAU) ---
console.log("Punya SIM ATAU lelah:", punyaSIM || sedangLelah); // true

// --- ! (BUKAN) ---
console.log("Tidak lelah:", !sedangLelah); // true

// --- Menggabungkan ---
if (punyaSIM && penglihatanBaik && !sedangLelah) {
  console.log("Boleh menyetir 🚗");
} else {
  console.log("Sebaiknya orang lain yang menyetir");
}

// --- Tanda kurung untuk prioritas ---
const akhirPekan: boolean = true;
const hariLibur: boolean = false;
const cuacaCerah: boolean = true;

if ((akhirPekan || hariLibur) && cuacaCerah) {
  console.log("Ayo piknik! 🧺");
} else {
  console.log("Di rumah saja");
}

// --- || untuk nilai bawaan ---
const inputNama: string = "";
const namaTampil = inputNama || "Tamu";
console.log(`Halo, ${namaTampil}`); // Halo, Tamu

// --- ?? untuk nilai bawaan yang aman untuk angka 0 ---
const jumlahTamu: number = 0;
console.log("Dengan || :", jumlahTamu || 10); // 10 ❌
console.log("Dengan ?? :", jumlahTamu ?? 10); // 0  ✅

// --- Short-circuit + narrowing ---
const namaKota = process.env.KOTA; // string | undefined
if (namaKota && namaKota.length > 3) {
  console.log(`Kota: ${namaKota}`);
} else {
  console.log("Nama kota tidak tersedia atau terlalu pendek");
}
