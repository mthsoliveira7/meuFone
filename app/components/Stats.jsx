const stats = [
  {
    id: "stats-1",
    title: "Clientes satisfeitos",
    value: "9800+",
  },
  {
    id: "stats-2",
    title: "Fones vendidos",
    value: "74000+",
  },
  {
    id: "stats-3",
    title: "Anos de mercado",
    value: "+8",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      className="container mx-auto flex flex-wrap -m-4 text-center px-10 md:px-14 lg:px-32"
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="p-4 md:1/3 mx-auto inline-flex items-center"
        >
          <h2 className="font-extrabold sm:text-4xl text-3xl text-white">
            {stat.value}
          </h2>
          <p className="leading-relaxed text-2xl text-neutral-400 font-medium ml-2">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
}
