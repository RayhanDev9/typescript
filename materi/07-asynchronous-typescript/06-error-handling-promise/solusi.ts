// ============================================================================
// 07 · Asynchronous TypeScript
// 06 · Penanganan Error pada Promise & Fetch (Solusi)
// ============================================================================

interface DataKomentar {
  id: number;
  name: string;
  email: string;
  body: string;
}

// TODO 1 & 2:
function ambilDataKomentar(komentarId: number): Promise<string> {
  const endpoint = `https://jsonplaceholder.typicode.com/comments/${komentarId}`;

  return fetch(endpoint).then((response: Response) => {
    if (!response.ok) {
      throw new Error(`Komentar ID ${komentarId} gagal dimuat (Status: ${response.status})`);
    }

    return (response.json() as Promise<DataKomentar>).then((data: DataKomentar) => {
      return data.name;
    });
  });
}

// TODO 3: Uji Kasus Sukses
ambilDataKomentar(1)
  .then((namaKomentar) => {
    console.log("✅ Judul Komentar:", namaKomentar);
  })
  .catch((err: unknown) => {
    if (err instanceof Error) {
      console.error("Gagal:", err.message);
    }
  });

// TODO 4: Uji Kasus Gagal (ID -500)
setTimeout(() => {
  ambilDataKomentar(-500)
    .then((nama) => console.log(nama))
    .catch((err: unknown) => {
      if (err instanceof Error) {
        console.error("✅ Berhasil Menangkap Error:", err.message);
      }
    });
}, 500);

export {};
