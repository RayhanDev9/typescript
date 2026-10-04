// ============================================================
// 10 · Contoh Closure Lanjutan — Contoh
// Jalankan: npm run materi -- materi/05-closer-look-functions/10-closure-lanjutan/contoh.ts
// ============================================================

// 1. Data Privat Menggunakan Closure (Encapsulation Pattern)
function buatAkunPengguna(namaAwal: string, pinAwal: string) {
  let nama = namaAwal;
  let pin = pinAwal; // Privat, terisolasi dalam scope ini

  return {
    getNama(): string {
      return nama;
    },
    gantiNama(namaBaru: string): void {
      nama = namaBaru;
    },
    verifikasiPin(pinInput: string): boolean {
      return pinInput === pin;
    },
    gantiPin(pinLama: string, pinBaru: string): boolean {
      if (pinLama === pin) {
        pin = pinBaru;
        console.log("[SUKSES] PIN berhasil diperbarui.");
        return true;
      }
      console.log("[GAGAL] PIN lama salah!");
      return false;
    },
  };
}

console.log("=== 1. ENKAPSULASI STATE PRIVAT ===");
const user = buatAkunPengguna("Rayhan", "1234");
console.log("Nama user:", user.getNama());
console.log("Cek PIN '0000':", user.verifikasiPin("0000")); // false
console.log("Cek PIN '1234':", user.verifikasiPin("1234")); // true

user.gantiPin("1234", "5678");
console.log("Cek PIN baru '5678':", user.verifikasiPin("5678")); // true

// 2. Closure dengan Asynchronous / Timer
console.log("\n=== 2. CLOSURE PADA ASYNC CALLBACK ===");

function jadwalkanPengumuman(pesan: string, penundaanDetik: number) {
  const waktuDibuat = new Date().toLocaleTimeString();

  setTimeout(() => {
    console.log(`\n[PENGUMUMAN DITERIMA]`);
    console.log(`Pesan : "${pesan}"`);
    console.log(`Dibuat pada: ${waktuDibuat}`);
  }, penundaanDetik * 1000);

  console.log(`Pengumuman dijadwalkan dalam ${penundaanDetik} detik...`);
}

jadwalkanPengumuman("Pintu keberangkatan Garuda GA-812 segera ditutup!", 1);
