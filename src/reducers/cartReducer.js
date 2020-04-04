import {ADD_TO_CART,REMOVE_ALL_FROM_CART} from '../actions/constants';

const INITIAL_STATE=[]




export const cartState=(state=INITIAL_STATE,action)=>{
    
   
    

    switch(action.type){
        case(ADD_TO_CART):{
            return action.payload     
        }


    
        case(REMOVE_ALL_FROM_CART):{
            return INITIAL_STATE  
        }

        

        default:{
            return state
        }
    }
}
    