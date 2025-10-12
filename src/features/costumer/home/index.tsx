import background from "../../../assets/images/hero-bg.svg";
import { Header } from "./components/Header";

export function HomePage() {
  return (
    <section
      className="
      h-screen w-full 
      bg-no-repeat bg-top 
      text-white"
      style={{
        background: `url(${background})`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
      <Header />
    </section>
  );
}