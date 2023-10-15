import Image from "next/image";
import Link from "next/link";
import ofertas from "../lib/ofertas.png";

export default function Ofertas() {
  return (
    <section
      id="ofertas"
      className="container mx-auto flex lg:flex-row flex-col items-center px-10 md:px-14 lg:px-32 pt-24 lg:pt-32"
    >
      <div className="lg:max-w-lg lg:w-full md:w-3/4 w-full lg:mb-0 mb-10">
        <Image
          src={ofertas}
          alt="Ofertas"
          className="object-cover object-center rounded"
        />
      </div>

      <div className="lg:flex-grow lg:w-1/2 lg:pl-24 flex flex-col lg:items-start lg:text-left items-center text-center">
        <h1 className="md:text-4xl text-3xl mb-4 font-bold text-white">
          Ofertas Especiais
          <br className="hidden lg:inline-block" /> e Promoções
        </h1>
        <p className="mb-8 leading-relaxed text-lg">
          Na meuFone, estamos constantemente oferecendo ofertas especiais e
          promoções emocionantes em fones de ouvido de alta qualidade. Fique
          atento às nossas atualizações e não perca a chance de economizar
          enquanto desfruta do som excepcional. Descubra nossas ofertas
          exclusivas e garanta os melhores negócios em seus produtos favoritos
          de áudio.
        </p>
        <Link
          href="catalogo"
          className="inline-flex text-black py-2 px-6 bg-[#ADFA1D] hover:bg-[#A0E21B] rounded text-lg"
        >
          Ver catálogo
        </Link>
      </div>
    </section>
  );
}
