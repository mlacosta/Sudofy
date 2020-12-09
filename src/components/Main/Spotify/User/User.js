import { useEffect, useState } from 'react';
import './User.css';
import { useAppContext } from '../../../AppContext/AppContext';
import { useUser  } from 'react-spotify-api'
import { Ellipsis } from 'react-css-spinners';
import { useSpring, animated } from 'react-spring';
import { FaSpotify } from 'react-icons/fa';

export default function User(){

	const { token } = useAppContext();
	const { data, loading, error } = useUser();
	
	const props1 = useSpring({
		transform: 'translate3d(0,0,0)',
		opacity: 1,
		from: {opacity:0},
		config:{duration:1000}
	  })

	if (data){
		return(
			<div className='user-wrapper'>
				<animated.div className="info-wrap" style={props1}>
					<div className="profile-wrap" >
						<img className='user-img' src={data.images[0].url} alt=""/>
						<h2 className='user-name'>{data.display_name}</h2>
					</div>

					<ul className = 'user-info'>
						<li><strong>Country:</strong> {data.country}</li>
						<li><strong>Membership:</strong> {data.product}<FaSpotify style={{position:'relative',top:2,left:4}}/></li>
						<li><strong>User ID:</strong> {data.id}</li>
						<li></li>
					</ul>
				</animated.div>

				
			</div>)
	}else{
		return <Ellipsis/>;
	}

}
