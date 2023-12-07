import { Link } from 'react-router-dom'

import { Logo } from '../../components'

import './style.css'
export default function Library() {
	return (


		<div className="library">
			<div className='library-container'>
				<div className='logo'>
					<Logo />
				</div>
				<div className="AdicionarJogo">
					<Link to="/create-game">+ Adicionar um jogo</Link>
				</div>
			</div>
		</div>
	)
}