# 02 · Generic Functions

## 🎯 Tujuan Belajar
- Menguasai penulisan fungsi generik dengan berbagai parameter.
- Memahami perbedaan antara **Type Argument Inference** (inferensi otomatis) dan **Explicit Type Argument** (penyebutan tipe manual).
- Menguasai penggunaan **Multiple Type Parameters** (`<T, U, V>`).
- Mengetahui kapan harus menyebutkan tipe secara manual dan kapan membiarkan compiler menebaknya.

---

## 🧠 Analogi Dunia Nyata: "Mesin Fotokopi Serbaguna"
Bayangkan sebuah mesin fotokopi canggih:
- Jika Anda memasukkan kertas ujian (**Input: Kertas Ujian**), mesin otomatis menyetel dirinya dan mengeluarkan salinan kertas ujian (**Output: Kertas Ujian**).
- Anda tidak perlu memencet tombol "Saya memasukkan kertas ujian" karena mesin otomatis mendeteksinya (**Type Argument Inference**).
- Namun, jika Anda memasukkan selembar kertas putih kosong dan ingin mesin itu mencetak format akta kelahiran tertentu, Anda harus memilih menu manual di layar: *"Format Akta Kelahiran"* (**Explicit Type Argument: `mesin<AktaKelahiran>()`**).

---

## 📘 Konsep Dasar

### 1. Inferensi Otomatis vs Eksplisit
```ts
function salinNilai<T>(nilai: T): T {
  return nilai;
}

// 1. Inferensi Otomatis (Direkomendasikan karena lebih ringkas)
const nama = salinNilai("Rayhan"); // Tipe otomatis: string
const umur = salinNilai(23);       // Tipe otomatis: number

// 2. Eksplisit (Manual)
// Berguna jika kita ingin mempersempit tipe (misalnya menjadi union type)
const status = salinNilai<"aktif" | "nonaktif">("aktif");
```

---

### 2. Menggunakan Lebih dari Satu Type Parameter (`<T, U>`)
Seringkali satu fungsi membutuhkan dua atau lebih tipe yang berbeda:

```ts
function buatPasangan<T, U>(pertama: T, kedua: U): [T, U] {
  return [pertama, kedua];
}

// Menghasilkan Tuple: [string, number]
const data = buatPasangan("Rayhan", 100);

// Menghasilkan Tuple: [boolean, { role: string }]
const izin = buatPasangan(true, { role: "admin" });
```

---

### 3. Fungsi Pertukaran Posisi Tuple (`tukarPosisi`)
```ts
function tukarPosisi<T, U>(pasangan: [T, U]): [U, T] {
  return [pasangan[1], pasangan[0]];
}

const koordinat = tukarPosisi(["Barat", 120]);
// koordinat sekarang bertipe [number, string] -> [120, "Barat"]
```

---

## 📌 Ringkasan
- Gunakan Type Argument Inference jika compiler sudah bisa menebak tipe dari argumen yang dikirim.
- Gunakan parameter jamak seperti `<T, U>` saat memproses dua data dengan jenis berbeda dalam satu fungsi.
