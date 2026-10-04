// ============================================================================
// 07 · Asynchronous TypeScript
// 13 · Coding Challenge: GitHub Data Fetcher (Contoh Prototype)
// ============================================================================

interface MiniProfil {
  login: string;
  name: string | null;
  public_repos: number;
}

// Simulasi helper untuk fetch data publik dengan User-Agent header
async function fetchGithub<T>(endpoint: string): Promise<T> {
  const url = `https://api.github.com/${endpoint}`;
  const response: Response = await fetch(url, {
    headers: { "User-Agent": "TypeScript-Learner" },
  });

  if (!response.ok) {
    throw new Error(`Permintaan ke GitHub gagal (Status: ${response.status})`);
  }

  return response.json() as Promise<T>;
}

async function jalankanContoh(): Promise<void> {
  console.log("=== Mengambil Data Resmi Organisasi Microsoft di GitHub ===");

  try {
    const dataOrg = await fetchGithub<MiniProfil>("orgs/microsoft");
    console.log("Organisasi   :", dataOrg.name || dataOrg.login);
    console.log("Jumlah Repos :", dataOrg.public_repos);
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error("Gagal:", err.message);
    }
  }
}

jalankanContoh();

export {};
