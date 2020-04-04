import {LOAD_CATEGORIES,ADD_CATEGORY} from '../actions/constants'

const INITIAL_STATE=[]




//userId,userEmail,userName,userImageUrl
export const categoriesState=(state=INITIAL_STATE,action)=>{
    // console.log('I am here');
   
    

    switch(action.type){
        case(LOAD_CATEGORIES):{
            return action.payload     
        }

        case(ADD_CATEGORY):{
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
    