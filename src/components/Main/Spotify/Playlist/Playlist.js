import { useState, useEffect, useContext } from 'react';
import { UserPlaylists, PlaylistTracks, SpotifyApiContext, Track } from 'react-spotify-api';
import { useAppContext } from '../../../AppContext/AppContext';
import { RadarChart, PolarGrid,PolarAngleAxis, PolarRadiusAxis, Radar,Legend  } from 'recharts';
import './Playlist.css' ;
import { Ellipsis } from 'react-css-spinners';
import { RiPlayList2Fill } from 'react-icons/ri';

function processing(features) {
	
	const len = features.length;

	let max = 0;

	features.forEach((feature)=>{ max = (feature.acousticness > max ) ? feature.acousticness : max});

	let acousticness = features.reduce((acc,curr)=>{
		return acc + curr.acousticness/len;
	},0) / max

	max = 0;

	features.forEach((feature)=>{ max = (feature.danceability > max ) ? feature.danceability : max});

	let danceability = features.reduce((acc,curr)=>{
		return acc + curr.danceability/len;
	},0) / max

	max = 0;
	features.forEach((feature)=>{ max = (feature.energy > max ) ? feature.energy : max});

	let energy = features.reduce((acc,curr)=>{
		return acc + curr.energy/len;
	},0) / max

	max = 0;
	features.forEach((feature)=>{ max = (feature.instrumentalness > max ) ? feature.instrumentalness : max});

	let instrumentalness = features.reduce((acc,curr)=>{
		return acc + curr.instrumentalness/len;
	},0) / max

	let loudness = features.reduce((acc,curr)=>{
		return acc + curr.loudness/len;
	},0) / max

	max = 0;
	features.forEach((feature)=>{ max = (feature.liveness > max ) ? feature.liveness : max});

	let liveness = features.reduce((acc,curr)=>{
		return acc + curr.liveness/len;
	},0) / max

	max = 0;
	features.forEach((feature)=>{ max = (feature.tempo > max ) ? feature.tempo : max});

	let tempo = features.reduce((acc,curr)=>{
		return acc + curr.tempo/len;
	},0) / 200

	let result = [
		{"description": "Acousticness",
		 'value': acousticness},
		{"description": "Danceability",
		 'value': danceability},
		{"description": "Energy",
		 'value': energy},
		{"description": "Instrumentalness",
		 'value': instrumentalness},
		{"description": "Liveness",
		 'value': liveness},
		 {"description": "Tempo",
		 'value': tempo},
	]

	return result;

}


export default function Playlist( ){

	let [playlistIds, setIds] = useState([]);
	let [currentId, setCurrentId] = useState(null); //playlist ID
	let [tracks, setTracks] = useState(null);
	let [currentCover, setCurrentCover] = useState(null);
	let [data,setData] = useState([
		{"description": "Acousticness",
		 'value': 0},
		{"description": "Danceability",
		 'value': 0},
		{"description": "Energy",
		 'value': 0},
		{"description": "Instrumentalness",
		 'value': 0},
		{"description": "Liveness",
		 'value': 0},
		{"description": "Tempo",
		 'value': 0},
	]);

	let [loading, setLoading] = useState(false); 

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
		if(tracks){
			try{
				let temp = await fetchTrackFeatures();
				setData(processing(temp));
				setLoading(false);
			}catch(err){
				alert(err);
				setLoading(false);
			}

		}

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
				{loading && <Ellipsis style={{position:'absolute', margin:'auto'}}/>}
				<UserPlaylists>
					{({ data }) => {
						if (data){
							setIds(data["items"]);
						}

						return (
							<>
								{!loading && <img id='playlist-cover'src={currentCover} alt="" className="cover"/>}
								<div className="playlist-list">
									<h2>Your Playlists: </h2>
									<ul>
										{
										playlistIds
											.map(playlist=>
														<li className = 'playlist-element'
															style = {playlist.id == currentId ? {color:'orange'}:null}
															onClick={()=>{setCurrentId(playlist.id); setCurrentCover(playlist.images[0].url); setLoading(true)}}>
															<RiPlayList2Fill style={{marginRight:10}}/>
															{playlist.name}
														</li>

											)
										}
									</ul>
								</div>
							</>
					)}}
				</UserPlaylists>
				<RadarChart outerRadius={300} width={750} height={700} data={data} style={{position:'relative',top:30,left:50, color:'white'}}>
					<PolarGrid />
					<PolarAngleAxis dataKey='description' stroke='#37ffa8'/>
					<PolarRadiusAxis angle={30} domain={[0, 1]} />
					<Radar name={`ID: ${currentId}`} dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
					<Legend />
				</RadarChart>
			</div>
		)
}
