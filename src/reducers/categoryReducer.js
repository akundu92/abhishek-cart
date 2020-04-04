import {LOAD_CATEGORIES,ADD_CATEGORY} from '../actions/constants'

const INITIAL_STATE=[]




export const categoriesState=(state=INITIAL_STATE,action)=>{


    switch(action.type){
        case(LOAD_CATEGORIES):{
            return action.payload     
        }

        case(ADD_CATEGORY):{
            return [...state,action.payload]  
        }



        default:{
            return state
        }
    }
}
    