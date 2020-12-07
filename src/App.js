import './App.css';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import { SpotifyApiContext, User } from 'react-spotify-api';
import 'react-spotify-auth/dist/index.css';
import Cookies from 'js-cookie';
import hatsune from './img/hatsune.jpg';
import Trademark from './components/Trademark/Trademark';

function App() {
  const token = Cookies.get('spotifyAuthToken');

  return (
    <div className="App">
      <div className="mask">
        <h1 className="app-title">Sudofy!</h1>
        <h2 className='app-subtitle'>Visualize all your Spotify data</h2>
        {token ? 
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
          : 
          <>
            <img className = "hatsune" src={hatsune}></img>
            <div className='log-wrapper'>
              <SpotifyAuth
                redirectUri = {process.env.REACT_APP_SPOTIFY_REDIRECT_URI}
                clientID = {process.env.REACT_APP_SPOTIFY_CLIENT_ID}
                scopes = {[Scopes.userReadPrivate, Scopes.userReadEmail]}
              />
            </div>
          </>
        }
        <Trademark/>
    </div>
    </div>
  );
}

export default App;
