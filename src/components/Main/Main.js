import React from 'react';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import Playlist from './Spotify/Playlist/Playlist';

export default function Main(props){
	return( <>
			  	<Menu/>
				<Profile/>
			  	<h1 className="app-title"  style={{fontSize:'3rem'}}>Sudofy!</h1>
				<h1 style={{fontSize:'1.5rem'}}>Playlist Analizer</h1>  
				<Playlist/>

			</>
	)
}
