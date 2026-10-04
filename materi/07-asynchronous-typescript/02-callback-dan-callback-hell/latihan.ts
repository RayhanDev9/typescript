// ============================================================
// 02 · Callback & Callback Hell — Latihan
// Jalankan: npm run materi -- materi/07-asynchronous-typescript/02-callback-dan-callback-hell/latihan.ts
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

type CallbackSederhana<T> = (error: Error | null, hasil?: T) => void;

// Simulasi 1: Memasak mie (butuh 400ms)
function masakMie(callback: CallbackSederhana<string>): void {
  setTimeout(() => {
    callback(null, "Mie Matang 🍜");
  }, 400);
}

// Simulasi 2: Menaruh bumbu (butuh 300ms)
function tuangBumbu(mie: string, callback: CallbackSederhana<string>): void {
  setTimeout(() => {
    callback(null, `${mie} + Bumbu Spesial 🧂`);
  }, 300);
}

// TODO 1:
// Buat fungsi asinkron ketiga bernama 'sajikanMie'
// yang menerima parameter 'mieBumbu: string' dan 'callback: CallbackSederhana<string>'.
// Gunakan setTimeout (200ms) untuk mengembalikan `${mieBumbu} Siap Disantap! 😋`


// TODO 2:
// Panggil fungsi 'masakMie'.
// Di dalam callback-nya, panggil 'tuangBumbu'.
// Di dalam callback 'tuangBumbu', panggil 'sajikanMie'.
// Cetak hasil akhir sajian mie tersebut ke console!
// Perhatikan bentuk kode bersarang yang terbentuk (Callback Hell).


export {};
