import { INCREMENT_CUSTOM } from "./stringConstants"

const INIT_STATE={
    counter:0,
    payload:0
}
export const customCounterReducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case INCREMENT_CUSTOM:
            return {
                counter: state.counter+action.payload
            }
        default: return state;
    }
}