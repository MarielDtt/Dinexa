
import Contacto from "./components/Contacto/ContactoSection";
import Creditos from "./components/sections/Creditos";
import Entidades from "./components/sections/Entidades";
import Hero from "./components/sections/Hero";
import Pasos from "./components/sections/Pasos";
import QuienesSomos from "./components/sections/QuienesSomos";
import SecurityPopup from "./components/ui/SecurityPopup";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">

      <SecurityPopup />

      <section id="inicio">
        <Hero />
      </section>

      <section id="linea">
        <Creditos />
      </section>

      <section id="entidades">
        <Entidades />
      </section>

      <section id="pasos" >
        <Pasos />
      </section>

      <section id="quienes-somos">
        <QuienesSomos />
      </section>

      <section id="contacto">
        <Contacto />
      </section>
    </div>
  );
}