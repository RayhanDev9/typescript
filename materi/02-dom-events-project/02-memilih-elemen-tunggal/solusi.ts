// ============================================================
// 02 · Memilih Elemen Tunggal — Solusi
// Jalankan: npm run dom (buka materi/02-dom-events-project/02-memilih-elemen-tunggal/index.html di browser)
// ============================================================

// TODO 1:
// Ambil elemen paragraf dengan class '.keterangan' menggunakan document.querySelector.
const paragrafKet: HTMLParagraphElement | null =
  document.querySelector<HTMLParagraphElement>(".keterangan");

// TODO 2:
// Gunakan pengecekan if (paragrafKet !== null).
// Jika ada, ubah textContent dari paragraf tersebut menjadi:
// "Status: TypeScript berhasil terhubung ke elemen paragraf!"
if (paragrafKet !== null) {
  paragrafKet.textContent =
    "Status: TypeScript berhasil terhubung ke elemen paragraf!";
  console.log("Paragraf berhasil diubah!");
}

// TODO 3:
// Ambil elemen input nama menggunakan querySelector<HTMLInputElement>('#input-nama')!.
// Simpan ke dalam variabel 'inputPengguna' dan ubah nilai (.value)-nya menjadi nama Anda sendiri.
const inputPengguna =
  document.querySelector<HTMLInputElement>("#input-nama")!;
inputPengguna.value = "Rayhan Developer";
console.log("Input berhasil diubah menjadi:", inputPengguna.value);

// TODO 4:
// Ambil tombol dengan id '#btn-sapa' menggunakan querySelector<HTMLButtonElement> dan tanda seru (!).
// Ubah properti .textContent tombol tersebut menjadi "Klik Saya Sekarang 🚀".
const tombolSapa =
  document.querySelector<HTMLButtonElement>("#btn-sapa")!;
tombolSapa.textContent = "Klik Saya Sekarang 🚀";
console.log("Teks tombol berhasil diperbarui!");

export {};
