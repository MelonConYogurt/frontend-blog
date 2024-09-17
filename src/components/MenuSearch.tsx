"use client";

import * as React from "react";
import {Check, ChevronsUpDown} from "lucide-react";

import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";

const categorias = [
  {
    value: "desarrollo-web",
    label: "Desarrollo Web",
  },
  {
    value: "desarrollo-movil",
    label: "Desarrollo Móvil",
  },
  {
    value: "inteligencia-artificial",
    label: "Inteligencia Artificial",
  },
  {
    value: "machine-learning",
    label: "Machine Learning",
  },
  {
    value: "desarrollo-software",
    label: "Desarrollo de Software",
  },
  {
    value: "programacion-backend",
    label: "Programación Backend",
  },
  {
    value: "programacion-frontend",
    label: "Programación Frontend",
  },
  {
    value: "cloud-computing",
    label: "Cloud Computing",
  },
  {
    value: "devops",
    label: "DevOps",
  },
  {
    value: "bases-de-datos",
    label: "Bases de Datos",
  },
  {
    value: "seguridad-informatica",
    label: "Seguridad Informática",
  },
  {
    value: "analisis-de-datos",
    label: "Análisis de Datos",
  },
  {
    value: "internet-de-las-cosas",
    label: "Internet de las Cosas (IoT)",
  },
  {
    value: "blockchain",
    label: "Blockchain",
  },
  {
    value: "testing-qa",
    label: "Testing y QA",
  },
  {
    value: "herramientas-de-desarrollo",
    label: "Herramientas de Desarrollo",
  },
  {
    value: "lenguajes-de-programacion",
    label: "Lenguajes de Programación",
  },
  {
    value: "diseno-de-arquitecturas",
    label: "Diseño de Arquitecturas",
  },
  {
    value: "microservicios",
    label: "Microservicios",
  },
  {
    value: "automatizacion",
    label: "Automatización",
  },
  {
    value: "ciberseguridad",
    label: "Ciberseguridad",
  },
  {
    value: "apis-y-servicios-web",
    label: "APIs y Servicios Web",
  },
  {
    value: "desarrollo-agil",
    label: "Desarrollo Ágil",
  },
  {
    value: "innovacion-tecnologica",
    label: "Innovación Tecnológica",
  },
  {
    value: "emprendimiento-en-tecnologia",
    label: "Emprendimiento en Tecnología",
  },
  {
    value: "realidad-aumentada-y-virtual",
    label: "Realidad Aumentada y Virtual",
  },
  {
    value: "ciencia-de-datos",
    label: "Ciencia de Datos",
  },
  {
    value: "computacion-cuantica",
    label: "Computación Cuántica",
  },
  {
    value: "big-data",
    label: "Big Data",
  },
  {
    value: "desarrollo-de-videojuegos",
    label: "Desarrollo de Videojuegos",
  },
  {
    value: "contenedores-y-kubernetes",
    label: "Contenedores y Kubernetes",
  },
  {
    value: "desarrollo-full-stack",
    label: "Desarrollo Full Stack",
  },
  {
    value: "categorias-de-javascript",
    label: "categorias de JavaScript",
  },
  {
    value: "sistemas-operativos",
    label: "Sistemas Operativos",
  },
  {
    value: "optimizacion-de-rendimiento",
    label: "Optimización de Rendimiento",
  },
  {
    value: "desarrollo-de-interfaces",
    label: "Desarrollo de Interfaces (UI/UX)",
  },
  {
    value: "open-source",
    label: "Open Source",
  },
  {
    value: "nuevas-tecnologias",
    label: "Nuevas Tecnologías",
  },
  {
    value: "tendencias-tecnologicas",
    label: "Tendencias Tecnológicas",
  },
];

export function MenuSearch() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? categorias.find((element) => element.value === value)?.label
            : "Select element..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search element..." />
          <CommandList>
            <CommandEmpty>No se encontro.</CommandEmpty>
            <CommandGroup>
              {categorias.map((element) => (
                <CommandItem
                  key={element.value}
                  value={element.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === element.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {element.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
