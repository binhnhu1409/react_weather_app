import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import API_KEY from './api';
import WeatherCard from './WeatherCard';


const App = () => {

  const [locationName, setLocationName] = useState()
  const [weather, setWeather] = useState()
  const [warningMessage, setWarningMessage] = useState()

  //get location name from user input
  const handleLocationChange = (event) => {
    console.log('locationName', event.target.value)
    setLocationName(event.target.value)
  }

  //fetch data from Accuweather API
  async function getWeather(event) {
    event.preventDefault()

    //get location id based on location name
    axios
      .get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${locationName}`)
      .then(response => {
        console.log(response.data[0].Key)

        //if fetch data successful, based on location id, get weather data
        if (response.data.length > 0) {
          axios
            .get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${response.data[0].Key}?apikey=${API_KEY}`)
            .then(response => {
              setWeather(response.data)
              setWarningMessage('')
            })
        }
        //otherwise, return a message to let user know input is invalid
        else {
          setWarningMessage('Invalid city name!')
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
        <button type="submit" onClick={getWeather}>View weather</button>
      </form>
      <div> {warningMessage}</div>
      <WeatherCard weather={weather} locationName={locationName} />
    </div>
  )
}

export default App;
