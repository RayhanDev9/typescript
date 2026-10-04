# 06 · Static Member (Method & Property)

## 🎯 Tujuan Belajar
- Memahami konsep **Static Member** (method dan properti yang melekat pada **Class itu sendiri**, bukan pada instance hasil `new`).
- Membedakan kapan menggunakan **Instance Method** vs **Static Method**.
- Mengenal contoh static method bawaan JavaScript: `Array.from()`, `Number.parseFloat()`, `Math.PI`, `Object.keys()`.
- Menggunakan Static Method sebagai **Factory Method** untuk membuat objek siap pakai.

---

## 🧠 Analogi: Pabrik Mobil vs Mobil Individu

- **Instance Method** (`mobil.isiBensin()`): Aksinya terjadi pada mobil fisik tertentu milikmu.
- **Static Property/Method** (`PabrikMobil.totalMobilDibuat` / `PabrikMobil.ujiStandarEmisi()`): Melekat pada **Perusahaan/Pabriknya langsung**. Kamu tidak bertanya kepada mobil di garasi berapa total seluruh mobil di dunia, kamu bertanya langsung ke Kantor Pusat Pabrik!

---

## 📘 Konsep Dasar

### 1. Deklarasi `static`

```ts
class KalkulatorFinansial {
  // Static Property: Konstanta milik Class
  public static readonly SUKU_BUNGA_ACUAN: number = 0.06; // 6%

  // Static Method: Fungsi bantuan yang tidak butuh data instance
  public static hitungEstimasiBunga(nominal: number, tahun: number): number {
    return nominal * this.SUKU_BUNGA_ACUAN * tahun;
  }
}

// ✅ Dipanggil langsung dari nama Class (tanpa `new`!):
console.log(KalkulatorFinansial.SUKU_BUNGA_ACUAN); // 0.06
console.log(KalkulatorFinansial.hitungEstimasiBunga(10000000, 2)); // 1.200.000

// ❌ TIDAK BISA dipanggil dari instance:
// const k = new KalkulatorFinansial();
// k.hitungEstimasiBunga(...); // Error!
```

---

### 2. Static Method sebagai Factory Method

Pola populer untuk membuat instance dengan konfigurasi khusus:

```ts
class AkunPengguna {
  constructor(
    public username: string,
    public role: "admin" | "member" | "tamu"
  ) {}

  // Static Factory Method
  public static buatAkunTamu(): AkunPengguna {
    const idAcak = Math.floor(Math.random() * 10000);
    return new AkunPengguna(`Tamu_${idAcak}`, "tamu");
  }
}

// Membuat akun tamu instan tanpa perlu tahu detail constructor
const tamu1 = AkunPengguna.buatAkunTamu();
console.log(tamu1.username, tamu1.role); // "Tamu_4821", "tamu"
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/06-oop-typescript/06-static-member/contoh.ts
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Kata kunci `static` menempelkan method/properti pada Constructor Class.
- Tidak dapat diakses oleh instance `new`.
- Sangat cocok untuk fungsi utilitas/helper dan pola Factory.
