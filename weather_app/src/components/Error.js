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

    // show this when the app is running out of request
    if (errorMessage.includes('API')) {
        return (
            <Alert variant='danger'>
                <Alert.Heading>{errorMessage}</Alert.Heading>
            </Alert>
        )
    }

    // show this for other errors
    return (
        <Alert variant='danger'>
            <Alert.Heading>{errorMessage}</Alert.Heading>
            <p>Perhaps you want to check and change this city name, then try again.</p>
        </Alert>
    );
}

export default Error;