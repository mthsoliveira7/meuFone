import Link from "next/link";

export default function CTA() {
  return (
    <section id="cta" className="container px-10 py-24 mx-auto">
      <div className="lg:w-2/3 flex flex-col md:flex-row items-center mx-auto p-12 bg-gradient-to-tr from-neutral-950 to-neutral-800 rounded-lg">
        <div className="flex-col">
          <h1 className="md:text-4xl text-3xl mb-5 font-bold text-white text-center md:text-left">
            Experimente a qualidade
            <br className="hidden md:inline-block" /> meuFone agora mesmo!
          </h1>
          <p className="leading-relaxed text-lg w-full md:w-3/4 mb-5 md:mb-0">
            Explore nossa seleção de fones de ouvido e descubra o som de alta
            qualidade que você merece.
          </p>
        </div>
        <Link
          href="catalogo"
          className="flex-shrink-0 inline-flex text-black py-2 px-6 bg-[#ADFA1D] hover:bg-[#A0E21B] rounded text-lg"
        >
          Ver catálogo
        </Link>
      </div>
    </section>
  );
}
