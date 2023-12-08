import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

import { Logo } from "../../components";
import { cleanAuthToken, getAuthToken } from "../../functions";

import "./style.css";
import { toast } from "react-toastify";
import { soteroService } from "../../services/soteroService";

export default function Library() {
  const [userGames, setUserGames] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = getAuthToken();

    if (!hasToken) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    async function handleFetchUserGames() {
      const response = await soteroService.getUserGames();

      setUserGames(response.data.userGames);
    }

    handleFetchUserGames();
  }, []);

  const logout = () => {
    cleanAuthToken();
    toast.success("Usuário deslogado.");
    navigate("/login");
  };

  return (
    <div className="library">
      <div className="library-container">
        <div className="library__header">
          <Logo />
          <button className="logout-button" onClick={logout}>
            <MdLogout />
            Encerrar sessão
          </button>
        </div>
        {!userGames || !userGames.length ? (
          <div className="library__content">
            <p className="library__content__no-books">
              Não há jogos na sua biblioteca.
            </p>
            <Link className="library__content__add-game" to="/create-game">
              + Adicionar um jogo
            </Link>
          </div>
        ) : (
          <div className="library__content library__content--with-books">
            <div className="library__content__head">
              <Link className="library__content__add-game" to="/create-game">
                + Adicionar um jogo
              </Link>
            </div>
            <div className="library__content__books">
              {userGames.map((userGame) => (
                <article className="library__content__book" key={userGame.id}>
                  <img src={userGame.game.cover_url} alt={userGame.game.name} />
                  <h3>{userGame.game.name}</h3>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
