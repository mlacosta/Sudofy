import { useState } from 'react';
import { UserPlaylists } from 'react-spotify-api';
import './Playlist.css';

export default function Playlist(){

	let [playlistIds, setIds] = useState([]);
	let [currentId, setCurrentId] = useState(null);

	return(<>
				<UserPlaylists>
					{({ data }) => {
						if (data){
							console.log(JSON.stringify(data));
							setIds(data["items"]);
						}

						return (<ul>
									{
									playlistIds
										.map(playlist=>
												<li className = 'playlist-element'
												    onClick={()=>{setCurrentId(playlist.id)}}>
													{playlist.name}
												</li>
										)
									}
								</ul>)
					}
					}
				</UserPlaylists>

			</>)
}
