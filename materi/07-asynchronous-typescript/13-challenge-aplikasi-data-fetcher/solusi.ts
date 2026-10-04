// ============================================================================
// 07 · Asynchronous TypeScript
// 13 · Coding Challenge: GitHub Data Fetcher (Solusi)
// ============================================================================

// TODO 1: Interface Profil
interface ProfilGithub {
  login: string;
  name: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
}

// TODO 2: Interface Repositori
interface RepositoriGithub {
  id: number;
  name: string;
  stargazers_count: number;
  html_url: string;
}

// TODO 3: Fungsi Ambil Profil
async function ambilProfil(username: string): Promise<ProfilGithub> {
  const url = `https://api.github.com/users/${username}`;
  const response: Response = await fetch(url, {
    headers: { "User-Agent": "TypeScript-Learner" },
  });

  if (!response.ok) {
    throw new Error(`User @${username} tidak ditemukan! (Status: ${response.status})`);
  }

  return response.json() as Promise<ProfilGithub>;
}

// TODO 4: Fungsi Ambil Repositori
async function ambilRepositori(username: string): Promise<RepositoriGithub[]> {
  const url = `https://api.github.com/users/${username}/repos?per_page=3&sort=updated`;
  const response: Response = await fetch(url, {
    headers: { "User-Agent": "TypeScript-Learner" },
  });

  if (!response.ok) {
    throw new Error(`Gagal memuat repositori @${username}! (Status: ${response.status})`);
  }

  return response.json() as Promise<RepositoriGithub[]>;
}

// TODO 5: Fungsi Utama Dashboard
async function tampilkanDashboardGithub(username: string): Promise<void> {
  console.log(`\n⏳ Mengambil data untuk @${username} secara paralel...`);

  try {
    // Mengeksekusi kedua request secara paralel dengan Promise.all
    const [profil, daftarRepo] = await Promise.all([
      ambilProfil(username),
      ambilRepositori(username),
    ]);

    console.log("==========================================");
    console.log(`👤 Profil      : ${profil.name || profil.login} (@${profil.login})`);
    console.log(`📝 Bio         : ${profil.bio || "Tidak ada bio"}`);
    console.log(`👥 Pengikut    : ${profil.followers.toLocaleString("id-ID")}`);
    console.log(`📦 Total Repos : ${profil.public_repos}`);
    console.log("------------------------------------------");
    console.log("⭐ 3 Repositori Terbaru:");

    daftarRepo.forEach((repo, idx) => {
      console.log(`  ${idx + 1}. ${repo.name} (⭐ ${repo.stargazers_count} stars)`);
      console.log(`     Link: ${repo.html_url}`);
    });
    console.log("==========================================");
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("❌ Gagal Memuat Dashboard:", err.message);
    }
  }
}

// TODO 6: Uji Coba Pemanggilan
tampilkanDashboardGithub("torvalds"); // Linus Torvalds (Pencipta Linux & Git)

export {};
