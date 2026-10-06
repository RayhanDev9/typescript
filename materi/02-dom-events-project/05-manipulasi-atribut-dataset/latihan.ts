// ============================================================
// 05 · Manipulasi Atribut & Dataset — Latihan
// Jalankan: npm run dom (buka materi/02-dom-events-project/05-manipulasi-atribut-dataset/index.html di browser)
// ============================================================

// INSTRUKSI:
// Selesaikan semua TODO di bawah ini.

// TODO 1:
// Ambil elemen '#input-voucher' menggunakan querySelector<HTMLInputElement>.
// Aktifkan input tersebut (disabled = false) dan ubah placeholder-nya menjadi:
// "Masukkan kupon diskon..."

const elInput = document.querySelector<HTMLInputElement>("#input-voucher");

if (elInput) {
  elInput.disabled = true; // ✅ Tidak merah lagi!
}

// TODO 2:
// Ambil semua tombol produk dengan class '.btn-item' menggunakan querySelectorAll<HTMLButtonElement>.

const btnList = document.querySelectorAll<HTMLButtonElement>(".btn-item");

// TODO 3:
// Gunakan perulangan .forEach():
// - Baca 'dataset.harga' dari setiap tombol.
// - Konversikan nilainya ke number.
// - Hitung harga diskon 10% (harga - (harga * 0.1)).
// - Simpan harga diskon tersebut ke atribut dataset baru bernama 'dataset.hargaDiskon'.

if (btnList) {
  btnList.forEach((btn) => {
    const harga: number | null = Number(btn.dataset.harga);
    btn.dataset.hargaDiskon = String(harga - harga * 0.2);

    console.info(btn.dataset);
  });
}

// TODO 4:
// Cetak ke console daftar nama produk beserta harga diskon yang baru dihitung!

export {};
