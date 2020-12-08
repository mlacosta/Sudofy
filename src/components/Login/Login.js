import React from 'react';
import logo from '../../img/logo2.jpg';
import 'react-spotify-auth/dist/index.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';

export default function Login(){
	return(
		<>
			<img className = "hatsune" src={logo}></img>
			<div className='log-wrapper'>
			<SpotifyAuth
				redirectUri = {process.env.REACT_APP_SPOTIFY_REDIRECT_URI}
				clientID = {process.env.REACT_APP_SPOTIFY_CLIENT_ID}
				scopes = {[Scopes.userReadPrivate, Scopes.userReadEmail]}
			/>
			</div>
	   </>
	)
}
