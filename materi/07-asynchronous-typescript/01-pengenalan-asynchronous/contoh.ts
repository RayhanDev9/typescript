// ============================================================================
// 07 · Asynchronous TypeScript
// 01 · Pengenalan Asynchronous: Synchronous vs Asynchronous (Contoh)
// ============================================================================

// 1. Contoh Kode Synchronous (Berjalan Berurutan dari Atas ke Bawah)
console.log("=== 1. Eksekusi Synchronous ===");
console.log("Langkah 1: Menyiapkan bahan masakan");
console.log("Langkah 2: Menyalakan kompor");
console.log("Langkah 3: Memasak bumbu");

// 2. Contoh Kode Asynchronous dengan setTimeout
console.log("\n=== 2. Eksekusi Asynchronous (Non-Blocking) ===");
console.log("A: Mengirim pesanan makanan ke dapur");

// Tugas yang butuh waktu 1 detik (1000 milidetik) diserahkan ke latar belakang
setTimeout(() => {
  console.log("C: 🔔 Ding! Makanan selesai dimasak di latar belakang (1 detik kemudian)");
}, 1000);

console.log("B: Membaca buku sambil menunggu makanan datang");

// 3. Menghitung Mundur dengan setInterval dan clearInterval
console.log("\n=== 3. Timer Berulang (setInterval) ===");
let hitungan: number = 3;

const intervalId: NodeJS.Timeout = setInterval(() => {
  if (hitungan > 0) {
    console.log(`Hitung mundur peluncuran: ${hitungan}...`);
    hitungan--;
  } else {
    console.log("🚀 Roket Berhasil Diluncurkan!");
    // Hentikan timer berulang agar program tidak berjalan selamanya
    clearInterval(intervalId);
  }
}, 300);

export {};
