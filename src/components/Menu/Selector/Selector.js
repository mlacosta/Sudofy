import React from 'react';


export default function Selector({ children, name, color }){

	const selector = {
		border: `1px solid ${color}`,
		margin:20,
		marginTop:40,
		padding:10,
		cursor:'pointer',
		borderRadius:5
	}

	return(<div className='selector-menu' style={selector}>
				{children}
				<span className="selector-name">{name}</span>	
		   </div>)
}
