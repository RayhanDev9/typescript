// ============================================================
// 11 · Logika Boolean — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/11-logika-boolean/latihan.ts
// ============================================================

// Kasus: Persyaratan Beasiswa
// Syarat beasiswa:
// 1. IPK >= 3.5
// 2. Aktif berorganisasi (ikutOrganisasi === true)
// 3. TIDAK sedang menerima beasiswa lain (punyaBeasiswaLain === false)

const ipkMahasiswa: number = 3.7;
const ikutOrganisasi: boolean = true;
const punyaBeasiswaLain: boolean = false;

// TODO 1: Buat variabel `layakBeasiswa` (boolean) yang menggabungkan ketiga syarat di atas
//         menggunakan operator && dan !.
//         Tampilkan: "Layak beasiswa? true/false"


// TODO 2: Gunakan if/else untuk menampilkan:
//         - "Selamat! Pengajuan beasiswa diterima 🎉" jika layakBeasiswa true
//         - "Mohon maaf, belum memenuhi syarat 📚" jika false


// TODO 3: Buat nilai bawaan menggunakan operator `??` (nullish coalescing).
//         Jika variabel `inputJumlahAnggota` bernilai null atau undefined, gunakan default 1.
//         Uji dengan nilai `0` dan buktikan bahwa 0 tetap terbaca sebagai 0 (bukan 1).
const inputJumlahAnggota: number | null = 0;
