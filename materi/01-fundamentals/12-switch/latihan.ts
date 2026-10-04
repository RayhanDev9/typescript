// ============================================================
// 12 · Pernyataan switch — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/12-switch/latihan.ts
// ============================================================

// Kasus 1: Tentukan Kode Mata Uang dari Negara
const kodeNegara: string = "JP"; // "ID", "US", "JP", "UK", "MY"
let namaMataUang: string;

// TODO 1: Buat switch untuk mengisi nilai `namaMataUang`:
//   - "ID"       → "Rupiah (IDR)"
//   - "US"       → "US Dollar (USD)"
//   - "JP"       → "Yen (JPY)"
//   - "UK"       → "Pound Sterling (GBP)"
//   - "MY"       → "Ringgit (MYR)"
//   - default    → "Mata uang tidak diketahui"
// Jangan lupa sertakan `break;` di setiap case!


// Kasus 2: Sistem Hak Akses Pengguna (TypeScript Union Type)
type PeranPengguna = "superadmin" | "admin" | "editor" | "pengguna" | "tamu";

function dapatkanHakAkses(peran: PeranPengguna): string {
  let akses: string;

  // TODO 2: Lengkapi blok switch di bawah untuk mengisi variabel `akses`:
  //   - "superadmin" : "Akses penuh dan kelola pengguna sistem"
  //   - "admin"      : "Kelola konten dan konfigurasi aplikasi"
  //   - "editor"     : "Buat, edit, dan publikasikan artikel"
  //   - "pengguna"   : "Baca artikel dan kirim komentar"
  //   - "tamu"       : "Hanya dapat membaca artikel publik"
  switch (peran) {
    case "superadmin":
      akses = "Akses penuh dan kelola pengguna sistem";
      break;
    // ... lengkapi case lainnya ...
    default:
      akses = "Hak akses tidak diketahui";
      break;
  }

  return akses;
}

// Uji coba hasil fungsi:
console.log("Akses Editor:", dapatkanHakAkses("editor"));
