import {INCREMENT_CUSTOM} from "./stringConstants";

export const customIncrementActionCreator=(value)=>{
    return {
        type:INCREMENT_CUSTOM,
        payload:value
    }
}