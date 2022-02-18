import React from 'react';
import { Alert } from 'react-bootstrap';

const Error = (props) => {

    const errorMessage = props.errorMessage;

    return (
        <Alert variant='danger'>
            {errorMessage}
        </Alert>
    );
}

export default Error;