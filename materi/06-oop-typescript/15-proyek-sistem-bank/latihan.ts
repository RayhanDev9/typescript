// ============================================================
// 15 · Proyek Akhir: Sistem Bank (Bankist OOP) — Latihan
// Jalankan: npm run materi -- materi/06-oop-typescript/15-proyek-sistem-bank/latihan.ts
// ============================================================

// TODO 1: Buat interface `DapatDilaporkan`
//         dengan method `cetakRekeningKoran(): void`.


// TODO 2: Buat `abstract class AkunBank`:
//         - `public readonly nomorRekening: string`
//         - `public namaPemilik: string`
//         - `private _saldo: number = 0`
//         - `protected riwayatMutasi: number[] = []`
//         - Getter `get saldo(): number`
//         - Method `setor(nominal: number): this` -> jika nominal > 0, tambah _saldo, catat di riwayatMutasi (+nominal), kembalikan this.
//         - Method `tarik(nominal: number): this` -> jika nominal <= _saldo, kurangi _saldo, catat di riwayatMutasi (-nominal), kembalikan this.
//         - Method `ajukanPinjaman(nominal: number): this` -> syarat pinjaman: harus pernah setor minimal 10% dari nominal pinjaman. Jika lolos, tambahkan pinjaman ke saldo, kembalikan this.
//         - Abstract method: `abstract prosesBunga(): void;`


// TODO 3: Buat class `AkunTabungan` yang mewarisi `AkunBank` dan mengimplementasikan `DapatDilaporkan`:
//         - Constructor: nomorRekening, namaPemilik, saldoAwal, `public bungaPersen: number`
//         - Implementasikan `prosesBunga()`: tambahkan bunga (saldo * bungaPersen / 100) ke saldo.
//         - Implementasikan `cetakRekeningKoran()`: cetak tabel rincian seluruh mutasi dan saldo akhir.


// TODO 4: Uji sistem bank dengan Method Chaining:
//         - Buat `AkunTabungan` atas nama "Ahmad Rayhan" (saldo awal 2.000.000, bunga 2%)
//         - Lakukan: setor(1.000.000) -> tarik(500.000) -> ajukanPinjaman(3.000.000) -> prosesBunga() -> cetakRekeningKoran()

