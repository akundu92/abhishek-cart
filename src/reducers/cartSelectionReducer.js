import {ADD_SELECTION,REMOVE_SELECTION,REMOVE_ALL_SELECTION} from '../actions/constants';
const INITIAL_STATE=[]

export const selectionState=(state=INITIAL_STATE,action)=>{

    switch(action.type){
        case(ADD_SELECTION):{
  
            return [...state,action.payload.id]    
        }

        case(REMOVE_SELECTION):{
            let newState = [...state];
            newState.splice(action.payload, 1);
            return newState;    
        }

        case(REMOVE_ALL_SELECTION):{
            return INITIAL_STATE;    
        }


        default:{
            return state
        }

}
}