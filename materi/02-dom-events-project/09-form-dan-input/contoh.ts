// ============================================================================
// 09 · Form Handling & Input Pengguna
// CONTOH: Membaca Input, Konversi Angka, Checkbox, dan SubmitEvent
// ============================================================================

// 1. Mengambil Elemen Form dan Kontrolnya
const formDaftar = document.querySelector<HTMLFormElement>("#form-daftar")!;
const inputNama = document.querySelector<HTMLInputElement>("#input-nama")!;
const inputUsia = document.querySelector<HTMLInputElement>("#input-usia")!;
const selectPaket = document.querySelector<HTMLSelectElement>("#select-paket")!;
const checkSyarat = document.querySelector<HTMLInputElement>("#check-syarat")!;

const liveNama = document.querySelector<HTMLDivElement>("#live-nama")!;
const boxHasil = document.querySelector<HTMLDivElement>("#box-hasil")!;

// 2. Event 'input': Memberikan Umpan Balik Real-Time Saat Mengetik
inputNama.addEventListener("input", () => {
  const jumlahKarakter: number = inputNama.value.length;
  liveNama.textContent = `Sedang mengetik... (${jumlahKarakter} karakter)`;
});

// 3. Event 'submit': Memproses Data Saat Form Dikirim
formDaftar.addEventListener("submit", (e: SubmitEvent) => {
  // Mencegah browser me-refresh halaman secara default
  e.preventDefault();

  const nama: string = inputNama.value.trim();

  // Konversi string input menjadi angka (number)
  const usia: number = Number(inputUsia.value);

  // Membaca status centang checkbox (boolean)
  const isSetuju: boolean = checkSyarat.checked;

  const paket: string = selectPaket.value;

  // Validasi Input Sederhana
  if (nama === "") {
    alert("Harap isi nama lengkap Anda!");
    return;
  }

  if (isNaN(usia) || usia <= 0) {
    alert("Harap masukkan usia yang valid!");
    return;
  }

  if (!isSetuju) {
    alert("Anda harus menyetujui aturan dan kebijakan layanan!");
    return;
  }

  // Jika semua validasi lolos, tampilkan data yang terkumpul
  boxHasil.innerHTML = `
    <h3>✅ Pendaftaran Berhasil!</h3>
    <p>Nama  : <strong>${nama}</strong></p>
    <p>Usia  : <strong>${usia} tahun</strong> (Tahun depan: ${usia + 1} tahun)</p>
    <p>Paket : <strong>${paket.toUpperCase()}</strong></p>
    <p>Status Syarat: Disetujui</p>
  `;

  // Mengosongkan form kembali
  formDaftar.reset();
  liveNama.textContent = "Ketik sesuatu...";
});

export {};
