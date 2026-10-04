// ============================================================
// 02 · Callback & Callback Hell — Solusi
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/02-callback-dan-callback-hell/solusi.ts
// ============================================================

type CallbackSederhana<T> = (error: Error | null, hasil?: T) => void;

function masakMie(callback: CallbackSederhana<string>): void {
  setTimeout(() => {
    callback(null, "Mie Matang 🍜");
  }, 400);
}

function tuangBumbu(mie: string, callback: CallbackSederhana<string>): void {
  setTimeout(() => {
    callback(null, `${mie} + Bumbu Spesial 🧂`);
  }, 300);
}

// TODO 1:
function sajikanMie(mieBumbu: string, callback: CallbackSederhana<string>): void {
  setTimeout(() => {
    callback(null, `${mieBumbu} Siap Disantap! 😋`);
  }, 200);
}

// TODO 2:
// Memanggil dengan pola Callback bersarang (Callback Hell)
masakMie((err1, hasilMie) => {
  if (err1) return console.error(err1);

  tuangBumbu(hasilMie!, (err2, hasilBumbu) => {
    if (err2) return console.error(err2);

    sajikanMie(hasilBumbu!, (err3, hasilSaji) => {
      if (err3) return console.error(err3);

      console.log("Hidangan Sukses:");
      console.log(hasilSaji);
    });
  });
});

export {};
