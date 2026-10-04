# 12 · Polimorfisme (Polymorphism)

## 🎯 Tujuan Belajar
- Memahami konsep **Polimorfisme** (*Banyak Bentuk*): kemampuan memanggil satu method yang sama pada objek-objek berbeda, di mana setiap objek menjalankan perilaku spesifiknya sendiri.
- Mengelola koleksi objek bertipe class induk / interface dalam satu array: `const daftarAkun: AkunBank[] = [...]`.
- Memahami mengapa Polimorfisme membuat kode kita sangat fleksibel dan mudah diperluas (*Extensible / Open-Closed Principle*).

---

## 🧠 Analogi: Tombol "Play" pada Remote Universal

- Remote TV Universal memiliki 1 tombol **PLAY**.
- Jika diarahkan ke **Pemutar DVD**, tombol itu memutar kaset cakram DVD.
- Jika diarahkan ke **Spotify / Soundbar**, tombol itu memutar streaming audio digital.
- Kamu tidak butuh 10 tombol berbeda untuk setiap alat; antarmukanya satu (**PLAY**), namun perilakunya menyesuaikan perangkat targetnya.

---

## 📘 Konsep Dasar

### 1. Struktur Class Induk & Turunan

```ts
abstract class AkunBank {
  constructor(
    public namaPemilik: string,
    public saldo: number
  ) {}

  // Method yang akan berperilaku polimorfik
  abstract prosesBungaBulanan(): void;
}

class TabunganBiasa extends AkunBank {
  public prosesBungaBulanan(): void {
    const bunga = this.saldo * 0.01; // Bunga 1%
    this.saldo += bunga;
    console.log(`[TABUNGAN ${this.namaPemilik}] Tambah bunga 1% -> Saldo baru: Rp${this.saldo.toLocaleString("id-ID")}`);
  }
}

class DepositoInvestasi extends AkunBank {
  public prosesBungaBulanan(): void {
    const bunga = this.saldo * 0.05; // Bunga 5%
    this.saldo += bunga;
    console.log(`[DEPOSITO ${this.namaPemilik}] Tambah bunga 5% -> Saldo baru: Rp${this.saldo.toLocaleString("id-ID")}`);
  }
}
```

---

### 2. Keajaiban Polimorfisme: Array Bertipe Induk

Kita bisa memasukkan semua variasi akun ke dalam satu array bertipe `AkunBank[]` dan memprosesnya dengan loop sederhana:

```ts
const seluruhNasabah: AkunBank[] = [
  new TabunganBiasa("Andi", 5000000),
  new DepositoInvestasi("Budi", 100000000),
  new TabunganBiasa("Citra", 12000000),
];

console.log("=== MEMPROSES SEMUA NASABAH SECARA POLIMORFIK ===");
for (const akun of seluruhNasabah) {
  // Satu baris pemanggilan, menghasilkan perilaku berbeda sesuai tipe objek aslinya!
  akun.prosesBungaBulanan();
}
```

Jika di masa depan ada tipe akun baru (misal `TabunganSyariah`), kita tidak perlu mengubah loop di atas!

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/12-polimorfisme/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Polimorfisme memungkinkan objek turunan diperlakukan sebagai tipe induknya.
- Runtime JavaScript secara otomatis mengeksekusi versi method milik class konkret masing-masing.
