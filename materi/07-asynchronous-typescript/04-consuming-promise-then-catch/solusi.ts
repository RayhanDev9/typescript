// ============================================================
// 04 · Mengonsumsi Promise (then, catch, finally) — Solusi
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/04-consuming-promise-then-catch/solusi.ts
// ============================================================

function hitungDiskon(totalBelanja: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (totalBelanja <= 0) {
        reject(new Error("Total belanja tidak valid!"));
      } else if (totalBelanja >= 100000) {
        resolve(totalBelanja * 0.1);
      } else {
        resolve(0);
      }
    }, 300);
  });
}

function cetakStruk(diskon: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Struk berhasil dicetak! Anda hemat: Rp ${diskon.toLocaleString("id-ID")}`);
    }, 200);
  });
}

// Solusi TODO 1 s/d 5:
hitungDiskon(150000)
  .then((potonganDiskon: number) => {
    console.log(`Diskon didapatkan: Rp ${potonganDiskon.toLocaleString("id-ID")}`);
    return cetakStruk(potonganDiskon); // Return promise baru
  })
  .then((hasilStruk: string) => {
    console.log(hasilStruk);
  })
  .catch((error: Error) => {
    console.error("Gagal memproses struk:", error.message);
  })
  .finally(() => {
    console.log("Terima kasih telah berbelanja di Toko Kami!");
  });

export {};
