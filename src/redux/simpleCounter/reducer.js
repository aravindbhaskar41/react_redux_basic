import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "./stringConstants"

const INIT_STATE={
    counter:0
}

export const simpleCounterReducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case INCREMENT_COUNTER: return{
            counter: state.counter+1
        }
        case DECREMENT_COUNTER:
            if(state.counter === 0)
                return state;
            return {
                counter: state.counter-1
            }
        default: return state;

    }
}