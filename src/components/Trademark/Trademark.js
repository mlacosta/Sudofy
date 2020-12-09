import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai'
import './Trademark.css';
import waifu from '../../img/wsv.png';
export default function Trademark(){

	const style = {
		color: 'white',
		fontSize: '.9rem',
		fontWeight:300,
	}

	const icon = {
		fontSize:'1.5rem',
		margin:'0 5px'
	}

	return(
			<div className="trademark">
				{/*<img id ='waifu'src={waifu} alt=""/>*/}
				<div className="icons-container">
					<AiFillGithub style={icon}/>
					<AiFillLinkedin style={icon}/>
					<AiOutlineMail style={icon}/>
				</div>
				<div className='trademark-name' style={style}>Created by Mariano L. Acosta</div>
			</div>
			)
}
