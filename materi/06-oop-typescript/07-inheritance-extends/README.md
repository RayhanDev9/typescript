# 07 · Pewarisan Class (`extends` & `super`)

## 🎯 Tujuan Belajar
- Memahami konsep **Inheritance (Pewarisan)** antar Class menggunakan kata kunci **`extends`**.
- Memanggil constructor class induk menggunakan fungsi **`super()`**.
- Melakukan **Method Overriding** (menimpa perilaku method induk di class anak).
- Menggunakan kata kunci TypeScript **`override`** untuk menjamin keamanan saat menimpa method induk.

---

## 🧠 Analogi: Keturunan dan Bakat Khusus

- **Class Induk (`Kendaraan`)**: Memiliki roda, mesin, dan method `jalan()`.
- **Class Anak (`MobilListrik`)**: Mewarisi roda, mesin, dan method `jalan()` dari `Kendaraan` tanpa perlu menulis ulang kodenya dari nol, tetapi menambahkan bakat baru `isiDayaBaterai()`.

---

## 📘 Konsep Dasar

### 1. Sintaks `extends` dan Constructor `super()`

```ts
// 1. Class Induk (Parent Class)
class Orang {
  constructor(
    public nama: string,
    public tahunLahir: number
  ) {}

  public sapa(): void {
    console.log(`Halo, nama saya ${this.nama}.`);
  }
}

// 2. Class Anak (Child Class)
class Siswa extends Orang {
  constructor(
    nama: string,
    tahunLahir: number,
    public jurusan: string // Properti tambahan khusus Siswa
  ) {
    // Wajib memanggil super() sebelum mengakses `this`!
    super(nama, tahunLahir);
  }

  public perkenalkanDiri(): void {
    console.log(`Saya siswa jurusan ${this.jurusan}.`);
  }
}

const siswa1 = new Siswa("Ahmad Rayhan", 2005, "Rekayasa Perangkat Lunak");
siswa1.sapa();            // Method dari class induk Orang
siswa1.perkenalkanDiri(); // Method khusus class Siswa
```

---

### 2. Method Overriding & Keyword `override`

Jika class anak ingin mengubah perilaku method induk, cukup buat method dengan nama yang sama:

```ts
class Mahasiswa extends Orang {
  constructor(
    nama: string,
    tahunLahir: number,
    public nim: string
  ) {
    super(nama, tahunLahir);
  }

  // Menimpa method sapa() milik class Orang
  public override sapa(): void {
    console.log(`Halo Rekan-rekan! Saya Mahasiswa ${this.nama} (NIM: ${this.nim}).`);
  }
}

const mhs = new Mahasiswa("Budi Santoso", 2003, "1029384");
mhs.sapa(); // Menjalankan versi Mahasiswa!
```

---

## 🔷 TypeScript Corner: Keyword `override`

Dengan menambahkan keyword `override`, TypeScript akan memastikan bahwa method tersebut **benar-benar ada di class induk**. Jika nama method di class induk suatu saat diubah (misal jadi `sapaHalo()`), TypeScript akan langsung memunculkan error sehingga tidak terjadi bug *silent failure*!

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/07-inheritance-extends/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `class Anak extends Induk` mewarisi semua properti dan method publik/protected.
- `super(...)` memanggil constructor class induk dan **wajib** dipanggil di awal constructor anak.
- Gunakan `override method()` untuk menimpa method induk secara aman di TypeScript.
