# 09 · Form Handling & Input Pengguna

## 🎯 Tujuan Belajar
- Memahami cara membaca data ketikan pengguna melalui properti **`.value`**.
- Mengetahui jebakan terbesar pemula: **nilai `.value` selalu bertipe `string`** (bahkan pada input angka!).
- Mempelajari cara konversi tipe data yang aman ke `number` serta pengecekan `isNaN()`.
- Mengakses elemen formulir lainnya: **checkbox** (`.checked: boolean`), **dropdown `<select>`**, dan **textarea**.
- Memahami perbedaan event **`input`**, **`change`**, dan **`submit`** (`SubmitEvent`).

---

## 🧠 Analogi Dunia Nyata: "Formulir Kertas Pendaftaran"
Bayangkan seseorang mengisi formulir pendaftaran fisik:
- Kolom "Usia" ditulis angka `25`.
- Bagi mata petugas (browser), tulisan di atas kertas tersebut tetaplah **tinta goresan teks (`"25"`)**, bukan angka matematika.
- Jika Anda ingin menghitung *"kapan dia pensiun"*, petugas harus terlebih dahulu mengubah tulisan teks itu menjadi angka di kalkulator (`Number("25") + 35`).

---

## 📘 Konsep Dasar

### 1. Jebakan Input Angka (`.value` Selalu Berupa `string`)
```ts
const inputUmur = document.querySelector<HTMLInputElement>("#input-umur")!;

// ❌ JEBAKAN PEMULA:
const nilaiUmur = inputUmur.value; // Tipe nilaiUmur adalah string!
const umurTahunDepan = nilaiUmur + 1; // "25" + 1 = "251" (Bukan 26!)

// ✅ CARA BENAR:
const umurNumber: number = Number(inputUmur.value);
const umurTahunDepanBenar: number = umurNumber + 1; // 26
```

> ⚠️ **Validasi Kosong / Bukan Angka**:
> Jika input kosong, `Number("")` menghasilkan `0`. Jika pengguna mengetik teks acak, hasilnya adalah `NaN` (*Not a Number*). Selalu gunakan `isNaN()` untuk validasi:
> ```ts
> if (isNaN(umurNumber) || inputUmur.value.trim() === "") {
>   console.error("Masukkan angka yang valid!");
> }
> ```

---

### 2. Checkbox & Radio Button (`.checked`)
Untuk kotak centang (checkbox), jangan membaca `.value`, melainkan gunakan properti **`.checked`** yang menghasilkan `boolean`:

```ts
const persetujuanCheckbox = document.querySelector<HTMLInputElement>("#centang-syarat")!;

if (persetujuanCheckbox.checked) {
  console.log("Syarat & ketentuan telah disetujui! ✅");
}
```

---

### 3. Event-Event Penting Formulir:
- **`input`**: Terpicu seketika setiap kali pengguna menekan satu tombol karakter (cocok untuk pencarian *live search* atau penghitung karakter).
- **`change`**: Terpicu hanya ketika pengguna selesai mengedit dan memindahkan fokus (*blur*).
- **`submit`**: Terpicu pada elemen `<form>` ketika tombol submit ditekan atau pengguna menekan Enter.

```ts
const formPendaftaran = document.querySelector<HTMLFormElement>("#form-daftar")!;

formPendaftaran.addEventListener("submit", (e: SubmitEvent) => {
  e.preventDefault(); // Mencegah reload halaman web!

  console.log("Data form siap dikirimkan tanpa me-refresh halaman.");
});
```

---

## 🔷 TypeScript Corner: Tipe Elemen Formulir

| Tag HTML | Tipe TypeScript | Properti Utama |
| :--- | :--- | :--- |
| `<input type="text/number">` | `HTMLInputElement` | `.value`, `.placeholder` |
| `<input type="checkbox">` | `HTMLInputElement` | `.checked` |
| `<select>` | `HTMLSelectElement` | `.value`, `.selectedIndex` |
| `<textarea>` | `HTMLTextAreaElement` | `.value` |
| `<form>` | `HTMLFormElement` | `.reset()`, event listener `"submit"` |

---

## ⚠️ Kesalahan Umum Pemula

1. **Memasang listener `submit` pada tombol `<button>` alih-alih pada elemen `<form>`**:
   Pasang listener `submit` pada `<form>`, bukan pada tombolnya, agar form juga bisa terkirim saat pengguna menekan tombol Enter di keyboard.

2. **Lupa mengosongkan input setelah submit**:
   Gunakan `inputEl.value = ""` atau `formEl.reset()` setelah proses selesai.

---

## 📌 Ringkasan
- Nilai dari input HTML selalu bertipe `string`. Gunakan `Number(input.value)` jika membutuhkan operasi matematika.
- Gunakan `input.checked` (`boolean`) untuk membaca status checkbox.
- Selalu panggil `e.preventDefault()` pada event form `"submit"` untuk mencegah halaman me-refresh secara otomatis.
