import React, { Component } from 'react';

import PersonComponent from './person';
import AnimalComponent from './animal';

class SimpleHOCComponent extends Component {
    render() {
        return (
            <div>
                <PersonComponent />
                <AnimalComponent />
            </div>
        );
    }
}

export default SimpleHOCComponent;
