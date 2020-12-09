import React from 'react';
import logo from '../../img/logo3.JPG';
import 'react-spotify-auth/dist/index.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import { useSpring, animated } from 'react-spring';


export default function Login(){

	const props = useSpring({
		opacity: 1, 
		from: {opacity: 0},
		config:{duration:2500}
	})

	const propsh1 = useSpring({
		transform: 'translate3d(0,0,0)',
		opacity: 1,
		from: {transform: 'translate3d(0,200px,0)',opacity:0},
		config:{duration:1000}
	  })
	
	  const propsh2 = useSpring({
		transform: 'translate3d(0,0,0)',
		opacity: 1,
		from: {transform: 'translate3d(-200px,0,0)',opacity:0},
		config:{duration:1000}
	  })
	

	return(
		<>
			<animated.h1 className="app-title"  style={propsh1}>Sudofy!</animated.h1>
        	<animated.h2 className='app-subtitle' style={propsh2}>Visualize all your Spotify data</animated.h2>
			<animated.img className = "hatsune" src={logo} style={props}></animated.img>
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
