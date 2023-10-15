import Image from "next/image";
import { Aspas } from "../lib/Icones";

const feedback = [
  {
    id: "feedback-1",
    conteudo:
      "Os fones de ouvido que comprei na meuFone são simplesmente incríveis. A qualidade do som é impressionante, e eles são tão confortáveis que posso usá-los durante horas a fio. Estou muito satisfeito com minha compra e recomendo a meuFone para todos os amantes de música!",
    nome: "Monkey D. Luffy",
    ocupacao: "Rei dos piratas",
    img: "https://i.ibb.co/9tTJR4H/luffy.png",
  },
  {
    id: "feedback-2",
    conteudo:
      "Nunca fui tão bem atendido em uma loja online! A equipe de suporte da meuFone foi incrivelmente prestativa e respondeu a todas as minhas perguntas. E o fone de ouvido que comprei superou todas as minhas expectativas. Estou muito feliz com a minha experiência de compra.",
    nome: "Serj Tankian",
    ocupacao: "VOCALISTA DO SOAD",
    img: "https://i.ibb.co/S0PQ8NH/serj.png",
  },
  {
    id: "feedback-3",
    conteudo:
      "Comprei um fone de ouvido da meuFone recentemente e estou maravilhado com a qualidade do som. Além disso, a entrega foi rápida e o produto chegou em perfeitas condições. Definitivamente, voltarei a fazer compras aqui.",
    nome: "Jotaro Kujo",
    ocupacao: "STAR PLATINUM",
    img: "https://i.ibb.co/cJdV3jD/jotaro.png",
  },
  {
    id: "feedback-4",
    conteudo:
      "Eu não conseguia decidir qual fone de ouvido comprar, mas a variedade de marcas na meuFone me ajudou a escolher o perfeito para mim. Estou muito feliz com a minha compra e a qualidade do som é surpreendente. Obrigado, meuFone!",
    nome: "Charli XCX",
    ocupacao: "Cantora",
    img: "https://i.ibb.co/yYsSdBW/charli.png",
  },
];

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="container mx-auto px-10 md:px-14 lg:px-32 pt-24 lg:pt-32"
    >
      <div className="mx-auto flex flex-col lg:flex-row lg:items-center text-center lg:text-left">
        <h2 className="md:text-4xl text-3xl mb-4 lg:mb-0 font-bold text-white">
          Opiniões de Nossos Clientes
        </h2>
        <div className="lg:w-3/5 lg:text-right">
          <p className="leading-relaxed text-lg text-white">
            Descubra o que eles têm a dizer sobre suas experiências comprando na
            meuFone
          </p>
        </div>
      </div>

      <div className="flex flex-wrap mt-8 gap-y-10 lg:gap-y-2">
        {feedback.map((card) => (
          <div
            key={card.id}
            className="md:w-1/2 w-full
          "
          >
            <div className="h-full lg:p-8 bg-gradient-to-tr hover:from-neutral-950 hover:to-neutral-800 rounded-lg transition-colors">
              <span className="text-4xl">
                <Aspas />
              </span>
              <p className="leading-relaxed my-6 text-white">{card.conteudo}</p>
              <a className="inline-flex items-center">
                <Image
                  alt={card.nome}
                  src={card.img}
                  width={100}
                  height={100}
                  className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="ocupacao-font font-medium text-white">
                    {card.nome}
                  </span>
                  <span className="text-sm uppercase">{card.ocupacao}</span>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
