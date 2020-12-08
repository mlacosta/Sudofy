import { useState } from 'react';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import AppContext from './components/AppContext/AppContext';


function App() {

  return (<AppContext>
            <Wrapper/>
          </AppContext>
          )
  
}

export default App;
