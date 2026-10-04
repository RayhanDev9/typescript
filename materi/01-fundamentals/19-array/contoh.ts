// ============================================================
// 19 · Array & Tuple — Contoh
// Jalankan: npm run materi -- materi/01-fundamentals/19-array/contoh.ts
// ============================================================

// --- 1. Array String & Angka Dasar ---
const bahasaPemrograman: string[] = ["JavaScript", "TypeScript", "Python"];
console.log("Bahasa pertama:", bahasaPemrograman[0]);
console.log("Jumlah bahasa:", bahasaPemrograman.length);
console.log("Bahasa terakhir:", bahasaPemrograman[bahasaPemrograman.length - 1]);

// Mengubah isi elemen array (meskipun variabelnya const!)
bahasaPemrograman[2] = "Rust";
console.log("Daftar baru:", bahasaPemrograman);

// --- 2. Array dengan Nilai Campuran (Union) ---
const profilSingkat: (string | number)[] = ["Rayhan", 25, "Pengajar TS", 2026];
console.log("Profil:", profilSingkat);

// --- 3. Tuple (Array Khusus dengan Posisi dan Tipe Terkunci) ---
// Format koordinat GPS: [Latitude: number, Longitude: number, NamaLokasi: string]
type TitikLokasi = [number, number, string];

const monas: TitikLokasi = [-6.1754, 106.8272, "Monumen Nasional Jakarta"];
console.log(`Lokasi: ${monas[2]} di koordinat (${monas[0]}, ${monas[1]})`);

// Tuple HTTP Response: [StatusCode: number, StatusMessage: string]
const responseSukses: [number, string] = [200, "OK"];
const responseNotFound: [number, string] = [404, "Not Found"];
console.log("HTTP:", responseSukses[0], responseSukses[1]);
