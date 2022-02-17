import React from 'react';
import moment from 'moment';

const WeatherCard = (props) => {
    const weather = props.weather;
    const locationName = props.locationName;

    const getImg = (iconNumber) => {
        if (iconNumber < 10) {
            iconNumber = '0' + iconNumber
        }
        return (`https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`)
    }

    if (!weather) {
        return (
            <div></div>
        )
    }

    return (
        <div className='weather'>
            <p> {weather.Headline.Text} at {locationName} </p>
            <a href={weather.Headline.Link}>More info</a>
            <p> {moment(new Date(weather.DailyForecasts[0].Date)).format('LL')} </p>
            <p> {weather.DailyForecasts[0].Day.IconPhrase} </p>
            <img src={getImg(weather.DailyForecasts[0].Day.Icon)} alt="" />
            <p> {weather.DailyForecasts[0].Temperature.Minimum.Value} - {weather.DailyForecasts[0].Temperature.Maximum.Value} {weather.DailyForecasts[0].Temperature.Maximum.Unit} </p>
        </div>
    );
}

export default WeatherCard;