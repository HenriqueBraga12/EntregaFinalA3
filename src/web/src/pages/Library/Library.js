import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Logo } from "../../components";
import { getAuthToken } from "../../functions";

import "./style.css";

export default function Library() {
  const navigate = useNavigate();

  useEffect(() => {
    const hasToken = getAuthToken();

    if (!hasToken) {
      navigate("/login");
    }
  });

  return (
    <div className="library">
      <div className="library-container">
        <div className="logo">
          <Logo />
        </div>
        <div className="AdicionarJogo">
          <Link to="/create-game">+ Adicionar um jogo</Link>
        </div>
      </div>
    </div>
  );
}
