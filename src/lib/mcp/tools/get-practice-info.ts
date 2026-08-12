import { defineTool } from "@lovable.dev/mcp-js";
import { doctor, offices, treatments } from "../data";

export default defineTool({
  name: "get_practice_info",
  title: "Información de la práctica",
  description:
    "Resumen público de la Dra. Daniela Bravo: especialidad, formación, zonas de atención, cantidad de tratamientos y consultorios, y cómo solicitar un turno.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text = [
      `${doctor.name} — ${doctor.specialty}`,
      doctor.education,
      `Miembro de: ${doctor.memberships.join(", ")}`,
      doctor.summary,
      `Zonas de atención: ${doctor.areasServed.join(", ")}`,
      `Consultorios: ${offices.map((o) => `${o.city} (${o.address})`).join("; ")}`,
      `Tratamientos disponibles: ${treatments.length}. Usá list_treatments para el detalle.`,
      `Turnos: por WhatsApp — ${offices.map((o) => `${o.city}: ${o.whatsapp}`).join(" | ")}`,
      `Sitio web: ${doctor.website}`,
    ].join("\n\n");

    return {
      content: [{ type: "text", text }],
      structuredContent: { doctor, offices, treatmentCount: treatments.length },
    };
  },
});
