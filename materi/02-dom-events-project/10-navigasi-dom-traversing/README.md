# 10 · Navigasi Pohon DOM (DOM Traversing)

## 🎯 Tujuan Belajar
- Memahami konsep **DOM Traversing** (bergerak antar elemen berdasarkan hubungan pohon silsilah keluarga).
- Menavigasi ke atas: **`.parentElement`** dan method ampuh **`.closest()`**.
- Menavigasi ke bawah: **`.children`**, **`.firstElementChild`**, dan **`.lastElementChild`**.
- Menavigasi ke samping: **`.nextElementSibling`** dan **`.previousElementSibling`**.
- Menangani nilai kembalian bertipe `HTMLElement | null` di TypeScript.

---

## 🧠 Analogi Dunia Nyata: "Silsilah Pohon Keluarga"
Bayangkan Anda sedang mencari kerabat:
- Anda berdiri di posisi Anda sendiri (`elemenSaatIni`).
- Jika Anda ingin meminta izin orang tua, Anda tidak perlu mengumumkan ke seluruh kota (*tidak perlu `document.querySelector`*), Anda cukup melangkah satu langkah ke atas: **`.parentElement`**.
- Jika Anda ingin mencari kepala keluarga atau kakek buyut terdekat di acara reuni: gunakan **`.closest(".keluarga-besar")`**.
- Jika Anda ingin memanggil adik yang lahir tepat setelah Anda: gunakan **`.nextElementSibling`**.

---

## 📘 Konsep Dasar

### 1. Navigasi ke Atas (Leluhur / Ancestors)
Method `.closest('selector')` adalah salah satu method paling berguna dalam pembuatan aplikasi web (misal tombol hapus di dalam kartu item):

```ts
const tombolHapus = document.querySelector<HTMLButtonElement>(".btn-hapus")!;

// Mencari elemen induk pembungkus berupa kartu terdekat
const kartuInduk: HTMLElement | null = tombolHapus.closest(".kartu-item");

if (kartuInduk !== null) {
  kartuInduk.style.opacity = "0.3";
}
```

---

### 2. Navigasi ke Bawah (Keturunan / Children)
```ts
const daftarMenu = document.querySelector<HTMLUListElement>("#menu-utama")!;

// 1. Mengambil semua anak elemen HTML (HTMLCollection)
console.log("Total anak menu:", daftarMenu.children.length);

// 2. Mengambil anak pertama & terakhir
const menuPertama: Element | null = daftarMenu.firstElementChild;
const menuTerakhir: Element | null = daftarMenu.lastElementChild;
```

---

### 3. Navigasi ke Samping (Saudara / Siblings)
```ts
const itemSedangAktif = document.querySelector<HTMLLIElement>(".item.aktif")!;

// Mengambil saudara berikutnya dan sebelumnya
const itemSelanjutnya = itemSedangAktif.nextElementSibling as HTMLElement | null;
const itemSebelumnya = itemSedangAktif.previousElementSibling as HTMLElement | null;

if (itemSelanjutnya) {
  itemSelanjutnya.style.fontWeight = "bold";
}
```

---

## 🔷 TypeScript Corner: `Element` vs `Node` pada Traversing

Perhatikan akhiran kata kunci yang Anda gunakan:
- **Gunakan properti berelemen**: `.children`, `.firstElementChild`, `.nextElementSibling`. Properti ini **hanya menghitung tag HTML asli** dan mengabaikan spasi/enter.
- **Hindari properti bernode**: `.childNodes`, `.firstChild`, `.nextSibling`. Properti ini sering menghasilkan teks kosong atau enter yang membuat kode rapuh dan sulit ditebak tipenya.

---

## ⚠️ Kesalahan Umum Pemula

1. **Lupa bahwa `.closest()` memeriksa elemen itu sendiri terlebih dahulu**:
   `.closest('.btn')` pada elemen yang sudah memiliki class `.btn` akan mengembalikan elemen itu sendiri, bukan induknya.

2. **Tidak menangani kemungkinan `null`**:
   Anak pertama tidak akan memiliki `previousElementSibling` (nilainya `null`). Pastikan selalu memeriksa `if (el !== null)` sebelum mengakses propertinya.

---

## 📌 Ringkasan
- Gunakan `.parentElement` untuk melangkah 1 tingkat ke atas.
- Gunakan `.closest('selector')` untuk mencari induk/leluhur terdekat yang cocok dengan selektor tertentu.
- Gunakan `.firstElementChild`, `.lastElementChild`, dan `.children` untuk mengakses anak elemen.
- Gunakan `.nextElementSibling` dan `.previousElementSibling` untuk navigasi saudara kandung.
