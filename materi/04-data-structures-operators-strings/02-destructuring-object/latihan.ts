// ============================================================
// 02 · Destructuring Object — Latihan
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/02-destructuring-object/latihan.ts
// ============================================================

interface Buku {
  judul: string;
  penulis: string;
  tahun: number;
  harga: number;
  stok?: number;
  penerbit: {
    nama: string;
    kota: string;
  };
}

const bukuTypeScript: Buku = {
  judul: "Pemrograman TypeScript Modern",
  penulis: "Rayhan Pratama",
  tahun: 2026,
  harga: 120000,
  penerbit: {
    nama: "Informatika Media",
    kota: "Bandung",
  },
};

// TODO 1: Ambil properti `judul` dan `penulis` dari `bukuTypeScript`
//         menggunakan destructuring object ke dalam variabel `judul` dan `penulis`.


// TODO 2: Bongkar properti `harga` dan ganti namanya menjadi `hargaJual`.
//         Bongkar juga properti `stok` dan berikan nilai default 0 jika `stok` tidak ada.


// TODO 3: Lakukan nested destructuring untuk mengambil nama penerbit
//         ke variabel `namaPenerbit` dan kota penerbit ke variabel `kotaPenerbit`.


// TODO 4: Buat fungsi `cetakInfoUser` yang menerima satu parameter berupa object
//         dengan tipe `interface ProfilUser { username: string; email: string; role?: string }`.
//         Bongkar parameternya secara langsung dengan nilai default `role = "user"`.
//         Tampilkan informasi tersebut ke console.

interface ProfilUser {
  username: string;
  email: string;
  role?: string;
}

// Tulis fungsimu di sini:

// Panggil fungsi untuk menguji:
// cetakInfoUser({ username: "rayhan99", email: "rayhan@example.com" });
