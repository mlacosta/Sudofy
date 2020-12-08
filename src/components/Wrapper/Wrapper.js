import { useState } from 'react';
import Main from '../Main/Main';
import Cookies from 'js-cookie';
import Trademark from '../Trademark/Trademark';
import Login from '../Login/Login';
import { SpotifyApiContext } from 'react-spotify-api';
import { useAppContext } from '../AppContext/AppContext';


export default function Wrapper(){
	const { token, setToken } = useAppContext();

	setToken(Cookies.get('spotifyAuthToken'));

	return (
  
		  <SpotifyApiContext.Provider value={token}>
			<div className="App">
			  <div className="mask" >
				{token ? <Main/> : <Login/>}
				<Trademark/>
			  </div>
			</div>
		  </SpotifyApiContext.Provider>
  
	);
}
