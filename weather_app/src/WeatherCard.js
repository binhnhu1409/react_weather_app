import React from 'react';

const WeatherCard = (props) => {

const weatherInfo = props.Headline.Text
const externalLink = props.Headline.Link
const date = props.DailyForecasts.Date
const icon = props.DailyForecasts.Day.Icon
const iconPhrase = props.DailyForecasts.Day.IconPhrase
const maxTemp = props.DailyForecasts.Temperature.Maximum.Value
const minTemp = props.DailyForecasts.RealFeelTemperature.Minimum.Value
const tempUnit = props.DailyForecasts.Temperature.Maximum.Unit

return (
    <div>
        <p> {weatherInfo} </p>
        <p> {externalLink} </p>
        <p> {date} </p>
        <p> {icon} </p>
        <p> {iconPhrase} </p>
        <p> {minTemp} - {maxTemp} {tempUnit} </p>
    </div>

);
}

export default WeatherCard;