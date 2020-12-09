import React from 'react';
import Menu from '../Menu/Menu';
import Profile from '../Profile/Profile';
import Playlist from './Spotify/Playlist/Playlist';
import User from './Spotify/User/User';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";


export default function Main(props){
	return( <Router>
			  	<Menu/>
				<Profile/>
				<h1 className="app-title"  style={{fontSize:'3rem'}}>Sudofy!</h1>

				<Switch>
					<Route path='/callback'>
						<h1 style={{fontSize:'1.5rem'}}>Profile Stats</h1>  
						<User/>
					</Route>
					<Route exact path='/playlist'>
						<h1 style={{fontSize:'1.5rem'}}>Playlist Analyzer</h1>
						<Playlist/>
					</Route>
					<Route exact path='/artist'>
						<h1 style={{fontSize:'1.5rem'}}>Artist Analyzer</h1>

					</Route>
					<Route exact path='/track'>
						<h1 style={{fontSize:'1.5rem'}}>Track Analyzer</h1>

					</Route>
					<Route exact path='/synesthesia'>
						<h1 style={{fontSize:'1.5rem'}}>Synesthesia Player</h1>

					</Route>
					
				</Switch>

			</Router>
	)
}
