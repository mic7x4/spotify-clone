import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';

function App() {

  const [token,setToken] = useState(null);

  // Run a code on a given Condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';

    const _token = hash.access_token;

    if(_token){
      setToken(_token);
    }
    console.log(`I have a token}`,hash)
  },[]);


  return (
    <div className="app">
      {
        token ? (
          <h1>I am Logged In</h1>
        ):(
          <Login/>
        )
      }
    </div>
  );
}

export default App;
