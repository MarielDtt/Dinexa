
import Creditos from "./components/sections/Creditos";
import Entidades from "./components/sections/Entidades";
import Hero from "./components/sections/Hero";
import Pasos from "./components/sections/Pasos";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section id="inicio">
        <Hero />
      </section>

      <section id="linea">
        <Creditos />
      </section>

      <section id="entidades">
       <Entidades />
      </section>

      <section id="pasos">
        <Pasos/>
      </section>

      <section id="quienes-somos" className="  min-h-150 ">
        Aca va la seccion Quienes somos
      </section>

      <section id="contacto" className=" min-h-150">
        Aca va la seccion Contacto
      </section>  
    </div>
  );
}