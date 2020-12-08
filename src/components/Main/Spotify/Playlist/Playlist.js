import { useState, useEffect, useContext } from 'react';
import { UserPlaylists, PlaylistTracks, SpotifyApiContext, Track } from 'react-spotify-api';
import { useAppContext } from '../../../AppContext/AppContext';
import './Playlist.css' ;





export default function Playlist( ){

	let [playlistIds, setIds] = useState([]);
	let [currentId, setCurrentId] = useState(null); //playlist ID
	let [tracks, setTracks] = useState([]);

	const { token } = useAppContext();

	const fetchTrackFeatures = async ()=>{

		let features = [];
		let songs = '';
		tracks.forEach((track)=>{songs+= track + ','});
		songs =  songs.slice(0, -1);

		await fetch(`https://api.spotify.com/v1/audio-features/?ids=${songs}`,
		{headers: {'Authorization': `Bearer ${token}`}})					   
		.then((res)=>{return res.json()})
		.then((res)=>{features = res.audio_features});;

		return features;
	
	}
	
	useEffect(async ()=>{
		let features = await fetchTrackFeatures();
	},[tracks]);

	useEffect( async()=>{
		if (currentId){
			await fetch(`https://api.spotify.com/v1/playlists/${currentId}/tracks`, 
					   {headers: {'Authorization': `Bearer ${token}`}})
					   .then((res)=>{return res.json()})
					   .then((res)=>{setTracks(res.items.map((track)=>{return track.track.id}))});
		}
		
	},[currentId])


	return(<div className = 'playlist-container'>
				<UserPlaylists>
					{({ data }) => {
						if (data){
							setIds(data["items"]);
						}

						return (
							<div className="playlist-list">
								<ul>
									{
									playlistIds
										.map(playlist=>
												<li className = 'playlist-element'
													onClick={()=>{setCurrentId(playlist.id)}}>
													{playlist.name}
												</li>
										
										)
									}
								</ul>
							</div>
					)}}
				</UserPlaylists>
			</div>
		)
}
