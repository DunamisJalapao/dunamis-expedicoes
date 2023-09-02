export default function sitemap() {
  const baseURL = "https://dunamisexpedicoes.com.br";
  return [
    { url: baseURL, lastModified: new Date() },
    { url: `${baseURL}/packs/roteiro-3-dias`, lastModified: new Date() },
    { url: `${baseURL}/packs/roteiro-4-dias`, lastModified: new Date() },
    { url: `${baseURL}/packs/roteiro-5-dias`, lastModified: new Date() },
  ];
}
