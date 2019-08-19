import React from 'react';

function wrapHOC(WrappedComponent: React.ElementType) {
    return class WrapHOCComponent extends WrappedComponent {
        render() {
            return super.render();
        }
    };
}

export default wrapHOC;
