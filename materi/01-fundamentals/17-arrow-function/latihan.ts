// ============================================================
// 17 · Arrow Function — Latihan
// Jalankan: npm run materi -- materi/01-fundamentals/17-arrow-function/latihan.ts
// ============================================================

// TODO 1: Buat ARROW FUNCTION satu baris (implicit return) bernama `hitungKelilingLingkaran`:
//         - Menerima parameter `jariJari` (number)
//         - Mengembalikan 2 * 3.14 * jariJari

console.info(`${(() => 2 * 3.14 * 32)()}`);

// TODO 2: Buat ARROW FUNCTION bernama `hitungOngkir`:
//         - Menerima parameter: `jarakKm` (number) dan `asuransi` (boolean) dengan nilai default false.
//         - Tarif per km = Rp 2.500
//         - Jika asuransi true, tambahkan biaya asuransi Rp 5.000
//         - Mengembalikan total ongkos kirim (number).

const hitungOngkir = (jaraKM: number, asuransi: boolean = false): string => {
  return asuransi
    ? "Tarif per km = Rp 2.500"
    : "Jika asuransi true, tambahkan biaya asuransi Rp 5.000";
};

console.info(hitungOngkir(30, true));

// TODO 3: Buat ARROW FUNCTION bernama `buatBio`:
//         - Menerima `nama` (string) dan optional parameter `pekerjaan` (string, gunakan `?`).
//         - Jika pekerjaan ada, kembalikan: "[nama] adalah seorang [pekerjaan]"
//         - Jika tidak ada pekerjaan, kembalikan: "[nama] belum mencantumkan pekerjaan"

const buatBio = (nama: string, pekerjaan?: string) => {
  return pekerjaan
    ? `${nama} adalah seorang ${pekerjaan}`
    : `${nama} belum mencantumkan pekerjaan`;
};

console.info(buatBio("Rayhan", "Progremer"));
