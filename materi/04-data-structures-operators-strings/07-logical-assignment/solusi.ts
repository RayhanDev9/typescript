// ============================================================
// 07 · Logical Assignment (||=, &&=, ??=) — Solusi
// ============================================================

interface AkunGame {
  nickname: string;
  skorTertinggi?: number;
  level?: number;
  email?: string;
}

const pemain1: AkunGame = {
  nickname: "DragonSlayer",
  skorTertinggi: 0,
};

const pemain2: AkunGame = {
  nickname: "ShadowNinja",
  email: "ninja@example.com",
};

// TODO 1
pemain1.skorTertinggi ??= 100;
pemain2.skorTertinggi ??= 100;
console.log("TODO 1 -> Skor P1 (harus 0):", pemain1.skorTertinggi, "| Skor P2 (harus 100):", pemain2.skorTertinggi);

// TODO 2
pemain1.level ??= 1;
pemain2.level ??= 1;
console.log("TODO 2 -> Level P1:", pemain1.level, "| Level P2:", pemain2.level);

// TODO 3
pemain1.email &&= "***@tersembunyi.com";
pemain2.email &&= "***@tersembunyi.com";
console.log("TODO 3 -> Email P1:", pemain1.email, "| Email P2:", pemain2.email);
