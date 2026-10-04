// ============================================================
// 03 · First-Class & Higher-Order Functions — Contoh
// Jalankan: npm run materi -- materi/05-closer-look-functions/03-first-class-dan-higher-order/contoh.ts
// ============================================================

// 1. Properti Bawaan Fungsi
function formatKodePenerbangan(kode: string): string {
  return kode.toUpperCase().trim();
}

console.log("=== 1. FUNGSI SEBAGAI NILAI (OBJECT) ===");
console.log("Nama fungsi (fn.name)       :", formatKodePenerbangan.name);
console.log("Jumlah parameter (fn.length):", formatKodePenerbangan.length);

// 2. Mendefinisikan Function Type Alias di TypeScript
type FormatterTeks = (str: string) => string;

// Callback 1: Mengambil satu kata tanpa spasi
const satuKata: FormatterTeks = function (str: string): string {
  return str.replaceAll(" ", "").toLowerCase();
};

// Callback 2: Mengubah huruf pertama kata pertama jadi besar
const hurufPertamaKapital: FormatterTeks = function (str: string): string {
  const [pertama, ...sisa] = str.split(" ");
  return [pertama.toUpperCase(), ...sisa].join(" ");
};

// 3. Higher-Order Function: Menerima Fungsi Lain sebagai Parameter
function prosesNamaMaskapai(teks: string, fn: FormatterTeks): void {
  console.log(`\n=== HIGHER-ORDER FUNCTION: ${fn.name} ===`);
  console.log(`Teks Asli   : "${teks}"`);
  console.log(`Hasil Olahan: "${fn(teks)}"`);
}

prosesNamaMaskapai("garuda indonesia airlines", satuKata);
prosesNamaMaskapai("garuda indonesia airlines", hurufPertamaKapital);

// 4. Penggunaan Praktis Bawaan JavaScript: forEach & Event Listener
const daftarKota = ["Jakarta", "Surabaya", "Denpasar"];

// forEach adalah Higher-Order Function, fungsi di dalamnya adalah Callback
daftarKota.forEach((kota, index) => {
  console.log(`Kota ke-${index + 1}: ${kota}`);
});
