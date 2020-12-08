import React from 'react';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';

export default function Main(props){
	return( <>
			  	<Menu/>
				<Profile/>
			  	<h1 className="app-title"  style={{fontSize:'3rem'}}>Sudofy!</h1>

			</>
	)
}
