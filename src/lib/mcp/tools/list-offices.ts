import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { offices } from "../data";

export default defineTool({
  name: "list_offices",
  title: "Consultorios y horarios",
  description:
    "Devuelve los consultorios de la Dra. Daniela Bravo con dirección, horarios de atención, teléfono y enlace de WhatsApp para pedir turno.",
  inputSchema: {
    city: z
      .string()
      .trim()
      .min(1)
      .optional()
      .describe("Filtrar por ciudad, por ejemplo 'Vicente López' o 'Capilla del Señor'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ city }) => {
    const needle = city?.toLowerCase();
    const results = offices.filter(
      (o) => !needle || o.city.toLowerCase().includes(needle) || o.slug.includes(needle.replace(/\s+/g, "-")),
    );

    const text = results.length
      ? results
          .map(
            (o) =>
              `${o.name}\nDirección: ${o.address}, ${o.city}, ${o.province} (CP ${o.postalCode})\nHorarios: ${o.hours.join(" | ")}\nTeléfono: ${o.phone}\nWhatsApp: ${o.whatsapp}`,
          )
          .join("\n\n")
      : "No se encontró un consultorio para esa ciudad.";

    return { content: [{ type: "text", text }], structuredContent: { offices: results } };
  },
});
