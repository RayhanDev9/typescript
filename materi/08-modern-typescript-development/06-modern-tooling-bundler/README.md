# 06 · Modern Tooling & Bundler

## 🎯 Tujuan Belajar
- Memahami mengapa aplikasi web modern membutuhkan **Build Tools / Bundler** (seperti Vite, esbuild, Rollup, Webpack).
- Memahami konsep **Dependency Graph** (pohon ketergantungan modul).
- Menguasai konsep **Minification & Obfuscation** (pengecilan ukuran kode).
- Memahami fungsi penyelamat **Source Maps (`.map`)** untuk debugging kode TypeScript di browser.
- Memahami **Transpilation** (mengubah sintaks TypeScript terbaru menjadi JavaScript ramah browser).

---

## 🧠 Analogi Dunia Nyata: "Pabrik Perakitan Mobil vs Komponen Terpisah"
- Bayangkan jika dealer mengirim sebuah mobil ke rumah Anda dalam bentuk 10.000 mur, baut, ban, dan kabel terpisah. Anda akan pusing merakitnya dan butuh waktu sangat lama!
- **Bundler (seperti Vite/esbuild)** adalah **Pabrik Perakitan**:
  1. Mengumpulkan ratusan file `.ts`, gambar, dan CSS yang terpisah-pisah.
  2. Menganalisis baut mana yang menempel ke mesin mana (**Dependency Graph**).
  3. Membuang mur yang tidak dipakai (**Tree Shaking**).
  4. Merakitnya menjadi 1 atau 2 file JavaScript yang sangat ramping, padat, dan cepat dimuat oleh browser pelanggan (**Bundling & Minification**).

---

## 📘 Tahapan Kerja Bundler Modern

```
[File TS / CSS / Asset]
        ↓
1. Parsing & Analisis (Dependency Graph)
        ↓
2. Transpilasi (TypeScript → JavaScript Standar)
        ↓
3. Tree-Shaking (Buang fungsi yang tak terpakai)
        ↓
4. Minification (Hapus spasi, perpendek nama variabel)
        ↓
[Hasil: bundle.min.js + bundle.js.map]
```

### 1. Minification (Pengecilan Ukuran)
Sebelum:
```ts
function hitungTotalPembayaran(hargaSatuan: number, jumlahBarang: number): number {
  const totalSementara = hargaSatuan * jumlahBarang;
  return totalSementara;
}
```
Sesudah di-minify (oleh bundler untuk browser):
```js
function a(b,c){return b*c}
```
Hasil: Ukuran file berkurang hingga 70-80%, membuat website terbuka dalam sekejap!

### 2. Source Maps (`.js.map`)
Jika kode browser sudah berubah menjadi `a(b,c){return b*c}`, bagaimana jika terjadi error? Browser akan melaporkan: `Error at line 1 in a()`. Ini membuat programmer pusing!
**Source Map** adalah "kamus penerjemah":
- Ia memetakan baris error di `bundle.min.js` kembali ke baris asli di file `hitungTotal.ts` baris 2!
- Developer Tools di browser (Chrome/Edge DevTools) membaca file `.map` ini secara otomatis saat debugging.

---

## 🛠️ Generasi Tooling Modern: Kenapa Vite & esbuild Sangat Populer?
- Dulu, bundler seperti Webpack ditulis dalam JavaScript, sehingga butuh waktu berpuluh-puluh detik untuk compile.
- **esbuild** ditulis dalam bahasa **Go**, berjalan **10x - 100x lebih cepat** daripada bundler JS tradisional.
- **Vite** memanfaatkan native ES Modules browser saat pengembangan lokal (dev mode), sehingga server langsung menyala instan tanpa menunggu proses bundling awal!

---

## 📌 Ringkasan
- Bundler mengoptimasi ratusan file kode terpisah menjadi aset web siap pakai yang ringan.
- Source Map (`.map`) menghubungkan kode JavaScript ter-minify kembali ke kode TypeScript sumber kita.
- Vite dan esbuild adalah standar perkakas modern berkecepatan tinggi saat ini.
