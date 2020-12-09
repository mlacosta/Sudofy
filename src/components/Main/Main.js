import React from 'react';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import Playlist from './Spotify/Playlist/Playlist';
import User from './Spotify/User/User';


export default function Main(props){
	return( <>
			  	<Menu/>
				{<Profile/>}
			  	<h1 className="app-title"  style={{fontSize:'3rem'}}>Sudofy!</h1>
				<h1 style={{fontSize:'1.5rem'}}>Profile Stats</h1>  
				{/*<h1 style={{fontSize:'1.5rem'}}>Playlist Analyzer</h1>*/ }
				{<Playlist/>}
				{/*<User/>*/}

			</>
	)
}
