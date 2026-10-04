# 11 · Promise Combinator: `allSettled`, `race`, dan `any`

## 🎯 Tujuan Belajar
- Memahami 4 combinator utama untuk mengelola banyak Promise di JavaScript/TypeScript.
- Menggunakan **`Promise.allSettled()`** saat ingin mendapatkan hasil semua tugas tanpa khawatir gagal di tengah jalan (*non fail-fast*).
- Menggunakan **`Promise.race()`** untuk skenario adu cepat (seperti mekanisme *Timeout* request).
- Menggunakan **`Promise.any()`** untuk mengambil respon sukses tercepat pertama.

---

## 🧠 Analogi Dunia Nyata: "Strategi Pengiriman Kurir"

| Method | Analogi di Dunia Nyata | Karakter Kunci |
| :--- | :--- | :--- |
| **`Promise.all`** | **Tim Estafet Lari**: Semua 4 pelari harus sampai garis akhir. Jika 1 pelari jatuh pingsan, seluruh tim langsung didiskualifikasi! | Semua harus sukses (*Fail-fast*) |
| **`Promise.allSettled`** | **Sensus Penduduk**: Petugas mendata semua warga. Yang ada di rumah dicatat, yang rumahnya kosong juga dicatat. Semua harus disurvei sampai tuntas. | Tidak pernah gagal (*Never rejects*) |
| **`Promise.race`** | **Lomba Balap Formula 1**: Siapa mobil pertama yang menyentuh garis finish (atau mobil pertama yang meledak/rusak), dia yang menjadi hasil akhir! | Mengambil yang tercepat |
| **`Promise.any`** | **Mencari Taksi Online**: Anda memesan ke 3 aplikasi taksi sekaligus. Pengemudi pertama yang menerima pesanan adalah yang Anda naiki! Driver yang menolak diabaikan. | Mengambil sukses tercepat pertama |

---

## 📘 Konsep Dasar

### 1. `Promise.allSettled()` (Paling Aman untuk Dashboard)
Berbeda dengan `Promise.all`, `allSettled` **tidak pernah melempar error**:

```ts
const hasil = await Promise.allSettled([
  Promise.resolve("Data A Sukses"),
  Promise.reject(new Error("Data B Gagal")),
  Promise.resolve("Data C Sukses"),
]);

// Setiap elemen hasil memiliki properti:
// - status: "fulfilled" (ada properti .value)
// - status: "rejected"  (ada properti .reason)
hasil.forEach((item) => {
  if (item.status === "fulfilled") {
    console.log("Sukses:", item.value);
  } else {
    console.log("Gagal:", item.reason.message);
  }
});
```

---

### 2. `Promise.race()` (Sering Digunakan untuk Fitur Timeout)
Mengambil apapun yang paling cepat selesai (sukses ataupun gagal):

```ts
function timeout(detik: number): Promise<never> {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Waktu habis! Melebihi ${detik} detik.`));
    }, detik * 1000);
  });
}

// Balapan antara fetch data vs timeout 3 detik
try {
  const data = await Promise.race([
    fetch("https://api.contoh.com/data-berat"),
    timeout(3), // Jika fetch lebih dari 3 detik, timeout yang menang!
  ]);
} catch (err) {
  console.error("Permintaan dibatalkan karena timeout.");
}
```

---

### 3. `Promise.any()` (Sukses Tercepat Pertama)
Mengabaikan semua Promise yang gagal, dan hanya mencari yang pertama kali berhasil:

```ts
const cdnTercepat = await Promise.any([
  ambilDariServerSingapura(), // gagal
  ambilDariServerJakarta(),   // sukses (menang!)
  ambilDariServerTokyo(),     // lambat
]);
```

---

## 📌 Ringkasan
- `Promise.all`: Semua wajib sukses.
- `Promise.allSettled`: Tunggu semua tuntas, kumpulkan laporan sukses dan gagalnya.
- `Promise.race`: Ambil yang paling cepat selesai (sukses/gagal).
- `Promise.any`: Ambil yang paling cepat sukses (abaikan yang gagal).
