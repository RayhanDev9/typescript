# 06 · Penanganan Error pada Promise & Fetch

## 🎯 Tujuan Belajar
- Mengetahui jebakan paling mengecoh pada `fetch()`: **Status HTTP 404 & 500 TIDAK otomatis ditolak (*reject*)!**
- Memeriksa properti **`response.ok`** dan **`response.status`**.
- Melempar error secara manual menggunakan kata kunci **`throw new Error(...)`**.
- Menangkap error HTTP maupun error jaringan fisik secara komprehensif di dalam blok **`.catch()`**.

---

## 🧠 Analogi Dunia Nyata: "Surat Balasan Penolakan dari Kantor Pos"
Bayangkan Anda mengirim surat lamaran kerja:
1. **Error Jaringan Fisik (Rejected Otomatis oleh `fetch`)**:
   Ada badai besar dan kantor pos tutup. Kurir tidak bisa mengantar surat Anda sama sekali. Permintaan gagal terkirim.
2. **Error HTTP 404 / 500 (TETAP Dianggap Sukses oleh `fetch`!)**:
   Kurir **berhasil** mengantar surat Anda ke kantor tujuan. Resepsionis menerima surat tersebut, lalu memberikan surat balasan resmi yang bertuliskan: *"Maaf, posisi lowongan tidak ditemukan (404)"*.
   Bagi kurir (`fetch()`), pengantaran surat **sukses dilakukan**! Terserah Anda untuk membaca isi surat balasan tersebut dan menyadari bahwa lamaran Anda ditolak.

---

## 📘 Konsep Dasar

### 1. Kapan `fetch()` Melakukan `reject`?
`fetch()` **HANYA** akan me-reject Promise jika terjadi kegagalan koneksi jaringan fisik (misal: komputer offline, kabel internet terputus, atau domain tidak ada).

Jika server merespon dengan status **404 (Halaman Tidak Ditemukan)** atau **500 (Server Error)**, `fetch()` tetap menganggap Promise-nya **berhasil (*fulfilled*)**!

---

### 2. Solusi: Memeriksa `response.ok` dan `throw new Error`
Properti `response.ok` bernilai `true` jika status HTTP berada di kisaran sukses (200 - 299).  
Jika `response.ok` bernilai `false`, kita harus melempar error sendiri agar alur program langsung terlempar ke `.catch()`:

```ts
fetch("https://jsonplaceholder.typicode.com/posts/999999") // ID tidak ada
  .then((response: Response) => {
    // 1. Cek apakah respon server sukses (status 200-299)
    if (!response.ok) {
      // Melempar error secara sengaja!
      throw new Error(`Gagal mengambil data! Status HTTP: ${response.status} (${response.statusText})`);
    }

    return response.json();
  })
  .then((data) => {
    console.log("Data sukses:", data);
  })
  .catch((error: Error) => {
    // Error manual yang dilempar di atas otomatis mendarat di sini!
    console.error("Terjadi Masalah:", error.message);
  });
```

---

## 🔷 TypeScript Corner: Membedakan Jenis Error

Saat menangani error di TypeScript, tipe parameter di `.catch()` atau `catch (err)` secara default adalah `any` atau `unknown`.  
Praktik terbaik adalah melakukan pengecekan `instanceof Error`:

```ts
.catch((err: unknown) => {
  if (err instanceof Error) {
    console.error("Pesan Error Terverifikasi:", err.message);
  } else {
    console.error("Terjadi error yang tidak diketahui:", err);
  }
});
```

---

## 📌 Ringkasan
- `fetch()` tidak me-reject error HTTP 404/500 secara otomatis.
- Selalu periksa `if (!response.ok)` setelah memanggil `fetch()`.
- Gunakan `throw new Error(...)` untuk menghentikan proses dan langsung mengalihkan data ke blok `.catch()`.
- Selalu sediakan blok `.catch()` di akhir rantai Promise untuk menangani error tak terduga.
