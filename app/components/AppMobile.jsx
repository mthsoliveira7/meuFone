import Image from "next/image";
import screenshot from "../lib/screenshot.png";
import { PlayStore, AppStore } from "../lib/Icones";

export default function AppMobile() {
  return (
    <section
      id="app-mobile"
      className="container mx-auto flex lg:flex-row flex-col-reverse items-center px-10 md:px-14 lg:px-32 pt-24 lg:pt-32"
    >
      <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col lg:items-start lg:text-left items-center text-center">
        <h1 className="md:text-4xl text-3xl mb-4 font-bold text-white">
          A meuFone agora
          <br className="hidden lg:inline-block" /> na palma da sua mão
        </h1>
        <p className="mb-8 leading-relaxed text-lg">
          Temos o prazer de informar que agora você pode desfrutar da comodidade
          dos nossos aplicativos móveis. Explore nossa seleção de fones de
          ouvido incríveis e faça suas compras diretamente do seu dispositivo
          móvel, onde quer que esteja. Baixe nossos aplicativos hoje e mergulhe
          no mundo do som de alta qualidade com facilidade e praticidade.
        </p>

        <div className="flex justify-center gap-x-2">
          <PlayStore />
          <AppStore />
        </div>
      </div>

      <div className="lg:max-w-lg lg:w-full md:w-3/4 w-full lg:mb-0 mb-10">
        <Image
          src={screenshot}
          alt="Screenshot"
          className="object-cover object-center rounded"
        />
      </div>
    </section>
  );
}
