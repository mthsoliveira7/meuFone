import { Estrela, Escudo, Atendimento } from "../lib/Icones";
import Link from "next/link";

const vantagens = [
  {
    id: "vantagem-1",
    icone: <Estrela />,
    titulo: "Variedade",
    conteudo:
      "Oferecemos uma ampla gama de fones de ouvido para que você possa encontrar o modelo perfeito.",
  },
  {
    id: "vantagem-2",
    icone: <Escudo />,
    titulo: "Qualidade Garantida",
    conteudo:
      "Nos comprometemos com a qualidade. Todos os produtos na meuFone são cuidadosamente selecionados e testados.",
  },
  {
    id: "vantagem-3",
    icone: <Atendimento />,
    titulo: "Atendimento ao Cliente",
    conteudo:
      "Na meuFone, valorizamos cada cliente. Nossa equipe de suporte está sempre pronta para ajudar.",
  },
];

export default function SobreNos() {
  return (
    <section
      id="sobre"
      className="container mx-auto flex lg:flex-row flex-col items-center px-10 md:px-14 lg:px-32 pt-24 lg:pt-32"
    >
      <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left items-center text-center">
        <h1 className="md:text-4xl text-3xl mb-4 font-bold text-white">
          Tenha uma experiência <br className="hidden lg:inline-block" /> sonora
          imersiva
        </h1>
        <p className="mb-8 leading-relaxed text-lg">
          Na meuFone, nossa paixão é levar a melhor experiência sonora até você.
          Oferecemos uma seleção cuidadosamente escolhida dos melhores fones de
          ouvido do mercado. Com designs inovadores e tecnologia de ponta, você
          pode desfrutar da música como nunca antes.
        </p>
        <Link
          href="catalogo"
          className="inline-flex text-black py-2 px-6 bg-[#ADFA1D] hover:bg-[#A0E21B] rounded text-lg"
        >
          Ver catálogo
        </Link>
      </div>

      <div className="flex flex-col gap-y-10 lg:gap-y-2 justify-center items-center lg:ml-10 mt-10 lg:mt-0  w-full lg:w-1/2">
        {vantagens.map((vantagem) => (
          <div
            key={vantagem.id}
            className="flex flex-row lg:p-6 w-full bg-gradient-to-l hover:from-neutral-900 hover:to-neutral-700 rounded-lg"
          >
            <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-neutral-800">
              <span className="text-3xl">{vantagem.icone}</span>
            </div>
            <div className="flex-1 flex flex-col ml-5">
              <h4 className="font-semibold text-white text-[18px] leading-[23.4px] mb-1">
                {vantagem.titulo}
              </h4>
              <p className="font-normal  text-[16px] leading-[24px]">
                {vantagem.conteudo}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
