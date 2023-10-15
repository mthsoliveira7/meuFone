import Image from "next/image";
import variedade from "../lib/variedade.png";
import Link from "next/link";

export default function Variedade() {
  return (
    <section
      id="app-mobile"
      className="container mx-auto flex lg:flex-row flex-col items-center px-10 md:px-14 lg:px-32 pt-24 lg:pt-32"
    >
      <div className="lg:max-w-lg lg:w-full md:w-3/4 w-full lg:mb-0 mb-10">
        <Image
          src={variedade}
          alt="Variedade de fones"
          className="object-cover object-center rounded"
        />
      </div>

      <div className="lg:flex-grow lg:w-1/2 lg:pl-24 flex flex-col lg:items-start lg:text-left items-center text-center">
        <h1 className="md:text-4xl text-3xl mb-4 font-bold text-white">
          Variedade de marcas e
          <br className="hidden lg:inline-block" />
          tipos de fones
        </h1>
        <p className="mb-8 leading-relaxed text-lg">
          Oferecemos uma vasta gama de marcas e tipos de fones de ouvido para
          atender às necessidades de todos os amantes de áudio. Nossa coleção
          inclui earbuds compactos e leves, ideais para quem está em movimento;
          headsets projetados para jogos, chamadas telefônicas e imersão total
          em áudio; over-ear para conforto e qualidade sonora excepcional em
          longas sessões de audição; e intra-auriculares para aqueles que buscam
          um design discreto com som de alta fidelidade.
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
