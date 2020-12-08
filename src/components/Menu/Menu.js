import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Menu(){

	let [open, setOpen] = useState(false);

	const handleClick = ()=>{
		setOpen(!open);
	}

	return (
		open ? 
		(
			<div className="menu"></div>
		) : (
			<GiHamburgerMenu/>
		)
	)
	
}
