import React, { useContext, useState } from 'react';

const AppCtx = React.createContext();

export const useAppContext = () =>{return useContext(AppCtx)}

export default function AppContext({children}){

	const [token, setToken] = useState('');
	
	return(
		<AppCtx.Provider value = {{token,setToken}}>
			{children}
		</AppCtx.Provider>
	)
}
