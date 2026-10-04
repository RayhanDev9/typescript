# 09 · Closure Dasar

## 🎯 Tujuan Belajar
- Memahami konsep paling fundamental di JavaScript/TypeScript: **Closure**.
- Mengetahui mengapa sebuah fungsi **tetap bisa mengingat dan mengakses variabel** tempat ia diciptakan, meskipun fungsi induknya sudah selesai dieksekusi dan keluar dari Call Stack.
- Memahami diagram alur eksekusi memori (*Execution Context* vs *Variable Environment* di Heap).
- Mengimplementasikan penghitung (*Counter*) independen berbasis closure.

---

## 🧠 Analogi: Ransel Ajaib Seorang Petualang

Bayangkan kamu lahir di sebuah rumah (Fungsi Induk) dan dibekali sebuah **Ransel Ajaib**:
- Sebelum kamu pergi berkelana ke dunia luar (Fungsi Anak dikembalikan/diekspor), rumahmu memasukkan semua barang penting ke dalam ranselmu (*Closure*).
- Meskipun rumah lamamu suatu hari roboh atau menghilang dari ingatan (*Execution Context induk dihapus dari Call Stack*), **kamu masih bisa membuka ranselmu kapan saja dan mengambil barang-barang dari rumah tersebut**!

---

## 📘 Konsep Dasar

### 1. Definisi Resmi Closure

> **Closure** adalah kemampuan sebuah fungsi untuk selalu mengingat dan mengakses semua variabel yang ada di **lingkungan tempat ia diciptakan (*lexical environment*)**, bahkan setelah fungsi induknya selesai dieksekusi dan keluar dari Call Stack.

---

### 2. Contoh Klasik: Penghitung Penumpang (*Passenger Counter*)

```ts
function buatPenghitungPenumpang() {
  let jumlahPenumpang = 0; // Variabel di lingkungan induk

  return function (): void {
    jumlahPenumpang++;
    console.log(`Jumlah penumpang sekarang: ${jumlahPenumpang} orang`);
  };
}

// 1. Eksekusi fungsi induk -> mengembalikan fungsi anak
const tambahPenumpang = buatPenghitungPenumpang();

// Pada titik ini, eksekusi `buatPenghitungPenumpang()` SUDAH SELESAI.
// Tapi perhatikan apa yang terjadi saat fungsi anak dipanggil:

tambahPenumpang(); // "Jumlah penumpang sekarang: 1 orang"
tambahPenumpang(); // "Jumlah penumpang sekarang: 2 orang"
tambahPenumpang(); // "Jumlah penumpang sekarang: 3 orang"
```

Bagaimana mungkin `jumlahPenumpang` masih hidup dan bertambah nilainya padahal fungsi induknya sudah selesai berjalan?
👉 **Jawabannya adalah CLOSURE!**

---

### 3. Diagram Alur Memori

```text
1. Saat buatPenghitungPenumpang() dipanggil:
   ┌──────────────────────────────────────────────┐
   │ Call Stack: buatPenghitungPenumpang()        │
   │ Variable Environment: jumlahPenumpang = 0    │
   └──────────────────────────────────────────────┘

2. Setelah buatPenghitungPenumpang() SELESAI (Return):
   Call Stack induk DIHAPUS.
   Namun, variabel 'jumlahPenumpang' TIDAK DIHAPUS oleh Garbage Collector
   karena fungsi anak masih menyimpan REFERENSI CLOSURE ke variabel tersebut!

3. Saat tambahPenumpang() dipanggil:
   ┌──────────────────────────────────────────────┐
   │ Call Stack: tambahPenumpang()                │
   │ Mencari 'jumlahPenumpang':                   │
   │ 1. Lokal? Tidak ada.                         │
   │ 2. Closure Scope? ADA! -> Nilai diupdate.   │
   └──────────────────────────────────────────────┘
```

---

### 4. Setiap Instance Memiliki Closure Terpisah

```ts
const loketA = buatPenghitungPenumpang();
const loketB = buatPenghitungPenumpang();

loketA(); // Loket A = 1
loketA(); // Loket A = 2

loketB(); // Loket B = 1 (Memiliki ransel closure sendiri, tidak tercampur!)
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/05-closer-look-functions/09-closure-dasar/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Closure bukan sesuatu yang harus kita buat manual dengan keyword tertentu; closure terjadi **secara otomatis** di JavaScript/TypeScript.
- Fungsi anak selalu membawa "ransel" variabel dari tempat ia dilahirkan.
- Setiap instance fungsi memiliki ruang memori closure yang independen.
