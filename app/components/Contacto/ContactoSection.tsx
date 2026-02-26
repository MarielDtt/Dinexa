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

import Button from "../ui/Button"; // ajustá el path si tu Button está en otro lado
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

export default function Contacto() {
  const [values, setValues] = useState<ContactoValues>({
    nombre: "",
    telefono: "",
    email: "",
    actividad: "",
    provincia: "",
    aceptaWhatsApp: false,
  });

  const [touched, setTouched] = useState<Touched>({});

  const errors: ContactoErrors = useMemo(() => validateContacto(values), [values]);
  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const showError = (field: keyof ContactoValues) => Boolean(touched[field] && errors[field]);
  const helper = (field: keyof ContactoValues) =>
    touched[field] ? (errors[field] ?? " ") : " ";

  const markTouched = (field: keyof ContactoValues) =>
    setTouched((prev) => ({ ...prev, [field]: true }));

  const handleSubmit = () => {
    // marcar todo touched
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

    // TODO: acá definís tu acción real (enviar a API / EmailJS / WhatsApp / etc.)
    // Por ahora dejamos un placeholder seguro:
    console.log("FORM OK:", values);
  };

  const commonTextFieldSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "2px",
      backgroundColor: "transparent",
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
    <section
      id="contacto"
     className="w-full bg-background-default flex flex-col items-center gap-8 px-4 py-6 mb-28"
    >
      {/* Título */}
      <h2 className="text-heading-2 text-text-primary">
        ¿Querés que <span className="text-accent-blue">te contactemos</span>?
      </h2>

      {/* Form container */}
      <div className="w-full max-w-[360px] flex flex-col items-stretch gap-8">
        {/* Nombre */}
        <TextField
          fullWidth
          size="small"
          label="Ingrese Nombre y Apellido*"
          value={values.nombre}
          onChange={(e) => setValues((p) => ({ ...p, nombre: e.target.value }))}
          onBlur={() => markTouched("nombre")}
          error={showError("nombre")}
          helperText={helper("nombre")}
          sx={commonTextFieldSx}
        />

        {/* Teléfono */}
        <TextField
          fullWidth
          size="small"
          label="Ingrese Teléfono o WhatsApp*"
          value={values.telefono}
          onChange={(e) => setValues((p) => ({ ...p, telefono: e.target.value }))}
          onBlur={() => markTouched("telefono")}
          error={showError("telefono")}
          helperText={helper("telefono")}
          sx={commonTextFieldSx}
        />

        {/* Email */}
        <TextField
          fullWidth
          size="small"
          label="Email (opcional)"
          value={values.email}
          onChange={(e) => setValues((p) => ({ ...p, email: e.target.value }))}
          onBlur={() => markTouched("email")}
          error={showError("email")}
          helperText={helper("email")}
          sx={commonTextFieldSx}
        />

        {/* Actividad */}
        <FormControl
          fullWidth
          size="small"
          error={showError("actividad")}
          sx={commonSelectSx}
        >
          <InputLabel id="actividad-label">Seleccione Actividad*</InputLabel>
          <Select
            labelId="actividad-label"
            label="Seleccione Actividad*"
            value={values.actividad}
            onChange={(e) =>
              setValues((p) => ({ ...p, actividad: String(e.target.value) }))
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

        {/* Provincia */}
        <FormControl
          fullWidth
          size="small"
          error={showError("provincia")}
          sx={commonSelectSx}
        >
          <InputLabel id="provincia-label">Seleccione una Provincia</InputLabel>
          <Select
            labelId="provincia-label"
            label="Seleccione una Provincia"
            value={values.provincia}
            onChange={(e) =>
              setValues((p) => ({ ...p, provincia: String(e.target.value) }))
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

        {/* Checkbox */}
        <div className="flex flex-col gap-1">
          <FormControlLabel
            control={
              <Checkbox
                checked={values.aceptaWhatsApp}
                onChange={(e) =>
                  setValues((p) => ({ ...p, aceptaWhatsApp: e.target.checked }))
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

        {/* CTA */}
        <Button disabled={!isValid} onClick={handleSubmit} className="w-full">
          Quiero que me contacten
        </Button>
      </div>
    </section>
  );
}