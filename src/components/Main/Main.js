import React from 'react';
import { SpotifyApiContext, User } from 'react-spotify-api';

export default function Main({ token }){
	return(
	          <SpotifyApiContext.Provider value={token}>
				<User>
					{(user) =>
						user ? ( 
							<ul style={{color:'white'}}>
								<li>Name - {user.display_name}</li>
								<li>ID - {user.id}</li>
							</ul>
						) : null
					}
				</User>
			</SpotifyApiContext.Provider>
	)
}
