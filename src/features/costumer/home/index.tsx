import homeBackground from "../../../assets/images/hero-bg.svg";

export function HomePage() {
  return (
    <section
      className="
      min-h-screen w-full 
      bg-no-repeat bg-top 
      text-white"
      style={{ background: `url(${homeBackground})` }}
    >
      <header className="flex">
        <nav className="block mx-auto">
          <ul className="flex gap-10">
            <li><a href="#">Área do Cliente</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Nossa Equipe</a></li>
            <li><a href="#">Planos</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Fale Conosco</a></li>
          </ul>
        </nav>
      </header>
    </section>
  );
}