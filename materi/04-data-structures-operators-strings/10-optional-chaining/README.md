# 10 · Optional Chaining (`?.`)

## 🎯 Tujuan Belajar
- Memahami operator **Optional Chaining (`?.`)** untuk mengakses properti bersarang tanpa risiko `TypeError: Cannot read properties of undefined`.
- Menggunakan `?.` pada properti objek, pemanggilan method (`func?.()`), dan elemen array (`arr?.[index]`).
- Menggabungkan `?.` dengan operator nullish coalescing `??` untuk memberikan nilai default yang sangat aman.
- Memahami mengapa TypeScript mode `strictNullChecks` mewajibkan penggunaan optional chaining.

---

## 🧠 Analogi: Membuka Pintu Bersekat

Bayangkan kamu mencari barang di **Gedung > Lantai 3 > Ruang 305 > Laci Meja**:
- **Cara Kuno**: Jika Lantai 3 terkunci atau tidak ada, kamu menabrak pintu dan cedera (*Crash / Error fatal*). Untuk amannya, kamu harus mengecek satu per satu: `if (gedung && gedung.lantai3 && gedung.lantai3.ruang305 ...)` (sangat panjang dan melelahkan!).
- **Optional Chaining (`?.`)**: Sensor otomatis! Jika Lantai 3 tidak ada, kamu langsung berhenti di sana dengan tenang dan melaporkan `"tidak ditemukan / undefined"` tanpa terluka sedikit pun.

---

## 📘 Konsep Dasar

Optional chaining `?.` akan memeriksa apakah nilai di sebelah kirinya bernilai `null` atau `undefined`:
- Jika `null` / `undefined`, evaluasi langsung berhenti dan mengembalikan `undefined`.
- Jika ada nilainya, evaluasi dilanjutkan ke properti berikutnya.

---

### 1. Akses Properti Bersarang (Nested Properties)

```ts
interface InfoResto {
  nama: string;
  jamOperasional?: {
    senin?: { buka: number; tutup: number };
    jumat?: { buka: number; tutup: number };
  };
}

const resto: InfoResto = {
  nama: "Ristorante Italia",
};

// ❌ Tanpa Optional Chaining (Crash jika jamOperasional undefined!)
// console.log(resto.jamOperasional.senin.buka); // TypeError: Cannot read properties of undefined

// ⚠️ Cara Lama yang Panjang:
if (resto.jamOperasional && resto.jamOperasional.senin) {
  console.log(resto.jamOperasional.senin.buka);
}

// ✅ Cara Modern dengan Optional Chaining:
console.log(resto.jamOperasional?.senin?.buka); // undefined (Aman, tidak crash!)
```

---

### 2. Menggabungkan `?.` dengan `??` (Kombinasi Terbaik)

```ts
// Jika jam buka senin tidak ada, tampilkan "Tutup"
const jamBukaSenin = resto.jamOperasional?.senin?.buka ?? "Tutup";
console.log(`Buka hari senin: ${jamBukaSenin}`); // "Buka hari senin: Tutup"
```

---

### 3. Optional Chaining pada Pemanggilan Method (`?.()`)

Mengecek apakah suatu method didefinisikan sebelum memanggilnya:

```ts
interface LayananResto {
  pesanAntar?: (alamat: string) => void;
}

const layanan: LayananResto = {};

// Hanya panggil jika method pesanAntar ada
layanan.pesanAntar?.("Jl. Merdeka No. 1"); // Tidak melakukan apa-apa, aman tanpa error!
```

---

### 4. Optional Chaining pada Index Array (`?.[]`)

Mengecek apakah array ada sebelum mengakses indeks tertentu:

```ts
interface MenuResto {
  kokiSpesial?: string[];
}

const menu: MenuResto = {};

console.log(menu.kokiSpesial?.[0] ?? "Koki belum ditugaskan");
// "Koki belum ditugaskan"
```

---

## 🔷 TypeScript Corner: `strictNullChecks`

Dalam konfigurasi `"strict": true` (atau `strictNullChecks: true`), TypeScript akan menandai error jika kita mencoba mengakses properti dari objek yang mungkin `null | undefined`. Menggunakan `?.` adalah solusi standar industri yang langsung menyelesaikan peringatan tersebut.

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/10-optional-chaining/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `resto?.jamOperasional.senin.buka` | Lupa memberi `?.` di tingkat properti berikutnya yang juga mungkin undefined | Beri `?.` di setiap sambungan: `resto?.jamOperasional?.senin?.buka` |
| `user?.nama = "Budi"` | Optional chaining **TIDAK BISA** ditaruh di sisi kiri penugasan `=` | Gunakan if: `if (user) user.nama = "Budi";` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `obj?.prop` menghentikan evaluasi jika `obj` adalah `null`/`undefined`.
- `obj?.method?.()` aman untuk memanggil method opsional.
- `arr?.[index]` aman untuk mengakses indeks array opsional.
- Pasangkan dengan `??` untuk nilai default yang bersih dan elegan.
