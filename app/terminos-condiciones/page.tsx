import Link from "next/link";

export default function TerminosCondiciones() {
    return (
        <section className="bg-background-default min-h-screen px-4 py-10">
            <div className="max-w-[1200px] mx-auto flex flex-col gap-8">

                {/* Título */}
                <h1 className="text-heading-2 text-text-primary">
                    Términos y Condiciones
                </h1>

                {/* 1 */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-body font-semibold text-text-primary">
                        1. Aceptación de los Términos
                    </h2>
                    <p className="text-body text-text-secondary">
                        Al acceder y utilizar este sitio web, aceptás los presentes términos y condiciones.
                        Si no estás de acuerdo, te pedimos que no utilices este sitio.
                    </p>
                </div>

                {/* 2 */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-body font-semibold text-text-primary">
                        2. Sobre Dinexa
                    </h2>
                    <p className="text-body text-text-secondary">
                        Dinexa es un servicio de asesoramiento orientado a personas jubiladas,
                        pensionadas o en actividad, que buscan información sobre préstamos personales.
                    </p>
                </div>

                {/* 3 */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-body font-semibold text-text-primary">
                        3. Uso del Sitio
                    </h2>
                    <p className="text-body text-text-secondary">
                        La información publicada en este sitio es orientativa y no constituye una oferta
                        directa ni un compromiso de aprobación crediticia.
                    </p>
                    <p className="text-body text-text-secondary">
                        Te recomendamos siempre consultar con un asesor para una atención personalizada.
                    </p>
                </div>

                {/* 4 */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-body font-semibold text-text-primary">
                        4. Protección de Datos
                    </h2>
                    <p className="text-body text-text-secondary">
                        Los datos que ingreses serán tratados de manera confidencial y de acuerdo
                        a nuestra Política de Privacidad. No compartimos tu información sin tu consentimiento.
                    </p>
                </div>

                {/* 5 */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-body font-semibold text-text-primary">
                        5. Limitación de Responsabilidad
                    </h2>
                    <p className="text-body text-text-secondary">
                        Dinexa no se hace responsable por decisiones tomadas en base al contenido del sitio,
                        ni por posibles errores u omisiones.
                    </p>
                </div>

                {/* 6 */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-body font-semibold text-text-primary">
                        6. Cambios en los Términos
                    </h2>
                    <p className="text-body text-text-secondary">
                        Podemos modificar estos términos en cualquier momento.
                        Te sugerimos revisarlos periódicamente para estar al tanto de cualquier cambio.
                    </p>
                </div>

                {/* 7 */}
                <div className="flex flex-col gap-2">
                    <h2 className="text-body font-semibold text-text-primary">
                        7. Contacto
                    </h2>
                    <p className="text-body text-text-secondary">
                        Si tenés dudas o consultas, escribinos por WhatsApp o mediante el formulario de contacto.
                    </p>
                </div>

                {/* Botón volver */}
                <div className="pt-4 flex justify-end">
                    <Link
                        href="/"
                        className="text-accent-primary font-semibold transition-colors duration-200 hover:text-accent-hover"
                    >
                        ← Volver al inicio
                    </Link>
                </div>

            </div>
        </section>
    );
}