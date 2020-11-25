import {INCREMENT_COUNTER,DECREMENT_COUNTER} from "./stringConstants"
export const simpleCounterIncrementActionCreater =()=>{
    return {
        type:INCREMENT_COUNTER
    }
}

export const simpleCounterDecrementActionCreater=()=>{
    return{
        type:DECREMENT_COUNTER
    }
}