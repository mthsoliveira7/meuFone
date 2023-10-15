const footerLinks = [
  {
    id: 1,
    categoria: "Empresa",
    links: ["Sobre Nós", "Carreiras", "Nossa Equipe", "História"],
  },
  {
    id: 2,
    categoria: "Produtos",
    links: ["Produtos", "Serviços", "Catálogo", "Cotação"],
  },
  {
    id: 3,
    categoria: "Recursos",
    links: ["Blog", "FAQ", "Tutoriais", "Privacidade"],
  },
  {
    id: 4,
    categoria: "Suporte",
    links: ["Contato", "Suporte", "Perguntas", "Assistência"],
  },
];

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-t from-black to-neutral-800 ">
      <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <h1 className="text-white text-6xl font-bold tracking-tighter">
            meuFone
          </h1>
          <p className="mt-2 text-sm ">O maior e-commerce de fones do Brasil</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3 uppercase">
                {footerLink.categoria}
              </h2>
              <nav className="list-none mb-10">
                {footerLink.links.map((link) => (
                  <li key={link}>
                    <p className="hover:text-white cursor-pointer">{link}</p>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center py-4 px-8 text-base">
        <p className="text-center">
          Interface criada e codada por{" "}
          <a
            href="https://www.linkedin.com/in/mthsoliveira7/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-bold"
          >
            Matheus Oliveira
          </a>{" "}
          @{" "}
          <a
            href="https://linksta.cc/@mthsoliveira7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            meus links
          </a>
        </p>
      </div>
    </footer>
  );
}
