import { Link } from "react-router-dom";
import { GithubUser } from "../../models/githubUser";
import "./styles.css";

type Props = {
  githubUser: GithubUser;
};

export default function ResultCard({ githubUser }: Props) {
  return (
    <div className="custom-result-container row">
      <div className="result-img-container col">
        <img src={githubUser.avatar_url} alt={`Foto de ${githubUser.name}`} />
      </div>
      <div className="result-content-container custom-border col-8">
        <div>
          <h2>Informações</h2>
          <div className="result-info custom-border">
            <h3>Perfil:</h3>
            <p>
              <a href={githubUser.html_url}>{githubUser.html_url}</a>
            </p>
          </div>
          <div className="result-info custom-border">
            <h3>Seguidores:</h3>
            <p>{githubUser.followers}</p>
          </div>
          <div className="result-info custom-border">
            <h3>Localidade:</h3>
            <p>{githubUser.location}</p>
          </div>
          <div className="result-info custom-border">
            <h3>Nome:</h3>
            <p>{githubUser.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
