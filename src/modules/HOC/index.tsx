import React, { Component } from 'react';

import SimpleHOCComponent from './simple';
import SeniorComponent from './senior';

class HOCComponent extends Component {
    render() {
        return (
            <div>
                <SimpleHOCComponent />
                <SeniorComponent />
            </div>
        );
    }
}

export default HOCComponent;
