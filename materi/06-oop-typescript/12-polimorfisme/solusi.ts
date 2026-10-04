// ============================================================
// 12 · Polimorfisme — Solusi
// ============================================================

// TODO 1
abstract class Hewan {
  constructor(public nama: string) {}

  abstract buatSuara(): void;
}

// TODO 2
class Kucing extends Hewan {
  public override buatSuara(): void {
    console.log(`${this.nama} mengeong: Meow Meow! 🐱`);
  }
}

class Anjing extends Hewan {
  public override buatSuara(): void {
    console.log(`${this.nama} menggonggong: Guk Guk! 🐶`);
  }
}

// TODO 3
console.log("=== KEBUN BINATANG POLIMORFIK ===");
const kebunBinatang: Hewan[] = [
  new Kucing("Mimi"),
  new Kucing("Oyen"),
  new Anjing("Blacky"),
];

for (const hewan of kebunBinatang) {
  hewan.buatSuara();
}
