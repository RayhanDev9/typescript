# 09 · `readonly` Modifier pada Class

## 🎯 Tujuan Belajar
- Memahami kata kunci **`readonly`** pada properti Class di TypeScript.
- Mengetahui bahwa properti `readonly` **hanya bisa diisi saat inisialisasi awal atau di dalam `constructor`**, dan tidak bisa diubah lagi setelahnya.
- Membedakan penggunaan **`const`** (untuk variabel) vs **`readonly`** (untuk properti objek/class/interface).
- Menggabungkan `readonly` bersama access modifier (`public readonly`, `private readonly`).

---

## 🧠 Analogi: Nomor Induk Kependudukan (NIK)

- Nama atau alamat seseorang bisa berganti seiring waktu (properti biasa).
- Namun **NIK (Nomor Induk Kependudukan)** atau **Nomor Rekening Bank** diberikan sekali saat pendaftaran dan **tidak boleh diubah seumur hidup** (`readonly`).

---

## 📘 Konsep Dasar

### 1. Deklarasi Properti `readonly`

```ts
class AkunNasabah {
  // Properti yang tidak boleh diubah setelah dibuat
  public readonly noRekening: string;
  public readonly tanggalDibuat: Date;
  public nama: string;

  constructor(noRek: string, nama: string) {
    this.noRekening = noRek; // Boleh diisi di constructor
    this.tanggalDibuat = new Date();
    this.nama = nama;
  }
}

const nasabah = new AkunNasabah("101-999-888", "Ahmad Rayhan");

// ✅ Properti biasa boleh diubah:
nasabah.nama = "Rayhan Pratama";

// ❌ Properti readonly DITOLAK oleh TypeScript:
// nasabah.noRekening = "000-000-000";
// Error: Cannot assign to 'noRekening' because it is a read-only property.
```

---

### 2. Shorthand Parameter Properties dengan `readonly`

```ts
class Transaksi {
  constructor(
    public readonly idTransaksi: string,
    public readonly nominal: number,
    public readonly timestamp: string = new Date().toISOString()
  ) {}
}

const trx = new Transaksi("TRX-001", 500000);
console.log(trx.idTransaksi); // "TRX-001"
```

---

## 📊 Perbandingan: `const` vs `readonly`

| Fitur | `const` | `readonly` |
| :--- | :--- | :--- |
| **Digunakan untuk** | Variabel biasa (`const x = 10;`) | Properti di dalam `Class`, `Interface`, atau `Type` |
| **Waktu Pengisian** | Harus diisi langsung di baris deklarasi | Bisa diisi di baris deklarasi ATAU di dalam `constructor` |
| **Konteks** | Block Scope | Object Property Level |

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/09-readonly-modifier/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `readonly` mencegah mutasi properti setelah objek dibuat.
- Menjamin integritas data krusial seperti ID, timestamp, atau nomor rekening.
