import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

import { Logo } from "../../components";
import { cleanAuthToken, getAuthToken } from "../../functions";

import "./style.css";
import { toast } from "react-toastify";

export default function Library() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = getAuthToken();

    if (!hasToken) {
      navigate("/login");
    }
  });

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
        <div className="AdicionarJogo">
          <Link to="/create-game">+ Adicionar um jogo</Link>
        </div>
      </div>
    </div>
  );
}
