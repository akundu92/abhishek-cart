import {ADD_TO_CART,REMOVE_ALL_FROM_CART} from '../actions/constants';

const INITIAL_STATE=[]




//userId,userEmail,userName,userImageUrl
export const cartState=(state=INITIAL_STATE,action)=>{
    // console.log('I am here');
   
    

    switch(action.type){
        case(ADD_TO_CART):{
            return action.payload     
        }


    
        case(REMOVE_ALL_FROM_CART):{
            return INITIAL_STATE  
        }

        

        // case(SIGN_OUT):{
        //     return {...INITIAL_STATE, isSignedIn: false}

        // }

        default:{
            return state
        }
    }
}
    