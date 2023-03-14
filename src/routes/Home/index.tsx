import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <div className="container home-ctr">
      <div>
        <h1>Desafio Github API</h1>
        <p>Bootcamp Spring React - DevSuperior</p>
        <Link to="#">
          <button type="button">
            Começar
          </button>
        </Link>
      </div>
    </div>
  );
}
