import { Navigate } from "react-router-dom";

interface SectionRedirectProps {
  sectionId: string;
}

/**
 * Old/bookmarked URLs like /sobre, /tratamientos or /consultorios now redirect
 * to the matching section of the home page instead of showing a 404.
 */
const SectionRedirect = ({ sectionId }: SectionRedirectProps) => (
  <Navigate to={`/#${sectionId}`} replace />
);

export default SectionRedirect;
