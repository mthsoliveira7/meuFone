"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dados from "../../../public/database.json";

export default function Catalogo() {
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [marcaSelecionada, setMarcaSelecionada] = useState("");
  const [ordemClassificacao, setOrdemClassificacao] = useState("asc");
  const [tipoSelecionado, setTipoSelecionado] = useState("");

  const alternarOrdemClassificacao = () => {
    const novaOrdemClassificacao =
      ordemClassificacao === "asc" ? "desc" : "asc";
    setOrdemClassificacao(novaOrdemClassificacao);
  };

  const marcasÚnicas = Array.from(
    new Set(dados.fones.map((fone) => fone.marca))
  );
  const tiposÚnicos = Array.from(new Set(dados.fones.map((fone) => fone.tipo)));

  const produtosFiltradosEClassificados = dados.fones
    .filter((fone) => {
      const marcaCorrespondente =
        marcaSelecionada === "" || fone.marca === marcaSelecionada;
      const tipoCorrespondente =
        tipoSelecionado === "" || fone.tipo === tipoSelecionado; // Adicione esta linha
      const termoPesquisaCorrespondente =
        fone.modelo.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
        fone.marca.toLowerCase().includes(termoPesquisa.toLowerCase());
      return (
        marcaCorrespondente && tipoCorrespondente && termoPesquisaCorrespondente
      ); // Atualize esta linha
    })
    .sort((a, b) => {
      const precoA = a.preco;
      const precoB = b.preco;
      return ordemClassificacao === "asc" ? precoA - precoB : precoB - precoA;
    });

  const limparFiltros = () => {
    setMarcaSelecionada("");
    setTipoSelecionado("");
    setTermoPesquisa("");
    setOrdemClassificacao("asc");
  };

  return (
    <div className="container mx-auto px-10 md:px-14 lg:px-32 mb-24">
      <div className="md:flex">
        <input
          type="text"
          id="pesquisa"
          placeholder="Pesquisar por modelo ou marca"
          value={termoPesquisa}
          onChange={(e) => setTermoPesquisa(e.target.value)}
          className="w-full md:mr-8 bg-black rounded border border-neutral-700 focus:border-[#ADFA1D] text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <div className="inline-flex gap-x-10 mt-8 md:mt-0 pl-16 md:pl-0">
          <select
            id="marcas"
            value={marcaSelecionada}
            onChange={(e) => setMarcaSelecionada(e.target.value)}
            className="bg-black select-font"
          >
            <option value="" disabled>
              Marcas
            </option>
            <option value="">Todas</option>
            {marcasÚnicas.map((marca) => (
              <option key={marca} value={marca} className="bg-black">
                {marca}
              </option>
            ))}
          </select>
          <select
            id="tipo"
            data-te-select-init
            value={tipoSelecionado}
            onChange={(e) => setTipoSelecionado(e.target.value)}
            className="bg-black select-font"
          >
            <option value="" disabled>
              Tipos
            </option>
            <option value="">Todos</option>
            {tiposÚnicos.map((tipo) => (
              <option key={tipo} value={tipo} className="bg-black">
                {tipo}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-between my-10">
        <button
          onClick={alternarOrdemClassificacao}
          className="hover:text-white"
        >
          {ordemClassificacao === "asc"
            ? `⇊ Preço Decrescente`
            : "⇈ Preço Crescente"}
        </button>
        <button onClick={limparFiltros} className="hover:text-red-500">
          Limpar Filtros
        </button>
      </div>
      {produtosFiltradosEClassificados.length === 0 ? (
        <h2 className="text-2xl font-bold">Nenhum item encontrado :(</h2>
      ) : (
        <div className="flex flex-wrap -m-4">
          {produtosFiltradosEClassificados.map((fone) => (
            <div
              key={fone.id}
              className="lg:w-1/5 md:w-1/3 w-1/2 h-full p-6 group bg-gradient-to-tr hover:from-neutral-900 hover:to-neutral-700 rounded-lg box-shadow transition duration-300 ease-in-out"
            >
              <Link href={`/produto/${fone.id}`}>
                <div className="block relative h-full rounded overflow-hidden">
                  <Image
                    priority
                    alt="ecommerce"
                    src={fone.img}
                    width={300}
                    height={300}
                    className="object-cover object-center w-full h-full block group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </div>
                <div className="mt-4">
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
      )}
    </div>
  );
}
