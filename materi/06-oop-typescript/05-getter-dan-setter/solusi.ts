// ============================================================
// 05 · Getter & Setter — Solusi
// ============================================================

class SuhuRuangan {
  private _celsius: number = 0;

  constructor(celsiusAwal: number) {
    this.celsius = celsiusAwal;
  }

  get celsius(): number {
    return this._celsius;
  }

  set celsius(nilaiBaru: number) {
    if (nilaiBaru < -273.15) {
      console.log(`[DITOLAK] Suhu ${nilaiBaru}°C di bawah nol mutlak!`);
      return;
    }
    this._celsius = nilaiBaru;
  }

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(nilaiF: number) {
    const hasilCelsius = ((nilaiF - 32) * 5) / 9;
    this.celsius = hasilCelsius;
  }
}

// TODO 2
const suhu = new SuhuRuangan(25);
console.log(`Suhu Awal  : ${suhu.celsius}°C = ${suhu.fahrenheit}°F`);

suhu.fahrenheit = 212; // Titik didih air
console.log(`Setelah 212°F -> Celsius : ${suhu.celsius}°C (harus 100)`);
console.log(`              -> Fahrenheit: ${suhu.fahrenheit}°F`);
