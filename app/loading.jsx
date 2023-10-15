import { Spinner } from "./lib/Icones";

export default function Loading() {
  return (
    <main className="flex items-center justify-center py-32">
      <div className="inline-flex items-center text-2xl font-semibold">
        <Spinner />
        <p className="ml-3 ">Carregando...</p>
      </div>
    </main>
  );
}
