import React from 'react';
import { AiFillGithub } from 'react-icons/ai'
import './Trademark.css';

export default function Trademark(){

	const style = {
		color: 'white',
		fontSize: '.9rem',
		fontWeight:300
	}

	return(
			<div className="trademark">
				<div className="icons-container">
					<AiFillGithub style={{fontSize:'1.5rem'}}/>
				</div>
				<div style={style}>Created by Mariano L. Acosta</div>
			</div>
			)
}
