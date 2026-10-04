// ============================================================================
// 07 · Asynchronous TypeScript
// 08 · Penanganan Error Async/Await: try ... catch (Solusi)
// ============================================================================

interface DataFoto {
  id: number;
  title: string;
  url: string;
}

// TODO 1 s/d 4:
async function unduhFoto(id: number): Promise<void> {
  try {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
    const response: Response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Foto #${id} tidak ditemukan di server!`);
    }

    const foto = (await response.json()) as DataFoto;
    console.log(`✅ Foto #${id}: "${foto.title}"`);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error(`❌ Gagal unduh #${id}:`, err.message);
    }
  } finally {
    console.log(`ℹ️ Pemeriksaan foto #${id} selesai.`);
  }
}

// TODO 5: Uji kedua fungsi
unduhFoto(1);

setTimeout(() => {
  unduhFoto(88888);
}, 500);

export {};
