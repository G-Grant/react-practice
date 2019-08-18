import React, { Component } from 'react';
import wrapHOC from './wrapper';

interface IPersonProps {
    name: string;
    age: number;
    onClick: any;
}
interface IPersonState {}

class PersonComponent extends Component<IPersonProps, IPersonState> {
    render() {
        const { name, age, onClick } = this.props;
        return (
            <div style={{ border: '1px solid red' }} onClick={onClick}>
                <div>{`姓名: ${name}`}</div>
                <div>{`年龄: ${age}`}</div>
            </div>
        );
    }
}

export default wrapHOC(PersonComponent, {
    name: '张三',
    age: 12
});
