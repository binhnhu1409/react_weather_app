import React from 'react';
import { useState } from 'react';
import axios from 'axios';

import API_KEY from './components/api';
import WeatherCard from './components/WeatherCard';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {

  const [locationName, setLocationName] = useState()
  const [weather, setWeather] = useState()
  const [errorMessage, setErrorMessage] = useState()

  //delete its value after user presses Enter, ready for new input
  const temp = document.getElementById('temp')

  //get location name from user input
  const handleLocationChange = (event) => {
    console.log('locationName', event.target.value)
    setLocationName(event.target.value)
    //erase old data immediately when there is any change on user's input
    setWeather('')
  }

  //fetch data from Accuweather API
  async function getWeather(event) {
    event.preventDefault()
    temp.value = ''

    //get location id based on location name
    axios
      .get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${locationName}`)
      .then(response => {
        console.log(response.data[0].Key)

        //if fetch data successful, based on location id, get weather data
        //if fetch data successful, based on location id, get weather data
        if (response.data.length > 0) {
          axios
            .get(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${response.data[0].Key}?apikey=${API_KEY}&metric=true`)
            .then(response => {
              setWeather(response.data)
              console.log('weather', weather)
              setErrorMessage('')
            })
        }
        //otherwise, return a message to let user know input is invalid
        else {
          setErrorMessage('Oh nap! Some errors happened...')
        }
      })

  }

  return (
    <div className='App'>
      <Header />
      <form>
        <input
          autoComplete='off'
          autoFocus
          id='temp'
          onChange={handleLocationChange}
          placeholder='Please enter the name of a city'
        />
        <button type="submit" onClick={getWeather}>Show weather info</button>
      </form>
      <div> {errorMessage}</div>
      <WeatherCard weather={weather} locationName={locationName} />
      <Error errorMessage={errorMessage} />
      <Footer />
    </div>
  )
}

export default App;
