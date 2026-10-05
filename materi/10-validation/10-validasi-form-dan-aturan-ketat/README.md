# 10 · Validasi Form & Aturan Ketat

## 🎯 Tujuan Belajar
- Menguasai validasi aturan spesifik pada tipe teks dan angka:
  - String: **`.min()`**, **`.max()`**, **`.email()`**, **`.url()`**, **`.regex()`**.
  - Number: **`.min()`**, **`.max()`**, **`.int()`**, **`.positive()`**.
- Mampu menambahkan **Custom Error Messages dalam Bahasa Indonesia** yang ramah bagi pengguna akhir.
- Memahami cara mengekstrak pesan error per kolom menggunakan **`hasil.error.flatten()`** (standar yang dipakai untuk form error di frontend).

---

## 🧠 Analogi Dunia Nyata: "Pemeriksaan Syarat Pembuatan SIM / Paspor"
Bayangkan sebuah formulir pembuatan SIM:
- Tidak cukup hanya *"Nama harus berupa teks"*.
- Ada aturan spesifik:
  - *"Nama minimal 3 huruf dan maksimal 50 huruf."*
  - *"Usia minimal 17 tahun dan harus bilangan bulat."*
  - *"Alamat email harus memiliki simbol @ dan domain yang sah."*
- Jika pengguna salah memasukkan usia `14 tahun`, sistem tidak boleh hanya menampilkan error teknis bahasa Inggris *"Number is too small"*, melainkan harus menampilkan pesan ramah: *"Mohon maaf, usia minimal pendaftaran adalah 17 tahun"*.

---

## 📘 Konsep Dasar

### 1. Rantai Validasi dengan Pesan Kustom Bahasa Indonesia
```ts
import { z } from "zod";

export const SkemaRegistrasi = z.object({
  namaLengkap: z
    .string({ error: "Nama lengkap wajib diisi" })
    .min(3, "Nama minimal 3 karakter")
    .max(50, "Nama maksimal 50 karakter"),

  email: z
    .string({ error: "Email wajib diisi" })
    .email("Format email tidak valid (contoh: user@gmail.com)"),

  kataSandi: z
    .string()
    .min(8, "Kata sandi minimal 8 karakter")
    .regex(/[A-Z]/, "Kata sandi harus mengandung minimal 1 huruf besar")
    .regex(/[0-9]/, "Kata sandi harus mengandung minimal 1 angka"),

  umur: z
    .number({ error: "Umur wajib diisi" })
    .int("Umur harus berupa bilangan bulat")
    .min(17, "Usia minimal pendaftaran adalah 17 tahun"),
});
```

---

### 2. Mengambil Error per Kolom dengan `flatten()`
Metode `.flatten()` mengelompokkan daftar error berdasarkan nama kolomnya (`fieldErrors`):
```ts
const hasil = SkemaRegistrasi.safeParse(dataInputForm);

if (!hasil.success) {
  const errorPerKolom = hasil.error.flatten().fieldErrors;
  console.log(errorPerKolom.email);     // ["Format email tidak valid..."]
  console.log(errorPerKolom.kataSandi); // ["Kata sandi minimal 8 karakter"]
}
```
Ini adalah format ideal untuk langsung ditampilkan di bawah input box HTML `<input>` pada antarmuka web pengguna.

---

## 📌 Ringkasan
- Zod memungkinkan penulisan aturan validasi yang sangat deklaratif dan ekspresif.
- Selalu sediakan pesan error yang jelas dan mudah dipahami oleh pengguna awam.
- Gunakan `.flatten().fieldErrors` untuk memetakan error ke formulir antarmuka.
