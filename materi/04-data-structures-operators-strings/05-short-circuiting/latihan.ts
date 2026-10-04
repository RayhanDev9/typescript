// ============================================================
// 05 · Short-Circuiting (&& dan ||) — Latihan
// Jalankan: npm run materi -- materi/04-data-structures-operators-strings/05-short-circuiting/latihan.ts
// ============================================================

// TODO 1: Tebak dan simpan hasil dari ekspresi di bawah ini ke dalam variabel:
//         a. `hasilOr1` = "" || "Default"
//         b. `hasilOr2` = "Admin" || "Guest"
//         c. `hasilAnd1` = "Aktif" && "Login Sukses"
//         d. `hasilAnd2` = null && "Data Ada"


// TODO 2: Gunakan operator `||` untuk menetapkan nilai `namaTampilan`:
//         Jika `inputUser` berisi string non-kosong, gunakan `inputUser`.
//         Jika kosong/undefined, berikan nilai fallback "Tamu Tanpa Nama".
const inputUser: string = "";


// TODO 3: Diberikan callback fungsi opsional `kirimNotifikasi` di bawah ini.
//         Gunakan operator `&&` (tanpa if-else) untuk memanggil `kirimNotifikasi`
//         hanya jika variabel tersebut bernilai truthy.
type NotifikasiFn = ((pesan: string) => void) | undefined;
const kirimNotifikasi: NotifikasiFn = (pesan: string) => {
  console.log("Notifikasi Terkirim:", pesan);
};

