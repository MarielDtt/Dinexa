import Button from "../ui/Button";


export default function Hero() {
    return (
        <div className="min-h-[60vh] bg-background-default w-full flex flex-col items-start gap-4 px-4 py-10 shadow-[0_4px_4px_rgba(0,0,0,0.25)] justify-center">

            <h1 className="text-heading-1 text-text-primary">
                Te acompañamos <br />
                a encontrar el <br />
                <span className="text-accent-blue">
                     crédito que necesitás
                </span>
            </h1>

            <p className="text-body-lg text-text-secondary">
                Asesoramiento personalizado y gestión simple durante todo el proceso.
            </p>

            <div className="w-full flex justify-center">
                <Button>
                    Comunicate con nosotros
                </Button>
            </div>
        </div>
    );
}