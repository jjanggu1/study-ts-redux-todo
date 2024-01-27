import React from 'react';
import { CounterProps } from 'model/Counter';

const Counter: React.FC<CounterProps> = ({ number, increase, decrease }) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
            </div>
        </div>
    );
};
export default Counter;