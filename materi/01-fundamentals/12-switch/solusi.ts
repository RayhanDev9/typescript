// ============================================================
// 12 · Pernyataan switch — Solusi
// ============================================================

// TODO 1
const kodeNegara: string = "JP";
let namaMataUang: string;

switch (kodeNegara) {
  case "ID":
    namaMataUang = "Rupiah (IDR)";
    break;
  case "US":
    namaMataUang = "US Dollar (USD)";
    break;
  case "JP":
    namaMataUang = "Yen (JPY)";
    break;
  case "UK":
    namaMataUang = "Pound Sterling (GBP)";
    break;
  case "MY":
    namaMataUang = "Ringgit (MYR)";
    break;
  default:
    namaMataUang = "Mata uang tidak diketahui";
    break;
}

console.log(`Negara ${kodeNegara} menggunakan mata uang ${namaMataUang}`);

// TODO 2
type PeranPengguna = "superadmin" | "admin" | "editor" | "pengguna" | "tamu";

function dapatkanHakAkses(peran: PeranPengguna): string {
  let akses: string;

  switch (peran) {
    case "superadmin":
      akses = "Akses penuh dan kelola pengguna sistem";
      break;
    case "admin":
      akses = "Kelola konten dan konfigurasi aplikasi";
      break;
    case "editor":
      akses = "Buat, edit, dan publikasikan artikel";
      break;
    case "pengguna":
      akses = "Baca artikel dan kirim komentar";
      break;
    case "tamu":
      akses = "Hanya dapat membaca artikel publik";
      break;
    default:
      akses = "Hak akses tidak diketahui";
      break;
  }

  return akses;
}

console.log("Akses Editor:", dapatkanHakAkses("editor"));
console.log("Akses Admin:", dapatkanHakAkses("admin"));
