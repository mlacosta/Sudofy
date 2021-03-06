import './User.css';
import { useAppContext } from '../../../AppContext/AppContext';
import { useUser, UserTop } from 'react-spotify-api'
import { Ellipsis, DualRing  } from 'react-css-spinners';
import { useSpring, animated } from 'react-spring';
import { FaSpotify } from 'react-icons/fa';
import FlagIcon from '../../../../FlagIcon';

export default function User(){

	const { token } = useAppContext();
	const { data, loading, error } = useUser();
	
	const props1 = useSpring({
		transform: 'translate3d(0,0,0)',
		opacity: 1,
		from: {opacity:0},
		config:{duration:1000}
	  })
	
	const props2 = useSpring({
		transform: 'translate3d(0,0,0)',
		opacity: 1,
		from: {transform:'translate3d(0,600px,0)',opacity:0},
		config:{duration:1500}
	})

	const props3 = useSpring({
		transform: 'translate3d(0,0,0)',
		opacity: 1,
		from: {opacity:0},
		config:{duration:6000}
	})

	if (data){
		return(
			<div className='user-wrapper'>
				<div className="user-grid">
					<animated.div className="info-box info-wrap" style={props1}>
						<div className="profile-wrap" >
							<img className='user-img' src={data.images[0].url} alt=""/>
							<h2 className='user-name'>{data.display_name}</h2>
						</div>
						<ul className = 'user-info'>
							<li><strong>Country:</strong> {data.country}  <FlagIcon code={data.country.toLowerCase()} size={'1g'}/></li>
							<li><strong>Membership:</strong> {data.product}<FaSpotify style={{position:'relative',top:2,left:4, color:'green'}}/></li>
							<li><strong>Followers: </strong>{data.followers.total}</li>
							<li><strong>Email: </strong>{data.email}</li>
							<li><strong>URI:</strong> {data.uri}</li>
							<li></li>
						</ul>
					</animated.div>
					<animated.div className="info-box user-artist-wrap" style={props1}>
						<h2 style={{position:'absolute',top:18, left:50}}>Top Artists</h2>
						<UserTop type="artists">
							{({data:artists}) =>
								artists ? (
									artists.items.map(artist => (
										<div className='artist-top-wrap'>
											<img className='user-top-img'src={artist.images[0].url} alt=""/>
											<span key={artist.id} style={{color:'white'}}>{artist.name}</span>
										</div>
									))
								) : <DualRing style={{position:'relative',top:140}}/>
							}
						</UserTop>
					</animated.div>
					<animated.div className="info-box user-tracks-wrap" style={props1}>
						<h2 style={{position:'absolute',top:20, right:125}}>Top Tracks</h2>
						<UserTop type="tracks">
							{({data:tracks}) =>
								tracks ? (
									tracks.items.map( (track, key )=> (
										<div className='tracks-top-wrap'>
											{`#${key+1}  `}
											<img className='user-top-tracks-img'src={track.album.images[0].url} alt=""/>
											<span key={track.id} style={{color:'white',fontWeight:300, fontSize:'.9rem'}}>{track.name.slice(0,34)}</span>
										</div>
									))
								) : <DualRing style={{position:'relative',top:240,left:85}}/>
							}
						</UserTop>
					</animated.div>
					<animated.div className="info-box user-search" style={props1}>
							<img src="https://i.pinimg.com/originals/e2/45/27/e24527408cab572eb4a5adc8aec3afb5.gif" style={{height:'210px',margin:0}}/>
							
					</animated.div>
				</div>
				
			</div>)
	}else{
		return <Ellipsis/>;
	}

}
