# 12 · Transformasi & Sanitasi Data dengan Zod

## 🎯 Tujuan Belajar
- Memahami konsep **Sanitasi Data**: membersihkan input kotor pengguna saat proses validasi berlangsung.
- Menguasai metode pembersihan teks bawaan Zod: **`.trim()`**, **`.toLowerCase()`**, **`.toUpperCase()`**.
- Menguasai penetapan nilai cadangan menggunakan **`.default()`**.
- Menguasai fitur **Type Coercion Aman (`z.coerce.*`)**: mengubah otomatis string query URL/form menjadi number atau boolean tanpa bug.
- Menguasai transformasi kustom menggunakan **`.transform()`** (misal: mengubah string CSV menjadi array, atau mengonversi rupiah ke sen).

---

## 🧠 Analogi Dunia Nyata: "Mesin Cuci Padi & Penggilingan Beras"
Bayangkan sebuah pabrik beras:
- Petani mengirim sekarung padi mentah yang bercampur jerami dan debu (**Data Input Kotor dari Pengguna**).
- Pabrik memiliki mesin yang tidak hanya membuang batu kerikil (**Validasi**), tetapi juga sekaligus:
  1. Membersihkan debu dan membuang jerami (**`.trim()`**).
  2. Mengupas kulit padi menjadi beras putih bersih (**`.toLowerCase()` / Transformasi**).
  3. Mengemasnya ke karung standar 5 kg (**`.default()`**).
- Hasil akhir yang keluar dari pabrik adalah beras murni siap masak, bukan sekadar padi kotor!

---

## 📘 Konsep Dasar

### 1. Sanitasi String (`trim` & `toLowerCase`)
Pengguna seringkali tidak sengaja mengetik spasi atau huruf besar di kolom email:
```ts
const SkemaEmail = z
  .string()
  .trim() // Membersihkan spasi di awal dan akhir
  .toLowerCase() // Menyamakan semua karakter jadi huruf kecil
  .email();

// Input: "   User.Baru@Gmail.COM   "
// Output: "user.baru@gmail.com"
```

---

### 2. Nilai Default (`default`)
Jika pengguna tidak mengisi kolom opsional, Zod akan otomatis mengisikan nilai default:
```ts
const SkemaProfil = z.object({
  nama: z.string(),
  peran: z.string().default("tamu"), // Jika undefined, diisi "tamu"
  tema: z.enum(["terang", "gelap"]).default("terang"),
});
```

---

### 3. Type Coercion Aman (`z.coerce`)
Data dari Query URL (`?halaman=2&aktif=true`) atau Form HTML selalu datang dalam bentuk `string`:
```ts
const SkemaPaginasi = z.object({
  halaman: z.coerce.number().int().min(1), // String "2" otomatis dikonversi ke number 2!
  aktif: z.coerce.boolean(),               // String "true" otomatis jadi boolean true!
});
```

---

### 4. Transformasi Kustom (`.transform()`)
Mengubah bentuk atau nilai data setelah lolos validasi:
```ts
// Mengubah string tag "ts, react, node" menjadi array ["ts", "react", "node"]
const SkemaTag = z
  .string()
  .transform((teks) => teks.split(",").map((item) => item.trim()));
```

---

## 📌 Ringkasan
- Validasi modern tidak hanya menolak data yang salah, melainkan juga **memperbaiki dan membersihkan** data mentah (*Sanitization*).
- `z.coerce` menyelamatkan kita dari penulisan `Number()` atau `Boolean()` manual.
- `.transform()` memungkinkan komputasi nilai baru langsung di dalam alur validasi.
