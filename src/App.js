import './App.css';
import React from 'react'

function App() {
  const [location, setLocation] = React.useState('')

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, getError);
    } else {
     setLocation("Geolocation is not supported by this browser.")
    }
  }
  
  function showPosition(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`)
  }

  function getError() {
    setLocation('Unable to retrieve your location') ;
  }
  return (


        <div className="App">
            <a className='map-link' href={location} target='_blank' rel="noreferrer">{location}</a>
            <button className='locator-button' onClick={getLocation}>Locate</button>
        </div>
  );
}

export default App;
