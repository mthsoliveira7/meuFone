import { Favorito } from "../../lib/Icones";
import dados from "../../../public/database.json";
import Reviews from "../components/Reviews";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "../../loading";

export async function generateStaticParams() {
  return dados.fones.map((fone) => ({
    id: fone.id,
  }));
}

export default function page({ params }) {
  const fone = dados.fones.find((item) => item.id === params.id);

  return (
    <>
      <section id="catalogo" className="container mx-auto">
        <div className="mt-8 px-10 md:px-14 lg:px-32">
          <Link
            href="/catalogo"
            className="text-white text-sm tracking-widest font-medium uppercase hover:underline"
          >
            &larr; Voltar para o catálogo
          </Link>
        </div>
        <div className="flex flex-col-reverse lg:flex-row flex-wrap lg:items-center px-10 md:px-14 lg:px-32 pt-10 lg:pt-0">
          <div className="lg:w-1/2 w-full pr-0 lg:pr-14 pt-8 lg:pt-0">
            <h2 className="text-sm tracking-widest font-semibold uppercase text-[#ADFA1D]">
              {fone.marca}
            </h2>
            <h1 className="text-white text-3xl font-bold mt-2 mb-4">
              {fone.modelo}
            </h1>

            <p className="leading-relaxed mb-4">{fone.descricao}</p>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Tipo</span>
              <span className="ml-auto text-white capitalize">{fone.tipo}</span>
            </div>
            <div className="flex border-t border-gray-800 py-2">
              <span className="text-gray-500">Material</span>
              <span className="ml-auto text-white capitalize">
                {fone.material}
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
              <span className="text-gray-500">Cor</span>
              <span className="ml-auto text-white capitalize">{fone.cor}</span>
            </div>
            <div className="flex">
              <span className="font-semibold text-2xl text-white">
                R${fone.preco}
              </span>
              <Button styles="flex ml-auto text-black font-medium bg-[#ADFA1D] border-0 py-2 px-6 focus:outline-none hover:bg-[#81B716] rounded">
                Comprar
              </Button>
              <Button
                title="Adicionar aos favoritos"
                styles="ml-2 px-1.5 hover:bg-red-500 rounded-full transition-colors"
              >
                <Favorito />
              </Button>
            </div>
          </div>
          <Image
            priority
            alt="Foto do fone de ouvido"
            src={fone.img}
            width={800}
            height={800}
            quality={100}
            className="md:w-3/4 lg:w-1/2 object-cover object-center rounded mx-auto"
          />
        </div>
      </section>

      <Suspense fallback={<Loading />}>
        <Reviews />
      </Suspense>
    </>
  );
}
