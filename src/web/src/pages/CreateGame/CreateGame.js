import { Logo, Input,Button } from '../../components'

import './style.css'
export default function CreateGame() {
	return (
		<div className='library'>
			<div className='library-container'>
				<Logo />
				<form className='form-container'>
					<h1>Adicione um jogo a sua biblioteca</h1>
					<Input name='game_id' label='Escolha um jogo' infoText={<>O jogo que você quer adicionar não existe? <button className='form-container__addGamerButton'>Cadastre aqui</button></>} />

					<Input name='game_id' label='Avaliação (uma nota de 0 à 10)' />
					<Input name='game_id' label='Status (escolha uma ou mais opções)' />

					<Button>Salvar e Adicionar outro jogo </Button>
					<Button>Salvar</Button>
				</form>
			</div>
		</div>
	)

}
