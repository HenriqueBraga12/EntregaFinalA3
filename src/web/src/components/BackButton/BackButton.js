import "./style.css"
import { MdArrowBack } from 'react-icons/md'
export default function BackButton({
	className= ""
}){
	return (
		<button className="MdArrowBack"><MdArrowBack/></button>
	)
}