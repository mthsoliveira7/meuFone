import Banner from "./components/Banner";
import Catalogo from "./components/Catalogo";
import { Suspense } from "react";
import Loading from "../loading";
export default function page() {
  return (
    <>
      <Banner />

      <Suspense fallback={<Loading />}>
        <Catalogo />
      </Suspense>
    </>
  );
}
