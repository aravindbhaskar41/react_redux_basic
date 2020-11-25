import React from 'react';
import {connect} from "react-redux"; 

import {simpleCounterIncrementActionCreater,simpleCounterDecrementActionCreater} from "./../redux/simpleCounter/actionCreator";

const  SimpleCounterContainer = (props) => {
    const handleClick = (type, event) => {
        switch (type) {
            case "inr":
                props.simpleCounterIncrementActionCreater();
                break;
            case "dcr":
                props.simpleCounterDecrementActionCreater();
                break;
            default:
                return;
        }
    };
    return (
        <>
            <p>{props.myCounter}</p>
            <button onClick={(event) => {handleClick("inr", event)}}>increment</button>
            <button onClick={(event) => {handleClick("dcr", event)}}>decrement</button>
        </>
    )
};

const mapStateToProps=(state)=>{
    return {
        myCounter: state.simpleCounterReducer.counter
    }
}

export default connect(mapStateToProps,
    {   simpleCounterIncrementActionCreater,
        simpleCounterDecrementActionCreater
    })(SimpleCounterContainer);
