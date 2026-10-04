# 12 · Function Composition & Piping

## 🎯 Tujuan Belajar
- Memahami konsep **Function Composition** (menggabungkan beberapa fungsi kecil menjadi satu fungsi alur kerja yang kokoh).
- Memahami masalah **Nesting Hell** pada pemanggilan fungsi biasa: `tampilkan(format(hitung(bersihkan(input))))`.
- Membedakan antara:
  - **Compose**: Alur eksekusi dari kanan ke kiri: $(f \circ g)(x) = f(g(x))$.
  - **Pipe**: Alur eksekusi alami dari kiri ke kanan: data mentah ➔ langkah 1 ➔ langkah 2 ➔ hasil akhir.
- Membangun fungsi utilitas **`pipe()`** yang **Type-Safe** di TypeScript.
- Mempraktekkan pipeline pengolahan teks dan transformasi data.

---

## 🧠 Analogi Dunia Nyata: "Pipa Air Filter & Pengepakan Barang"
Bayangkan sebuah pipa penyaring air minum:
- Air kotor dari sumur (Data Mentah) masuk ke pipa:
  1. Lewat Pipa 1: Filter Pasir (Menyaring kotoran kasar).
  2. Lewat Pipa 2: Filter Karbon Aktif (Menghilangkan bau).
  3. Lewat Pipa 3: Filter UV (Membunuh bakteri).
- Keluar dari ujung pipa: Air mineral murni siap minum!
- Alur ini berjalan lurus dari **Kiri ke Kanan** (**Piping**). Setiap penyaring hanya fokus pada satu tugas kecil dan tidak tahu apa yang terjadi setelahnya.

---

## 📘 Masalah Pemanggilan Bersarang (Nesting)

Jika kita ingin membersihkan nama pengguna:
```ts
const hasil = beriSapaan(hurufBesar(buangSpasi("   rayhan dwi   ")));
```
Membaca kode di atas sangat melelahkan karena otak kita harus membaca dari tengah-tengah terdalam (`buangSpasi`), lalu bergerak ke kiri (`hurufBesar`), lalu ke kiri lagi (`beriSapaan`).

---

## 🚀 Solusi Modern: Pipeline (`pipe`)

Dengan pola **`pipe`**, alur data dibaca mengalir dari atas ke bawah:
```ts
const bersihkanDanSapa = pipe(
  buangSpasi,
  hurufBesar,
  beriSapaan
);

const hasil = bersihkanDanSapa("   rayhan dwi   ");
// Output: "Halo, RAYHAN DWI!"
```

---

## 🛡️ Membangun Fungsi `pipe` yang Type-Safe di TypeScript
Dengan TypeScript generics, kita bisa memastikan keluaran fungsi langkah pertama cocok dengan masukan fungsi langkah berikutnya:

```ts
// Implementasi pipe 3 langkah dengan tipe aman
function pipe3<A, B, C, D>(
  fn1: (a: A) => B,
  fn2: (b: B) => C,
  fn3: (c: C) => D
): (nilaiAwal: A) => D {
  return (nilaiAwal: A): D => fn3(fn2(fn1(nilaiAwal)));
}
```

Jika tipe data di tengah pipa tidak cocok (misalnya langkah 1 menghasilkan string, tapi langkah 2 meminta array), TypeScript akan langsung memunculkan pesan error saat kompilasi!

---

## 📌 Ringkasan
- Komposisi fungsi mengubah kode yang berantakan menjadi rangkaian pipa modular yang bersih.
- Pola *Pipe* membaca alur data dari kiri ke kanan (atau atas ke bawah), sangat alami bagi pemikiran manusia.
- Fondasi terbaik untuk arsitektur fungsional modern dan pengolahan data (*Data Processing Pipeline*).
