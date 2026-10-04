# 06 · Nullish Coalescing Operator (`??`)

## 🎯 Tujuan Belajar
- Memahami konsep nilai **Nullish** (`null` dan `undefined`).
- Mengetahui perbedaan mendasar antara operator `??` (Nullish Coalescing) dengan `||` (Logical OR).
- Mengatasi masalah nilai `0` dan string kosong `""` yang keliru tertimpa nilai default saat memakai `||`.
- Memahami cara TypeScript melakukan type narrowing setelah ekspresi `??`.

---

## 🧠 Analogi: Ketiadaan Nilai vs Nilai Nol

Bayangkan kamu mencatat skor kuis siswa:
- **Siswa A**: Menjawab kuis dan mendapat skor **0** (dia hadir dan mencoba).
- **Siswa B**: Tidak hadir ujian sama sekali (**tidak ada data / `undefined`**).

Jika kamu memakai aturan: *"Jika siswa tidak punya nilai, beri skor cadangan 10"*:
- Dengan operator `||`: Siswa A (skor 0) dianggap tidak punya nilai karena `0` falsy, sehingga skornya diubah jadi 10 (tidak adil!).
- Dengan operator `??`: Siswa A tetap mendapat skor 0 karena 0 **bukan nullish**. Hanya Siswa B (`undefined`) yang diganti menjadi 10.

---

## 📘 Konsep Dasar

Operator `??` diperkenalkan di ES2020. Operator ini hanya menganggap dua nilai sebagai pemicu fallback:
1. `null`
2. `undefined`

Nilai seperti `0`, `""` (string kosong), `false`, dan `NaN` **TIDAK dianggap nullish**, melainkan nilai valid yang akan dipertahankan!

---

### Perbandingan `||` vs `??`

| Nilai di Kiri | Hasil `nilai || "Default"` | Hasil `nilai ?? "Default"` | Penjelasan |
| :--- | :--- | :--- | :--- |
| `"Rayhan"` | `"Rayhan"` | `"Rayhan"` | Keduanya menganggap valid |
| `""` (string kosong) | `"Default"` ❌ | `""` ✅ | `""` bukan nullish |
| `0` (angka nol) | `"Default"` ❌ | `0` ✅ | `0` bukan nullish |
| `false` | `"Default"` ❌ | `false` ✅ | `false` bukan nullish |
| `null` | `"Default"` | `"Default"` | `null` adalah nullish |
| `undefined` | `"Default"` | `"Default"` | `undefined` adalah nullish |

---

### Contoh Kode: Data Restoran

```ts
interface PengaturanRestoran {
  nama: string;
  jumlahMejaKosong?: number; // bisa 0 atau undefined
  catatanKhusus?: string;    // bisa "" atau undefined
}

const resto: PengaturanRestoran = {
  nama: "Cafe Nostalgia",
  jumlahMejaKosong: 0, // Semua meja penuh!
  catatanKhusus: "",    // Memang sengaja dikosongkan
};

// ❌ Memakai || (Hasil Salah)
const mejaOr = resto.jumlahMejaKosong || 10;
console.log(mejaOr); // 10 (Keliru! Padahal meja sebenarnya 0)

// ✅ Memakai ?? (Hasil Tepat)
const mejaNullish = resto.jumlahMejaKosong ?? 10;
console.log(mejaNullish); // 0 (Benar!)

const catatan = resto.catatanKhusus ?? "Tidak ada catatan";
console.log(catatan); // "" (String kosong dipertahankan)
```

---

## 🔷 TypeScript Corner: Type Narrowing dengan `??`

Jika sebuah variabel memiliki tipe `string | null | undefined`, ekspresi `variabel ?? "Nilai Default"` akan secara otomatis di-narrowing oleh TypeScript menjadi tipe murni `string`:

```ts
function prosesId(id?: string | null): string {
  const idPasti: string = id ?? "ID-DEFAULT-000";
  return idPasti.toLowerCase(); // Aman dipanggil, tidak mungkin null/undefined!
}
```

---

## ▶️ Cara Menjalankan

```bash
npm run materi -- materi/04-data-structures-operators-strings/06-nullish-coalescing/contoh.ts
```

---

## ⚠️ Kesalahan Umum

| Kode Salah | Masalah | Perbaikan |
| :--- | :--- | :--- |
| `const x = a || b ?? c;` | Menggabungkan `||` dan `??` tanpa tanda kurung akan memicu SyntaxError | Beri tanda kurung: `const x = (a || b) ?? c;` |
| Mengira `??` mengabaikan `false` | `false ?? true` menghasilkan `false` karena `false` bukan nullish | Pahami bahwa `??` hanya mengecek `null` dan `undefined` |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu kerjakan instruksi `TODO`. Cocokkan dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Nullish values HANYA terdiri dari: `null` dan `undefined`.
- `??` mempertahankan nilai `0`, `""`, dan `false`.
- Gunakan `??` sebagai pilihan utama saat menangani nilai default untuk properti opsional.
