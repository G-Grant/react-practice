import React, { Component } from 'react';

import SimpleHOCComponent from './simple/index';

class HOCComponent extends Component {
    render() {
        return (
            <div>
                <SimpleHOCComponent />
            </div>
        );
    }
}

export default HOCComponent;
