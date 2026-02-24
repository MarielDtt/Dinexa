import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function Footer() {
  return (
    <footer className="w-full bg-text-primary">
      {/* TOP */}
      <div className="px-4 py-10 flex flex-col gap-6 lg:max-w-[1200px] lg:mx-auto lg:px-8 lg:py-12">
        
        {/* MOBILE */}
        <div className="flex flex-col gap-6 lg:hidden">
          
          {/* Logo */}
          <div className="w-full flex justify-start">
            <Image
              src="/DinexaOrange2.webp"
              alt="Dinexa"
              width={160}
              height={60}
              className="object-contain"
              priority
            />
          </div>

          {/* Descripción */}
          <p className="text-text-inverse text-body text-start max-w-[340px] opacity-90">
            Brindamos asesoramiento personalizado en beneficios y servicios
            financieros para jubilados y trabajadores.
          </p>

          {/* Links */}
          <div className="w-full flex gap-8">
            
            {/* Servicios */}
            <div className="w-1/2 flex flex-col items-center gap-4 text-center">
              <h3 className="text-text-inverse text-body-lg font-semibold">
                Servicios
              </h3>

              <ul className="flex flex-col gap-3 text-text-inverse text-body-md opacity-90">
                <li><a href="#linea" className="hover:text-accent-hover transition-colors duration-200">Jubilados ANSES</a></li>
                <li><a href="#linea" className="hover:text-accent-hover transition-colors duration-200">Jubilados IPS</a></li>
                <li><a href="#linea" className="hover:text-accent-hover transition-colors duration-200">Docentes</a></li>
                <li><a href="#linea" className="hover:text-accent-hover transition-colors duration-200">Fuerzas de Seguridad</a></li>
                <li><a href="#linea" className="hover:text-accent-hover transition-colors duration-200">Pensión Graciable</a></li>
              </ul>
            </div>

            {/* Información */}
            <div className="w-1/2 flex flex-col items-center gap-4 text-center">
              <h3 className="text-text-inverse text-body-lg font-semibold">
                Información
              </h3>

              <ul className="flex flex-col gap-3 text-text-inverse text-body-md opacity-90">
                <li><a href="#pasos" className="hover:text-accent-hover transition-colors duration-200">Cómo funciona</a></li>
                <li><a href="#contacto" className="hover:text-accent-hover transition-colors duration-200">Contacto</a></li>
                <li>
                  <Link
                    href="/terminos-condiciones"
                    className="hover:text-accent-hover transition-colors duration-200"
                  >
                    Términos y condiciones
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politicas-privacidad"
                    className="hover:text-accent-hover transition-colors duration-200"
                  >
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-12">
          
          {/* Marca */}
          <div className="flex flex-col gap-4">
            <Image
              src="/DinexaOrange2.webp"
              alt="Dinexa"
              width={180}
              height={64}
              className="object-contain"
            />
            <p className="text-text-inverse text-body-md opacity-90 max-w-[360px]">
              Brindamos asesoramiento personalizado en beneficios y servicios
              financieros para jubilados y trabajadores.
            </p>
          </div>

          {/* Servicios */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-inverse text-body-lg font-semibold">
              Servicios
            </h3>

            <ul className="flex flex-col gap-3 text-text-inverse text-body-md opacity-90">
              <li><a href="#linea" className="hover:text-accent-hover transition-colors duration-200">Jubilados ANSES</a></li>
              <li><a href="#linea" className="hover:text-accent-hover transition-colors duration-200">Jubilados IPS</a></li>
              <li><a href="#linea" className="hover:text-accent-hover transition-colors duration-200">Docentes</a></li>
              <li><a href="#linea" className="hover:text-accent-hover transition-colors duration-200">Fuerzas de Seguridad</a></li>
              <li><a href="#linea" className="hover:text-accent-hover transition-colors duration-200">Pensión Graciable</a></li>
            </ul>
          </div>

          {/* Información */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text-inverse text-body-lg font-semibold">
              Información
            </h3>

            <ul className="flex flex-col gap-3 text-text-inverse text-body-md opacity-90">
              <li><a href="#pasos" className="hover:text-accent-hover transition-colors duration-200">Cómo funciona</a></li>
              <li><a href="#contacto" className="hover:text-accent-hover transition-colors duration-200">Contacto</a></li>
              <li>
                <Link
                  href="/terminos-condiciones"
                  className="hover:text-accent-hover transition-colors duration-200"
                >
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/politicas-privacidad"
                  className="hover:text-accent-hover transition-colors duration-200"
                >
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-text-inverse/20" />
      </div>

      {/* BOTTOM */}
      <div className="px-4 pb-10 lg:pb-8 lg:max-w-[1200px] lg:mx-auto lg:px-8">
        <div className="w-full flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <p className="text-text-inverse text-body-sm text-center opacity-70 lg:text-left">
            © 2026 Dinexa. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/DinexaSolucionesFinancieras/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-text-inverse/25 flex items-center justify-center text-text-inverse/90 hover:text-accent-hover transition-colors duration-200">
              <FacebookIcon fontSize="small" />
            </a>
            <a href="https://www.instagram.com/dinexasf/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-text-inverse/25 flex items-center justify-center text-text-inverse/90 hover:text-accent-hover transition-colors duration-200">
              <InstagramIcon fontSize="small" />
            </a>
            <a href="mailto:dinexasf@gmail.com" className="w-10 h-10 rounded-full border border-text-inverse/25 flex items-center justify-center text-text-inverse/90 hover:text-accent-hover transition-colors duration-200">
              <EmailIcon fontSize="small" />
            </a>
            <a href="tel:+541154724032" className="w-10 h-10 rounded-full border border-text-inverse/25 flex items-center justify-center text-text-inverse/90 hover:text-accent-hover transition-colors duration-200">
              <LocalPhoneIcon fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}