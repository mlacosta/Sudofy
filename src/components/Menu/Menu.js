import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import './Menu.css';
import Selector from './Selector/Selector';
import { useSpring } from 'react-spring';
import { RiPlayList2Fill, RiHeadphoneFill } from 'react-icons/ri';
import { IoMdMicrophone } from 'react-icons/io';
import { FaMusic } from 'react-icons/fa';
import { BiEqualizer } from 'react-icons/bi';
import logo from '../../img/spotify.JPG'

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
						<IoIosCloseCircleOutline className='side-element' style={close} onClick={handleClick}/>
						<Selector className='side-element' name='Profile Statistics' color='#7d1507' path='/callback'>
							<RiHeadphoneFill style={icons}/>
						</Selector>
						<Selector className='side-element' name='Playlist Analysis' color='#ad6d20' path='/playlist'>
							<RiPlayList2Fill style={icons}/>
						</Selector>
						<Selector className='side-element' name='Artist Analysis' color='green' path='/artist'>
							<IoMdMicrophone style={icons}/>
						</Selector>
						<Selector className='side-element' name='Track Analysis' color='#193b78' path='/track'>
							<FaMusic style={icons}/>
						</Selector>
						<Selector className='side-element' name='Synesthesia (wow!)' color='#a89415' path='/synesthesia'>
							<BiEqualizer style={icons}/>
						</Selector>
						<img id='spotify'src={logo} alt=""/>
					</div>

				) : (
					<GiHamburgerMenu style={hamburger} onClick={handleClick}/>
				)
			}
		</div>

	)
	
}
