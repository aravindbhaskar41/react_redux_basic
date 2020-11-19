import React from 'react';

const  customCounterContainer = (props) => {
    const handleClick = (type, event) => {
        switch (type) {
            case "inr":
                break;
            case "dcr":
                break;
            default:
                return;
        }
    };
    return (
        <>
            <p>{props.counter}</p>
            <button onClick={(event) => {handleClick("inr", event)}}>increment</button>
            <button onClick={(event) => {handleClick("dcr", event)}}>decrement</button>
        </>
    )
};

export default customCounterContainer;
