import React from 'react';
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap';

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
        <div className='weather'>
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }} className="myCard">
                        <div className='d-flex justify-content-start location'>{locationName}</div>
                        <hr />
                        <div className='date'> {moment(new Date(weather.DailyForecasts[0].Date)).format('LL')} </div>
                        <div> {weather.DailyForecasts[0].Day.IconPhrase} </div>
                        <img src={getImg(weather.DailyForecasts[0].Day.Icon)} alt="" width='130px' />
                        <div className='temp'> {weather.DailyForecasts[0].Temperature.Minimum.Value} - {weather.DailyForecasts[0].Temperature.Maximum.Value}
                            °{weather.DailyForecasts[0].Temperature.Maximum.Unit} </div>
                        <div className='moreinfo'>On next 5 days:
                            <br />
                            {weather.Headline.Text}.
                            <br />
                            <a href={weather.Headline.Link} target="_blank" rel="noopener noreferrer">More info</a>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default WeatherCard;