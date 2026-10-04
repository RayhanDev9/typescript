# 10 · Interface & Kata Kunci `implements`

## 🎯 Tujuan Belajar
- Memahami konsep **Interface sebagai Kontrak Standar** untuk sebuah Class.
- Menggunakan kata kunci **`implements`** untuk memaksa class mengimplementasikan method dan properti tertentu.
- Membedakan antara **`extends`** (mewarisi kode logika) vs **`implements`** (hanya menyepakati kontrak bentuk, kode logika ditulis sendiri).
- Mengimplementasikan **Banyak Interface Sekaligus** (*Multiple Interfaces*).

---

## 🧠 Analogi: Surat Perjanjian Kontrak Kerja

- **Interface**: Surat kontrak kerja arsitek. Surat tersebut menyatakan bahwa siapa pun yang bekerja sebagai Manajer Proyek **wajib** bisa: `membuatLaporan()` dan `menghadiriRapat()`.
- **Class (`implements`)**: Karyawan yang menandatangani kontrak tersebut dan membuktikan bahwa dia memiliki keahlian nyata untuk menjalankan tugas-tugas di kontrak.

---

## 📘 Konsep Dasar

### 1. Satu Class Mengimplementasikan Satu Interface

```ts
interface BisaBerenang {
  kecepatanRenang: number;
  berenang(): void;
}

// Class Bebek WAJIB memiliki properti `kecepatanRenang` dan method `berenang()`
class Bebek implements BisaBerenang {
  constructor(
    public nama: string,
    public kecepatanRenang: number
  ) {}

  public berenang(): void {
    console.log(`${this.nama} berenang dengan kecepatan ${this.kecepatanRenang} knot.`);
  }
}
```

---

### 2. Mengimplementasikan Banyak Interface Sekaligus

Di JavaScript/TypeScript, sebuah class hanya boleh memiliki **1 class induk (`extends`)**, tetapi **bebas mengimplementasikan banyak interface (`implements`)** dipisahkan koma:

```ts
interface DapatDicas {
  kapasitasBaterai: number;
  isiDaya(persen: number): void;
}

interface DapatMelaju {
  kecepatanMaks: number;
  jalan(): void;
}

// Mengimplementasikan 2 interface sekaligus:
class MobilTesla implements DapatDicas, DapatMelaju {
  constructor(
    public kapasitasBaterai: number,
    public kecepatanMaks: number
  ) {}

  public isiDaya(persen: number): void {
    this.kapasitasBaterai = Math.min(100, this.kapasitasBaterai + persen);
    console.log(`Baterai terisi menjadi ${this.kapasitasBaterai}%`);
  }

  public jalan(): void {
    console.log(`Tesla melaju kencang hingga ${this.kecepatanMaks} km/jam!`);
  }
}
```

---

## 📊 Perbandingan: `extends` vs `implements`

| Fitur | `extends` (Inheritance) | `implements` (Interface Contract) |
| :--- | :--- | :--- |
| **Digunakan untuk** | Class mewarisi Class lain | Class menyepakati kontrak Interface |
| **Jumlah Maksimal** | Hanya **1** class induk | Bisa **banyak** interface (dipisah koma) |
| **Logika Kode** | Mewarisi kode yang sudah ada | Wajib menulis sendiri semua logikanya |

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/10-interface-dan-implements/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `implements` memastikan sebuah class memiliki bentuk dan method tertentu.
- Membantu tim bekerja dengan standar arsitektur yang konsisten.
