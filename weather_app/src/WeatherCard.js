import React from 'react';

const WeatherCard = (props) => {
    const weather = props.weather;

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
            <p> {weather.Headline.Text} </p>
            <a href={weather.Headline.Link}>More info</a>
            <p> {weather.DailyForecasts[0].Date} </p>
            <p> {weather.DailyForecasts[0].Day.IconPhrase} </p>
            <img src={getImg(weather.DailyForecasts[0].Day.Icon)} alt="" />
            <p> {weather.DailyForecasts[0].Temperature.Minimum.Value} - {weather.DailyForecasts[0].Temperature.Maximum.Value} {weather.DailyForecasts[0].Temperature.Maximum.Unit} </p>
        </div>
    );
}

export default WeatherCard;