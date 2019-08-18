import React, { Component } from 'react';

interface IWrapHOCComponentProps {}
interface IWrapHOCComponentState {
    name: string;
    age: number;
}
interface IParams {
    name: string;
    age: number;
}

// 函数的返回值为一个组件
function wrapHOC(WrappedComponent: React.ElementType, params: IParams) {
    return class WrapHOCComponent extends Component<IWrapHOCComponentProps, IWrapHOCComponentState> {
        constructor(props: IWrapHOCComponentProps) {
            super(props);
            this.state = params;
            this.handleClick = this.handleClick.bind(this);
        }
        wrappedComponentRef = Object.create(null);
        handleClick() {
            console.log(this.state.name);
        }
        render() {
            return (
                <WrappedComponent
                    onClick={this.handleClick}
                    ref={(node: object) => (this.wrappedComponentRef = node)}
                    {...this.state}
                />
            );
        }
    };
}

export default wrapHOC;
