import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import './Menu.css';
import { useSpring, animated } from 'react-spring';

export default function Menu(){

	let [open, setOpen] = useState(true);

	const handleClick = ()=>{
		setOpen(!open);
	}

	const hamburger = {
		color:'white',
		position:'absolute',
		left:20,
		top:50,
		fontSize:'2rem',
		cursor:'pointer'
	}

	const close = {
		position: 'relative',
		color:'green',
		fontSize:'1.8rem',
		right:-110,
		top:20,
		cursor:'pointer'
	}
	const props = useSpring({
		transform: 'translate3d(0,0,0)',
		from: {transform: 'translate3d(-200px,0,0)'},
		config:{duration:400}
	  })

	return (
		<div className="menu-wrapper">
			{open ? 
				(						
					<div className="side-menu" style={props}>
						<IoIosCloseCircleOutline style={close} onClick={handleClick}/>
					</div>

				) : (
					<GiHamburgerMenu style={hamburger} onClick={handleClick}/>
				)
			}
		</div>

	)
	
}
