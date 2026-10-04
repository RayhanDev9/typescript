# 10 · Higher-Order Functions dalam FP

## 🎯 Tujuan Belajar
- Memahami konsep **First-Class Functions**: fungsi di JavaScript/TypeScript diperlakukan layaknya nilai biasa (angka, teks, objek).
- Menguasai definisi **Higher-Order Function (HOF)**:
  1. Fungsi yang **menerima fungsi lain** sebagai argumen (*callback*).
  2. Fungsi yang **mengembalikan fungsi baru** (*Function Factory*).
- Mampu mendesain HOF dengan **TypeScript Generics (`<T, R>`)** untuk keamanan tipe data yang fleksibel.
- Menerapkan pola praktis HOF di industri: *Execution Timer Wrapper*, *Multiplier Factory*, dan *Validator Generator*.

---

## 🧠 Analogi Dunia Nyata: "Cetakan Kue & Bumbu Rahasia"
- **Fungsi Biasa**: Seperti juru masak yang memasak sepiring nasi goreng. Anda beri bahan baku, ia menyajikan makanan.
- **Higher-Order Function (HOF)**:
  - **Kasus 1 (Menerima Fungsi)**: Seperti **Asisten Pengawas**. Asisten ini tidak peduli apa yang dimasak koki utama; tugasnya menyalakan stopwatch sebelum koki mulai dan mencatat waktu setelah selesai (**Wrapper / Timer**).
  - **Kasus 2 (Mengembalikan Fungsi)**: Seperti **Pabrik Pembuat Cetakan Kue**. Anda meminta cetakan berbentuk bintang berdiameter 5 cm. Pabrik tidak memberi Anda kue, melainkan memberi Anda alat cetak baru yang siap Anda gunakan berulang kali (**Function Factory**).

---

## 📘 Konsep Dasar

### 1. Fungsi yang Menerima Fungsi (Callback Wrapper)
```ts
// HOF yang mengukur durasi eksekusi suatu fungsi
function ukurWaktuEksekusi<T>(namaAksi: string, aksi: () => T): T {
  console.time(namaAksi);
  const hasil = aksi();
  console.timeEnd(namaAksi);
  return hasil;
}
```

### 2. Fungsi yang Mengembalikan Fungsi (Function Factory)
```ts
// Factory pembuat fungsi pengali
function buatPengali(faktor: number): (angka: number) => number {
  return (angka: number) => angka * faktor;
}

const kaliDua = buatPengali(2);
const kaliSepuluh = buatPengali(10);

console.log(kaliDua(5));      // 10
console.log(kaliSepuluh(5));  // 50
```

---

## 🛡️ Keunggulan TypeScript Generics pada HOF
Dengan generics `<T, R>`, HOF kita dapat menerima tipe data apa saja namun tetap mempertahankan ketatnya pengecekan tipe (*type-safety*):
```ts
function buatLogger<T, R>(fn: (arg: T) => R): (arg: T) => R {
  return (arg: T) => {
    console.log(`[LOG] Memanggil fungsi dengan argumen:`, arg);
    const hasil = fn(arg);
    console.log(`[LOG] Hasil eksekusi:`, hasil);
    return hasil;
  };
}
```

---

## 📌 Ringkasan
- HOF memungkinkan kita menulis kode yang **DRY (Don't Repeat Yourself)** dengan mengekstrak logika berulang (seperti logging, timing, validasi) ke dalam satu pembungkus (*wrapper*).
- Metode array bawaan seperti `.map()`, `.filter()`, `.reduce()` adalah contoh HOF yang paling sering digunakan.
