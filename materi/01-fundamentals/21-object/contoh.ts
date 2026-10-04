// ============================================================
// 21 · Object & Interface — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/21-object/contoh.ts
// ============================================================

// --- 1. Definisi Tipe dengan Interface ---
interface ProfilPengguna {
  readonly id: number;      // tidak dapat diubah (readonly)
  namaLengkap: string;
  email: string;
  umur: number;
  hobi: string[];
  nomorTelepon?: string;    // opsional (?)
}

// --- 2. Membuat Objek Berdasarkan Interface ---
const programmer: ProfilPengguna = {
  id: 1,
  namaLengkap: "Rayhan Pratama",
  email: "rayhan@example.com",
  umur: 25,
  hobi: ["Membaca", "Ngoding", "Ngopi"]
};

// --- 3. Mengakses Properti ---
// Dot Notation
console.log("Nama:", programmer.namaLengkap);
console.log("Umur:", programmer.umur);
console.log("Hobi utama:", programmer.hobi[0]);

// Bracket Notation
console.log("Email:", programmer["email"]);

// Mengakses properti secara dinamis
const propertiYangDicari: keyof ProfilPengguna = "namaLengkap";
console.log("Dinamis:", programmer[propertiYangDicari]);

// --- 4. Memodifikasi Objek ---
programmer.umur = 26;
programmer.nomorTelepon = "08123456789";
console.log("Profil setelah update:", programmer);

// ❌ Coba hapus komentar baris di bawah untuk melihat error TypeScript:
// programmer.id = 999;           // Cannot assign to 'id' because it is a read-only property.
// programmer.alamat = "Bandung"; // Property 'alamat' does not exist on type 'ProfilPengguna'.
