// ============================================================
// 03 · Spread Operator — Latihan
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/03-spread-operator/latihan.ts
// ============================================================

// TODO 1: Gabungkan array `hobiUtama` dan `hobiTambahan` menjadi SATU array
//         bernama `semuaHobi` menggunakan spread operator.
const hobiUtama: string[] = ["Membaca", "Coding"];
const hobiTambahan: string[] = ["Bermain Musik", "Fotografi"];


// TODO 2: Buat salinan (*shallow copy*) dari array `daftarNilai` ke variabel `salinanNilai`
//         menggunakan spread operator. Tambahkan angka 100 ke `salinanNilai` dengan .push()
//         dan buktikan bahwa `daftarNilai` yang asli TIDAK berubah.
const daftarNilai: number[] = [80, 85, 90];


// TODO 3: Gabungkan dua object `userDasar` dan `pengaturanUser` menjadi satu object
//         baru bernama `userLengkap` menggunakan object spread.
//         Ubah properti `statusAktif` menjadi `true` di objek baru tersebut.
const userDasar = {
  id: "USR-001",
  nama: "Rayhan",
  email: "rayhan@example.com",
};

const pengaturanUser = {
  tema: "gelap",
  bahasa: "id",
  statusAktif: false,
};


// TODO 4: Diberikan fungsi `hitungRataRata` di bawah ini, panggil fungsi tersebut
//         dengan menyebarkan nilai dari tuple `tigaNilai` menggunakan spread operator.
function hitungRataRata(n1: number, n2: number, n3: number): number {
  return (n1 + n2 + n3) / 3;
}

const tigaNilai: [number, number, number] = [75, 85, 95];

// Panggil fungsi di bawah ini:
