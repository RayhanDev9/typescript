// ============================================================
// 03 · Prototype & Prototype Chain — Solusi
// ============================================================

function Gadget(this: any, merk: string) {
  this.merk = merk;
}

Gadget.prototype.negaraAsal = "Jepang";

const g1 = new (Gadget as any)("Sony");

// TODO 1
console.log("TODO 1 (g1 hasOwnProperty 'merk'):", g1.hasOwnProperty("merk")); // true

// TODO 2
console.log("TODO 2 (g1 hasOwnProperty 'negaraAsal'):", g1.hasOwnProperty("negaraAsal")); // false

// TODO 3
console.log("TODO 3 (Gadget.prototype isPrototypeOf g1):", Gadget.prototype.isPrototypeOf(g1)); // true
