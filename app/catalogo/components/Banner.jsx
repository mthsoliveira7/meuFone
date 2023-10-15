import Link from "next/link";

export default function Banner() {
  return (
    <section className="container mx-auto px-10 md:px-14 lg:px-32 my-10">
      <div className="flex justify-center items-center py-14 md:py-24 md:px-10 md:flex-row flex-col bg-[#ADFA1D] rounded-lg box-shadow text-black">
        <Link
          href="/"
          className="text-sm tracking-widest font-semibold uppercase mb-14 md:mb-0 hover:underline underline-offset-4"
        >
          &larr; Voltar à página inicial
        </Link>

        <h2 className="text-center md:text-right w-full text-2xl font-bold">
          Os melhores fones do
          <br className="lg:hidden" /> mercado estão aqui
        </h2>
      </div>
    </section>
  );
}
