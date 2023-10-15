import Link from "next/link";
import Image from "next/image";
import dados from "/public/database.json";

export default function MaisVendidos() {
  const fones = dados.fones.slice(0, 4);

  return (
    <>
      <section
        id="mais-vendidos"
        className="container mx-auto px-10 md:px-14 lg:px-32 pt-24 lg:pt-32"
      >
        <div className="flex flex-col lg:flex-row lg:items-center text-center lg:text-left">
          <h2 className="md:text-4xl text-3xl mb-4 lg:mb-0 font-bold text-white">
            Os fones mais vendidos do momento
          </h2>
          <div className="lg:w-3/5 lg:pl-4">
            <p className="leading-relaxed text-lg text-white text-center lg:text-right">
              Explore a nossa seleção dos fones de ouvido mais populares e
              desejados do momento
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mt-8 gap-y-8">
          {fones.map((fone) => (
            <div
              key={fone.id}
              className="md:w-1/4 w-1/2 h-full lg:p-4 group bg-gradient-to-tr hover:from-neutral-900 hover:to-neutral-700 rounded-lg box-shadow transition duration-300 ease-in-out"
            >
              <Link href={`/produto/${fone.id}`}>
                <div className="block h-full rounded overflow-hidden">
                  <Image
                    alt="ecommerce"
                    src={fone.img}
                    width={300}
                    height={300}
                    className="object-cover object-center w-full h-full block group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="mt-4 pl-10">
                  <h3 className="text-xs tracking-widest font-semibold mb-1 uppercase text-[#ADFA1D]">
                    {fone.marca}
                  </h3>
                  <h2 className="text-white title-font text-lg font-bold">
                    {fone.modelo}
                  </h2>
                  <p className="mt-1 tracking-widest text-white">
                    R$ {fone.preco}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
