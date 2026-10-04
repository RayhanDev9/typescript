# 05 · Getter & Setter

## 🎯 Tujuan Belajar
- Memahami fungsi accessor **`get` (Getter)** dan **`set` (Setter)** di dalam Class.
- Membaca properti terhitung (*Computed Property*) seperti mengakses properti biasa tanpa tanda kurung `()`.
- Melakukan **validasi otomatis** setiap kali sebuah nilai properti diubah.
- Menghindari perangkap **Infinite Loop** saat menamai setter dengan memakai konvensi `_properti`.

---

## 🧠 Analogi: Pintu Putar Otomatis dengan Pemeriksaan Tiket

- **Getter (`get`)**: Layar monitor info. Kamu cukup melihat layarnya (`akun.saldo`) tanpa perlu menekan tombol apa pun, dan layar langsung menghitungkan total terbaru untukmu.
- **Setter (`set`)**: Pintu putar masuk stasiun. Setiap kali seseorang ingin memasukkan nilai baru (`akun.saldo = 50000`), pintu setter memeriksa validitasnya terlebih dahulu (misal: "tidak boleh angka negatif!").

---

## 📘 Konsep Dasar

### 1. Getter sebagai Properti Terhitung

```ts
class AkunUser {
  constructor(
    public nama: string,
    public tahunLahir: number
  ) {}

  // Getter: dipanggil seperti properti (user.umur), BUKAN method (user.umur())
  get umur(): number {
    return 2026 - this.tahunLahir;
  }
}

const u1 = new AkunUser("Rayhan", 2000);
console.log(u1.umur); // 26 (tanpa tanda kurung!)
```

---

### 2. Setter untuk Validasi Data

```ts
class ProfilNasabah {
  private _namaLengkap: string = "";

  constructor(nama: string) {
    // Memanggil setter saat inisialisasi
    this.namaLengkap = nama;
  }

  // Getter
  get namaLengkap(): string {
    return this._namaLengkap;
  }

  // Setter dengan validasi
  set namaLengkap(namaBaru: string) {
    if (namaBaru.trim().includes(" ")) {
      this._namaLengkap = namaBaru.trim();
    } else {
      console.log(`[PERINGATAN] "${namaBaru}" bukan nama lengkap (harus mengandung spasi)!`);
      this._namaLengkap = namaBaru;
    }
  }
}

const n1 = new ProfilNasabah("Ahmad Rayhan");
console.log(n1.namaLengkap); // "Ahmad Rayhan"

n1.namaLengkap = "Rayhan"; // Memicu peringatan validasi
```

---

## ⚠️ Perangkap Penting: Infinite Recursion

> [!WARNING]
> Jika nama setter sama persis dengan nama properti yang diubah di dalamnya:
> `set nama(val) { this.nama = val; }`
> Perintah `this.nama = val` akan memanggil setter `nama` kembali tanpa henti → **RangeError: Maximum call stack size exceeded**!
>
> **Solusi**: Gunakan underscore `this._nama = val` untuk properti internalnya.

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/05-getter-dan-setter/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Getter `get prop()` memungkinkan pengambilan nilai terhitung dengan sintaks properti.
- Setter `set prop(val)` mengontrol dan memvalidasi penugasan nilai baru.
- Gunakan `_prop` sebagai variabel penampung internal.
