import {LOAD_ITEMS,ADD_ITEM} from '../actions/constants'

const INITIAL_STATE=[]





export const itemsState=(state=INITIAL_STATE,action)=>{

    switch(action.type){
        case(LOAD_ITEMS):{
            return action.payload     
        }

        case(ADD_ITEM):{
            return [...state,action.payload]     
        }


        default:{
            return state
        }
    }
}
    