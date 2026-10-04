# 12 · Event Bubbling, Capturing & Event Delegation

## 🎯 Tujuan Belajar
- Memahami siklus hidup event di browser: **Capturing Phase**, **Target Phase**, dan **Bubbling Phase**.
- Memahami konsep **Event Bubbling** (perambatan event dari elemen anak ke induk teratas).
- Mengetahui cara menghentikan perambatan event menggunakan **`event.stopPropagation()`**.
- Menguasai pola arsitektur **Event Delegation** (menangani banyak elemen anak dinamis hanya dengan satu listener di elemen induk).
- Menerapkan type-narrowing di TypeScript saat membaca `event.target`.

---

## 🧠 Analogi Dunia Nyata: "Gelembung Udara di Kolam Renang"
Bayangkan Anda meniup gelembung udara di dasar kolam renang:
- Gelembung muncul pertama kali di dasar kolam (**Target**).
- Gelembung tersebut perlahan **naik ke atas (*bubble up*)**, melewati lapisan air tengah, hingga akhirnya pecah di permukaan air paling atas (**Induk Terluar / Document**).
- Jika ada sensor di permukaan kolam, sensor tersebut tetap bisa mendeteksi bahwa ada gelembung yang naik dari dasar kolam!

---

## 📘 Konsep Dasar

### 1. Tiga Fase Perjalanan Event
Saat pengguna mengklik sebuah tombol di dalam `div`, browser melakukan 3 tahap perjalanan:
1. **Capturing Phase**: Sinyal event turun dari puncak pohon (`window` → `document` → `body` → `div`) menuju target.
2. **Target Phase**: Sinyal tiba di tombol yang diklik (`button`).
3. **Bubbling Phase**: Sinyal memantul dan merambat kembali naik ke atas melewati semua induknya (`button` → `div` → `body` → `document` → `window`).

---

### 2. Menghentikan Perambatan (`event.stopPropagation()`)
Jika Anda tidak ingin event klik merambat ke elemen induknya:

```ts
tombolAnak.addEventListener("click", (e: MouseEvent) => {
  e.stopPropagation(); // Merambatan berhenti di sini, induk tidak akan terpicu!
  console.log("Hanya tombol anak yang merespons.");
});
```

---

## 🔷 TypeScript Corner: Pola Event Delegation

Bayangkan Anda memiliki daftar dengan 500 item produk, atau item yang terus bertambah dari database:
- **Pendekatan Buruk**: Memasang 500 `addEventListener` di setiap tombol (memboroskan memori dan tombol baru tidak memiliki listener).
- **Pendekatan Event Delegation (Terbaik)**: Pasang **1 listener saja** di kontainer induknya!

```ts
const kontainerDaftar = document.querySelector<HTMLUListElement>("#daftar-item")!;

kontainerDaftar.addEventListener("click", (e: MouseEvent) => {
  // 1. Casting e.target menjadi HTMLElement
  const target = e.target as HTMLElement;

  // 2. Mencari apakah yang diklik adalah tombol dengan class .btn-aksi terdekat
  const tombolAksi = target.closest<HTMLButtonElement>(".btn-aksi");

  // Jika klik terjadi di luar tombol aksi, abaikan
  if (!tombolAksi || !kontainerDaftar.contains(tombolAksi)) return;

  // 3. Eksekusi logika untuk tombol tersebut
  console.log("Tombol yang diklik memiliki teks:", tombolAksi.textContent);
});
```

> 🌟 **Kelebihan Event Delegation**:
> 1. Sangat hemat memori (hanya 1 fungsi listener).
> 2. Elemen baru yang ditambahkan di masa depan otomatis langsung bisa diklik tanpa perlu memasang listener baru!

---

## ⚠️ Kesalahan Umum Pemula

1. **Mengabaikan ikon di dalam tombol saat klik**:
   Jika di dalam `<button>` ada tag `<span>` atau `<i>`, pengguna mungkin mengklik tag `<span>` tersebut. Maka dari itu, selalu gunakan `target.closest('button')` alih-alih `target.tagName === 'BUTTON'`.

---

## 📌 Ringkasan
- Event secara default **merambat ke atas (bubbling)** ke semua elemen leluhurnya.
- Gunakan `e.stopPropagation()` jika ingin menahan event agar tidak merambat ke induk.
- **Event Delegation** adalah teknik profesional web di mana 1 event listener dipasang di induk untuk menangani seluruh anak-anaknya secara efisien dan dinamis.
