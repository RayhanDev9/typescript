# 11 · Currying & Partial Application

## 🎯 Tujuan Belajar
- Memahami konsep matematis di balik **Currying** (diambil dari nama matematikawan Haskell Curry).
- Membedakan antara **Currying** (mengubah `f(a, b, c)` menjadi `f(a)(b)(c)`) dan **Partial Application** (mengisi sebagian argumen di awal).
- Menguasai penulisan sintaks Currying dengan *arrow functions* di TypeScript.
- Memahami manfaat nyata di dunia kerja: membuat fungsi yang sangat mudah dikonfigurasi ulang (*configurable & reusable functions*).

---

## 🧠 Analogi Dunia Nyata: "Mesin Fotokopi Berlangganan"
Bayangkan Anda pergi ke jasa fotokopi:
- **Fungsi Biasa**: Anda harus menyebutkan 3 hal sekaligus setiap kali datang: `fotokopi(warnaKertas, jumlahHalaman, penjilidan)`. Jika Anda datang 100 kali untuk proyek skripsi yang sama, Anda harus berulang kali teriak: `"Kertas A4, 50 lembar, Jilid Lakban"`.
- **Currying & Partial Application**:
  1. Langkah 1: Anda menyetel mesin ke mode `A4` ➔ Mesin mengingat kertas A4.
  2. Langkah 2: Anda menyetel `Jilid Lakban` ➔ Mesin sekarang siap khusus untuk skripsi Anda.
  3. Sekarang Anda punya fungsi khusus: `fotokopiSkripsi(jumlahHalaman)`. Cukup masukkan jumlah halaman saja setiap kali butuh!

---

## 📘 Konsep Dasar

### 1. Fungsi Tradisional vs Curried Function

#### Gaya Tradisional (Multi Argumen Sekaligus)
```ts
function kirimEmail(pengirim: string, penerima: string, pesan: string): string {
  return `Dari: ${pengirim} -> Ke: ${penerima} | Isi: ${pesan}`;
}

kirimEmail("admin@app.com", "budi@gmail.com", "Halo Budi!");
```

#### Gaya Currying (Satu per Satu)
```ts
const kirimEmailCurried =
  (pengirim: string) =>
  (penerima: string) =>
  (pesan: string): string => {
    return `Dari: ${pengirim} -> Ke: ${penerima} | Isi: ${pesan}`;
  };

// Pemanggilan berantai:
kirimEmailCurried("admin@app.com")("budi@gmail.com")("Halo Budi!");
```

---

### 2. Kekuatan Partial Application (Konfigurasi Sebagian)
Dengan gaya currying di atas, kita bisa menciptakan fungsi terspesialisasi untuk sistem kita:

```ts
// Buat fungsi khusus email resmi dari 'admin@sekolahdev.id'
const emailDariAdmin = kirimEmailCurried("admin@sekolahdev.id");

// Sekarang kita hanya perlu mengisi penerima dan pesan!
const kirimKeSiswa = emailDariAdmin("siswa@sekolahdev.id");
kirimKeSiswa("Selamat, Anda lulus ujian!");
kirimKeSiswa("Pemberitahuan libur semester.");
```

---

## 🛡️ Bantuan Type Inference di TypeScript
TypeScript secara otomatis melacak tipe setiap rantai fungsi:
- `kirimEmailCurried`: `(pengirim: string) => (penerima: string) => (pesan: string) => string`
- `emailDariAdmin`: `(penerima: string) => (pesan: string) => string`
- `kirimKeSiswa`: `(pesan: string) => string`
Jika kita salah memasukkan tipe data (misalnya angka), TypeScript langsung memberikan tanda merah di IDE!

---

## 📌 Ringkasan
- Currying memecah fungsi multi-argumen menjadi rantai fungsi tunggal.
- Partial application mengunci beberapa parameter awal untuk menghasilkan fungsi baru yang lebih spesifik dan ringkas.
- Membuka jalan menuju komposisi fungsi (*Function Composition / Piping*).
