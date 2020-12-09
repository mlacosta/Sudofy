import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import './Menu.css';
import Selector from './Selector/Selector';
import { useSpring } from 'react-spring';
import { RiPlayList2Fill, RiHeadphoneFill } from 'react-icons/ri';
import { IoMdMicrophone } from 'react-icons/io';
import { FaMusic } from 'react-icons/fa';

export default function Menu(){

	let [open, setOpen] = useState(false);

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
	
	const icons = {
		position:'relative',
		right:10,
		top:2
	}

	return (
		<div className="menu-wrapper">
			{open ? 
				(						
					<div className="side-menu" style={props}>
						<IoIosCloseCircleOutline style={close} onClick={handleClick}/>
						<Selector name='Profile Statistics' color='red'>
							<RiHeadphoneFill style={icons}/>
						</Selector>
						<Selector name='Playlist Analysis' color='orange'>
							<RiPlayList2Fill style={icons}/>
						</Selector>
						<Selector name='Artist Analysis' color='green'>
							<IoMdMicrophone style={icons}/>
						</Selector>
						<Selector name='Track Analysis' color='blue'>
							<FaMusic style={icons}/>
						</Selector>
						
					</div>

				) : (
					<GiHamburgerMenu style={hamburger} onClick={handleClick}/>
				)
			}
		</div>

	)
	
}
