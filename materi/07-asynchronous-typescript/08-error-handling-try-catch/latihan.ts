// ============================================================================
// 07 · Asynchronous TypeScript
// 08 · Penanganan Error Async/Await: try ... catch (Latihan)
// ============================================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

interface DataFoto {
  id: number;
  title: string;
  url: string;
}

// TODO 1:
// Buat fungsi async bernama 'unduhFoto(id: number): Promise<void>'.


// TODO 2:
// Di dalam fungsi, buat blok 'try ... catch (err: unknown) ... finally'.
// Di dalam blok try:
// - Panggil fetch(`https://jsonplaceholder.typicode.com/photos/${id}`).
// - Jika !res.ok, lempar error: throw new Error(`Foto #${id} tidak ditemukan!`).
// - Await res.json() sebagai DataFoto, lalu cetak: "Foto: [foto.title]".


// TODO 3:
// Di dalam blok catch:
// - Cek if (err instanceof Error), lalu cetak err.message.


// TODO 4:
// Di dalam blok finally:
// - Cetak: "Pemeriksaan foto #[id] selesai."


// TODO 5:
// Panggil unduhFoto(1) dan unduhFoto(88888) untuk menguji kedua kondisi!


export {};
