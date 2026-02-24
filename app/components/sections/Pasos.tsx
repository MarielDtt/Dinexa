import Button from "../ui/Button";

export default function TresSimplesPasos() {
  return (
    <section className="w-full bg-background-default">
      <div
        className="w-full bg-text-primary text-text-inverse
                   py-16 px-8
                   flex flex-col items-center gap-10
                   [clip-path:polygon(0%_8%,18%_0%,100%_0%,100%_92%,82%_100%,0%_100%)]"
      >
        <h2 className="text-heading-1 text-center">
          3 simples pasos
        </h2>

        <div className="w-full flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-accent-orange flex items-center justify-center text-small-sm">
              1
            </div>
            <p className="text-body">Comunicate con nosotros</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-accent-orange flex items-center justify-center text-small-sm">
              2
            </div>
            <p className="text-body">Evaluamos tu cupo</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-accent-orange flex items-center justify-center text-small-sm">
              3
            </div>
            <p className="text-body">Te acreditamos</p>
          </div>
        </div>

        <Button
          href="https://wa.me/5491154724032"
          target="_blank"
          className="bg-background-default text-text-primary text-body-bold"
        >
          Hablemos por WhatsApp
        </Button>
      </div>
    </section>
  );
}