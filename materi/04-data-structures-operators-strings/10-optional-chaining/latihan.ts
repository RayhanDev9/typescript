// ============================================================
// 10 · Optional Chaining (?.) — Latihan
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/10-optional-chaining/latihan.ts
// ============================================================

interface UserAccount {
  id: string;
  nama: string;
  alamat?: {
    kota?: string;
    detail?: {
      jalan?: string;
      kodePos?: number;
    };
  };
  kontakDarurat?: string[];
  kirimEmail?: (pesan: string) => void;
}

const userLengkap: UserAccount = {
  id: "U-01",
  nama: "Rayhan",
  alamat: {
    kota: "Bandung",
    detail: {
      jalan: "Jl. Dago No. 100",
      kodePos: 40135,
    },
  },
  kontakDarurat: ["08123456789"],
  kirimEmail: (pesan: string) => console.log("Email terkirim:", pesan),
};

const userKosong: UserAccount = {
  id: "U-02",
  nama: "Anonim",
};

// TODO 1: Ambil kodePos dari `userLengkap` dan `userKosong` menggunakan optional chaining.
//         Jika kodePos tidak ada, berikan fallback 0 dengan operator `??`.


// TODO 2: Ambil kontak darurat pertama (`[0]`) dari `userLengkap` dan `userKosong`
//         menggunakan optional chaining array `?.[0]`.
//         Jika tidak ada, berikan fallback "Tidak ada kontak".


// TODO 3: Panggil method `kirimEmail` untuk kedua user menggunakan optional chaining `?.()`.
//         Pastikan pemanggilan pada `userKosong` tidak menimbulkan runtime error!

