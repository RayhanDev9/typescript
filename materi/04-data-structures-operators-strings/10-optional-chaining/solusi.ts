// ============================================================
// 10 · Optional Chaining (?.) — Solusi
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

// TODO 1
const kodePos1 = userLengkap.alamat?.detail?.kodePos ?? 0;
const kodePos2 = userKosong.alamat?.detail?.kodePos ?? 0;
console.log("TODO 1 -> Kode pos user lengkap:", kodePos1, "| User kosong:", kodePos2);

// TODO 2
const kontak1 = userLengkap.kontakDarurat?.[0] ?? "Tidak ada kontak";
const kontak2 = userKosong.kontakDarurat?.[0] ?? "Tidak ada kontak";
console.log("TODO 2 -> Kontak user lengkap:", kontak1, "| User kosong:", kontak2);

// TODO 3
console.log("TODO 3:");
userLengkap.kirimEmail?.("Selamat datang kembali!");
userKosong.kirimEmail?.("Pesan percobaan"); // Tidak terjadi error
console.log("Pemanggilan kirimEmail pada kedua user selesai.");
