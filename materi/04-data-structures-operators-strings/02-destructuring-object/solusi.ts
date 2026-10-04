// ============================================================
// 02 · Destructuring Object — Solusi
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

// TODO 1
const { judul, penulis } = bukuTypeScript;
console.log("TODO 1:", { judul, penulis });

// TODO 2
const { harga: hargaJual, stok = 0 } = bukuTypeScript;
console.log("TODO 2:", { hargaJual, stok });

// TODO 3
const {
  penerbit: { nama: namaPenerbit, kota: kotaPenerbit },
} = bukuTypeScript;
console.log("TODO 3:", { namaPenerbit, kotaPenerbit });

// TODO 4
interface ProfilUser {
  username: string;
  email: string;
  role?: string;
}

function cetakInfoUser({ username, email, role = "user" }: ProfilUser): void {
  console.log("TODO 4:");
  console.log(`Username : ${username}`);
  console.log(`Email    : ${email}`);
  console.log(`Role     : ${role}`);
}

cetakInfoUser({ username: "rayhan99", email: "rayhan@example.com" });
