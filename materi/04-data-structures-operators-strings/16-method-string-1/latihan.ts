// ============================================================
// 16 · Method String Bagian 1 — Latihan
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/16-method-string-1/latihan.ts
// ============================================================

// TODO 1: Dari string `kalimat` di bawah ini:
//         - Cari posisi indeks kata "TypeScript".
//         - Ambil kata "TypeScript" menggunakan `.slice()`.
const kalimat = "Saya sedang belajar TypeScript hari ini!";


// TODO 2: Normalisasikan input email di bawah ini agar:
//         - Tidak memiliki spasi di awal dan akhir (`.trim()`).
//         - Semuanya berupa huruf kecil (`.toLowerCase()`).
const emailMentah = "   User.Baru_2026@Gmail.COM   ";


// TODO 3: Ganti semua kata "dollar" menjadi "rupiah" dari teks transaksi
//         di bawah ini menggunakan method `.replaceAll()`.
const transaksi = "Biaya langganan 10 dollar per bulan atau 100 dollar per tahun.";


// TODO 4: Buat fungsi `cekEkstensiGambar(namaFile: string): boolean` yang memeriksa
//         apakah file berakhiran `.png`, `.jpg`, atau `.jpeg` menggunakan `.endsWith()`.
//         Pastikan tidak sensitif terhadap huruf besar/kecil (misal: "FOTO.JPG" tetap valid).

// Tulis fungsimu di sini:

// Panggil fungsi untuk menguji:
// console.log("Cek 'foto.PNG':", cekEkstensiGambar("foto.PNG")); // true
// console.log("Cek 'data.pdf':", cekEkstensiGambar("data.pdf")); // false
