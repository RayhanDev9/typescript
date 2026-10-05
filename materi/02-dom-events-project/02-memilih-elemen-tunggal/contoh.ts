// ============================================================
// 02 · Memilih Elemen Tunggal — Contoh
// Jalankan: npm run dom (buka materi/02-dom-events-project/02-memilih-elemen-tunggal/index.html di browser)
// ============================================================

// 1. Menggunakan document.getElementById
// Tipe otomatis: HTMLElement | null
const judulUtama = document.getElementById("judul-utama");

if (judulUtama !== null) {
  console.log("Judul ditemukan:", judulUtama.textContent);
  judulUtama.textContent = "✨ Judul Berhasil Diubah!";
}

// 2. Menggunakan document.querySelector dengan Generic Type <T>
// Kita mencari input dengan class '.input-nama'
// Memberi tahu TypeScript bahwa ini pasti elemen <input> (HTMLInputElement)
const inputNama = document.querySelector<HTMLInputElement>(".input-nama");

// Menggunakan pengecekan null yang aman (Type Guard)
if (inputNama !== null) {
  // Karena tipenya HTMLInputElement, kita bisa mengakses properti '.value'
  console.log("Nilai input saat ini:", inputNama.value);
  console.log("Placeholder input   :", inputNama.placeholder);
}

// 3. Menggunakan Non-null Assertion Operator (!)
// Jika kita 100% yakin elemen tombol '#btn-sapa' sudah tertulis di file index.html
const tombolSapa = document.querySelector<HTMLButtonElement>("#btn-sapa")!;

// TypeScript mengizinkan kita memanggil properti tombol tanpa error merah
console.log("Tipe tombol:", tombolSapa.type);
console.log("Status disabled tombol:", tombolSapa.disabled);

// 4. Memilih Kotak Hasil dan Memperbarui Isinya
const kotakHasil = document.querySelector<HTMLDivElement>(".kotak-hasil");

if (kotakHasil !== null && inputNama !== null) {
  kotakHasil.textContent = `Halo ${inputNama.value}! Elemen berhasil dipilih dan dimanipulasi dengan TypeScript.`;
}

export {};
