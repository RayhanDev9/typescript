// ============================================================
// 10 · Contoh Closure Lanjutan — Solusi
// ============================================================

// TODO 1
function buatBrankas(passwordAwal: string) {
  let rahasia: string = "Harta Karun";
  let password = passwordAwal;

  return {
    bukaBrankas(passInput: string): string | null {
      if (passInput === password) {
        return rahasia;
      }
      return null;
    },
    simpanRahasia(passInput: string, dataBaru: string): boolean {
      if (passInput === password) {
        rahasia = dataBaru;
        return true;
      }
      return false;
    },
  };
}

// TODO 2
const brankasSaya = buatBrankas("kunci123");

console.log("TODO 2.a (Password salah '1111') :", brankasSaya.bukaBrankas("1111"));
console.log("TODO 2.b (Password benar 'kunci123'):", brankasSaya.bukaBrankas("kunci123"));

const sukses = brankasSaya.simpanRahasia("kunci123", "Emas 5kg");
console.log("TODO 2.c (Simpan berhasil?)        :", sukses);
console.log("         (Isi setelah diupdate)    :", brankasSaya.bukaBrankas("kunci123"));
