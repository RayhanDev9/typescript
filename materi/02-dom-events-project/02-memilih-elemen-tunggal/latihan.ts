// ============================================================
// 02 · Memilih Elemen Tunggal — Latihan
// Jalankan: npm run dom (buka materi/02-dom-events-project/02-memilih-elemen-tunggal/index.html di browser)
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini. Pastikan tidak ada pesan error merah dari TypeScript!

// TODO 1:
// Ambil elemen paragraf dengan class '.keterangan' menggunakan document.querySelector.
// Berikan generic type <HTMLParagraphElement>.
// Simpan ke variabel bernama 'paragrafKet'.

const paragraf = document.querySelector<HTMLParagraphElement>(".keterangan");

// TODO 2:
// Gunakan pengecekan if (paragrafKet !== null).
// Jika ada, ubah textContent dari paragraf tersebut menjadi:
// "Status: TypeScript berhasil terhubung ke elemen paragraf!"

if (paragraf) {
  paragraf.textContent = "Status: TypeScript berhasil terhubung!";
}

// TODO 3:
// Ambil elemen input nama menggunakan document.getElementById('input-nama') atau
// document.querySelector<HTMLInputElement>('#input-nama')!.
// Simpan ke dalam variabel 'inputPengguna' dan ubah nilai (.value)-nya menjadi nama Anda sendiri.

const setValue = (document.querySelector<HTMLInputElement>(
  "#input-nama",
)!.value = "Rayhan");

console.info(setValue.valueOf);

// TODO 4:
// Ambil tombol dengan id '#btn-sapa' menggunakan querySelector<HTMLButtonElement> dan tanda seru (!).
// Ubah properti .textContent tombol tersebut menjadi "Klik Saya Sekarang 🚀".

const btnSapa = document.getElementById("btn-sapa") as HTMLElement | null;

if (btnSapa) btnSapa.textContent = "Klik Saya Sekarang 🚀";

export {};
