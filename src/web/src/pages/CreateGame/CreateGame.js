import { useEffect, useState } from "react";

import { Logo, Input, Button, BackButton, Select } from "../../components";

import "./style.css";
import { soteroService } from "../../services/soteroService";

export default function CreateGame() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      const response = await soteroService.getGames();

      setOptions(
        response.data.games.map(({ id, name }) => ({ name, value: id }))
      );
    }

    fetchGames();
  }, []);

  return (
    <div className="library">
      <div className="library-container">
        <Logo />
        <BackButton />
        <form className="form-container">
          <h1>Adicione um jogo a sua biblioteca</h1>
          <Select
            name="game_id"
            label="Escolha um jogo"
            options={options}
            infoText={
              <>
                O jogo que você quer adicionar não existe?{" "}
                <button className="form-container__addGamerButton">
                  Cadastre aqui
                </button>
              </>
            }
          />

          <Input
            name="game_id"
            label="Avaliação (uma nota de 0 à 10)"
            className=""
          />
          <Input name="game_id" label="Status (escolha uma ou mais opções)" />

          <Button variant="secondary" className="GamerButton">
            Salvar e Adicionar outro jogo{" "}
          </Button>
          <Button className="GamerButton-salvar">Salvar</Button>
        </form>
      </div>
    </div>
  );
}
