import Link from "next/link";

import { Desconto } from "../lib/Icones";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <video
        className="absolute inset-0 object-cover w-full h-full grayscale"
        autoPlay
        loop
        muted
      >
        <source src="/video-4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute backdrop-blur-[px] inset-0 bg-gradient-to-b from-black/40 to-black" />

      <div className="z-10 text-white text-center px-4">
        <div className="w-fit inline-flex items-center py-1 px-4 rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-700">
          <Desconto />

          <p className="text-neutral-400  uppercase ml-1 text-sm md:text-base">
            <span className="text-white font-bold">20%</span> de desconto na{" "}
            <span className="text-white font-bold">primeira</span> compra
          </p>
        </div>

        <h1 className="text-8xl md:text-9xl font-bold tracking-tighter mt-4">
          meuFone
        </h1>

        <p className="text-xl tracking-widest mt-4 mb-10">
          O maior e-commerce de fones do Brasil
        </p>

        <Link
          href="catalogo"
          className="text-black bg-[#ADFA1D] py-2 px-6 hover:bg-[#A0E21B] rounded text-lg"
        >
          Confira o nosso catálogo ➜
        </Link>
      </div>
    </section>
  );
}
