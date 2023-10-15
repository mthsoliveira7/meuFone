import Link from "next/link";

export default function NotFound() {
  return (
    <main className="justify-center items-center py-40">
      <div className="flex flex-col  text-center text-3xl md:text-5xl space-y-10">
        <span>😢</span>
        <h1 className="text-2xl md:text-3xl">Não encontrei a página.</h1>
        <Link
          href="/"
          className="text-[#ADFA1D] hover:underline underline-offset-[12px]"
        >
          &larr; Ir para a página inicial
        </Link>
        <Link
          href="/catalogo"
          className="text-[#ADFA1D] hover:underline underline-offset-[12px]"
        >
          Ir para o catálogo &rarr;
        </Link>
      </div>
    </main>
  );
}
