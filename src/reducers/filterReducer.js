import {FILTER_ITEM} from '../actions/constants'

const INITIAL_STATE=null




export const filterState=(state=INITIAL_STATE,action)=>{

    switch(action.type){
        
        case(FILTER_ITEM):{
            
            return action.payload     
        }

        default:{
            return state
        }
    }
}
    