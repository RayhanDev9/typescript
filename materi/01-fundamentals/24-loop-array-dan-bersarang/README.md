# 24 · Loop Array & Loop Bersarang (Nested Loop)

## 🎯 Tujuan Belajar
- Mengakses dan mengolah setiap elemen di dalam **Array** menggunakan perulangan `for`
- Mengisi array baru dari hasil olahan loop (*data transformation*)
- Melakukan perulangan mundur dari elemen terakhir ke elemen pertama
- Memahami konsep **Loop Bersarang** (*Nested Loop* / loop di dalam loop)

---

## 💻 1. Iterasi Array dengan Loop `for`

Karena indeks array dimulai dari `0` hingga `panjang - 1`, pola loop array sangat standar:

```ts
const daftarNama: string[] = ["Andi", "Budi", "Cici", "Deni"];

for (let i = 0; i < daftarNama.length; i++) {
  console.log(`Siswa ke-${i + 1}: ${daftarNama[i]}`);
}
```

---

## 🔄 2. Loop Mundur (Dari Akhir ke Awal)

Untuk membaca array dari belakang:
1. Mulai dari indeks terakhir: `let i = array.length - 1`
2. Berjalan selama `i >= 0`
3. Kurangi counter setiap putaran: `i--`

```ts
const menu: string[] = ["Kopi", "Teh", "Susu", "Jus"];

console.log("=== Menu dari Belakang ===");
for (let i = menu.length - 1; i >= 0; i--) {
  console.log(`Indeks [${i}]: ${menu[i]}`);
}
```

---

## 🔁 3. Loop Bersarang (Nested Loop)

Loop bersarang adalah **loop di dalam loop**.
Untuk **setiap 1 kali putaran loop luar**, loop dalam akan berputar **sampai selesai**.

### Analogi: Sesi Latihan Fitness
3 Gerakan Latihan, masing-masing diulang 4 kali repetisi:

```ts
for (let latihan = 1; latihan <= 3; latihan++) {
  console.log(`\n--- Memulai Gerakan Latihan ${latihan} ---`);

  for (let repetisi = 1; repetisi <= 4; repetisi++) {
    console.log(`  Gerakan ${latihan}, Repetisi ke-${repetisi} 🏋️`);
  }
}
```

```text
Latihan 1:
  Repetisi 1, 2, 3, 4
Latihan 2:
  Repetisi 1, 2, 3, 4
Latihan 3:
  Repetisi 1, 2, 3, 4
```

---

## ✍️ Latihan

Buka [`latihan.ts`](./latihan.ts) lalu selesaikan tugasnya. Cocokkan hasilmu dengan [`solusi.ts`](./solusi.ts).

---

## 📌 Ringkasan
- Gunakan `for (let i = 0; i < array.length; i++)` untuk menelusuri array dari awal.
- Gunakan `for (let i = array.length - 1; i >= 0; i--)` untuk menelusuri array dari akhir.
- Loop bersarang (*nested loop*) menjalankan loop dalam secara menyeluruh di setiap 1 kali putaran loop luar.
