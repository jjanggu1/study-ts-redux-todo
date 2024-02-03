import React from 'react';
import './Counter.css';
import { CounterProps } from 'model/Counter';

const Counter: React.FC<CounterProps> = ({ number, increase, decrease }) => {
    return (
        <main>
            <h1>{number}</h1>
            <div className='Change_btns'>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
            </div>
        </main>
    );
};
export default Counter;