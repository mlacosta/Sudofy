import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Cookies from 'js-cookie';
import Trademark from './components/Trademark/Trademark';
import Login from './components/Login/Login';
import { SpotifyApiContext, User } from 'react-spotify-api';

function App() {

  const [token, setToken] = useState(Cookies.get('spotifyAuthToken'));


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

export default App;
