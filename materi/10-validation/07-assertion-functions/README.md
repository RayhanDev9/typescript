# 07 · Assertion Functions (`asserts`)

## 🎯 Tujuan Belajar
- Memahami konsep **Assertion Functions** di TypeScript menggunakan kata kunci **`asserts`**.
- Membedakan antara Type Guard (`val is T`) dan Assertion Function (`asserts val is T`):
  - Type Guard: Mengembalikan boolean untuk dipakai di dalam `if`.
  - Assertion Function: Menghentikan eksekusi program dengan melempar error (`throw`) jika data tidak valid (*Fail-Fast*).
- Mengetahui mengapa Assertion Functions membuat kode lebih rapi tanpa tumpukan sarang blok `if...else`.
- Membangun fungsi assert kustom untuk validasi sesi, token, dan input data.

---

## 🧠 Analogi Dunia Nyata: "Pintu Putar Pembatas MRT / Kereta Api"
Bayangkan gerbang otomatis tap kartu di stasiun kereta:
- Anda menempelkan kartu tiket di gerbang.
- **Pendekatan Type Guard Biasa**: Petugas berdiri dan bertanya: *"Kartumu ada saldonya tidak? Jika ya silakan masuk, jika tidak silakan putar balik"* (**Harus cek dengan `if...else`**).
- **Pendekatan Assertion Function (Pintu Putar Otomatis)**:
  - Anda tap kartu: Jika saldo cukup, palang pintu terbuka dan Anda berjalan terus tanpa halangan.
  - Jika saldo kurang atau kartu rusak: Gerbang langsung membunyikan sirene keras dan mengunci rapat palang pintu (**`throw new Error("Saldo tidak cukup")`**).
  - Siapapun yang sudah berada di dalam peron stasiun (**Baris kode setelah fungsi assert**) dijamin 100% memegang tiket yang sah!

---

## 📘 Konsep Dasar

### 1. Dua Bentuk Sintaks `asserts`

#### Bentuk A: `asserts kondisi`
Memastikan suatu kondisi boolean bernilai `true`:
```ts
function pastikan(kondisi: boolean, pesan: string): asserts kondisi {
  if (!kondisi) {
    throw new Error(`Asersi Gagal: ${pesan}`);
  }
}

const nama: string | null = ambilDariForm();
pastikan(nama !== null, "Nama tidak boleh null!");

// Di bawah baris ini:
// TypeScript tahu pasti 'nama' BUKAN null lagi (bertipe 'string')!
console.log(nama.toUpperCase());
```

#### Bentuk B: `asserts data is Tipe`
Memvalidasi struktur data dan mempersempit tipe data secara langsung:
```ts
interface AkunLogin {
  token: string;
  userId: number;
}

function assertAkunLogin(data: unknown): asserts data is AkunLogin {
  if (typeof data !== "object" || data === null) {
    throw new Error("Data login bukan objek yang sah!");
  }
  const obj = data as Record<string, unknown>;
  if (typeof obj.token !== "string" || typeof obj.userId !== "number") {
    throw new Error("Struktur token atau userId rusak!");
  }
}

function prosesSesi(dataMentah: unknown) {
  assertAkunLogin(dataMentah);

  // Setelah baris di atas lolos tanpa error,
  // 'dataMentah' secara otomatis bertipe 'AkunLogin'!
  console.log("User ID:", dataMentah.userId);
  console.log("Token  :", dataMentah.token);
}
```

---

## 📌 Ringkasan
- Gunakan `asserts` jika data yang tidak valid merupakan anomali kritis yang harus menghentikan alur program (*fail-fast*).
- Menghilangkan indentasi bersarang (*callback hell / if hell*) di dalam kode utama Anda.
