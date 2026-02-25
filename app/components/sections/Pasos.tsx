import Button from "../ui/Button";
import RotatingStats from "../ui/RotatingStats";

export default function TresSimplesPasos() {
  return (
    <section className="w-full bg-background-default mt-16 lg:mt-24">
      {/* Container desktop 1200 */}
      <div className="lg:max-w-[1200px] lg:mx-auto">

        <div
          className="w-full bg-text-primary text-text-inverse
                     py-16 px-8
                     flex flex-col items-center gap-10
                     [clip-path:polygon(0%_8%,18%_0%,100%_0%,100%_92%,82%_100%,0%_100%)]
                     lg:py-20 lg:px-16"
        >
          <div className="w-full lg:grid lg:grid-cols-2 lg:items-center lg:gap-16">

            {/* Columna izquierda */}
            <div className="w-full flex flex-col items-center gap-10
                            lg:items-start lg:gap-8">

              <h2 className="text-heading-1 text-center lg:text-left lg:text-display">
                3 simples pasos
              </h2>

              <div className="w-full flex flex-col gap-5">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent-orange flex items-center justify-center text-small-sm lg:w-8 lg:h-8">
                    1
                  </div>
                  <p className="text-body lg:text-body-lg">Comunicate con nosotros</p>
                </div>

                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent-orange flex items-center justify-center text-small-sm lg:w-8 lg:h-8">
                    2
                  </div>
                  <p className="text-body lg:text-body-lg">Evaluamos tu cupo</p>
                </div>

                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent-orange flex items-center justify-center text-small-sm lg:w-8 lg:h-8">
                    3
                  </div>
                  <p className="text-body lg:text-body-lg">Te acreditamos</p>
                </div>
              </div>

              <div className="w-full flex justify-center lg:justify-start">
                <Button
                  href="https://wa.me/5491154724032"
                  target="_blank"
                  className="bg-background-default text-text-primary text-body-bold"
                >
                  Hablemos por WhatsApp
                </Button>
              </div>
            </div>

            <div className="hidden lg:flex lg:justify-end">
              <div className="w-full max-w-[420px]">
                <RotatingStats />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}