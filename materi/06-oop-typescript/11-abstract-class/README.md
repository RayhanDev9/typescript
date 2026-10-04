# 11 · Abstract Class & Abstract Method

## 🎯 Tujuan Belajar
- Memahami konsep **Abstract Class** sebagai kelas pondasi yang **tidak bisa di-instansiasi langsung menggunakan `new`**.
- Menulis **Abstract Method** (method tanpa isi tubuh `{}`) yang **wajib diimplementasikan** oleh setiap class turunannya.
- Mengombinasikan method konkret (yang sudah punya isi logika bersama) dan method abstract di dalam satu class induk.
- Membedakan kapan harus menggunakan **Interface** vs **Abstract Class**.

---

## 🧠 Analogi: Cetakan Konsep "Bentuk Geometri"

- Kamu tidak pernah bisa memegang benda nyata bernama *"Bentuk"* di dunia fisik. Yang bisa kamu pegang adalah bentuk nyatanya: **Lingkaran**, **Persegi**, atau **Segitiga**.
- Namun, semua bentuk geometri pasti memiliki kesepakatan: *"Setiap bentuk geometri WAJIB punya rumus menghitung luas dan keliling!"* (`abstract hitungLuas()`).
- Induk *"Bentuk Geometri"* adalah **Abstract Class**, sedangkan Persegi dan Lingkaran adalah **Concrete Class**.

---

## 📘 Konsep Dasar

### 1. Deklarasi `abstract class`

```ts
// 1. Abstract Class: Tidak bisa di-`new` langsung!
abstract class BentukGeometri {
  constructor(public nama: string) {}

  // Abstract Method: Wajib diisi oleh class anak
  abstract hitungLuas(): number;
  abstract hitungKeliling(): number;

  // Concrete Method: Method umum yang langsung bisa dipakai oleh semua anak
  public tampilkanInfo(): void {
    console.log(`[${this.nama}] Luas: ${this.hitungLuas()} cm² | Keliling: ${this.hitungKeliling()} cm`);
  }
}

// ❌ new BentukGeometri("Bentuk"); // Error: Cannot create an instance of an abstract class.
```

---

### 2. Concrete Class yang Mewarisi Abstract Class

```ts
class Persegi extends BentukGeometri {
  constructor(public sisi: number) {
    super("Persegi");
  }

  // Wajib mengisi implementasi hitungLuas()
  public hitungLuas(): number {
    return this.sisi * this.sisi;
  }

  // Wajib mengisi implementasi hitungKeliling()
  public hitungKeliling(): number {
    return 4 * this.sisi;
  }
}

const kotak = new Persegi(5);
kotak.tampilkanInfo(); // "[Persegi] Luas: 25 cm² | Keliling: 20 cm"
```

---

## 📊 Tabel Perbandingan: Interface vs Abstract Class

| Fitur | Interface | Abstract Class |
| :--- | :--- | :--- |
| **Instansiasi (`new`)** | ❌ Tidak bisa | ❌ Tidak bisa |
| **Method Berisi Logika** | ❌ Tidak bisa (hanya definisi tipe) | ✅ **Bisa** (bisa campur abstract & concrete) |
| **Properti Nyata** | ❌ Hanya definisi tipe | ✅ Bisa menyimpan state & constructor |
| **Kata Kunci Hubungan** | `implements` | `extends` |
| **Pewarisan Berganda** | ✅ Bisa banyak interface | ❌ Hanya bisa 1 abstract class |

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/11-abstract-class/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `abstract class` menjadi pondasi terstruktur untuk arsitektur aplikasi besar.
- `abstract method` mewajibkan standarisasi method penting di semua class turunan.
