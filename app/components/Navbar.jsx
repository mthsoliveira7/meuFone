import Link from "next/link";

export default function Navbar() {
  return (
    <header className="px-8 md:px-10 py-4 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-w-screen-2xl mx-auto">
        <h1 className="text-white text-2xl font-bold tracking-tighter">
          meuFone
        </h1>

        <div className="hidden md:block">
          <ul className="flex md:gap-x-4 lg:gap-x-12 text-sm tracking-wide font-light text-white">
            <li>
              <a href="#sobre" className="hover:underline underline-offset-8">
                Sobre nós
              </a>
            </li>
            <li>
              <a
                href="#ofertas"
                className=" hover:underline underline-offset-8"
              >
                Vantagens
              </a>
            </li>
            <li>
              <a
                href="#depoimentos"
                className="hover:underline underline-offset-8"
              >
                Depoimentos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <Link
            href="/catalogo"
            className="text-black inline-flex items-center bg-[#ADFA1D] border-0 py-1 px-3 focus:outline-none hover:bg-[#A0E21B] rounded text-base"
          >
            Catálogo
          </Link>
        </div>
      </nav>
    </header>
  );
}
