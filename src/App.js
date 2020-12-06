import './App.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import { SpotifyApiContext } from 'react-spotify-api';
import 'react-spotify-auth/dist/index.css';
import Cookies from 'js-cookie';

function App() {
  const token = Cookies.get('spotifyAuthToken');

  return (
    <div className="App">
      <h1 className="app-title">Sudofy!</h1>
      <h2 className='app-subtitle'>Visualize all your Spotify data</h2>
      {token ? 
        <SpotifyApiContext.Provider value={token}>
          {}
        </SpotifyApiContext.Provider>
        : 
        <div className='log-wrapper'>
          <SpotifyAuth
            redirectUri = {process.env.REACT_APP_SPOTIFY_REDIRECT_URI}
            clientID = {process.env.REACT_APP_SPOTIFY_CLIENT_ID}
            scopes = {[Scopes.userReadPrivate, Scopes.userReadEmail]}
          />
        </div>
      }
    </div>
  );
}

export default App;
