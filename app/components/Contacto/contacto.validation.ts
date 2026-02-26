// components/Contacto/contacto.validation.ts

export type ContactoValues = {
  nombre: string;
  telefono: string;
  email: string;
  actividad: string;
  provincia: string;
  aceptaWhatsApp: boolean;
};

export type ContactoErrors = Partial<Record<keyof ContactoValues, string>>;

const onlyDigits = (s: string) => (s.match(/\d/g) ?? []).join("");

export function validateContacto(values: ContactoValues): ContactoErrors {
  const errors: ContactoErrors = {};

  // Nombre y Apellido*
  const nombre = values.nombre.trim();
  if (!nombre) errors.nombre = "Ingresá tu nombre y apellido.";
  else if (nombre.length < 3) errors.nombre = "Ingresá un nombre válido.";

  // Teléfono o WhatsApp*
  const tel = values.telefono.trim();
  const digits = onlyDigits(tel);
  if (!tel) errors.telefono = "Ingresá tu teléfono o WhatsApp.";
  else if (digits.length < 8) errors.telefono = "Ingresá un teléfono válido.";

  // Email (opcional)
  const email = values.email.trim();
  if (email) {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!ok) errors.email = "Ingresá un email válido.";
  }

  // Actividad*
  if (!values.actividad) errors.actividad = "Seleccioná una actividad.";

  // Provincia*
  if (!values.provincia) errors.provincia = "Seleccioná una provincia.";

  // Acepto WhatsApp*
  if (!values.aceptaWhatsApp) {
    errors.aceptaWhatsApp = "Tenés que aceptar para que te contactemos por WhatsApp.";
  }

  return errors;
}