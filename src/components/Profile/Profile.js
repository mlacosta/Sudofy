import React from 'react';
import { User } from 'react-spotify-api';
import './Profile.css';

export default function Profile(){
	return(
			<div className="profile">
				<User>
						{({ data }) =>
							data ? (
								<>
									<img id='profile-pic' src={data.images[0].url} alt=""/>
									<span id='name'>{data.display_name}</span>
								</>
							) : null
						}
				</User>
			</div>)
}
