"use client";

import { useMemo, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import Button from "../ui/Button";
import SuccessModal from "../ui/SuccessModal";
import {
  ContactoValues,
  validateContacto,
  ContactoErrors,
} from "./contacto.validation";

type Touched = Partial<Record<keyof ContactoValues, boolean>>;

const ACTIVIDADES = [
  { value: "jubilado", label: "Jubilado/a" },
  { value: "pensionado", label: "Pensionado/a" },
  { value: "docente", label: "Docente" },
  { value: "policia", label: "Policía" },
  { value: "fuerzas", label: "Fuerzas de seguridad" },
  { value: "apn", label: "APN" },
    { value: "auh", label: "AUH" },
  { value: "otro", label: "Otro" },
];

const PROVINCIAS = [
  { value: "buenos-aires", label: "Buenos Aires" },
  { value: "caba", label: "CABA" },
  { value: "cordoba", label: "Córdoba" },
  { value: "santa-fe", label: "Santa Fe" },
  { value: "mendoza", label: "Mendoza" },
  { value: "tucuman", label: "Tucumán" },
  { value: "entre-rios", label: "Entre Ríos" },
  { value: "salta", label: "Salta" },
  { value: "misiones", label: "Misiones" },
  { value: "chaco", label: "Chaco" },
  { value: "corrientes", label: "Corrientes" },
  { value: "neuquen", label: "Neuquén" },
  { value: "rio-negro", label: "Río Negro" },
  { value: "san-juan", label: "San Juan" },
  { value: "san-luis", label: "San Luis" },
  { value: "jujuy", label: "Jujuy" },
  { value: "formosa", label: "Formosa" },
  { value: "la-rioja", label: "La Rioja" },
  { value: "catamarca", label: "Catamarca" },
  { value: "santiago-del-estero", label: "Santiago del Estero" },
  { value: "chubut", label: "Chubut" },
  { value: "santa-cruz", label: "Santa Cruz" },
  { value: "tierra-del-fuego", label: "Tierra del Fuego" },
  { value: "la-pampa", label: "La Pampa" },
];

export default function ContactoSection() {
  const [values, setValues] = useState<ContactoValues>({
    nombre: "",
    telefono: "",
    email: "",
    actividad: "",
    provincia: "",
    aceptaWhatsApp: false,
  });

  const [touched, setTouched] = useState<Touched>({});
  const [successOpen, setSuccessOpen] = useState(false);

  const errors: ContactoErrors = useMemo(
    () => validateContacto(values),
    [values]
  );
  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const showError = (field: keyof ContactoValues) =>
    Boolean(touched[field] && errors[field]);

  const helper = (field: keyof ContactoValues) =>
    touched[field] ? (errors[field] ?? " ") : " ";

  const markTouched = (field: keyof ContactoValues) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = () => {
    setTouched({
      nombre: true,
      telefono: true,
      email: true,
      actividad: true,
      provincia: true,
      aceptaWhatsApp: true,
    });

    const finalErrors = validateContacto(values);
    if (Object.keys(finalErrors).length > 0) return;

    // TODO: acá conectás envío real (API/EmailJS/WhatsApp/etc)
    console.log("FORM OK:", values);

    // ✅ abre modal de éxito
    setSuccessOpen(true);
  };

  const handleCloseSuccess = () => {
    setSuccessOpen(false);

    // ✅ opcional: limpiar el form al cerrar
    setValues({
      nombre: "",
      telefono: "",
      email: "",
      actividad: "",
      provincia: "",
      aceptaWhatsApp: false,
    });
    setTouched({});
  };

  // MUI styles (tokens hardcoded con tus colores)
  const commonTextFieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "2px",
      "& fieldset": { borderColor: "#B7B3AC" }, // border-soft
      "&:hover fieldset": { borderColor: "#062B3D" }, // text-primary
      "&.Mui-focused fieldset": { borderColor: "#F97404" }, // accent-orange
    },
    "& .MuiInputLabel-root": { color: "#5E5B57" }, // text-secondary
    "& .MuiInputLabel-root.Mui-focused": { color: "#F97404" }, // accent-orange
    "& .MuiFormHelperText-root": { marginLeft: 0 },
  };

  const commonSelectSx = {
    ...commonTextFieldSx,
    "& .MuiSelect-icon": { color: "#062B3D" },
  };

  return (
    <>
      <section
        id="contacto"
        className="
          w-full bg-background-default
          flex flex-col items-center gap-8 px-4 py-6
          mb-28
          lg:px-8 lg:py-6 lg:mb-32
        "
      >
        {/* Container para controlar ancho en desktop */}
        <div className="w-full lg:max-w-[1200px]">
          {/* Título */}
          <h2 className="text-heading-1 text-text-primary text-center lg:text-left whitespace-nowrap overflow-hidden text-ellipsis">
            ¿Te <span className="text-accent-blue">contactamos</span>?
          </h2>

          {/* Layout: mobile columna / desktop 2 columnas */}
          <div className="mt-8 flex flex-col items-center gap-10 lg:mt-10 lg:grid lg:grid-cols-2 lg:items-start lg:gap-12">
            {/* Columna izquierda: Form */}
            <div className="w-full max-w-[360px] lg:max-w-[520px]">
              <div className="w-full flex flex-col items-stretch gap-8">
                <TextField
                  fullWidth
                  size="small"
                  label="Ingrese Nombre y Apellido*"
                  value={values.nombre}
                  onChange={(e) =>
                    setValues((p) => ({ ...p, nombre: e.target.value }))
                  }
                  onBlur={() => markTouched("nombre")}
                  error={showError("nombre")}
                  helperText={helper("nombre")}
                  sx={commonTextFieldSx}
                />

                <TextField
                  fullWidth
                  size="small"
                  label="Ingrese Teléfono o WhatsApp*"
                  value={values.telefono}
                  onChange={(e) =>
                    setValues((p) => ({ ...p, telefono: e.target.value }))
                  }
                  onBlur={() => markTouched("telefono")}
                  error={showError("telefono")}
                  helperText={helper("telefono")}
                  sx={commonTextFieldSx}
                />

                <TextField
                  fullWidth
                  size="small"
                  label="Email (opcional)"
                  value={values.email}
                  onChange={(e) =>
                    setValues((p) => ({ ...p, email: e.target.value }))
                  }
                  onBlur={() => markTouched("email")}
                  error={showError("email")}
                  helperText={helper("email")}
                  sx={commonTextFieldSx}
                />

                <FormControl
                  fullWidth
                  size="small"
                  error={showError("actividad")}
                  sx={commonSelectSx}
                >
                  <InputLabel id="actividad-label">
                    Seleccione Actividad*
                  </InputLabel>
                  <Select
                    labelId="actividad-label"
                    label="Seleccione Actividad*"
                    value={values.actividad}
                    onChange={(e) =>
                      setValues((p) => ({
                        ...p,
                        actividad: String(e.target.value),
                      }))
                    }
                    onBlur={() => markTouched("actividad")}
                  >
                    <MenuItem value="">
                      <em>Seleccione Actividad*</em>
                    </MenuItem>
                    {ACTIVIDADES.map((a) => (
                      <MenuItem key={a.value} value={a.value}>
                        {a.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{helper("actividad")}</FormHelperText>
                </FormControl>

                <FormControl
                  fullWidth
                  size="small"
                  error={showError("provincia")}
                  sx={commonSelectSx}
                >
                  <InputLabel id="provincia-label">
                    Seleccione una Provincia
                  </InputLabel>
                  <Select
                    labelId="provincia-label"
                    label="Seleccione una Provincia"
                    value={values.provincia}
                    onChange={(e) =>
                      setValues((p) => ({
                        ...p,
                        provincia: String(e.target.value),
                      }))
                    }
                    onBlur={() => markTouched("provincia")}
                  >
                    <MenuItem value="">
                      <em>Seleccione una Provincia</em>
                    </MenuItem>
                    {PROVINCIAS.map((p) => (
                      <MenuItem key={p.value} value={p.value}>
                        {p.label}
                      </MenuItem>
                    ))}
                  </Select>
                  <FormHelperText>{helper("provincia")}</FormHelperText>
                </FormControl>

                <div className="flex flex-col gap-1">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.aceptaWhatsApp}
                        onChange={(e) =>
                          setValues((p) => ({
                            ...p,
                            aceptaWhatsApp: e.target.checked,
                          }))
                        }
                        onBlur={() => markTouched("aceptaWhatsApp")}
                        sx={{
                          color: "#B7B3AC",
                          "&.Mui-checked": { color: "#F97404" },
                        }}
                      />
                    }
                    label={
                      <span className="text-small-md text-text-primary">
                        Acepto recibir contacto por WhatsApp*
                      </span>
                    }
                  />

                  {showError("aceptaWhatsApp") ? (
                    <p className="text-small-sm text-[rgb(211,47,47)]">
                      {errors.aceptaWhatsApp}
                    </p>
                  ) : (
                    <p className="text-small-sm opacity-0">.</p>
                  )}
                </div>

                <Button
                  disabled={!isValid}
                  onClick={handleSubmit}
                  className="w-full"
                >
                  Quiero que me contacten
                </Button>
              </div>
            </div>

            {/* Columna derecha: SOLO desktop */}
            <aside className="hidden lg:block">
              <div className="w-full max-w-[520px]">
                <div className="bg-card-surface border border-border-soft rounded p-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-heading-2 text-text-primary">
                      Atención personalizada
                    </h3>
                    <p className="text-body text-text-secondary">
                      Completá el formulario y un asesor de Dinexa se comunica
                      con vos para guiarte según tu actividad y provincia.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="rounded border border-border-soft bg-background-default p-4">
                      <p className="text-body-bold text-text-primary">
                        Respuesta rápida
                      </p>
                      <p className="text-small-md text-text-secondary">
                        Te contactamos a la brevedad para ayudarte con requisitos
                        y pasos.
                      </p>
                    </div>

                    <div className="rounded border border-border-soft bg-background-default p-4">
                      <p className="text-body-bold text-text-primary">
                        Por WhatsApp
                      </p>
                      <p className="text-small-md text-text-secondary">
                        Si aceptás el contacto por WhatsApp, agilizamos el
                        seguimiento.
                      </p>
                    </div>

                    <div className="rounded border border-border-soft bg-background-default p-4">
                      <p className="text-body-bold text-text-primary">
                        Información clara
                      </p>
                      <p className="text-small-md text-text-secondary">
                        Te informamos disponibilidad, documentación y condiciones
                        según tu perfil.
                      </p>
                    </div>
                  </div>

                  <p className="text-small-sm text-text-secondary">
                    * Campos obligatorios para poder contactarte.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <SuccessModal
        open={successOpen}
        onClose={handleCloseSuccess}
        title="Gracias por confiar en Dinexa"
        message="Recibimos tu solicitud correctamente. A la brevedad un asesor se estará comunicando con vos."
      />
    </>
  );
}