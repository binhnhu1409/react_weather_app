import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import API_KEY from './api';
import WeatherCard from './WeatherCard';


const App = () => {

  const [locationName, setLocationName] = useState()
  const [weather, setWeather] = useState()
  const [warningMessage, setWarningMessage] = useState()

  const handleLocationChange = (event) => {
    console.log('locationName', event.target.value)
    setLocationName(event.target.value)
  }

  async function getLocationIdByName(event) {
    event.preventDefault()

    axios
      .get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${locationName}`)
      .then(response => {
        console.log(response.data[0].Key)

        if (response.data.length > 0) {
          axios
            .get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${response.data[0].Key}?apikey=${API_KEY}`)
            .then(response => {
              setWeather(response.data)
              setWarningMessage('')
            })
        }
        else {
          setWarningMessage('- Invalid city name')
        }
      })
  }



  return (
    <div>
      <form>
        <input
          value={locationName}
          onChange={handleLocationChange}
          placeholder='Please enter the name of a city'
        />
        <button type="submit" onClick={getLocationIdByName}>View weather</button>
      </form>
      <div>{locationName} {warningMessage}</div>
      <WeatherCard weather={weather} />
    </div>
  )
}

export default App;
