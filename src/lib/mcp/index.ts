import { defineMcp } from "@lovable.dev/mcp-js";
import listTreatmentsTool from "./tools/list-treatments";
import listOfficesTool from "./tools/list-offices";
import getPracticeInfoTool from "./tools/get-practice-info";

export default defineMcp({
  name: "bravo-dermatologia-digital",
  title: "bravo-dermatologia-digital",
  version: "0.1.0",
  instructions:
    "Herramientas públicas del sitio de la Dra. Daniela Bravo, dermatóloga en Vicente López. Usá get_practice_info para un resumen general, list_treatments para tratamientos dermatológicos y estéticos, y list_offices para direcciones, horarios y enlaces de WhatsApp para pedir turno. No hay datos de pacientes.",
  tools: [getPracticeInfoTool, listTreatmentsTool, listOfficesTool],
});
