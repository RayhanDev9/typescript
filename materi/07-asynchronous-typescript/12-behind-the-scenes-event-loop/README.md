# 12 · Di Balik Layar: Event Loop & Microtask Queue

## 🎯 Tujuan Belajar
- Memahami arsitektur internal eksekusi asinkron di runtime JavaScript / Node.js.
- Memahami 4 komponen utama: **Call Stack**, **Web APIs**, **Callback Queue**, dan **Microtask Queue**.
- Memahami mengapa Promise memiliki **Jalur Prioritas VIP (Microtask Queue)** dibanding `setTimeout`.
- Mampu memprediksi dan menganalisis urutan pasti eksekusi kode asinkron di memori.

---

## 🧠 Analogi Dunia Nyata: "Pintu Masuk Bandara (Jalur Reguler vs Jalur VIP)"
Bayangkan antrean penumpang di bandara:
- **Call Stack**: Meja petugas imigrasi yang sedang memeriksa paspor Anda satu per satu. Hanya ada 1 petugas!
- **Callback Queue (Macrotask / `setTimeout`)**: **Antrean Penumpang Reguler**. Sangat panjang dan sabar menunggu.
- **Microtask Queue (Promise / `async-await`)**: **Antrean Penumpang VIP Diplomat / First Class**!
- **Event Loop (Petugas Keamanan)**: Begitu meja imigrasi (*Call Stack*) kosong, petugas akan **SELALU melayani seluruh antrean VIP (*Microtask Queue*) sampai benar-benar habis**, barulah ia memanggil 1 orang dari antrean reguler (*Callback Queue*).

---

## 📘 Konsep Dasar

### 4 Komponen Runtime di Balik Layar:

```text
┌─────────────────┐       ┌──────────────────────┐
│   CALL STACK    │ <───┐ │  Web APIs / Node I/O │
│ (Eksekusi Kode) │     │ │ (Timer, Fetch, I/O)  │
└─────────────────┘     │ └──────────┬───────────┘
         ▲              │            │
         │              │            ▼
   [EVENT LOOP] ────────┤ ┌──────────────────────┐
                        ├─┤   Microtask Queue    │ 🌟 PRIORITAS VIP! (Promise)
                        │ └──────────────────────┘
                        │ ┌──────────────────────┐
                        └─┤    Callback Queue    │ 🚶 Antrean Reguler (setTimeout)
                          └──────────────────────┘
```

---

## ⚡ Uji Urutan Eksekusi Klasik

Coba perhatikan kode berikut dan tebak urutannya:

```ts
console.log("1. Mulai");

setTimeout(() => {
  console.log("2. Timer (setTimeout)");
}, 0);

Promise.resolve("3. Janji (Promise)").then((res) => {
  console.log(res);
});

console.log("4. Selesai");
```

### Urutan Eksekusi Sebenarnya:
1. **`1. Mulai`** (Sinkron di Call Stack langsung dicetak).
2. `setTimeout(..., 0)` dikirim ke Web API, lalu mendarat di **Callback Queue**.
3. `Promise.resolve(...)` mendarat di **Microtask Queue (VIP)**.
4. **`4. Selesai`** (Sinkron di Call Stack langsung dicetak).
5. Call Stack sekarang kosong! **Event Loop** mulai memeriksa antrean.
6. Event Loop mendahulukan antrean VIP: **`3. Janji (Promise)`** dicetak!
7. Antrean VIP habis, barulah antrean reguler dipanggil: **`2. Timer (setTimeout)`** dicetak.

**Hasil Akhir di Console:**
```text
1. Mulai
4. Selesai
3. Janji (Promise)
2. Timer (setTimeout)
```

---

## 📌 Ringkasan
- JavaScript hanya bisa menjalankan 1 baris kode dalam 1 waktu di **Call Stack**.
- Callback dari `Promise` masuk ke **Microtask Queue**.
- Callback dari `setTimeout` masuk ke **Callback Queue**.
- **Microtask Queue SELALU didahulukan** dan dikosongkan sebelum Event Loop menyentuh Callback Queue.
