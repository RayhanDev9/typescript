// ============================================================
// 11 · Logika Boolean — Solusi
// ============================================================

const ipkMahasiswa: number = 3.7;
const ikutOrganisasi: boolean = true;
const punyaBeasiswaLain: boolean = false;

// TODO 1
const layakBeasiswa: boolean = ipkMahasiswa >= 3.5 && ikutOrganisasi && !punyaBeasiswaLain;
console.log("Layak beasiswa?", layakBeasiswa); // true

// TODO 2
if (layakBeasiswa) {
  console.log("Selamat! Pengajuan beasiswa diterima 🎉");
} else {
  console.log("Mohon maaf, belum memenuhi syarat 📚");
}

// TODO 3
const inputJumlahAnggota: number | null = 0;
const jumlahAnggota = inputJumlahAnggota ?? 1;
console.log("Jumlah anggota:", jumlahAnggota); // 0 (bukan 1)
