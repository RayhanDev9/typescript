// ============================================================
// 08 · IIFE — Contoh
// Jalankan: npm run materi -- materi/05-closer-look-functions/08-iife/contoh.ts
// ============================================================

// 1. IIFE Tradisional dengan Function Expression
(function () {
  const tokenRahasia = "XYZ-999-SECRET";
  console.log("=== 1. IIFE FUNGSI BIASA ===");
  console.log("Token hanya hidup di dalam IIFE ini:", tokenRahasia);
})();

// 2. IIFE Modern dengan Arrow Function
(() => {
  const waktuMulai = new Date().toLocaleTimeString();
  console.log("\n=== 2. IIFE ARROW FUNCTION ===");
  console.log(`Proses background dimulai pada: ${waktuMulai}`);
})();

// 3. IIFE dengan Nilai Balik (Return Value) untuk Inisialisasi Kompleks
const konfigurasiDatabase = (() => {
  const host = "db.internal.lan";
  const port = 5432;
  const dbName = "app_prod";
  const isSSL = true;

  // Lakukan komputasi string koneksi
  return {
    connectionString: `postgres://${host}:${port}/${dbName}?ssl=${isSSL}`,
    status: "READY",
  };
})();

console.log("\n=== 3. VARIABEL DIBUAT DARI IIFE ===");
console.log("Koneksi DB:", konfigurasiDatabase.connectionString);
console.log("Status    :", konfigurasiDatabase.status);

// 4. Perbandingan dengan Block Scope Modern ({ })
{
  const variabelBlok = "Saya privat di dalam kurung kurawal ini saja";
  console.log("\n=== 4. BLOCK SCOPE MODERN ===");
  console.log(variabelBlok);
}
