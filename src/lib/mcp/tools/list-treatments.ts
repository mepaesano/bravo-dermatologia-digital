import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { treatments } from "../data";

export default defineTool({
  name: "list_treatments",
  title: "Listar tratamientos",
  description:
    "Lista los tratamientos dermatológicos y estéticos ofrecidos por la Dra. Daniela Bravo, con su descripción.",
  inputSchema: {
    category: z
      .enum(["estetica", "clinica"])
      .optional()
      .describe("Filtrar por tipo: 'estetica' o 'clinica' (dermatología clínica)."),
    query: z
      .string()
      .trim()
      .min(1)
      .optional()
      .describe("Texto libre para buscar por nombre o descripción del tratamiento."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, query }) => {
    const needle = query?.toLowerCase();
    const results = treatments.filter((t) => {
      if (category && t.category !== category) return false;
      if (!needle) return true;
      return (
        t.name.toLowerCase().includes(needle) ||
        t.description.toLowerCase().includes(needle) ||
        t.slug.includes(needle)
      );
    });

    const text = results.length
      ? results.map((t) => `${t.name} (${t.category}): ${t.description}`).join("\n\n")
      : "No se encontraron tratamientos con ese criterio.";

    return { content: [{ type: "text", text }], structuredContent: { treatments: results } };
  },
});
