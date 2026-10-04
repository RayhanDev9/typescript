// ============================================================
// 02 · Constructor Function & new — Solusi
// ============================================================

// TODO 1
function AkunGame(this: any, username: string, level: number) {
  this.username = username;
  this.level = level;
}

// TODO 2
AkunGame.prototype.naikLevel = function () {
  this.level += 1;
  console.log(`Selamat! ${this.username} naik ke level ${this.level}!`);
};

// TODO 3
const pemain1 = new (AkunGame as any)("DragonKnight", 10);
console.log("Pemain:", pemain1.username, "| Level awal:", pemain1.level);
pemain1.naikLevel();
