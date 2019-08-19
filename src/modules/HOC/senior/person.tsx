import React, { Component } from 'react';

import wrapHOC from './wrapper';

class PersonComponent extends Component {
    render() {
        return <div>person</div>;
    }
}
export default wrapHOC(PersonComponent);
