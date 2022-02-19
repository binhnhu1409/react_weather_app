# A react weather app :partly_sunny: :sun_behind_rain_cloud: :cloud_with_lightning_and_rain: :cloud_with_snow: :sun_behind_small_cloud: ## [Demo](https://the-weather-app-of-nhu.netlify.app/)

This is a daily weather forecast data app created using create-react-app and AccuWeather API https://developer.accuweather.com/ to get the weather data for a city and display it in a meaningful way. As I deployed this project on Netlify with free account, there is a limitation on the amount of call you can query in a day.

![image](https://github.com/binhnhu1409/react_weather_app/blob/main/weather_app/src/assets/imgs/webdemo.JPG)

### Task has been done:
- Create a homepage that displays the a textfield asking users to enter the name of a city.
- Fetch the weather data from AccuWeather API and show the weather information in a card once user pressed Enter and the name of the city is valid.
- Show error messages to users if the weather data can't be fetched.
- Divide the app into reusable and smaller components
- Created an attractive front-end.
- Deploy the app to Netlify.

## Project structure
```
weather_app
│   .gitignore
│   package-lock.json
│   package.json
│   README.md
│
├───build
├───public
│       favicon.ico
│       index.html
│
└───src
    │   App.js
    │   index.css
    │   index.js
    │
    ├───assets
    │   └───imgs
    │           background.png
    │           card.jpg
    │           webdemo.JPG
    │
    └───components
            api.js
            Error.js
            Footer.js
            Header.js
            WeatherCard.js
```

### Used API:
- https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search to search for a city by name and get the location key, which is needed to call other APIs.
- https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D to get the forecast of the city once the location key is available.

### Used technologies:
- React (... & useState hook)
- JavaScript
- HTML
- CSS
- React Bootstrap
