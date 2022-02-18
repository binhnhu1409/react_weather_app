import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = (props) => {

    const errorMessage = props.errorMessage;

    //if no error, return empty div
    if (!errorMessage) {
        return (
            <div></div>
        )
    }

    // if there is error, return this card
    return (
        <Alert variant='danger'>
            <Alert.Heading>{errorMessage}</Alert.Heading>
            <p>Check and change this city name, then try again. Still no? Maybe the app is running out of the calls...</p>
        </Alert>
    );
}

export default Error;