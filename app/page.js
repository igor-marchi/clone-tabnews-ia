import Confetti from "./confetti";

export const dynamic = "force-dynamic";

async function getTotalContents() {
  const response = await fetch(
    "https://www.tabnews.com.br/api/v1/contents?page=1&per_page=1&strategy=new",
    { cache: "no-store" },
  );
  return Number(response.headers.get("x-pagination-total-rows"));
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
        <p className="total">
          Conteúdos publicados no TabNews:{" "}
          <strong>{total.toLocaleString("pt-BR")}</strong>
        </p>
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
