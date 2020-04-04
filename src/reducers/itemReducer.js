import {LOAD_ITEMS,ADD_ITEM} from '../actions/constants'

const INITIAL_STATE=[]




//userId,userEmail,userName,userImageUrl
export const itemsState=(state=INITIAL_STATE,action)=>{
    // console.log('I am here');
   
    console.log('from itemsState'+action.type);
    

    switch(action.type){
        case(LOAD_ITEMS):{
            return action.payload     
        }

        case(ADD_ITEM):{
            return [...state,action.payload]     
        }

        

        // case(SIGN_OUT):{
        //     return {...INITIAL_STATE, isSignedIn: false}

        // }

        default:{
            return state
        }
    }
}
    