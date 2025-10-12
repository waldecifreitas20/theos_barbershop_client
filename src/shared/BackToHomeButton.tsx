import { Link } from "react-router";

export function BackToHomeButton() {
  return (
    <Link to="/" className="text-white hover:text-blue-500 mx-auto block w-fit my-4">Voltar para Home</Link>
  );
}