// ============================================================================
// 07 · Asynchronous TypeScript
// 09 · Mengembalikan Nilai dari Fungsi Async (Contoh)
// ============================================================================

interface DataUser {
  id: number;
  nama: string;
}

// 1. Fungsi Async yang Mengembalikan Nilai
async function ambilDataSiswa(id: number): Promise<DataUser> {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response: Response = await fetch(url);
  const data = (await response.json()) as { id: number; name: string };

  // Mengembalikan objek murni (otomatis dibungkus menjadi Promise<DataUser>)
  return {
    id: data.id,
    nama: data.name,
  };
}

// 2. KESALAHAN PEMULA: Memanggil Langsung Tanpa await / .then
const hasilSalah = ambilDataSiswa(1);
console.log("=== 1. Kesalahan Pemula (Langsung Dicetak) ===");
console.log("Hasilnya bukan data, melainkan:", hasilSalah);
// Output: Promise { <pending> }

// 3. CARA BENAR 1: Menggunakan .then()
console.log("\n=== 2. Membuka Nilai dengan .then() ===");
ambilDataSiswa(1).then((siswa: DataUser) => {
  console.log(`[Cara .then] ID: ${siswa.id} | Nama: ${siswa.nama}`);
});

// 4. CARA BENAR 2: Menggunakan await di dalam Fungsi Async Lain
async function jalankanAplikasi(): Promise<void> {
  console.log("\n=== 3. Membuka Nilai dengan await di Fungsi Lain ===");
  const siswa: DataUser = await ambilDataSiswa(2);
  console.log(`[Cara await] ID: ${siswa.id} | Nama: ${siswa.nama}`);
}

jalankanAplikasi();

export {};
