import React from 'react';
import { Link } from 'react-router-dom';


export default function Selector({ children, className, name, color, path }){

	const selector = {
		border: `1px solid ${color}`,
		margin:20,
		marginTop:40,
		padding:10,
		cursor:'pointer',
		borderRadius:5
	}

	return(
		<Link to={path} style={{textDecoration:'none', color:'#fff'}}>
			<div className={className}>
				<div className='selector-menu' style={selector}>
					{children}
					<span className="selector-name">{name}</span>	
			</div>
			</div>
		</Link>

		)
}
