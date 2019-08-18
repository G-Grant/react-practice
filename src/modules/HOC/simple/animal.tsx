import React, { Component } from 'react';
import wrapHOC from './wrapper';

interface IAnimalState {}

interface IAnimalProps {
    name: string;
    age: number;
    onClick: any;
}

class AnimalComponent extends Component<IAnimalProps, IAnimalState> {
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

export default wrapHOC(AnimalComponent, {
    name: '波斯猫',
    age: 5
});
