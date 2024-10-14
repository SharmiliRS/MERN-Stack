import {configureStore} from '@reduxjs/toolkit'

const counterLogic = (state=0,action)=>{
    switch(action.type){
        case "add":
            return state+1;
        break;
        case "sub":
            return state-1;
    }
    return state;
}

const storeMyDetailsReducer=(state={},action)=>{
    switch(action.type){
        case "saveDetails":
            console.log(action.data);
            return action.data;
        break;
        default:
            break;
    }
    return state;
}

 
export const myStore = configureStore({
    reducer:{
        "counter": counterLogic,
        "myDetails":storeMyDetailsReducer
    }
});
 