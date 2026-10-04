# 08 · Penanganan Error Async/Await: `try ... catch`

## 🎯 Tujuan Belajar
- Menggunakan struktur standar **`try ... catch`** untuk menangani error pada fungsi `async`.
- Mengetahui mengapa TypeScript memberikan tipe **`unknown`** pada parameter `catch (error)`.
- Menerapkan **Type Narrowing** menggunakan `if (error instanceof Error)` untuk membaca properti `.message` secara aman.
- Menggunakan blok **`finally`** untuk menjamin pembersihan resource (seperti mematikan loading indicator).

---

## 🧠 Analogi Dunia Nyata: "Jaring Pengaman Pemain Sirkus"
Bayangkan sebuah atraksi sirkus akrobatik di udara:
- **Blok `try { ... }`**: Adalah panggung akrobat di atas. Pemain mencoba melakukan lompatan berbahaya (**tugas asinkron**). Jika semua berjalan lancar, pertunjukan selesai dengan tepuk tangan.
- **Blok `catch (error) { ... }`**: Adalah **jaring pengaman** yang terpasang di bawah panggung. Jika pemain terpeleset atau jatuh (**terjadi error**), ia tidak membentur lantai! Jaring menangkapnya seketika dan tim medis segera memberikan pertolongan.
- **Blok `finally { ... }`**: Adalah petugas kebersihan lampu stadion. Entah atraksinya sukses atau jatuh ke jaring, lampu stadion **tetap harus dimatikan di akhir acara**.

---

## 📘 Konsep Dasar

### 1. Struktur `try ... catch ... finally`
Pada fungsi `async`, kita tidak lagi menyambung `.catch()` di belakang. Semua operasi `await` dimasukkan ke dalam blok `try`:

```ts
async function muatData() {
  try {
    const res = await fetch("https://api.contoh.com/data");
    
    if (!res.ok) {
      throw new Error(`Server error: ${res.status}`);
    }

    const data = await res.json();
    console.log("Sukses:", data);
  } catch (error: unknown) {
    // Menangkap jika ada koneksi terputus atau error yang dilempar
    console.error("Terjadi kegagalan:", error);
  } finally {
    console.log("Proses selesai dieksekusi.");
  }
}
```

---

## 🔷 TypeScript Corner: Mengapa Parameter `catch` Bertipe `unknown`?

Di JavaScript, siapa pun bisa melempar apa saja dengan `throw`:
```ts
throw "Error biasa";       // Melempar string
throw 404;                 // Melempar number
throw new Error("Koneksi");// Melempar objek Error resmi
```

Karena TypeScript tidak bisa menjamin bahwa yang dilempar pasti berupa objek `Error`, TypeScript menetapkan tipe parameter `catch` sebagai **`unknown`**.

### Cara Benar Membaca Error di TypeScript:
```ts
try {
  // ... kode asinkron
} catch (error: unknown) {
  // Gunakan type narrowing 'instanceof Error'
  if (error instanceof Error) {
    console.error("Pesan Error Resmi:", error.message);
  } else {
    console.error("Error dalam bentuk lain:", String(error));
  }
}
```

---

## ⚠️ Kesalahan Umum Pemula

1. **Lupa bahwa `fetch` tidak otomatis melempar error saat status 404**:
   Sama seperti pada Promise biasa, `fetch` di dalam `try` **TIDAK AKAN** otomatis melompat ke `catch` jika server merespon 404! Anda tetap harus menulis `if (!res.ok) throw new Error(...)`.

2. **Membiarkan blok `catch` kosong**:
   Jangan pernah menulis `catch (e) {}` tanpa mencetak atau menangani error! Itu seperti mematikan alarm kebakaran saat gedung terbakar.

---

## 📌 Ringkasan
- Bungkus semua pemanggilan `await` di dalam blok `try { ... }`.
- Tangani kegagalan di dalam blok `catch (error: unknown)`.
- Selalu gunakan `if (error instanceof Error)` agar properti `error.message` dapat diakses dengan aman tanpa komplain dari compiler TypeScript.
- Gunakan `finally` untuk proses bersih-bersih akhir.
