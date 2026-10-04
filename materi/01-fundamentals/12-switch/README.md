# 12 · Pernyataan `switch`

## 🎯 Tujuan Belajar
- Menggunakan pernyataan `switch` sebagai alternatif `if/else` ketika ada banyak pilihan kesamaan
- Memahami fungsi kata kunci `case`, `break`, dan `default`
- Memahami efek *fall-through* jika lupa menulis `break`
- Memadukan `switch` dengan **Union Literal Types** di TypeScript

---

## 🧠 Analogi: Menu Pilihan Mesin Penjual Minuman

Bayangkan mesin penjual minuman otomatis (vending machine):
- Tekan tombol **"A1"** → keluar Kopi Susu
- Tekan tombol **"A2"** → keluar Teh Tarik
- Tekan tombol **"A3"** → keluar Cokelat Panas
- Tekan tombol lain yang tidak ada → keluar pesan *"Pilihan tidak valid"*

Jika ada banyak kemungkinan nilai dari **satu variabel yang sama**, `switch` sering kali lebih rapi dan nyaman dibaca dibanding `if / else if / else if` yang panjang.

---

## 💻 Struktur Dasar `switch`

```ts
const hari: string = "senin";

switch (hari) {
  case "senin":
    console.log("Mulai bekerja dan merencanakan pekan 📋");
    break;
  case "selasa":
    console.log("Rapat tim pengembang 💻");
    break;
  case "rabu":
  case "kamis":
    // Mengelompokkan case: jika "rabu" ATAU "kamis"
    console.log("Fokus menulis kode & materi 🚀");
    break;
  case "jumat":
    console.log("Review kode mingguan 🔍");
    break;
  case "sabtu":
  case "minggu":
    console.log("Libur akhir pekan! 🎉");
    break;
  default:
    console.log("Hari tidak dikenali!");
    break;
}
```

### Penjelasan Bagian-Bagian `switch`:
1. `switch (variabel)`: Menentukan variabel apa yang akan diperiksa nilainya.
2. `case "nilai":`: Jika isi variabel sama persis (`===`) dengan `"nilai"`, jalankan instruksi di bawahnya.
3. `break;`: **Hentikan** eksekusi switch dan keluar.
4. `default:`: Dijalankan jika tidak ada satu pun `case` yang cocok (mirip `else` penutup).

---

## ⚠️ Mengapa `break` Sangat Penting? (Fall-Through)

Di JavaScript dan TypeScript, jika kamu **lupa menulis `break`**, komputer akan terus menjalankan baris di `case` berikutnya meskipun kondisinya tidak cocok!

```ts
const peran: string = "admin";

switch (peran) {
  case "admin":
    console.log("Akses penuh sistem");
    // ⚠️ Lupa break!
  case "user":
    console.log("Akses dashboard user"); // Baris ini ikut terpanggil!
    break;
}
```

> 💡 Selalu pastikan setiap `case` diakhiri dengan `break;` (kecuali memang sengaja menggabungkan beberapa case seperti `"sabtu"` dan `"minggu"`).

---

## 🔷 Versi TypeScript: Union Literal Types & Keamanan Pengecekan

Di TypeScript, kita bisa menentukan tipe pilihan yang diizinkan menggunakan **Union Types**:

```ts
type StatusPesanan = "antri" | "dimasak" | "diantar" | "selesai";

function prosesStatus(status: StatusPesanan): void {
  switch (status) {
    case "antri":
      console.log("Pesanan sedang dalam antrean");
      break;
    case "dimasak":
      console.log("Chef sedang memasak hidangan");
      break;
    case "diantar":
      console.log("Kurir sedang menuju alamat tujuan");
      break;
    case "selesai":
      console.log("Pesanan telah diterima");
      break;
  }
}
```

Jika kamu salah mengetik nilai case yang tidak terdaftar:
```ts
case "dibatalkan": // ❌ Type '"dibatalkan"' is not comparable to type 'StatusPesanan'.
```
TypeScript langsung memperingatkan bahwa status tersebut tidak pernah ada!

---

## ⚖️ Kapan Pakai `switch` vs `if/else`?

| Kondisi | Rekomendasi |
| :--- | :--- |
| Memeriksa rentang angka (misal: `nilai >= 80 && nilai < 90`) | Gunakan **`if / else`** |
| Kondisi logika majemuk (campuran `&&` dan `\|\|`) | Gunakan **`if / else`** |
| Membandingkan **satu variabel** dengan **banyak nilai pasti** (misal: `"senin"`, `"selasa"`, `"rabu"`) | Gunakan **`switch`** |

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan soal yang tersedia. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- `switch` digunakan untuk mencocokkan satu nilai ke banyak kemungkinan `case`.
- Menggunakan perbandingan strict equality (`===`) di balik layar.
- Jangan lupa `break;` di setiap akhir blok `case`.
- Gunakan `default:` untuk menangani nilai yang tidak terdaftar.
- Di TypeScript, kombinasikan `switch` dengan *union literal types* untuk validasi ketat dan autocompletion.
