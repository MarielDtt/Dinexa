import Link from "next/link";

export default function PoliticasPrivacidad() {
  return (
    <section className="bg-background-default min-h-screen px-4 py-10">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-8">

        {/* Título */}
        <h1 className="text-heading-2 text-text-primary text-center">
          Políticas de Privacidad
        </h1>

        {/* 1 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-body font-semibold text-text-primary">
            1. Protección de tu información
          </h2>
          <p className="text-body text-text-secondary">
            En Dinexa nos tomamos muy en serio tu privacidad. La información personal
            que ingreses en el sitio será tratada con absoluta confidencialidad.
          </p>
        </div>

        {/* 2 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-body font-semibold text-text-primary">
            2. Qué datos recolectamos
          </h2>
          <p className="text-body text-text-secondary">
            Podemos solicitar algunos datos como tu nombre, teléfono o correo
            electrónico para poder contactarte y brindarte una mejor atención.
          </p>
        </div>

        {/* 3 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-body font-semibold text-text-primary">
            3. Uso de la información
          </h2>
          <p className="text-body text-text-secondary">
            Utilizamos tus datos únicamente para responder tus consultas,
            ofrecerte asesoramiento personalizado y mantenerte informado
            si así lo solicitás. No compartimos tu información con terceros
            sin tu consentimiento.
          </p>
        </div>

        {/* 4 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-body font-semibold text-text-primary">
            4. Seguridad
          </h2>
          <p className="text-body text-text-secondary">
            Aplicamos medidas de seguridad para proteger tus datos,
            tanto durante la transmisión como una vez recibidos.
          </p>
        </div>

        {/* 5 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-body font-semibold text-text-primary">
            5. Tus derechos
          </h2>
          <p className="text-body text-text-secondary">
            En cualquier momento podés solicitarnos acceder, corregir o eliminar
            tus datos personales. Solo tenés que escribirnos por WhatsApp
            o a través del formulario de contacto.
          </p>
        </div>

        {/* 6 */}
        <div className="flex flex-col gap-2">
          <h2 className="text-body font-semibold text-text-primary">
            6. Cambios en esta política
          </h2>
          <p className="text-body text-text-secondary">
            Podemos actualizar esta política en el futuro. Te recomendamos
            revisarla periódicamente para estar al tanto de cualquier cambio.
            La fecha de última actualización estará siempre indicada al final
            de este documento.
          </p>
        </div>

        {/* Última actualización */}
        <p className="text-body-sm text-text-secondary opacity-70">
          Última actualización: 20/02/2026 – v1.0
        </p>

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