// ============================================================================
// 07 · Asynchronous TypeScript
// 04 · Mengonsumsi Promise (Latihan)
// ============================================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

function hitungDiskon(totalBelanja: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (totalBelanja <= 0) {
        reject(new Error("Total belanja tidak valid!"));
      } else if (totalBelanja >= 100000) {
        resolve(totalBelanja * 0.1); // Diskon 10%
      } else {
        resolve(0); // Tanpa diskon
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

// TODO 1:
// Panggil fungsi 'hitungDiskon(150000)'.
// Gunakan .then() untuk menerima nilai potongan diskon.


// TODO 2:
// Di dalam .then() pertama tersebut, kembalikan pemanggilan fungsi 'cetakStruk(potonganDiskon)'.


// TODO 3:
// Sambung dengan .then() kedua untuk mencetak hasil struk ke console.log.


// TODO 4:
// Tambahkan .catch() di akhir untuk menangkap error jika total belanja tidak valid.


// TODO 5:
// Tambahkan .finally() di paling ujung yang mencetak: "Terima kasih telah berbelanja di Toko Kami!"


export {};
