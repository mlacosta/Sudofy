import { useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Cookies from 'js-cookie';
import Trademark from './components/Trademark/Trademark';
import Login from './components/Login/Login';

function App() {

  const [token, setToken] = useState(Cookies.get('spotifyAuthToken'));

  return (
    <div className="App">
      <div className="mask">
        <h1 className="app-title">Sudofy!</h1>
        <h2 className='app-subtitle'>Visualize all your Spotify data</h2>
        {token ? <Main token = {token} /> : <Login/>}
        <Trademark/>
    </div>
    </div>
  );
}

export default App;
