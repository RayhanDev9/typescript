// ============================================================
// 02 · Passing Arguments: Value vs Reference — Solusi
// ============================================================

interface AkunBank {
  nomorRekening: string;
  saldo: number;
}

const akunSaya: AkunBank = {
  nomorRekening: "123-456-789",
  saldo: 1000000,
};

let bungaPersen = 5;

// TODO 1
function ubahBunga(bunga: number): void {
  bunga = 10;
}
ubahBunga(bungaPersen);
console.log("TODO 1 -> Bunga persen di luar (tetap 5):", bungaPersen);

// TODO 2
function tambahSaldo(akun: AkunBank, nominal: number): void {
  akun.saldo += nominal;
}
tambahSaldo(akunSaya, 500000);
console.log("TODO 2 -> Saldo akunSaya (berubah jadi 1.500.000):", akunSaya.saldo);

// TODO 3
function cetakLaporanAman(akun: Readonly<AkunBank>): void {
  console.log(`TODO 3 -> [LAPORAN] Rekening: ${akun.nomorRekening}, Saldo: Rp${akun.saldo.toLocaleString("id-ID")}`);
}
cetakLaporanAman(akunSaya);
