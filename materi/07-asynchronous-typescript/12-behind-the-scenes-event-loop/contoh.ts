// ============================================================================
// 07 · Asynchronous TypeScript
// 12 · Di Balik Layar: Event Loop & Microtask Queue (Contoh)
// ============================================================================

console.log("=== 1. Menguji Prioritas Event Loop ===");

// 1. Eksekusi Sinkron Pertama (Call Stack)
console.log("A: Baris Sinkron Pertama (Call Stack)");

// 2. Timer Macrotask (Callback Queue Reguler)
setTimeout(() => {
  console.log("D: Callback dari setTimeout (Callback Queue)");
}, 0);

// 3. Promise Microtask (Antrean Prioritas VIP)
Promise.resolve()
  .then(() => {
    console.log("C: Callback Promise 1 (Microtask VIP)");
  })
  .then(() => {
    console.log("C2: Callback Promise 2 (Microtask VIP Bersambung)");
  });

// 4. Eksekusi Sinkron Terakhir (Call Stack)
console.log("B: Baris Sinkron Terakhir (Call Stack)");

// Penjelasan:
// Urutan output di layar Anda adalah:
// 1. A  (Call stack sinkron)
// 2. B  (Call stack sinkron)
// 3. C  (Microtask Queue VIP)
// 4. C2 (Microtask Queue VIP sambungan)
// 5. D  (Callback Queue reguler)

export {};
