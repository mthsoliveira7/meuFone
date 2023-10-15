import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import SobreNos from "./components/SobreNos";
import MaisVendidos from "./components/MaisVendidos";
import Ofertas from "./components/Ofertas";
import AppMobile from "./components/AppMobile";
import Variedade from "./components/Variedade";
import Depoimentos from "./components/Depoimentos";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <SobreNos />
      <MaisVendidos />
      <Ofertas />
      <AppMobile />
      <Variedade />
      <Depoimentos />
      <CTA />
    </>
  );
}
