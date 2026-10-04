// ============================================================================
// 07 · Asynchronous TypeScript
// 03 · Konsep Dasar Promise (Solusi)
// ============================================================================

// TODO 1:
interface PesanCuaca {
  kota: string;
  suhuCelsius: number;
  kondisi: string;
}

// TODO 2:
function cekCuaca(namaKota: string): Promise<PesanCuaca> {
  return new Promise<PesanCuaca>((resolve, reject) => {
    setTimeout(() => {
      if (namaKota.toLowerCase() === "jakarta") {
        resolve({
          kota: "Jakarta",
          suhuCelsius: 32,
          kondisi: "Cerah Berawan ⛅",
        });
      } else {
        reject(new Error(`Data cuaca untuk kota "${namaKota}" tidak tersedia!`));
      }
    }, 400);
  });
}

// TODO 3:
const janjiCuaca = cekCuaca("Jakarta");
console.log("Objek Promise cuaca (awal):", janjiCuaca);

janjiCuaca.catch(() => {});

export {};
