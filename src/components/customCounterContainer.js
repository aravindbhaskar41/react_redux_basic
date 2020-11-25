import React, {useState} from 'react';
import {connect} from "react-redux";

import {customIncrementActionCreator} from "./../redux/customCounter/actionCreator"

const  CustomCounterContainer = (props) => {
    const [inputCounter, setInputCounter] = useState(0);
    const handleClick = (event) => {
        console.log("Inside handle click");
        props.customIncrementActionCreator(parseInt(inputCounter,10));

    };
    return (
        <>
            <p>{props.myCounter}</p>
            <textarea
                onChange={(event)=> {setInputCounter(event.target.value)}}
                value={inputCounter}
            />
            <button onClick={(event) => {handleClick(event)}}>submit</button>
        </>
    )
};

const mapStateToProps=(state1)=>{
    return {
        myCounter: state1.customCounterReducer.counter
    }
}

export default connect(mapStateToProps,
    {customIncrementActionCreator})(CustomCounterContainer);
