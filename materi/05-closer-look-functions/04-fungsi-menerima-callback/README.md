# 04 · Fungsi Menerima Callback

## 🎯 Tujuan Belajar
- Memahami konsep **Abstraksi Kode** menggunakan Callback: memisahkan *apa yang dilakukan* dari *bagaimana cara melakukannya*.
- Membuat fungsi pemroses data kustom yang menerima fungsi callback filter / transformer.
- Memahami bagaimana callback membuat kode menjadi sangat modular, *reusable* (dapat dipakai ulang), dan mudah diuji.
- Mengetikkan callback dengan TypeScript Type Alias.

---

## 🧠 Analogi: Mesin Pemroses Kopi

- **Mesin Kopi (Fungsi Induk)**: Bertugas memanaskan air, mengalirkan tekanan, dan menuang ke cangkir. Mesin ini tidak peduli biji kopi apa yang kamu masukkan.
- **Biji Kopi (Callback)**: Kamu bisa memasukkan biji *Arabika*, *Robusta*, atau *Luwak*.
- Kamu tidak perlu membongkar atau membuat mesin baru setiap kali ingin rasa kopi yang berbeda! Cukup ganti biji kopinya (callback-nya).

---

## 📘 Konsep Dasar

### 1. Membuat Fungsi Pemroses Kustom

```ts
type PredikatAngka = (n: number) => boolean;

// Fungsi yang menyaring array berdasarkan fungsi penguji (callback)
function saringAngka(daftar: number[], fnPenguji: PredikatAngka): number[] {
  const hasil: number[] = [];
  for (const angka of daftar) {
    if (fnPenguji(angka)) {
      hasil.push(angka);
    }
  }
  return hasil;
}

const angkaList = [10, 15, 20, 25, 30, 35];

// Berbagai callback berbeda untuk mesin saring yang sama:
const angkaGenap: PredikatAngka = (n) => n % 2 === 0;
const angkaDiatasDuaPuluh: PredikatAngka = (n) => n > 20;

console.log(saringAngka(angkaList, angkaGenap));         // [10, 20, 30]
console.log(saringAngka(angkaList, angkaDiatasDuaPuluh)); // [25, 30, 35]
```

---

### 2. Mengapa Callback Sangat Kuat? (Abstraksi)

1. **DRY (*Don't Repeat Yourself*)**: Logika perulangan `for...of` dan pembuatan array baru hanya ditulis 1 kali.
2. **Fleksibel**: Pengguna fungsi bebas menentukan kriteria tanpa harus mengubah fungsi utama.
3. **Standar Industri**: Menjadi fondasi method bawaan array seperti `.map()`, `.filter()`, `.find()`, dan `.some()`.

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/04-fungsi-menerima-callback/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `saringAngka(arr, angkaGenap(10))` | Mengeksekusi fungsi callback sebelum dikirim (mengirim `true` boolean, bukan fungsi) | Kirim nama fungsi tanpa tanda kurung: `saringAngka(arr, angkaGenap)` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Callback memisahkan mekanisme perulangan dari logika bisnis.
- Fungsi induk bertanggung jawab atas alur kerja (*flow*), sedangkan callback bertanggung jawab atas keputusan (*decision/action*).
