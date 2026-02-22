import Hero from "./components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section id="inicio" className="min-h-150">
        <Hero />
      </section>

      <section id="linea" className=" min-h-150">
        Aca va la seccion Linea de credito
      </section>

      <section id="entidades" className=" min-h-150">
        Aca va la seccion Entidades
      </section>

      <section id="pasos" className=" min-h-150">
        Aca va la seccion Pasos
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