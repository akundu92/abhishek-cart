import {ADD_SELECTION,REMOVE_SELECTION,REMOVE_ALL_SELECTION} from '../actions/constants';
const INITIAL_STATE=[]

export const selectionState=(state=INITIAL_STATE,action)=>{

    switch(action.type){
        case(ADD_SELECTION):{
            console.log([...state,action.payload.id] )
            return [...state,action.payload.id]    
        }

        case(REMOVE_SELECTION):{
            let newState = [...state];
            let removalIndex=0;
            for(let i=0;i<newState.length;i++){
                if(newState[i]===action.payload.id){
                    removalIndex=i;
                    break;
                }
            }
            newState.splice(removalIndex,1);
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