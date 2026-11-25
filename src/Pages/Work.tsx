import { Navigate } from "react-router-dom";

/**
 * The old /work page showed placeholder case studies. Until real,
 * approved projects exist it redirects to Solutions.
 */
export default function Work() {
  return <Navigate to="/solutions" replace />;
}
