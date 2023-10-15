"use client";

import { useState } from "react";
import Image from "next/image";
import dados from "/public/database.json";

export default function Reviews() {
  const [ordem, setOrdem] = useState("recente");

  const ordenarAvaliacoes = (avaliacoes) => {
    switch (ordem) {
      case "recente":
        return avaliacoes
          .slice()
          .sort((a, b) => new Date(b.data) - new Date(a.data));
      case "antiga":
        return avaliacoes
          .slice()
          .sort((a, b) => new Date(a.data) - new Date(b.data));
      case "maiorNota":
        return avaliacoes.slice().sort((a, b) => b.nota - a.nota);
      case "menorNota":
        return avaliacoes.slice().sort((a, b) => a.nota - b.nota);
      default:
        return avaliacoes;
    }
  };

  const avaliacoesOrdenadas = ordenarAvaliacoes(dados.reviews);

  return (
    <section
      id="reviews"
      className="container mx-auto px-10 md:px-14 lg:px-32 py-24 lg:py-20"
    >
      <div className="mx-auto flex items-center md:flex-row flex-col">
        <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
          <h1 className="md:text-3xl text-2xl font-medium text-white">
            Avaliações dos clientes
          </h1>
        </div>
        <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
          <label htmlFor="ordemSelect" className="text-white pr-2">
            Ordenar por:
          </label>
          <select
            id="ordemSelect"
            onChange={(e) => setOrdem(e.target.value)}
            value={ordem}
            className="bg-black select-font p-2"
          >
            <option value="recente">Mais recente</option>
            <option value="antiga">Mais antiga</option>
            <option value="maiorNota">Maior nota</option>
            <option value="menorNota">Menor nota</option>
          </select>
        </div>
      </div>

      {avaliacoesOrdenadas.map((review) => (
        <div key={review.id} className="w-full pt-8">
          <div className="inline-flex items-center">
            <Image
              alt="testimonial"
              src={review.foto}
              width={100}
              height={100}
              className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span className="flex-grow flex flex-col pl-4">
              <div>
                <span className="font-medium text-white">{review.nome}</span>
                <span className="pl-2">— {review.data}</span>
              </div>
              <span className="text-[#ADFA1D] text-base tracking-widest">
                {review.estrelas}
              </span>
            </span>
          </div>
          <p className="leading-relaxed">{review.texto}</p>
        </div>
      ))}
    </section>
  );
}
