import homeBackground from "../../../assets/images/hero-bg.svg";
import { Header } from "./components/Header";

export function HomePage() {
  return (
    <section
      className="
      min-h-screen w-full 
      bg-no-repeat bg-top 
      text-white"
      style={{ background: `url(${homeBackground})` }}
    >
      <Header />
    </section>
  );
}