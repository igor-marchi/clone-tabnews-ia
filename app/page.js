import Confetti from "./confetti";

// Página estática regenerada em segundo plano a cada 60s (ISR): o HTML sai do
// cache/CDN e a API do TabNews deixa de estar no caminho crítico de cada visita.
export const revalidate = 60;

async function getTotalContents() {
  try {
    const response = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?page=1&per_page=1&strategy=new",
      { next: { revalidate: 60 } },
    );
    if (!response.ok) return null;

    const total = Number(response.headers.get("x-pagination-total-rows"));
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const total = await getTotalContents();

  return (
    <main className="main">
      <Confetti />
      <div className="card">
        <h1>Em construção</h1>
        <p>
          Estamos neste exato momento reconstruindo o TabNews, um lugar na
          internet para quem trabalha com tecnologia e precisa consumir
          conteúdos com valor concreto.
        </p>
        {total !== null && (
          <p className="total">
            Conteúdos publicados no TabNews:{" "}
            <strong>{total.toLocaleString("pt-BR")}</strong>
          </p>
        )}
        <a
          className="button"
          href="https://www.tabnews.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Visitar o site oficial
        </a>
      </div>
    </main>
  );
}
