import { Link } from "react-router";

export function HomeView() {
  return (
    <>
      <h1>Home Page</h1>

      <header>
        <nav>
          <div>
            <a href="#">Nossa Equipe</a>
            <a href="#">Serviços</a>
            <a href="#"></a>
            <Link to="/agendamento">Agendar Serviço</Link>
          </div>
        </nav>
      </header>
    </>
  );
}