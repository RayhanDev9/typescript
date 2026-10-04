# 05 · Package Manager & NPM

## 🎯 Tujuan Belajar
- Memahami peran **Package Manager** (npm, pnpm, yarn) dalam ekosistem JavaScript/TypeScript.
- Menguasai anatomi file **`package.json`** dan file pengunci **`package-lock.json`**.
- Membedakan dengan jelas antara **`dependencies`** (kebutuhan aplikasi di runtime pengguna) dan **`devDependencies`** (alat bantu saat coding/build).
- Memahami konsep **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH` beserta simbol `^` (caret) dan `~` (tilde).
- Memahami ekosistem deklarasi tipe TypeScript di **DefinitelyTyped (`@types/*`)**.

---

## 🧠 Analogi Dunia Nyata: "Buku Resep & Dapur Restoran"
Bayangkan Anda membuka restoran:
- **`package.json`** adalah **Daftar Kebutuhan Restoran**:
  - **`dependencies` (Bahan Baku Makanan)**: Beras, daging, sayuran, garam. Semua bahan ini harus ada saat makanan dihidangkan ke meja pelanggan (*production runtime*).
  - **`devDependencies` (Peralatan Koki)**: Pisau koki, celemek, buku resep, timer. Alat-alat ini hanya dipakai di dalam dapur saat memasak. Pelanggan tidak perlu memakan pisau atau celemek Anda!
- **`package-lock.json`** adalah **Catatan Pengiriman Supplier Tepat**: Memastikan merek dan nomor batch garam yang dikirim ke cabang Surabaya sama persis 100% dengan yang ada di cabang Jakarta.

---

## 📘 Konsep Dasar

### 1. Struktur `package.json`
```json
{
  "name": "aplikasi-toko-online",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "axios": "^1.7.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0",
    "@types/node": "^20.0.0"
  }
}
```

### 2. Semantic Versioning (SemVer)
Format versi adalah: `MAJOR.MINOR.PATCH` (contoh: `2.4.1`)
- **MAJOR** (`2`): Berubah jika ada fitur baru yang merusak kode lama (*breaking changes*).
- **MINOR** (`4`): Berubah jika ada fitur baru yang tetap kompatibel dengan kode lama.
- **PATCH** (`1`): Berubah jika ada perbaikan bug kecil (*bug fixes*).

**Simbol Awalan Versi:**
- `^2.4.1` (Caret - Default npm): Boleh meng-update Minor & Patch (contoh: `2.5.0`, `2.4.2`), tapi **tidak boleh** lompat ke Major `3.0.0`.
- `~2.4.1` (Tilde): Hanya boleh meng-update Patch (contoh: `2.4.2`), tidak boleh ganti Minor `2.5.0`.
- `2.4.1` (Tepat / Exact): Mengunci persis di versi tersebut.

---

### 3. Paket Deklarasi Tipe: `@types/*`
Banyak pustaka JavaScript lama dibuat tanpa TypeScript. Komunitas open-source membuat repositori **DefinitelyTyped** untuk menyediakan tipe data:
```bash
npm install lodash            # Mengunduh kode JavaScript runtime (ke dependencies)
npm install -D @types/lodash   # Mengunduh tipe data TypeScript (ke devDependencies)
```

---

## 📌 Ringkasan
- Simpan pustaka runtime (seperti Express, React, Axios) ke `dependencies`.
- Simpan compiler, linter, dan paket tipe (TypeScript, ESLint, `@types/*`) ke `devDependencies` dengan opsi `-D` atau `--save-dev`.
- Jangan pernah mengubah `package-lock.json` secara manual.
