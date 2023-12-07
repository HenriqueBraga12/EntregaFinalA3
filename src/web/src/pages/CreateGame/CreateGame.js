import { Logo, Input } from '../../components'

export default function CreateGame() {
	return (
		<div className='library'>
			<div className='library-container'>
				<Logo />
			</div>
			<div className='form-container'>
				<form action='' method='' className='form-style'>
					<Input name='game_id' label='Escolha um jogo'/>
				</form>
			</div>
		</div>
	)

}