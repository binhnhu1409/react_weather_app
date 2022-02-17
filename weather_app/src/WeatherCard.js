import React from 'react';
import moment from 'moment';

const WeatherCard = (props) => {
    //passing needed state from App component (parent)
    const weather = props.weather;
    const locationName = props.locationName;

    //get the link from AccuWeather to get the icon in form of image
    const getImg = (iconNumber) => {
        if (iconNumber < 10) {
            iconNumber = '0' + iconNumber
        }
        return (`https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`)
    }

    //if weather is undefined yet, return empty div
    if (!weather) {
        return (
            <div></div>
        )
    }

    //return weather card after user input valid location name
    return (
        <div className="weather">
            <p>{locationName}</p>
            <p> {weather.Headline.Text}</p>
            <a href={weather.Headline.Link} target="_blank" rel="noopener noreferrer">More info</a>
            <p> {moment(new Date(weather.DailyForecasts[0].Date)).format('LL')} </p>
            <p> {weather.DailyForecasts[0].Day.IconPhrase} </p>
            <img src={getImg(weather.DailyForecasts[0].Day.Icon)} alt="" />
            <p> {weather.DailyForecasts[0].Temperature.Minimum.Value} - {weather.DailyForecasts[0].Temperature.Maximum.Value} {weather.DailyForecasts[0].Temperature.Maximum.Unit} </p>
        </div>
    );
}

export default WeatherCard;